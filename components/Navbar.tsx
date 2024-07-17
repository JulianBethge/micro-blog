import Link from 'next/link';
import styles from './Navbar.module.css'; 

export default function Navbar() {
    return (
        <nav>
            <div className={styles.left}>
                <Link href="/">Microblog</Link>
                <Link href="/drafts">Drafts</Link>
                <Link href="/about">About</Link>
            </div>
            <div className={styles.right}>
                <Link href="/signup">Sign Up</Link>
                <Link href="/create">+Create Post</Link>
            </div>
        </nav>
    )
}