import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@emotion/react";
import theme from "./utilities/theme";
import AppLayout from "./ui/layout/AppLayout";
import { Provider } from "react-redux";
import store from "./store";

const client = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="search" element={<SearchPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
