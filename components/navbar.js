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

				<SubMenu key="SubMenu" title="Top 20 Polluters">
					<Menu.ItemGroup title="Item 1">
						<Menu.Item key="setting:1">
							<Link href={`/polluters`}>
								<a>Polluters</a>
							</Link>
						</Menu.Item>
						<Menu.Item key="setting:2">Option 2</Menu.Item>
					</Menu.ItemGroup>
					<Menu.ItemGroup title="Item 2">
						<Menu.Item key="setting:3">Option 3</Menu.Item>
						<Menu.Item key="setting:4">Option 4</Menu.Item>
					</Menu.ItemGroup>
				</SubMenu>
			</Menu>
		</>
	);
}
