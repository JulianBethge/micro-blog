import Image from "next/image";
import styles from "./page.module.css";
import prisma from "../../lib/prisma";
import Post from "../../components/Post";

export default async function HomePage() {
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
