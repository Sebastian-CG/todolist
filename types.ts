import { User } from "firebase/auth";

export type TLoginProviders = "google" | "github";
export type TChildren = JSX.Element | JSX.Element[];
export type TUser = User | null;
