"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // In a real app, validate credentials against DB here
  // const email = formData.get("email");
  // const password = formData.get("password");

  redirect("/dashboard");
}
