import { NextResponse } from "next/server"

export const GET = async (req,{ params }) => {
    //const requestHeader= new Request(req.Header)
    console.log("Req",req)
   //console.log("Context",context)
   console.log("Params",params)
    return NextResponse.json({"msg":"API Response dynamic Route"},{status:200})
}