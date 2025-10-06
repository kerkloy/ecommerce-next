import { z } from "zod";


export const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .nonempty({ message: "First name is required" })
      .max(45, { message: "First name must not be longer that 45 characters" }),
    lastName: z
      .string()
      .nonempty({ message: "Last name is required" })
      .max(45, { message: "Last name must not be longer than 45 characters" }),
    middleName: z
      .string()
      .nonempty({ message: "Middle name is required" })
      .max(45, { message: "Middle name must not be longer than 45 characters" }),
    userName: z
      .string()
      .nonempty({ message: "Username is required" })
      .max(45, { message: "Username must not be longer than 45 characters" }),
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "Invalid email address" })
      .toLowerCase(),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required" }),
  })
  .refine(
    (data) => {
      return data.password == data.confirmPassword;
    },
    { message: "Passwords do not match", path: ["confirmPassword"] }
  );

  
export type RegisterFormType = z.infer<typeof registerFormSchema>;