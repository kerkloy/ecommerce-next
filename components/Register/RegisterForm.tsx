'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { registerFormSchema, RegisterFormType } from '@/features/auth/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterUser } from '@/features/auth/auth-actions';
import { useRouter } from 'next/router';


function RegisterForm() {
    const form = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
        firstName: "",
        lastName: "",
        middleName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
  })

    const submitForm = async (data: RegisterFormType) => {
        const result = await RegisterUser(data);
        console.log(result);
    }

    return (
            <div className="w-full max-w-xl py-0 ">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center mb-6 text-black-400">
                    Create your Account
                </h2>
                <hr />
                <br />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitForm)}> 
                    
                    <div className="mb-4">
                        <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input label={'Firstname'} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>

                    <div className="mb-4">
                        <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input label={'Lastname'} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>

                    <div className="mb-4">
                        <FormField
                        control={form.control}
                        name="middleName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input label={'Middlename'} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>

                    <div className="mb-4">
                        <FormField
                        control={form.control}
                        name="userName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input label={'Username'} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>

                    <div className="mb-4">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="email" label={'email@test.com'} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>

                    <div className="mb-4">
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="password" label={'Password'} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>

                    <div className="mb-4">
                        <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="password" label={'Confirm Password'} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>

                    <div className="text-black-400 mb-4">
                        <h5 className="text-center">
                            Already have account?{" "}
                            <strong>
                                <a
                                    href="/login"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Sign-in
                                </a>
                            </strong>{" "}
                            here!
                        </h5>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Sign-up
                    </button>
                    </form>
                </Form>
            </div>
    );
}

export default RegisterForm;


