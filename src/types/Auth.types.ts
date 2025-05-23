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
