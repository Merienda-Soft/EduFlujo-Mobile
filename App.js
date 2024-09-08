import MainNavigator from "./src/navigation/MainNavigator";
import { Auth0Provider } from "react-native-auth0";
import config from "./src/services/aut0-configuration";


export default function App() {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <MainNavigator />
    </Auth0Provider>
  )
}
