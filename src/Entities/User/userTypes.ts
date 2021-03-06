export interface IUser {
  _id: string;
  name: string;
  email: string;
  token?: string;
  profileImageUrl?: string;
}

export interface IUserAuth {
  name: string;
  email: string;
  password: string;
  profileImageUrl?: string;
}

export interface IUserPartial {
  email: string;
  password: string;
}

export interface IUsersState {
  error?: string;
  items: IUser[];
  loading: boolean;
  currentUser?: IUser;
}
