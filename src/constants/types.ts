import { z } from "zod";
import { loginSchema } from "./schemas";

export type User = {
    name?: string;
    email: string;
    password?: string;
}
 
export type LoginData = z.infer<typeof loginSchema>
