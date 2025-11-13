"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Login, Register } from "@/lib/actions/authenticationAction";

export default function Auth1() {
  async function handleRegister(formData: FormData) {
    const result = await Register(formData);
    alert(
      `Register ${result.success ? "Success" : "Failed"}: ${result.message}`
    );
  }

  async function handleLogin(formData: FormData) {
    const result = await Login(formData);
    alert(`Login ${result.success ? "Success" : "Failed"}: ${result.message}`);
  }
  return (
    <div className="mt-6 grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <span className="text-neutral-500 text-sm">
          Authentication without useActionState
        </span>
      </div>
      <form className="col-span-6 border border-neutral-200 p-4 rounded-lg shadow-sm space-y-4 flex flex-col">
        <h2>Register Form</h2>
        <div className="grow flex flex-col gap-4">
          <div className="flex gap-2 flex-col">
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" />
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
        <Button type="submit" className="w-full" formAction={handleRegister}>
          Register
        </Button>
      </form>
      <form className="col-start-7 col-span-6 border border-neutral-200 p-4 rounded-lg shadow-sm space-y-4 flex flex-col">
        <h2>Login Form</h2>
        <div className="grow flex flex-col gap-4">
          <div className="flex gap-2 flex-col">
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" />
          </div>
        </div>
        <Button type="submit" className="w-full" formAction={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  );
}
