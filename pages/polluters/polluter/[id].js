import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";
import { Card, Typography } from "antd";
import Layout from "../../../components/layout";
const { Title, Paragraph, Text } = Typography;

const fetcher = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	if (res.status !== 200) {
		throw new Error(data.message);
	}
	return data;
};

export default function Polluter() {
	const { query } = useRouter();
	const { data, error } = useSWR(
		() => query.id && `/api/polluters/${query.id}`,
		fetcher
	);

	console.log(data);

	if (error) return <div>{error.message}</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<Layout>
			<Head>
				<title>Polluters</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Typography>
					<h1 className="title">{data.Name}</h1>

					<Card
						title={data.Name}
						extra={<a href="#">More</a>}
						style={{ width: "100%" }}
					>
						<p className="title">Rank</p>
						<p>{data.Rank}</p>

						<p className="title">Ownership</p>
						<p>{data.Ownership}</p>
						<p className="title">HQ</p>
						<p>{data.HQ}</p>
						<p className="title">CEO</p>
						<Paragraph>{data.CEO}</Paragraph>
						<p className="title">CEO Pay</p>
						<p>{data["CEO pay"]}</p>
						<p className="title">Revenue</p>
						<p>{data["Revenue"]}</p>
						<p className="title">Fossil fuel production</p>
						<p>{data["Fossil fuel production"]}</p>
						<p className="title">Investment in renewables</p>
						<p>{data["Investment in renewables"]}</p>
						<p className="title">Global emissions 1965-2017</p>
						<p>{data["Global emissions 1965-2017"]}</p>
						<p className="title">Projected increase in production 2018-30</p>
						<p>{data["Projected increase in production 2018-30"]}</p>
						<p className="title">Projected future emissions 2018-30</p>
						<p>{data["Projected future emissions 2018-30"]}</p>
						<p className="title">Environmental disaster</p>
						<p>{data["Environmental disaster"]}</p>
						<p className="title">Future project</p>
						<p>
							{data["Future projects"]}
							{data["Future project"]}
						</p>
					</Card>
				</Typography>
			</main>
			<style jsx global>{`
				 {
					p.title {
						font-size: 18px;
						font-weight: bold;
					}
				}
			`}</style>
		</Layout>
	);
}
