"use server";

import { PrismaClient } from "@/generated/prisma/client";

export async function Login(formData: FormData) {
  const prisma = new PrismaClient();

  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    return { success: false, message: "Both fields are required" };
  }

  const user = await prisma.user.findFirst({
    where: {
      email: String(username),
      password: String(password),
    },
  });

  if (!user) {
    return { success: false, message: "Invalid username or password" };
  }

  return { success: true, message: `Welcome back, ${username}!` };
}

export async function Register(formData: FormData) {
  const name = formData.get("name");
  const username = formData.get("username");
  const password = formData.get("password");

  const prisma = new PrismaClient();

  if (!name || !username || !password) {
    return { success: false, message: "All fields are required" };
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: String(name),
        email: String(username),
        password: String(password),
        status_id: 1,
      },
    });
    return {
      success: true,
      message: `Registration successful for ${user.name}!`,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Registration failed" };
  }
}

export async function LoginAction(data: {
  username: string;
  password: string;
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

  const prisma = new PrismaClient();

  console.log("LoginAction called with data:", data);

  const { username, password } = data;

  if (!username || !password) {
    return { success: false, message: "Both fields are required" };
  }

  const user = await prisma.user.findFirst({
    where: {
      email: username,
      password: password,
    },
  });

  if (!user) {
    return { success: false, message: "Invalid username or password" };
  }

  return { success: true, message: `Welcome back, ${user.name}!` };
}

export async function RegisterAction(data: {
  name: string;
  username: string;
  password: string;
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

  const prisma = new PrismaClient();

  console.log("RegisterAction called with data:", data);

  const { name, username, password } = data;

  if (!name || !username || !password) {
    return { success: false, message: "All fields are required" };
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: String(name),
        email: String(username),
        password: String(password),
        status_id: 1,
      },
    });
    return {
      success: true,
      message: `Registration successful for ${user.name}!`,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Registration failed" };
  }
}
