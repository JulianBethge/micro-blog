import Image from "next/image";
import styles from "./page.module.css";

export default async function HomePage() {
	const fetchedResponse = await fetch("http://localhost:3000/api/posts", {
		// next: { revalidate: 10 },
		cache: "no-store",
	});
	const data = await fetchedResponse.json();
	console.log(data);

	return <div> Home </div>;
}
