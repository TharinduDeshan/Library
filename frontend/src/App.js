import "./App.css";
import theme from "./theme";
import AppRoutes from "./AppRoutes";
import {ThemeProvider} from "@mui/material";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <AppRoutes/>
      </ThemeProvider>
  );
}

export default App;
