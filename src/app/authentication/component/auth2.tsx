"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormAction } from "@/hooks/use-action-hook";
import {
  LoginAction,
  RegisterAction,
} from "@/lib/actions/authenticationAction";
import { startTransition, useActionState, useEffect, useState } from "react";

export default function Auth2() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const {
    state: loginState,
    pending: isLoggingIn,
    run: login,
  } = useFormAction(async () =>
    LoginAction({ username: loginUsername, password: loginPassword })
  );

  const {
    state: registerState,
    pending: isRegistering,
    run: register,
  } = useFormAction(async () =>
    RegisterAction({
      name: registerName,
      username: registerUsername,
      password: registerPassword,
    })
  );

  // const [loginState, loginAction, isLoggingIn] = useActionState(
  //   async () =>
  //     LoginAction({ username: loginUsername, password: loginPassword }),
  //   null
  // );

  // const [registerState, registerAction, isRegistering] = useActionState(
  //   async () =>
  //     RegisterAction({
  //       name: registerName,
  //       username: registerUsername,
  //       password: registerPassword,
  //     }),
  //   null
  // );

  useEffect(() => {
    if (!registerState) return;
    if (registerState.success) {
      alert(`Registration Success: ${registerState.message}`);
    } else {
      alert(`Registration Failed: ${registerState.message}`);
    }
  }, [registerState]);

  useEffect(() => {
    if (!loginState) return;
    if (loginState.success) {
      alert(`Login Success: ${loginState.message}`);
    } else {
      alert(`Login Failed: ${loginState.message}`);
    }
  }, [loginState]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 mt-6">
        <span className="text-neutral-500 text-sm">
          Authentication with useActionState
        </span>
      </div>
      <form className="col-span-6 border border-neutral-200 p-4 rounded-lg shadow-sm space-y-4 flex flex-col">
        <h2>Register Form</h2>
        <div className="grow flex flex-col gap-4">
          <div className="flex gap-2 flex-col">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              onChange={(e) => setRegisterName(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full"
          onClick={() => {
            register();
          }}
          disabled={isRegistering}
        >
          {isRegistering ? "Registering..." : "Register"}
        </Button>
      </form>
      <form className="col-start-7 col-span-6 border border-neutral-200 p-4 rounded-lg shadow-sm space-y-4 flex flex-col">
        <h2>Login Form</h2>
        <div className="grow flex flex-col gap-4">
          <div className="flex gap-2 flex-col">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
        </div>
        <Button
          type="button"
          className="w-full"
          onClick={() => {
            login();
          }}
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
