import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import NavBar from "./navbar";

const name = "The world's top 20 polluters";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				<>
					<Link href="/">
						<a>
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={30}
								width={30}
								alt={name}
							/>
						</a>
					</Link>
					<h1 className={utilStyles.heading2Xl}>
						<Link href="/">
							<a className={utilStyles.colorInherit}>{name}</a>
						</Link>
					</h1>
				</>
			</header>
			<NavBar />
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
				</a>
			</footer>
		</div>
	);
}
