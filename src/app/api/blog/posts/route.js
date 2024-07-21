import connectDB from '@/lib/connectDB';
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Post from '@/lib/models/posts';

export const GET= async (req) =>{
    await  connectDB(); 
    const res= await fetch("https://jsonplaceholder.typicode.com/posts",{
    headers:{
        'Content-Type':'application/json',
    }
})
const data= await res.json();
    if(res.ok){
        return NextResponse.json({"data":data},{status:200})
    }
    else return NextResponse.json({"data": "Dta Not Found"},{status:400})
}