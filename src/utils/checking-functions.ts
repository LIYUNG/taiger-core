import { UserProps } from '../types';

// Tested
export const is_TaiGer_role = (user: UserProps): boolean =>
  user?.role === 'Admin' ||
  user?.role === 'Agent' ||
  user?.role === 'Editor' ||
  user?.role === 'External';

// Tested
export const is_TaiGer_AdminAgent = (user: UserProps): boolean =>
  user?.role === 'Admin' || user?.role === 'Agent';

// Tested
export const is_TaiGer_Admin = (user: UserProps): boolean =>
  user?.role === 'Admin';

// Tested
export const is_TaiGer_Editor = (user: UserProps): boolean =>
  user?.role === 'Editor';

export const is_TaiGer_External = (user: UserProps): boolean =>
  user?.role === 'External';

// Tested
export const is_TaiGer_Agent = (user: UserProps): boolean =>
  user?.role === 'Agent';

export const is_TaiGer_Manager = (user: UserProps): boolean =>
  user?.role === 'Manager';

// Tested
export const is_TaiGer_Student = (user: UserProps): boolean =>
  user?.role === 'Student';
export const is_TaiGer_Guest = (user: UserProps): boolean =>
  user?.role === 'Guest';
