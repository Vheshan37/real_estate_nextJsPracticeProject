"use server";

export async function saveName(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    return { success: false, message: "Both fields are required" };
  }

  // Simulate DB save or validation
  console.log("Saving username:", username);

  return { success: true, message: `Welcome, ${username}!` };
}
