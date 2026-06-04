import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { headers } from "next/headers";


const serverUrl = process.env.NEXT_PUBLIC_BASE_URL ;

export const getApi = async()=>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/destination`);
    const data = await res.json();
    return data;
}

export const getSingleApi = async(id)=>{
    const {token} = await auth.api.getToken({
        headers: await headers() 
    });

    console.log("Token from getSingleApi", token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/destination/${id}`,{
        headers: {
            authorization: token,
        }
    });
    const data = await res.json();
    return data;
}


export const updateApi = async(id,updatedData)=>{
    const updatedUser= Object.fromEntries(updatedData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/destination/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
    });
    const data = await res.json();

    if(data.modifiedCount > 0){
       revalidatePath(`/destinations/${id}`);
         revalidatePath('/destinations');
    }

    console.log(data);
    return data;
}   