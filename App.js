import MainNavigator from "./src/navigation/MainNavigator";
import { DataProvider } from "./src/utils/globals";

export default function App() {
  return (
    <DataProvider>
     <MainNavigator />
    </DataProvider>
  )
}
