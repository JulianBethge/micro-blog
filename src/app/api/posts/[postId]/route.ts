import prisma from "../../../../../lib/prisma";

interface Params {
   params: {
       postId: string
   }
}

// publishing a post
// PUT /api/posts/:postId
export async function PUT(request : Request, { params } : Params) {
    const postId = Number(params.postId);
    console.log("postId", postId);

    await prisma.post.update({
        where: {
            id: postId
        },
        data: {
            published: true
        }
    });
    
    return new Response("success", {status: 200});
}


// deleting a post
// DELETE /api/posts/:postId
export async function DELETE(request : Request, { params } : Params) {
    const postId = Number(params.postId);
    await prisma.post.delete({
        where: {
            id: postId
        }
    });
    return new Response("success", {status: 200});
}