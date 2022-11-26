import { createContext, Dispatch } from "react";
import { Action, IUser, IUserContextInterface } from "./User.interface";
const UserContext = createContext<IUserContextInterface>({
  userDispatch: () => {},
  userState: {
    user_id: "dfg45-rgf545",
    user_name: "Cynthia",
    user_image_ref: "/../src/assets/images/profile.png",
  },
});
export default UserContext;
