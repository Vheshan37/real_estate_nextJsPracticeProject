"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginAction } from "@/lib/actions/authenticationAction";
import { startTransition, useActionState, useState } from "react";

export default function Auth2() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginState, loginAction, isLoggingIn] = useActionState(
    async () =>
      LoginAction({ username: loginUsername, password: loginPassword }),
    null
  );

  if (loginState?.success) {
    alert(`Login Success: ${loginState.message}`);
  } else {
    alert(`Login Failed: ${loginState?.message}`);
  }

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
            <Input id="name" type="text" name="name" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Register
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
            startTransition(() => {
              loginAction();
            });
          }}
          disabled={isLoggingIn}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
