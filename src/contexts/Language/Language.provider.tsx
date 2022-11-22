import { useReducer, useContext, Reducer } from "react";
import LanguageContext from "./Language.context";
import {
  Action,
  ILanguageContextProps,
  Language,
  State,
} from "./Language.interface";

const languageReducer: Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  switch (action.type) {
    case "USE_ENGLISH": {
      return "en";
    }
    case "USE_FRENCH": {
      return "fr";
    }
    default:
      throw new Error(
        `Action type ${action.type} has not been handled in the LanguageProvider`
      );
  }
};

export default function LanguageProvider({
  children,
}: ILanguageContextProps): JSX.Element {
  const initialState: Language = "en";

  const [languageState, languageDispatch] = useReducer(
    languageReducer,
    initialState
  );

  const value = { languageState, languageDispatch };

  return (
    <LanguageContext.Provider value={value}>
      {" "}
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used as a descendant of LanguageProvider"
    );
  } else return context;
};
