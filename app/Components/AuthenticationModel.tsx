"use client";

import React, { useState } from "react";
import SignInModel from "./SignInModel";
import SignUpModel from "./SignUpModel";

interface Props {
  handleSignupModelClose: () => void;
}

const AuthenticationModel: React.FC<Props> = ({ handleSignupModelClose }) => {
  const [authType, setAuthType] = useState(true);
  return (
    <>
      {authType ? (
        <SignInModel
          handleSignupModelClose={handleSignupModelClose}
          setAuthType={setAuthType}
        />
      ) : (
        <SignUpModel
          handleSignupModelClose={handleSignupModelClose}
          setAuthType={setAuthType}
        />
      )}
    </>
  );
};

export default AuthenticationModel;
