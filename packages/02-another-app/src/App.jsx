import React from "react";
import Routes from "./Routes";
const AppContainer = React.lazy(() => import("app_one/AppContainer"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback="Working on loading the container for the app from the host app">
        <AppContainer routes={Routes} />
      </React.Suspense>
    </div>
  );
};

export default App;
