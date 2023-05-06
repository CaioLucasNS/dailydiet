import { ThemeProvider } from "styled-components/native";
import { Home } from "@screens/Home";
import { StatusBar } from "expo-status-bar";

import theme from "@theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
}
