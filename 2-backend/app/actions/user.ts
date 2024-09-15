"use server";

import client from "@/db";

export default async function signup(username: string, password: string) {
  try {
    const response = await client.user.create({
      data: {
        username,
        password,
      },
    });
    return "signed up";
  } catch (e) {
    return "nah";
  }
}
