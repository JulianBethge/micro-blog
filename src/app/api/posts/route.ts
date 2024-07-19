import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// GET /api
export async function GET(request: Request) {
    // console.log("GETTER");
    const posts = await prisma.post.findMany(
        {
            where: {
                published: true
            },
            include: {
                author: true
            }
        }
    );
    console.log("posts");
    console.log(posts);
    return NextResponse.json(posts);
}