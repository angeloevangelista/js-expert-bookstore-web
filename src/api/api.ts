import axios from "axios";
import { Router } from "next/router";

export type Book = {
  id: string;
  title: string;
  summary: string;
  year: number;
  isbn: string;
  category_id: number;
  publisher_id: number;
  author_id: number;
  pages: number;
};

// TODO: usar variáveis de ambiente
const baseUrl = "https://js-expert-bookstore-api.onrender.com";

export async function getBookList(accessToken: string, filter?: string) {
  try {
    const response = await axios.get<{
      data: Book[];
    }>(`${baseUrl}/api/books`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createSession(params: {
  email: string;
  password: string;
}): Promise<string | undefined> {
  try {
    const { email, password } = params;

    const response = await axios.post<{
      data: { token: string };
    }>(`${baseUrl}/api/session`, {
      email,
      password,
    });

    return response.data.data.token;
  } catch (error) {
    console.error(error);
    return;
  }
}
