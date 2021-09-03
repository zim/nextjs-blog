import Link from "next/link";

export default function Person({ person }) {
	console.log(person);
	return (
		<li>
			<Link href="/people/person/[id]" as={`/people/person/${person.id}`}>
				<a>{person.name}</a>
			</Link>
		</li>
	);
}
