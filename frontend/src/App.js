import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import UserProfilePane from "./components/UserProfilePane";
import MainDisplay from "./components/MainDisplay";
import Auth from "./Auth";
import { useAuth } from "./hooks/useAuth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 60 * 1000 },
  },
});

function App() {
  const [display, setDisplay] = React.useState("lobby");
  const isLoggedIn = !!useAuth().user();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {isLoggedIn ? (
          <div className="App">
            <UserProfilePane
              setDisplay={setDisplay}
              display={display}
              name="Tim"
            />
            <MainDisplay display={display} />
          </div>
        ) : (
          <Auth />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
