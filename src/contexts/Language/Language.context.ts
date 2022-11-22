import { createContext } from "react";
import { ILanguageContextInterface } from "./Language.interface";

const LanguageContext = createContext<ILanguageContextInterface>({
  languageDispatch: () => {},
  languageState: "en",
});

export default LanguageContext;
