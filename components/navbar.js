import React, { useState } from "react";
import Link from "next/link";
import {
	Button,
	DatePicker,
	Menu,
	version,
	message,
	Typography,
	Divider,
} from "antd";
import {
	HomeOutlined,
	SettingFilled,
	SmileOutlined,
	SyncOutlined,
	LoadingOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const { SubMenu } = Menu;

export default function NavBar({ links }) {
	const [date, setDate] = useState(null);
	const handleChange = (value) => {
		message.info(
			`Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
		);
		setDate(value);
	};
	// console.log(links);
	return (
		<>
			<Menu mode="horizontal">
				<Menu.Item key="home">
					<Link href={`/`}>
						<a>Home</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="polluters">
					<Link href={`/polluters`}>
						<a>Polluters</a>
					</Link>
				</Menu.Item>
			</Menu>
		</>
	);
}
