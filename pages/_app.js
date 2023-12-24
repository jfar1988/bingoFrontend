import React from "react";
import AuthState from "@/context/auth/authState";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <Component {...pageProps}></Component>
    </AuthState>
  );
};

export default MyApp;
