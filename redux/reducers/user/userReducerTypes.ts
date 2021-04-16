export type UserState = {
  name: string;
  email: string;
  token: string;
  isLogged: boolean;
};

export type UserAction = {
  type: string;
  user: UserState;
};
