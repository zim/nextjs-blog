import React, { useState, useEffect, useRef } from "react";

import Head from "next/head";
import Link from "next/link";
import { stringToNumber, stringToPay } from "../../utils";
import Layout from "../../components/layout";
import BarChart from "../../components/barchart";
import BarChartOne from "../../components/barchart-one";
import PieChart from "../../components/pie-chart";
import PieChartOne from "../../components/pie-chart-one";
import useSWR from "swr";
import Polluter from "../../components/Polluter";
import styles from "../../styles/Table.module.css";

import daysOfWeek from "../../utils/daysOfWeek";

console.log(daysOfWeek);
console.log(daysOfWeek.get(2));

import {
	Button,
	DatePicker,
	Menu,
	version,
	message,
	Typography,
	Divider,
	Row,
	Col,
	Table,
	Tag,
	Space,
} from "antd";
import {
	HomeOutlined,
	SettingFilled,
	SmileOutlined,
	SyncOutlined,
	LoadingOutlined,
} from "@ant-design/icons";
import { columns } from "./columns";

const { Title, Paragraph, Text } = Typography;

const fetcher = (url) => fetch(url).then((res) => res.json());

const dataGraph1 = [
	{ id: "Robotics", value: 20, count: 10 },
	{ id: "D3", value: 30, count: 20 },
	{ id: "Digital Media", value: 32, count: 20 },
	{ id: "Machine Learning", value: 38, count: 20 },
	{ id: "Big Data", value: 40, count: 20 },
	{ id: "Gaming", value: 46, count: 20 },
	{ id: "Cloud", value: 56, count: 20 },
	{ id: "Internet of Things", value: 60, count: 20 },
	{ id: "Biosmilars", value: 62, count: 30 },
	{ id: "Artificial Intelligence", value: 68, count: 20 },
];

const dataGraph2 = [
	{
		id: "Saudi Aramco, Saudi Arabia",
		value: 0,
	},
	{
		id: "Chevron, US",
		value: 20.6,
	},
	{
		id: "Gazprom, Russia",
		value: null,
	},
	{
		id: "ExxonMobil, US",
		value: 18.8,
	},
	{
		id: "National Iranian Oil Co",
		value: 0,
	},
	{
		id: "BP, UK",
		value: 14.7,
	},
	{
		id: "Royal Dutch Shell, Netherlands",
		value: 22,
	},
	{
		id: "Coal India, India",
		value: null,
	},
	{
		id: "Pemex, Mexico",
		value: 0,
	},
	{
		id: "Petróleos de Venezuela (PDVSA)",
		value: 0,
	},
	{
		id: "PetroChina",
		value: 0,
	},
	{
		id: "Peabody Energy, US",
		value: 7.3,
	},
	{
		id: "ConocoPhillips, US",
		value: 23.4,
	},
	{
		id: "Abu Dhabi National Oil Company",
		value: 0,
	},
	{
		id: "Kuwait Petroleum Corporation, Kuwait",
		value: 0,
	},
	{
		id: "Iraq National Oil Co, Iraq",
		value: 0,
	},
	{
		id: "Total SA, France",
		value: 3.55,
	},
	{
		id: "Sonatrach, Algeria",
		value: 0,
	},
	{
		id: "BHP Billiton, Australia",
		value: 3.5,
	},
	{
		id: "Petrobras, Brazil",
		value: 0,
	},
];

const polluter_data = [
	{
		Rank: "1.",
		Name: "Saudi Aramcooooo, Saudi Arabia",
		Ownership: "State",
		HQ: "Dhahran, Saudi Arabia",
		CEO: "Amin H Nasser",
		"CEO pay": "Undisclosed",
		Revenue: "$355.9bn in 2018",
		"Fossil fuel production": "13.6m barrels of oil equivalent a day",
		"Investment in renewables":
			"$1.51bn worth of renewable energy projects tendered in 2019",
		"Global emissions 1965-2017":
			"59,262m tonnes of CO2, 4.38% of global total",
		"Projected increase in production 2018-30": "7.2%",
		"Projected emissions 2018-30": "27,035m tonnes of CO2",
		"Future projects":
			"$18bn investment in extending Marjan and Berri oilfields off the eastern coast of Saudi Arabia to extract another 550,000 barrels per day",
	},
	{
		Rank: "2.",
		Name: "Chevron, US",
		Ownership: "Shareholder",
		HQ: "San Ramon, California, US",
		CEO: "Michael Wirth",
		"CEO pay": "$20.6m for 2018",
		Revenue: "$158.9bn in 2018",
		"Fossil fuel production": "2.93m barrels of oil equivalent a day",
		"Investment in renewables":
			"Chevron Technology Ventures launched its Future Energy Fund with $100m in June 2018. The company says it has also invested $1.1bn in carbon capture and storage projects",
		"Global emissions 1965-2017": "43,345m tonnes of CO2, 3.2% of global total",
		"Projected increase in production 2018-30": "20%",
		"Projected future emissions 2018-30": "7,288m tonnes of CO2",
		"Environmental disaster":
			"Blamed for polluting activities in the Ecuadorian Amazon, although an international tribunal has said it is not liable for damages. Also blamed for oil spills in Angola and Brazil",
		"Future projects":
			"Has a $20bn plan to expand drilling during 2019, including in the Tengiz oilfield in Kazakhstan and the Permian basin in Texas",
	},
	{
		Rank: "3.",
		Name: "Gazprom, Russia",
		Ownership: "State",
		HQ: "Moscow, Russia",
		CEO: "Alexey Miller",
		"CEO pay": "Undisclosed since 2015. £27m for 2014",
		Revenue: "$126.5bn in 2018",
		"Fossil fuel production": "9.7m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"43,230m tonnes of CO2, 3.19% of global total",
		"Projected increase in production 2018-30": "3%",
		"Projected emissions 2018-30": "18,381m tonnes of CO2",
		"Environmental disaster":
			"The capture and imprisonment of 30 Greenpeace environmental campaigners who tried to occupy a Gazprom drilling platform in the Arctic drew worldwide condemnation",
		"Future projects":
			"The Yamal megaproject is a long-term plan to “exploit and bring to the markets” the vast natural gas reserves in the Yamal Peninsula in Siberia. Gazprom says the centre will eventually produce up to 360bn cubic metres of gas a year",
	},
	{
		Rank: "4.",
		Name: "ExxonMobil, US",
		Ownership: "Shareholder",
		HQ: "Irving, Texas, US",
		CEO: "Darren Woods",
		"CEO pay": "$18.8m for 2018",
		Revenue: "$290bn in 2018",
		"Fossil fuel production": "3.7m barrels of oil equivalent a day",
		"Investment in renewables":
			"In May, Exxon announced $100m over 10 years in emissions-reduction technologies. It has also said it will use wind and solar to power its Texas oilfields",
		"Global emissions 1965-2017":
			"41,904m tonnes of CO2, 3.09% of global total",
		"Projected increase in production 2018-30": "35%",
		"Projected emissions 2018-30": "10,446m tonnes of CO2",
		"Environmental disaster":
			"In March 1989 the Exxon Valdez, an oil tanker owned by the Exxon Shipping Company, struck a reef off the Alaska coast. About 37,000 tonnes of oil was spilled into the sea within a few days, befouling more than 1,000 miles of coastline in a remote, relatively untouched area. It remains one of the worst environmental disasters caused by humans",
		"Future projects":
			"Exxon has a goal of boosting its annual earnings potential by more than 140% by 2025 via a glut of major projects in Texas, Guyana, Brazil, Mozambique and Papua New Guinea. These projects are expected to increase Exxon’s production to around five million oil equivalent barrels a day by 2025",
	},
	{
		Rank: "5.",
		Name: "National Iranian Oil Co",
		Ownership: "State",
		HQ: "Tehran, Iran",
		CEO: "Masoud Karbasian",
		"CEO pay": "Undisclosed",
		Revenue: "$60bn in 2018, according to Opec",
		"Fossil fuel production": "4m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017": "35,658m tonnes of CO2 2.63% of global total",
		"Projected future increase in production 2018-30": "9.7%",
		"Projected future emissions 2018-30": "15,132m tonnes of CO2",
		"Environmental disaster":
			"The collision of the Iranian tanker Sanchi in January 2018 was the worst oil ship disaster in decades. All 32 crew died and three oil slicks spread over 332 sq km (128 sq miles), raising fears of seafood contamination",
		"Future projects":
			"Huge expansion planned in the coming 10 years that would make this the world’s biggest oil and gas company, although oil production is reportedly at the lowest level since the 1980s as a result of US sanctions ",
	},
	{
		Rank: "6.",
		Name: "BP, UK",
		Ownership: "Shareholder",
		HQ: "London, UK",
		CEO: "Bob Dudley",
		"CEO pay": "$14.7m for 2018",
		Revenue: "$304bn in 2018",
		"Fossil fuel production": "2.35m barrels of oil equivalent a day",
		"Investment in renewables":
			"About $0.5bn of BP’s $15bn-$16bn capital expenditure programme",
		"Global emissions 1965-2017":
			"34,015m tonnes of CO2, 2.51% of global total",
		"Projected increase in production 2018-30": "20.1%",
		"Projected future emissions 2018-30": "7,634m tonnes of CO2",
		"Future projects":
			"The Mad Dog Phase 2 project – in which BP will work alongside BHP and Chevron in 4,500ft of water in the Gulf of Mexico – has the capacity to produce up to 140,000 gross barrels of crude oil per day from 14 production wells. The Mad Dog area is estimated to hold 4bn barrels of oil equivalent.",
		"Environmental disaster":
			"The Deepwater Horizon oil spill in the Gulf of Mexico in April 2010 was the largest in history. A BP drilling rig exploded, killing 11 workers and spewing about 4m barrels of oil into the Gulf. Experts say it had a devastating environmental impact that altered the basic building blocks of life in the ocean",
	},
	{
		Rank: "7.",
		Name: "Royal Dutch Shell, Netherlands",
		Ownership: "Shareholder",
		HQ: "The Hague, Netherlands",
		CEO: "Ben van Beurden",
		"CEO pay": "$22m for 2018",
		Revenue: "$388bn in 2018",
		"Fossil fuel production": "3.6m barrels of oil equivalent a day in 2018",
		"Investment in renewables":
			"$1-$2bn a year (2018-19), or 4-6% of its $25-$30bn annual investment",
		"Global emissions 1965-2017":
			"31,948m tonnes of CO2, 2.36% of global total",
		"Projected increase in production 2018-30": "37.6%",
		"Projected future emissions 2018-30": "9,403m tonnes of CO2",
		"Environmental disaster":
			"In May 2016 an estimated 2,100 barrels of oil, nearly 90,000 gallons, spilled into the Gulf of Mexico – leaked from an undersea pipeline system operated off the Louisiana coast",
		"Future project":
			"A plan for massive oil and gas fracking in Sierras Blancas, Neuquén, Argentina, of up to 70,000 barrels of oil equivalent per day by the mid-2020s",
	},
	{
		Rank: "8.",
		Name: "Coal India, India",
		Ownership: "State and shareholder",
		HQ: "Kolkata, India",
		"Chairman and managing director": "Anil Jha",
		"Managing director pay":
			"5,330,042 rupees (£61,123.79) – part year from July 2018",
		Revenue: "$14.8bn for 2018-19 financial year",
		"Fossil fuel production": "600m tonnes of coal in 2018-19 financial year",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"23,124m tonnes of CO2, 1.71% of global total",
		"Future project": "Magadh expansion, Karo",
	},
	{
		Rank: "9.",
		Name: "Pemex, Mexico",
		Ownership: "State",
		HQ: "Mexico City, Mexico",
		CEO: "Octavio Romero Oropeza",
		"CEO pay": "Undisclosed",
		Revenue: "$85bn in 2018",
		"Fossil fuel production": "2.5m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"22,645m tonnes of CO2, 1.67% of global total",
		"Projected increase in production 2018-30": "-23%",
		"Projected future emissions 2018-30": "3,577m tonnes of CO2",
		"Environmental scandal":
			"Bribery and tax fraud charges were filed earlier this year against the former head of the state-run oil company, who is accused of receiving bribes in connection with the oil company’s purchase of a fertiliser plant",
		"Future projects":
			"The company says it will focus on shallow water projects rather than costly and technologically complex deepwater projects in the Gulf of Mexico in the coming years",
	},
	{
		Rank: "10.",
		Name: "Petróleos de Venezuela (PDVSA)",
		Ownership: "State",
		HQ: "Caracas, Venezuela",
		CEO: "Manuel Quevedo",
		"CEO pay": "Undisclosed",
		Revenue: "$34.6bn in 2018, according to Opec",
		"Fossil fuel production": "1.6m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"15,745m tonnes of CO2, 1.16% of global total",
		"Projected increase in production 2018-30": "-12.7%",
		"Projected future emissions 2018-30": "2,505m tonnes of CO2",
		"Environmental disaster":
			"An explosion at Paraguaná, Venezuela’s biggest oil refinery, in 2012 killed 42 people, damaged 1,600 homes and sent plumes of carbon dioxide and toxic chemicals into the sky",
		"Future project":
			"Oil reserves in Venezuela are the biggest in the world, but US sanctions and political chaos mean production has slumped nearly 80% since 2012",
	},
	{
		Rank: "11.",
		Name: "PetroChina",
		Ownership: "State and shareholder",
		HQ: "Beijing, China",
		CEO: "Hou Qijun",
		"CEO pay": "Undisclosed",
		Revenue: "$328bn in 2018",
		"Fossil fuel production": "4.1m barrels of oil equivalent a day",
		"Investment in renewables":
			"By 2030, the company aims to get 10% of its revenue from “new energy” sources",
		"Global emissions 1965-2017":
			"15,632m tonnes of CO2, 1.15% of global total",
		"Projected increase in production 2018-30": "-12%",
		"Projected future emissions 2018-30": "8,985m tonnes of CO2",
		"Environmental disaster":
			"In 2003, a toxic gas leak in Chongqing killed 242 people. In 2005, an explosion at a plant in Jilin killed six and polluted the Songhua River so badly that 4 million people in Harbin had their taps cut off. In 2010, a pipeline explosion in Dalian discharged 1,500 tonnes of crude oil into the Yellow Sea. The company says it has in place strong environmental protection safeguards",
		"Future project":
			"The vast Tarim oil and gas field in the far western region of Xinjiang is being expanded to 565,000 barrels a day",
	},
	{
		Rank: "12.",
		Name: "Peabody Energy, US",
		Ownership: "Shareholder",
		HQ: "St Louis, Missouri, US",
		CEO: "Glenn Kellow",
		"CEO pay": "$7.3m for 2018",
		Revenue: "$5.5bn in 2018",
		"Coal sold a day": "509,589 tons (about 460,000 tonnes) in 2018",
		"Investment in renewables": "Little to none",
		"Global emissions 1965-2017":
			"15,385m tonnes of CO2, 1.14% of global total",
		"Environmental disaster":
			"Accused of polluting water supplies on Native American land. The New York attorney general concluded in 2015 it had misled investors on climate change – a settlement followed",
		"Future project":
			"Recently announced a joint venture with Arch Coal to combine operations in Colorado and in the Powder River Basin, which stretches across Montana and Wyoming, so coal can better compete with natural gas and renewables",
	},
	{
		Rank: "13.",
		Name: "ConocoPhillips, US",
		Ownership: "Shareholder",
		HQ: "Houston, Texas, US",
		CEO: "Ryan Lance",
		"CEO pay": "$23.4m for 2018",
		Revenue: "$38.7bn in 2018",
		"Fossil fuel production": "1.2m barrels of oil equivalent a day",
		"Investment in renewables":
			"Bought the solar company Lightsource for $200m last year",
		"Global emissions 1965-2017":
			"15,229m tonnes of CO2, 1.12% of global total",
		"Projected increase in production 2018-30": "11%",
		"Projected future emissions 2018-30": "3,094m tonnes of CO2",
		"Environmental disaster":
			"Fined by authorities in the US and China over oil spills. In 2005 it agreed to spend more than half a billion dollars to remedy clean air violations in the US",
		"Future project":
			"Escalated drilling operations in the North Sea, as well as in Canada and Alaska",
	},
	{
		Rank: "14.",
		Name: "Abu Dhabi National Oil Company",
		Ownership: "State",
		HQ: "Abu Dhabi, UAE",
		CEO: "Sultan Ahmed Al Jaber",
		"CEO pay": "Undisclosed",
		Revenue: "$6.2bn in 2018",
		"Fossil fuel production": "2.1m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"13,840m tonnes of CO2 (and methane converted to CO2), 1.01% of global total",
		"Projected future increase in production 2018-30": "22.4%",
		"Projected future emissions 2018-30": "6,224m tonnes of CO2",
		"Future project":
			"Expansion of polypropylene plants – the key product in the making of single-use plastics such as clingfilm and margarine pots – to increase production by 11% to reach 5m tonnes per year",
	},
	{
		Rank: "15.",
		Name: "Kuwait Petroleum Corporation, Kuwait",
		Ownership: "State",
		HQ: "Kuwait City, Kuwait",
		CEO: "Nizar al-Adsani",
		"CEO pay": "Undisclosed",
		Revenue: "$58bn in 2018, according to Opec",
		"Fossil fuel production": "2.7m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"13,479m tonnes of CO2 (and methane converted to CO2), 1% of global total",
		"Projected increase in production 2018-30": "7.3%",
		"Projected future emissions 2018-30": "6,897m tonnes of CO2",
		"Future project":
			"It has announced plans for energy projects of $500bn over the next 20 years, to increase oil production to 4.75m barrels a day",
	},
	{
		Rank: "16.",
		Name: "Iraq National Oil Co, Iraq",
		Ownership: "State",
		HQ: "Baghdad, Iraq",
		CEO: "Jabbar Alluaibi, the Iraqi oil minister",
		"CEO pay": "Undisclosed",
		Revenue: "$68bn in 2018, according to Opec",
		"Fossil fuel production": "1.5m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"12,596m tonnes of CO2 equivalent, 0.93% of global total",
		"Future projects":
			"There are huge oil reserves in Iraq and the INOC says there are also four gas projects on the table including al-Halfaya, which is expected to produce 300m cubic metres per day. Basra gas projects are also growing",
	},
	{
		Rank: "17.",
		Name: "Total SA, France",
		Ownership: "Shareholder",
		HQ: "Courbevoie, France",
		CEO: "Patrick Pouyanné",
		"CEO pay": "$3.55m for 2018",
		Revenue: "$209bn in 2018",
		"Fossil fuel production": "2.3m barrels of oil equivalent a day",
		"Investment in renewables":
			"No figure for renewables but it says $1.5bn-$2bn in “low carbon electricity”",
		"Global emissions 1965-2017":
			"12,352m tonnes of CO2 equivalent, 0.91% of global total",
		"Projected increase in production 2018-30": "12.2%",
		"Projected future emissions 2018-30": "5,830m tonnes of CO2",
		"Environmental disaster":
			"Total SA was found to be responsible for the 1999 sinking of the tanker Erika in the Bay of Biscay when 20,000 tonnes of toxic fuel oil polluted the sea, devastating 250 miles (400km) of beaches and shoreline, crippling local industries and killings tens of thousands of seabirds",
		"Future projects":
			"Alongside its fellow fossil fuel giant Exxon, Total SA is planning a $10bn expansion into Papua New Guinea that is set to double the impoverished country’s export of liquid natural gas",
	},
	{
		Rank: "18.",
		Name: "Sonatrach, Algeria",
		Ownership: "State",
		HQ: "Algiers, Algeria",
		CEO: "Rachid Hachichi",
		"CEO pay": "Undisclosed",
		Revenue: "$39bn in 2018",
		"Fossil fuel production": "2.4m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"12,302m tonnes of CO2, 0.91% of global total",
		"Projected increase in production 2018-30": "-17.8%",
		"Projected future emissions 2018-30": "3,637m tonnes of CO2",
		"Environmental disaster":
			"In July, the company suffered its worst accident in 15 years when a huge liquefied natural gas complex exploded. Smoke billowed into the sky for two days until firefighters extinguished the blaze",
		"Future projects":
			"Already Africa’s biggest company, Sonatrach is planning to become a player in the global plastic industry by building a huge new polypropylene plant in Algeria. Sonatrach is also responsible for solar power in Algeria, which the government wants to develop so it can export more oil",
	},
	{
		Rank: "19.",
		Name: "BHP Billiton, Australia",
		Ownership: "Shareholder",
		HQ: "Melbourne, Australia, and London, UK",
		CEO: "Andrew Mackenzie",
		"CEO pay": "$3.5m for 2018",
		Revenue: "$45.8bn in 2018",
		"Fossil fuel production":
			"331,505 barrels of oil equivalent, plus 189,041 tonnes of coal (thermal and metallurgical) a day",
		"Investment in renewables": "None",
		"Global emissions 1965-2017":
			"9,802m tonnes of CO2 equivalent, 0.72% of global total",
		"Environmental disaster":
			"The 2016 collapse of a tailings dam in Brazil killed 19 people, destroyed villages, left hundreds homeless and killed fish and other aquatic life in the Gualaxo do Norte River",
		"Future project":
			"The untapped Trion oil project in the Gulf of Mexico could yield more than 485m barrels of oil equivalent. BHP bought a 60% share in 2016 and operates the project",
	},
	{
		Rank: "20.",
		Name: "Petrobras, Brazil",
		Ownership: "State",
		HQ: "Rio de Janeiro, Brazil",
		CEO: "Roberto Castello Branco",
		"CEO pay": "Undisclosed",
		Revenue: "$95.5bn in 2018",
		"Fossil fuel production": "2.6m barrels of oil equivalent a day",
		"Investment in renewables": "N/A",
		"Global emissions 1965-2017":
			"8,676m tonnes of CO2, 0.64% of global total.",
		"Projected increase in production 2018-30": "12.8%",
		"Projected future emissions 2018-30": "5,427m tonnes of CO2",
		"Environmental disaster":
			"Oil spills of over a million litres into Guanabara Bay in Rio de Janeiro in 1975 and 2000. Many others since, including two this year of hundreds of thousands of litres from offshore platforms and ships",
		"Future projects":
			"Preparing for the world’s biggest expansion of offshore oil and gas production by putting out tenders for seven huge floating production, storage and offloading (FPSO) vessels",
	},
];

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(
			`selectedRowKeys: ${selectedRowKeys}`,
			"selectedRows: ",
			selectedRows
		);
	},
	getCheckboxProps: (record) => ({
		disabled: record.name === "Disabled User",
		// Column configuration not to be checked
		name: record.name,
	}),
};

export default function Polluters(props) {
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	// console.log(graphData);

	// const { data, error } = useSWR("/api/polluters", fetcher);

	// if (error) return <div>Failed to load</div>;
	// if (!data) return <div>Loading...</div>;
	// console.log(data);

	// const newdataUnderscore = data.reduce((acc, curr, i) => {
	// 	acc.push({ ...curr, computedName: curr[key].replace("", "_") });

	// 	return acc;
	// }, []);
	// console.log(newdataUnderscore);

	const newdataRevenue = polluter_data.reduce((acc, curr, i) => {
		console.log(curr);
		acc.push({ id: curr.Name, value: stringToNumber(curr.Revenue) });

		return acc;
	}, []);
	console.log(newdataRevenue);

	const [graphData, setGraphData] = useState(newdataRevenue);
	console.log(graphData);

	const newdataPay = polluter_data.reduce((acc, curr, i) => {
		acc.push({ id: curr.Name, value: stringToPay(`${curr["CEO pay"]}`) });

		return acc;
	}, []);
	console.log(newdataPay);

	// React.useEffect(() => {
	// 	setGraphData(newdataRevenue);
	// }, [newdataRevenue]);
	const onSelectChange = (selectedRowKeys) => {
		console.log("selectedRowKeys changed: ", selectedRowKeys);
		// this.setState({ selectedRowKeys });
		setSelectedRowKeys([selectedRowKeys]);
	};

	// const rowSelection = {
	// 	selectedRowKeys,
	// 	onChange: onSelectChange,
	// };

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
		selections: [
			Table.SELECTION_ALL,
			Table.SELECTION_INVERT,
			Table.SELECTION_NONE,
			{
				key: "odd",
				text: "Select Odd Row",
				onSelect: (changableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changableRowKeys.filter((key, index) => {
						if (index % 2 !== 0) {
							return false;
						}
						return true;
					});
					this.setState({ selectedRowKeys: newSelectedRowKeys });
				},
			},
			{
				key: "even",
				text: "Select Even Row",
				onSelect: (changableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changableRowKeys.filter((key, index) => {
						if (index % 2 !== 0) {
							return true;
						}
						return false;
					});
					this.setState({ selectedRowKeys: newSelectedRowKeys });
				},
			},
		],
	};

	function TextInputWithFocusButton() {
		const inputEl = useRef(null);
		const onButtonClick = () => {
			// `current` points to the mounted text input element
			inputEl.current.focus();
		};
		return (
			<>
				<input ref={inputEl} type="text" />
				<button onClick={onButtonClick}>Focus the input</button>
			</>
		);
	}

	console.log(polluter_data);

	const barOne = useRef(null);

	const changeData = () => {
		console.log(newdataPay);
		// this.setState({ selectedRowKeys });
		setGraphData(newdataPay);
	};

	// changeData(newdataRevenue);
	// React.useEffect(() => {
	// 	drawChart(svg);
	// }, [graphData]);

	return (
		<Layout>
			<Head>
				<title>Polluters</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Typography>
				<Title level={2}>Polluters</Title>
				<Paragraph>
					Here is a table showing the top 20 polluting companies. Scroll the
					table left and you will see more information.
				</Paragraph>
			</Typography>
			<button
				onClick={() => {
					changeData();
				}}
			>
				CEO Pay
			</button>

			<PieChartOne />
			<BarChartOne dataSource={graphData} />
			<BarChartOne dataSource={newdataRevenue} />

			<Table
				columns={columns}
				dataSource={polluter_data}
				scroll={{ x: 2300 }}
				size="small"
				rowClassName={(record, index) => {
					record["Projected future emissions 2018-30"] > 20 ? "red" : "green";
				}}
			/>

			<TextInputWithFocusButton />

			<style jsx>{`
				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</Layout>
	);
}
