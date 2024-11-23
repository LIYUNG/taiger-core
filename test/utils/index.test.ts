import {
  is_TaiGer_role,
  is_TaiGer_AdminAgent,
  is_TaiGer_Admin,
  is_TaiGer_Editor,
  is_TaiGer_Student,
  is_TaiGer_Agent
} from '../../src/utils';

const userStudent = { role: 'Student' };
const userAgent = { role: 'Agent' };
const userEditor = { role: 'Editor' };
const userAdmin = { role: 'Admin' };

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
