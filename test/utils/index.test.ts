import {
  is_TaiGer_role,
  is_TaiGer_AdminAgent,
  is_TaiGer_Admin,
  is_TaiGer_Editor,
  is_TaiGer_Student,
  is_TaiGer_Agent,
  Bayerische_Formel,
  isNotArchiv,
  isProgramDecided,
  isProgramSubmitted,
  isProgramAdmitted,
  isProgramRejected,
  isProgramWithdraw
} from '../../src/utils';
import { IUser, IApplication } from '@taiger-common/model';

const userStudent: IUser = { role: 'Student', archiv: true };
const userAgent: IUser = { role: 'Agent', archiv: false };
const userEditor: IUser = { role: 'Editor' };
const userAdmin: IUser = { role: 'Admin' };

const decidedProgram: IApplication = { decided: 'O', closed: '-', admission: '-' };
const notDecidedProgram: IApplication = { decided: 'X', closed: '-', admission: '-' };
const notDecidedYetProgram: IApplication = { decided: '-', closed: '-', admission: '-' };

describe('isNotArchiv', () => {
  test('isNotArchiv', () => {
    expect(isNotArchiv(userStudent)).toEqual(false);
    expect(isNotArchiv(userAgent)).toEqual(true);
    expect(isNotArchiv(userEditor)).toEqual(true);
    expect(isNotArchiv(userAdmin)).toEqual(true);
  });
});

describe('isProgramDecided', () => {
  test('isProgramDecided', () => {
    expect(isProgramDecided(decidedProgram)).toEqual(true);
    expect(isProgramDecided(notDecidedProgram)).toEqual(false);
    expect(isProgramDecided(notDecidedYetProgram)).toEqual(false);
  });
});

describe('isProgramSubmitted', () => {
  test('isProgramSubmitted', () => {
    const submittedProgram = { decided: 'O', closed: 'O', admission: '-' };
    const notSubmittedProgram = { decided: 'O', closed: 'X', admission: '-' };
    const notSubmittedYetProgram = {
      decided: 'O',
      closed: '-',
      admission: '-'
    };

    expect(isProgramSubmitted(submittedProgram)).toEqual(true);
    expect(isProgramSubmitted(notSubmittedProgram)).toEqual(false);
    expect(isProgramSubmitted(notSubmittedYetProgram)).toEqual(false);
  });
});

describe('isProgramAdmitted', () => {
  test('isProgramAdmitted', () => {
    const admittedProgram = { decided: 'O', closed: 'O', admission: 'O' };
    const notAdmittedProgram = { decided: 'O', closed: 'O', admission: 'X' };
    const notAdmittedYetProgram = { decided: 'O', closed: 'O', admission: '-' };

    expect(isProgramAdmitted(admittedProgram)).toEqual(true);
    expect(isProgramAdmitted(notAdmittedProgram)).toEqual(false);
    expect(isProgramAdmitted(notAdmittedYetProgram)).toEqual(false);
  });
});

describe('isProgramRejected', () => {
  test('isProgramRejected', () => {
    const rejectedProgram = { decided: 'O', closed: 'O', admission: 'X' };
    const notRejectedYetProgram = { decided: 'O', closed: 'O', admission: '-' };

    expect(isProgramRejected(rejectedProgram)).toEqual(true);
    expect(isProgramRejected(notRejectedYetProgram)).toEqual(false);
  });
});

describe('isProgramWithdraw', () => {
  test('isProgramWithdraw', () => {
    const submittedProgram = { decided: 'O', closed: 'O', admission: '-' };
    const notSubmittedProgram = { decided: 'O', closed: 'X', admission: '-' };

    expect(isProgramWithdraw(submittedProgram)).toEqual(false);
    expect(isProgramWithdraw(notSubmittedProgram)).toEqual(true);
  });
});

describe('Role checking', () => {
  test('is_TaiGer_role', () => {
    expect(is_TaiGer_role(userStudent)).toEqual(false);
    expect(is_TaiGer_role(userAgent)).toEqual(true);
    expect(is_TaiGer_role(userEditor)).toEqual(true);
    expect(is_TaiGer_role(userAdmin)).toEqual(true);
  });

  test('is_TaiGer_AdminAgent', () => {
    expect(is_TaiGer_AdminAgent(userStudent)).toEqual(false);
    expect(is_TaiGer_AdminAgent(userAgent)).toEqual(true);
    expect(is_TaiGer_AdminAgent(userEditor)).toEqual(false);
    expect(is_TaiGer_AdminAgent(userAdmin)).toEqual(true);
  });

  test('is_TaiGer_Admin', () => {
    expect(is_TaiGer_Admin(userStudent)).toEqual(false);
    expect(is_TaiGer_Admin(userAgent)).toEqual(false);
    expect(is_TaiGer_Admin(userEditor)).toEqual(false);
    expect(is_TaiGer_Admin(userAdmin)).toEqual(true);
  });

  test('is_TaiGer_Editor', () => {
    expect(is_TaiGer_Editor(userStudent)).toEqual(false);
    expect(is_TaiGer_Editor(userAgent)).toEqual(false);
    expect(is_TaiGer_Editor(userEditor)).toEqual(true);
    expect(is_TaiGer_Editor(userAdmin)).toEqual(false);
  });

  test('is_TaiGer_Agent', () => {
    expect(is_TaiGer_Agent(userStudent)).toEqual(false);
    expect(is_TaiGer_Agent(userAgent)).toEqual(true);
    expect(is_TaiGer_Agent(userEditor)).toEqual(false);
    expect(is_TaiGer_Agent(userAdmin)).toEqual(false);
  });

  test('is_TaiGer_Student', () => {
    expect(is_TaiGer_Student(userStudent)).toEqual(true);
    expect(is_TaiGer_Student(userAgent)).toEqual(false);
    expect(is_TaiGer_Student(userEditor)).toEqual(false);
    expect(is_TaiGer_Student(userAdmin)).toEqual(false);
  });
});
describe('Bayerische_Formel', () => {
  test('Bayerische_Formel', () => {
    const system_1_1 = { high: 4, low: 2, my: 2 };
    const system_1_2 = { high: 4, low: 2, my: 4 };
    const system_1_3 = { high: 4, low: 2, my: 3 };
    const system_2_1 = { high: 4.3, low: 1.7, my: 4.3 };
    const system_2_2 = { high: 4.3, low: 1.7, my: 1.7 };
    const system_2_3 = { high: 4.3, low: 1.7, my: 3 };
    expect(
      parseFloat(
        Bayerische_Formel(system_1_1.high, system_1_1.low, system_1_1.my)
      )
    ).toEqual(4);
    expect(
      parseFloat(
        Bayerische_Formel(system_1_2.high, system_1_2.low, system_1_2.my)
      )
    ).toEqual(1);
    expect(
      parseFloat(
        Bayerische_Formel(system_1_3.high, system_1_3.low, system_1_3.my)
      )
    ).toEqual(2.5);
    expect(
      parseFloat(
        Bayerische_Formel(system_2_1.high, system_2_1.low, system_2_1.my)
      )
    ).toEqual(1);
    expect(
      parseFloat(
        Bayerische_Formel(system_2_2.high, system_2_2.low, system_2_2.my)
      )
    ).toEqual(4);
    expect(
      parseFloat(
        Bayerische_Formel(system_2_3.high, system_2_3.low, system_2_3.my)
      )
    ).toEqual(2.5);
  });
});
