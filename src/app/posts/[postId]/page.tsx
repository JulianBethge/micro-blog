import { notFound } from "next/navigation";
import prisma from "../../../../lib/prisma";
import PostDetails from "../../../../components/PostDetails";

interface Props {
	params: {
		postId: string;
	};
}

export default async function PostPage({ params }: Props) {
	console.log(params.postId);
	const post = await prisma.post.findUnique({
		where: {
			id: Number(params.postId),
		},
		include: {
			author: true,
		},
	});

	console.log(post);
	if (!post) {
		notFound();
	}

	return <PostDetails {...post}/>;
}
