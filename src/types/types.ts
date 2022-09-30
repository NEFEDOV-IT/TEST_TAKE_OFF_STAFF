export interface IUserAccount {
  email: string | null,
  id: number | null,
  isLogged: boolean,
}

export interface IForm {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export interface IUser {
  phone: number | string;
  email: string;
  name: string;
  id: number;
  username: string;
}