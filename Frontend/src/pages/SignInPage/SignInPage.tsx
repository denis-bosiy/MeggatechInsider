import React from "react";
import { IconButton } from "../../components/IconButton";
import { ArrowLeft } from "../../icons";

const SignInPage = () => {
  return (
    <>
      <input type="password" />
      <IconButton icon={<ArrowLeft width={24} height={24} />} />
    </>
  );
};

export default SignInPage;
