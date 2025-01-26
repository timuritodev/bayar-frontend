export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  user_type: string;
  organization_name: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  password: string;
  city: string;
  user_type: string;
  organization_name: string;
  token: string;
}

export interface IEditProfileData {
  name: string | undefined;
  surname: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  city: string | undefined;
  address: string | undefined;
  user_type: string | undefined;
  organization_name: string | undefined;
}

export interface IChangePassword {
  userId: number;
  oldPassword: string;
  newPassword: string;
}

export interface IRecoverPassword {
  email: string;
}

export interface IResetPassword {
  token: string;
  newPassword: string;
}

export interface ICalculator {
  building_length: number,
  building_width: number,
  ceiling_height: number,
  door_area: number,
  window_area: number,
  wall_panel_thickness: number,
  roof_panel_thickness: number,
  insulation_type: string,
  region: string
}

export interface ICalculatorState {
  status: 'idle' | 'success' | 'loading' | 'failed';
  error: string | undefined;
  total_cost: string;
}