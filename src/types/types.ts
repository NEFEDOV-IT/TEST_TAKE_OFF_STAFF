export interface IUser {
  email: string | null,
  id: string | null,
  isLogged: boolean,
}

export interface IForm {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export interface IUsers {
  login: string;
  email: string;
  name: string;
  id: string;
  $type: string;
}