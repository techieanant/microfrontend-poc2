import React from "react";

const Page = React.lazy(() => import("app_two/Page"));

const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <React.Suspense fallback="Loading page from App #2">
        <Page />
      </React.Suspense>
    </div>
  );
};

export default Page1;
