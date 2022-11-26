import enAuthentication from "./enAuthentication";
import enWelcome from "./enWelcome";
import enOverview from "./enOverview";

export let enMessage = {
  ...enAuthentication,
  ...enWelcome,
  ...enOverview,
};

export default enMessage;
