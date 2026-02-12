import { Role } from '../constants';
import { IApplication, IUser } from '@taiger-common/model';

// Tested
export const is_TaiGer_role = (user: IUser): boolean =>
  user?.role === Role.Admin ||
  user?.role === Role.Agent ||
  user?.role === Role.Editor ||
  user?.role === Role.External;

// Tested
export const is_TaiGer_AdminAgent = (user: IUser): boolean =>
  user?.role === Role.Admin || user?.role === Role.Agent;

// Tested
export const is_TaiGer_Admin = (user: IUser): boolean =>
  user?.role === Role.Admin;

// Tested
export const is_TaiGer_Editor = (user: IUser): boolean =>
  user?.role === Role.Editor;

export const is_TaiGer_External = (user: IUser): boolean =>
  user?.role === Role.External;

// Tested
export const is_TaiGer_Agent = (user: IUser): boolean =>
  user?.role === Role.Agent;

export const is_TaiGer_Manager = (user: IUser): boolean =>
  user?.role === Role.Manager;

// Tested
export const is_TaiGer_Student = (user: IUser): boolean =>
  user?.role === Role.Student;

export const is_TaiGer_Guest = (user: IUser): boolean =>
  user?.role === Role.Guest;

// Tested
export const Bayerische_Formel = (
  high: number,
  low: number,
  my: number
): string => {
  if (high - low !== 0) {
    const Germen_note = 1 + (3 * (high - my)) / (high - low);
    return Germen_note.toFixed(2);
  }
  return '0';
};

// Tested
export const isNotArchiv = (user: IUser): boolean => {
  if (user.archiv === undefined || !user.archiv) {
    return true;
  }
  return false;
};

// Tested
export const isProgramDecided = (application: IApplication): boolean => {
  return application.decided === 'O';
};

// Tested
export const isProgramSubmitted = (application: IApplication): boolean => {
  return application.closed === 'O';
};

// Tested
export const isProgramAdmitted = (application: IApplication): boolean => {
  return application.admission === 'O';
};

// Tested
export const isProgramRejected = (application: IApplication): boolean => {
  return application.admission === 'X';
};

// Tested
export const isProgramWithdraw = (application: IApplication): boolean => {
  return application.closed === 'X';
};