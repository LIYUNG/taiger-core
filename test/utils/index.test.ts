import {
  is_TaiGer_role,
  is_TaiGer_AdminAgent,
  is_TaiGer_Admin,
  is_TaiGer_Editor,
  is_TaiGer_Student,
  is_TaiGer_Agent,
  Bayerische_Formel,
  isNotArchiv
} from '../../src/utils';

const userStudent = { role: 'Student', archiv: true };
const userAgent = { role: 'Agent', archiv: false };
const userEditor = { role: 'Editor' };
const userAdmin = { role: 'Admin' };

describe('isNotArchiv', () => {
  test('isNotArchiv', () => {
    expect(isNotArchiv(userStudent)).toEqual(false);
    expect(isNotArchiv(userAgent)).toEqual(true);
    expect(isNotArchiv(userEditor)).toEqual(true);
    expect(isNotArchiv(userAdmin)).toEqual(true);
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
