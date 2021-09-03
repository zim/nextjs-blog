import React, { useState, useEffect } from "react";
import Head from "next/head";
import * as d3 from "d3";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

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

import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import useSWR from "swr";
import Person from "../components/Person";

const { Title, Paragraph, Text } = Typography;

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	const { data, error } = useSWR("/api/people", fetcher);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;
	console.log(data);

	const DATA = [
		{ x: 10, y: 20 },
		{ x: 20, y: 50 },
		{ x: 80, y: 90 },
	];

	// useEffect(() => {
	// 	console.log("useEffect 1");
	// 	// d3.select(".target").style("stroke-width", 5);
	// 	const margin = { top: 10, right: 40, bottom: 30, left: 30 },
	// 		width = 450 - margin.left - margin.right,
	// 		height = 200 - margin.top - margin.bottom;

	// 	const svg = d3
	// 		.select("#area")
	// 		.append("svg")
	// 		.attr("width", width + margin.left + margin.right)
	// 		.attr("height", height + margin.top + margin.bottom)
	// 		.append("g")
	// 		.attr("transform", `translate(${margin.left}, ${margin.top})`);

	// 	const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
	// 	svg
	// 		.append("g")
	// 		.attr("transform", `translate(0, ${height})`)
	// 		.call(d3.axisBottom(x));

	// 	const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
	// 	svg.append("g").call(d3.axisLeft(y));

	// 	svg
	// 		.selectAll("whatever")
	// 		.data(DATA)
	// 		.enter()
	// 		.append("circle")
	// 		.attr("cx", (d) => x(d.x))
	// 		.attr("cy", (d) => y(d.y))
	// 		.attr("r", 7);
	// }, []);

	const changeStroke = () => {
		d3.select(".target").style("stroke-width", 5);
	};

	return (
		<Layout home>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<button onClick={changeStroke}>change stroke</button>
				<svg>
					<circle
						class="target"
						style={{ fill: "green" }}
						stroke="black"
						cx={50}
						cy={50}
						r={40}
					></circle>
				</svg>
				<svg id="area" height={200} width={450}></svg>
				<Typography>
					<Title>Frontend Developer Technical Test</Title>
					<Paragraph>
						Thank you for applying to join the Technology Team here at Carbon
						Intelligence, our mission is to help our clients to reduce their
						greenhouse gas footprint and we do that by processing their resource
						usage data, calculating their emissions and delivering interventions
						that reduce their impact on the environment. We’re very proud of the
						culture in our team and the great tools that we’ve built - we’d
						really like you to join us on our journey!
					</Paragraph>
					<Paragraph>
						Carbon Intelligence’s tech stack is based on a Python / Django
						backend using a Postgres database running in AWS and React as our
						frontend framework (using typescript and this component library:
						https://ant.design/).
					</Paragraph>
					<Paragraph>
						For this test we have provided a publicly available dataset that
						lists the world’s top 20 polluters, the data should be easy to
						understand. Your challenge: please display this in an interesting
						and interactive way.
					</Paragraph>
					<Paragraph>What we are looking for:</Paragraph>
					<Paragraph>Are you a good coder?</Paragraph>
					<Paragraph>
						Is your code easy to read, well structured, do you know how to write
						unit tests?
					</Paragraph>
					<Paragraph>Do you know React?</Paragraph>
					<Paragraph>
						Are your components well structured, reusable and take advantage of
						React’s features?
					</Paragraph>
					<Paragraph>Are you a frontend specialist?</Paragraph>
					<Paragraph>
						Do you understand how to design for a browser? Does it look slick?
						Do you like CSS?
					</Paragraph>
					<Paragraph>Do you understand users?</Paragraph>
					<Paragraph>
						Does your application make sense? Is it obvious how to use it? Is it
						engaging and fun?
					</Paragraph>
					<Paragraph>Are you creative?</Paragraph>
					<Paragraph>
						Does your application sizzle? We’re looking for originality,
						interactivity, animation, transitions.
					</Paragraph>
					<Paragraph>
						Check your code into github and send us the link. If we have any
						questions we’ll create an issue. We appreciate that you are busy so
						we’re not expecting you to spend more than a couple of hours on
						this, but have fun with it.
					</Paragraph>
				</Typography>

				<h2 className={utilStyles.headingLg}>Blog</h2>

				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
