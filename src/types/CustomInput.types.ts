/* eslint-disable @typescript-eslint/no-explicit-any */
export enum CustomInputTypes {
  name = 'name',
  surname = 'surname',
  phone = 'phone',
  email = 'email',
  address = 'address',
  city = 'city',
  password = 'password',
  oldPassword = 'oldPassword',
  newPassword = 'newPassword',
  repeatPassword = 'repeatPassword',
  enteredEmail = 'enteredEmail',
  text = 'text',
  date = 'date',
  title = 'title',
  inn = 'inn',
  fio = 'fio',
  promo = 'promo',
  building_length = 'building_length',
  building_width = 'building_width',
  ceiling_height = 'ceiling_height',
  door_area = 'door_area',
  window_area = 'window_area',
  wall_panel_thickness = 'wall_panel_thickness',
  roof_panel_thickness = 'roof_panel_thickness',
  insulation_type = 'insulation_type',
  region = 'region',
}

export enum CustomInputColors {
  black = 'black',
  white = 'white',
  grey = 'grey',
}

export interface ICustomInput {
  inputType: CustomInputTypes;
  readOnly?: boolean;
  value?: string;
  labelText?: string;
  showPasswordButton?: boolean;
  color?: CustomInputColors;
  validation?: any;
  rules?: any;
  error?: string;
  onChange?: any;
  max?: string;
  placeholder?: string;
  defaultValue?: string;
}