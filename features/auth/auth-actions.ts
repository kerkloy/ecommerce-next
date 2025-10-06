"use server";

import { createClient } from "@/utils/supabase/server";
import { RegisterFormType } from "@/features/auth/auth-schema";

export async function RegisterUser(formData : RegisterFormType){
    const supabase = await createClient();
    
    const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password
    }); 

    if (error) {
        return { success: false, error };
    }

    const userdata = data.user;
    if (!userdata) {
        return { success: false, error: "User not found after registration" };
    }

    const {data:user, error:usererror} = await supabase.from('users_profile').insert([
        {
            user_id : userdata.id,
            email : formData.email,
            firstname : formData.firstName,
            lastname : formData.lastName,
            middlename : formData.middleName,
            username : formData.userName,
        }
    ])

    if(usererror){
        return { success: false, error:usererror };
    }

    return { success: true, data };
}