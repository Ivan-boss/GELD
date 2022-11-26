import { Reducer, useContext, useReducer } from "react";
import UserContext from "./User.context";
import { State, Action, IUserContextProps, IUser } from "./User.interface";

const userReducer: Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  switch (action.type) {
    case "LOAD_USER": {
      return { ...state };
    }
    default:
      throw new Error(
        "Action type ${action.type} has not been handled in the user provider "
      );
  }
};

export default function UsersProvider({
  children,
}: IUserContextProps): JSX.Element {
  const initialState: IUser = {
    user_id: "dfg45-rgf545",
    user_name: "Cynthia",
    user_image_ref: "/../src/assets/images/profile.png",
  };

  const [userState, userDispatch] = useReducer(userReducer, initialState);

  const value = { userState, userDispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("User must be used as a  descendant of a UserProvider");
  } else return context;
};
