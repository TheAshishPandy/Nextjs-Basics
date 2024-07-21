import { NextURL } from "next/dist/server/web/next-url";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function  GET(req){
   // console.log(req);
const requestHeader=new headers(req.headers);
//console.log(requestHeader)

//Search Paramas
const url=new NextURL(req.url);
//console.log(url.searchParams);

//Cookies
const cookies= req.cookies;
console.log(cookies);
return NextResponse.json({"msg":"Hello Next JS API"})



}


export async function POST(req){
    const requestHeader=new headers(req.headers);
    //console.log(requestHeader)
    return NextResponse.json({"msg":"Hello Next js Post API Method"},{status:201})
}