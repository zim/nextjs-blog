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

// import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import useSWR from "swr";
// import Person from "../components/Person";

const { Title, Paragraph, Text } = Typography;

const fetcher = (url) => fetch(url).then((res) => res.json());

// export async function getStaticProps() {
// 	const allPostsData = getSortedPostsData();
// 	return {
// 		props: {
// 			allPostsData,
// 		},
// 	};
// }

export default function Home() {
	const { data, error } = useSWR("/api/people", fetcher);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<Layout home>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<Typography>
					<Title>Frontend Developer Technical Test</Title>

					<Title level={2}>
						There is so much more that I wanted to do.... Unfortunately time
						constraints mean ....
					</Title>
					<Paragraph>
						My time was largely taken getting up to speed on some of the
						features of `Next.js`, as well as gettting `D3`, `Ant Design React`
						in place. And to re aquaint myself with the syntax of creating D3
						visualizations. And to investigate the many great components in
						ant.design (having spent some time looking at/working with
						`Material.UI`). It was very nice to get the comparison of the 2
						component libraries.
					</Paragraph>
					<Title level={2}>
						## Why the general lack of styling ( particularly responsive stying
						)
					</Title>
					<Paragraph>
						The General styling is very poor as I did not have time to properly
						structure this.... and the fact that there are many options with
						csss and Next.js in particular as it has built in support for CSS
						and SASS....
					</Paragraph>
					<Paragraph>
						Having installed ant.design, which is a library I have not used
						before, and attempted to use the grid system, I came across problems
						so moved forward without this in place so there is a lack of
						responsive layout which I had hoped to have aquired from this...
						Also I had teething problems with Ant Design Nav components... Also
						as mentioned Next.js does use a library called styled-jsx.. too many
						options for such a short time.
					</Paragraph>
					<Title level={2}>## Ant Design Table</Title>
					<Paragraph>
						I have used the Table component and did implement some of the nice
						features this component has including scrolling and fixed columns...
						there are many many more that I had wanted to implement. Sorting and
						filtering of course (but again time constraints stopped me pursuing
						this for too long unfortunately)
					</Paragraph>
					<Title level={2}>## pie-cahart-one.js Component</Title>
					<Paragraph>
						I did cheat by creating an array of data in the scheme that I
						needed. If I had more time I would have created some util functions
						similar to `string-to-number.js` and `string-to-pay.js` to extract
						and reduce the array that was provided.
					</Paragraph>
					<Title level={2}>## Next.js API routes</Title>
					<Paragraph>
						I had to add `polluter_data` as a hard coded array, as I had some
						issues when I did create API route in the Next.js fashion...
					</Paragraph>
					<Paragraph>
						Time now means I have to stop :) Please{" "}
						<Link href={`/polluters`}>
							<a>Click Here</a>
						</Link>{" "}
						to View the work I have done. Or Click the 'Polluters' link in the
						top nav menu.
					</Paragraph>
				</Typography>
			</section>
		</Layout>
	);
}
