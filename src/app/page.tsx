import Image from "next/image";
import styles from "./page.module.css";
import prisma from "../../lib/prisma";
import Post from "../../components/Post";

export const dynamic = "force-dynamic";
// export const revalidate = 0;

export default async function HomePage() {
    const posts = await prisma.post.findMany(
        {
            where: {
                published: true
            },
            orderBy: {
                updatedAt: "desc"
            },
            include: {
                author: true
            }
        }
    );

    console.log(posts);

	return (
        <main>
            <h1>Latest Posts</h1>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </main>
    );
}
