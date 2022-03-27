import { UserCredential } from "firebase/auth";
import { TChildren, TLoginProviders, TUser } from "types";

export interface IAuthContext {
  user: TUser;
  loading: boolean;
  logInWithGoogle: () => Promise<UserCredential>;
  logInWithGithub: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
}

export interface ILoginBtnProvider {
  icon: TChildren;
  nameProvider: TLoginProviders;
}
