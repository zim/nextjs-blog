import Link from "next/link";

export default function Polluter({ polluter }) {
	return (
		<li>
			<Link
				href="/polluters/polluter/[id]"
				as={`/polluters/polluter/${polluter.Name}`}
			>
				<a>{polluter.Name}</a>
			</Link>
		</li>
	);
}
