import { polluters } from "../../../data_polluters";
console.log(polluters);

export default function polluterHandler({ query: { id } }, res) {
	console.log("hellloooo");
	console.log(id);
	const filtered = polluters.filter((polluter) => polluter.Name === id);

	// User with id exists
	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `Polluter with Name: ${id} not found.` });
	}
}
