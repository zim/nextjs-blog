import Link from "next/link";
import Layout from "../components/layout";

function About() {
	return (
		<Layout>
			<div>
				<p>Frontend Developer Technical Test</p>
				<p>
					Thank you for applying to join the Technology Team here at Carbon
					Intelligence, our mission is to help our clients to reduce their
					greenhouse gas footprint and we do that by processing their resource
					usage data, calculating their emissions and delivering interventions
					that reduce their impact on the environment. We’re very proud of the
					culture in our team and the great tools that we’ve built - we’d really
					like you to join us on our journey!
				</p>
				<p>
					Carbon Intelligence’s tech stack is based on a Python / Django backend
					using a Postgres database running in AWS and React as our frontend
					framework (using typescript and this component library:
					https://ant.design/).
				</p>
				<p>
					For this test we have provided a publicly available dataset that lists
					the world’s top 20 polluters, the data should be easy to understand.
					Your challenge: please display this in an interesting and interactive
					way.
				</p>
				<p>What we are looking for:</p>
				<p>Are you a good coder?</p>
				<p>
					Is your code easy to read, well structured, do you know how to write
					unit tests?
				</p>
				<p>Do you know React?</p>
				<p>
					Are your components well structured, reusable and take advantage of
					React’s features?
				</p>
				<p>Are you a frontend specialist?</p>
				<p>
					Do you understand how to design for a browser? Does it look slick? Do
					you like CSS?
				</p>
				<p>Do you understand users?</p>
				<p>
					Does your application make sense? Is it obvious how to use it? It is
					engaging and fun?
				</p>
				<p>Are you creative?</p>
				<p>
					Does your application sizzle? We’re looking for originality,
					interactivity, animation, transitions.
				</p>
				<p>
					Check your code into github and send us the link. If we have any
					questions we’ll create an issue. We appreciate that you are busy so
					we’re not expecting you to spend more than a couple of hours on this,
					but have fun with it.
				</p>
				<p>Regards </p>
				<p>Howard Kitto Chief Technology Office</p>
			</div>
		</Layout>
	);
}

export default About;
