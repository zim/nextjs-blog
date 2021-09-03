import { polluters } from "../../../data_polluters";
console.log("hkfkfg");
// console.log(polluters);
export default function handler(req, res) {
	res.status(200).json(polluters);
}
