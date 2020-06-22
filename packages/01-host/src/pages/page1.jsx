import React from "react";

const Page = React.lazy(() => import("app_two/Page"));

const Page1 = () => {
  return (
    <React.Suspense fallback="Loading page from App #2">
       <Page />
    </React.Suspense>
  );
};

export default Page1;
