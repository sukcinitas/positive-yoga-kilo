import React from "react";

import GlobalStyles from "./shared/Global";
import CheckoutPage from "./pages/CheckoutPage";
import Banner from "./components/Banner";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <Header />
      <CheckoutPage />
    </>
  );
}

export default App;
