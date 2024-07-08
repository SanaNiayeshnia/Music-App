import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import SearchPage from "./pages/SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
