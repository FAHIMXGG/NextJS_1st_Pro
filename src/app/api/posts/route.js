import { NextResponse } from "next/server"

export const GET = async (request) => {
    //fetch

    return new NextResponse("it Works!", { status: 200 });
};