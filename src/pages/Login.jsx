import React, { useState } from "react";
import { Icon } from "../components/icons/Icon";
import { useAuth } from "../context/AuthProvider";
import Button from "../components/generic/Button";
import Input from "../components/generic/Input";

export const Login = () => {
  const { login, register, error, loginWithGoogle } = useAuth();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const updateCredential = (key, value) => {
    setCredentials((prev) => ({ ...prev, [key]: value }));
  };

  const signIn = (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password);
  };

  const signUp = (e) => {
    e.preventDefault();
    register(credentials.email, credentials.password);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-secondary flex-col">
      <div className="w-full max-w-md px-4">
        <div className="shadow-md rounded-md bg-white p-4">
          <LoginHeader />
          <LoginForm
            updateCredential={updateCredential}
            signIn={signIn}
            signUp={signUp}
            loginWithGoogle={loginWithGoogle}
          />
        </div>
        {error && <LoginError error={error} />}
      </div>
    </div>
  );
};

const LoginHeader = () => (
  <div className="flex flex-col">
    <div className="flex gap-2 items-center">
      <Icon color="#666" fontSize="26px">
        account_circle
      </Icon>
      <h1 className="text-2xl font-bold text-primary">Login</h1>
    </div>
    <h2 className="text-md text-secondary">
      Log in or sign up to access your account
    </h2>
  </div>
);

const LoginForm = ({ updateCredential, signIn, signUp, loginWithGoogle }) => (
  <form className="flex flex-col gap-4 pt-10 pb-2">
    <Input
      placeholder="Email"
      onChange={(e) => updateCredential("email", e.target.value)}
    />
    <Input
      type="password"
      placeholder="Password"
      onChange={(e) => updateCredential("password", e.target.value)}
    />
    <LoginButtons
      signIn={signIn}
      signUp={signUp}
      loginWithGoogle={loginWithGoogle}
    />
  </form>
);

const LoginButtons = ({ signIn, signUp, loginWithGoogle }) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between mt-6 w-full">
      <button type="button" className="hover:underline py-2" onClick={signUp}>
        Register
      </button>
      <Button type="submit" onClick={signIn}>
        Login
      </Button>
    </div>
    <hr className="border-gray-300 my-6" />
    <ContinueWithGoogle loginWithGoogle={loginWithGoogle} />
  </div>
);

const google_img_url =
  "https://www.svgrepo.com/show/303108/google-icon-logo.svg";

const ContinueWithGoogle = ({ loginWithGoogle }) => (
  <Button onClick={loginWithGoogle} type="button">
    <img src={google_img_url} className="h-6 w-6 mr-6" />
    Continue with Google
  </Button>
);

const LoginError = ({ error }) => (
  <p className="text-error text-center mt-4 flex items-center gap-2 text-sm p-4 w-full bg-white rounded-md shadow-md">
    <Icon>error</Icon>
    {error}
  </p>
);
