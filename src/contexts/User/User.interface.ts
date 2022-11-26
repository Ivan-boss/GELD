import React, { Dispatch } from "react";

export interface IUser {
  user_id: string;
  user_name: string;
  user_image_ref: string;
}
export type Action = {
  type: "LOAD_USER";
  payload: IUser;
};

export type State = IUser;

export interface IUserContextProps {
  children: JSX.Element | JSX.Element[];
}

export interface IUserContextInterface {
  userState: IUser;
  userDispatch: Dispatch<Action>;
}
