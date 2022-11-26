import { IntlProvider } from "react-intl";
import { ToastContainer, Flip } from "react-toastify";

import { frMessage } from "./languages/fr/index";
import { enMessage } from "./languages/en-us/index";
import { ThemeProvider } from "@mui/material/styles";
import { useLanguage } from "./contexts/Language/Language.provider";
import theme from "./theme/theme";
import { useRoutes } from "react-router";
import { routes } from "./routes/routes";
import UsersProvider from "./contexts/User/User.provider";

function App() {
  const routing = useRoutes(routes);
  const { languageState } = useLanguage();
  const activeMessage = languageState === "fr" ? frMessage : enMessage;
  return (
    <IntlProvider
      messages={activeMessage}
      locale={languageState}
      defaultLocale="fr"
    >
      <ThemeProvider theme={theme}>
        <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          transition={Flip}
        />
        <UsersProvider>
          <>{routing}</>
        </UsersProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
