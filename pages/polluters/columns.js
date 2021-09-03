import Link from "next/link";
import { Space } from "antd";
import { stringToNumber } from "../../utils";

// console.log(stringToNumber("ththt eieie"));

export const columns = [
	{
		title: "",
		width: 50,
		dataIndex: "Rank",
		key: "Rank",
		fixed: "left",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Name",
		width: 280,
		dataIndex: "Name",
		key: "name",
		fixed: "left",
		render: (text) => (
			<Link href="/polluters/polluter/[id]" as={`/polluters/polluter/${text}`}>
				{text}
			</Link>
		),
	},
	{
		title: "Ownership",
		dataIndex: "Ownership",
		key: "ownership",
		filters: [
			{
				text: "State",
				value: "State",
			},
			{
				text: "Shareholder",
				value: "Shareholder",
			},
		],
		onFilter: (value, record) => record.Ownership.indexOf(value) === 0,
	},
	{
		title: "Revenue",
		key: "revenue",
		dataIndex: "Revenue",
		render(text, record) {
			stringToNumber(text);

			return {
				// props: {
				// 	style: { background: parseInt(text) < 100000 ? "red" : "green" },
				// },
				children: <div>{text}</div>,
			};
		},
	},
	{
		title: "HQ",
		key: "HQ",
		dataIndex: "HQ",
		ellipsis: true,
	},
	{
		title: "CEO",
		key: "CEO",
		dataIndex: "CEO",
	},
	{
		title: "CEO Pay",
		key: "CEO_pay",
		dataIndex: "CEO pay",
	},

	{
		title: "Fossil Fuel Production",
		key: "fossil_fuel_production",
		dataIndex: "Fossil fuel production",
		render(text, record) {
			return {
				// props: {
				// 	style: { background: parseInt(text) > 3 ? "red" : "green" },
				// },
				children: <div>{text}</div>,
			};
		},
	},
	{
		title: "Investment in renewables",
		key: "investment_in_renewables",
		dataIndex: "Investment in renewables",
		ellipsis: true,
	},
	{
		title: "Global emissions 1965-2017",
		key: "emissions_1965",
		dataIndex: "Global emissions 1965-2017",
		ellipsis: true,

		render(text, record) {
			return {
				// props: {
				// 	style: { background: parseInt(text) > 30 ? "red" : "green" },
				// },
				children: <div>{text}</div>,
			};
		},
	},
	{
		title: "Projected increase in production 2018-30",
		key: "projected_increase",
		dataIndex: "Projected increase in production 2018-30",
		ellipsis: true,
		sorter: (a, b) => a.text - b.text,
		render(text, record) {
			return {
				// props: {
				// 	style: { background: parseInt(text) > 10 ? "red" : "green" },
				// },
				children: <div>{text}</div>,
			};
		},
	},
	{
		title: "Projected emissions 2018-30",
		key: "projected_emissions",
		dataIndex: "Projected future emissions 2018-30",
		ellipsis: true,
		render(text, record) {
			return {
				// props: {
				// 	style: { background: parseInt(text) > 734 ? "red" : "green" },
				// },
				children: <div>{text}</div>,
			};
		},
	},
	{
		title: "Environmental Disaster",
		key: "environmental_disaster",
		dataIndex: "Environmental disaster",
		ellipsis: true,
	},
	{
		title: "Future Projects",
		key: "future_projects",
		dataIndex: "Future projects",
		ellipsis: true,
	},
];
