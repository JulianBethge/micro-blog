import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

interface User {
    name: string;
    email: string;
}

export async function POST(request: Request) {
    console.log("POSTER");
    const user: User = await request.json();
    console.log(user);

    // return NextResponse.json(user);
    await prisma.user.create({
        data: {
            name: user.name,
            email: user.email
        }
    })
    return new Response("success", {status: 201});
} 