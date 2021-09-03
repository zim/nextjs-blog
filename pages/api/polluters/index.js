import { polluters } from "../../../data_polluters";
export default function handler(req, res) {
	res.status(200).json(polluters);
}
