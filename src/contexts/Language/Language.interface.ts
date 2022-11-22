import { Dispatch } from "react";

export type Language = "en" | "fr";

export type LANGUAGE_CHOICE = "USE_ENGLISH" | "USE_FRENCH";

export type Action = {
  type: LANGUAGE_CHOICE;
  payload: Language;
};

export type State = Language;

export interface ILanguageContextProps {
  children: JSX.Element | JSX.Element[];
}

export interface ILanguageContextInterface {
  languageState: Language;
  languageDispatch: Dispatch<Action>;
}
