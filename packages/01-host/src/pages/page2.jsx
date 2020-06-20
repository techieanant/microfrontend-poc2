import React from "react";

const Message = React.lazy(() => import("app_three/Message"));

const Page2 = () => (
  <div>
    <h1>Page 2</h1>
    <React.Suspense fallback="Loading message from app #3">
      <Message />
    </React.Suspense>
  </div>
);

export default Page2;
