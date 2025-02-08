import { Role } from '../constants';
import { ApplicationProps, UserProps } from '../types';

// Tested
export const is_TaiGer_role = (user: UserProps): boolean =>
  user?.role === Role.Admin ||
  user?.role === Role.Agent ||
  user?.role === Role.Editor ||
  user?.role === Role.External;

// Tested
export const is_TaiGer_AdminAgent = (user: UserProps): boolean =>
  user?.role === Role.Admin || user?.role === Role.Agent;

// Tested
export const is_TaiGer_Admin = (user: UserProps): boolean =>
  user?.role === Role.Admin;

// Tested
export const is_TaiGer_Editor = (user: UserProps): boolean =>
  user?.role === Role.Editor;

export const is_TaiGer_External = (user: UserProps): boolean =>
  user?.role === Role.External;

// Tested
export const is_TaiGer_Agent = (user: UserProps): boolean =>
  user?.role === Role.Agent;

export const is_TaiGer_Manager = (user: UserProps): boolean =>
  user?.role === Role.Manager;

// Tested
export const is_TaiGer_Student = (user: UserProps): boolean =>
  user?.role === Role.Student;

export const is_TaiGer_Guest = (user: UserProps): boolean =>
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
export const isNotArchiv = (user: UserProps): boolean => {
  if (user.archiv === undefined || !user.archiv) {
    return true;
  }
  return false;
};

// Tested
export const isProgramDecided = (application: ApplicationProps): boolean => {
  return application.decided === 'O';
};

// Tested
export const isProgramSubmitted = (application: ApplicationProps): boolean => {
  return application.closed === 'O';
};

// Tested
export const isProgramAdmitted = (application: ApplicationProps): boolean => {
  return application.admission === 'O';
};

// Tested
export const isProgramRejected = (application: ApplicationProps): boolean => {
  return application.admission === 'X';
};

// Tested
export const isProgramWithdraw = (application: ApplicationProps): boolean => {
  return application.closed === 'X';
};