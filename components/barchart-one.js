import React, { useState, useEffect, useRef } from "react";
// import * as React from "react";
import * as d3 from "d3";
import utilStyles from "../styles/utils.module.css";

const drawChart = (titlesDivRef, valuesDivRef, data) => {
	// console.log(titlesDivRef);
	// console.log(valuesDivRef);
	console.log(data);

	var duration_time = 3000;

	console.log(Array.from(data, (x) => x.value));

	//Create list containing only field_goal_attempts
	var values_list = Array.from(data, (x) => x.value);

	var counts_list = Array.from(data, (x) => x.count);

	// console.log(data);

	// console.log(values_list);

	var x = d3
		.scaleLinear()
		.domain([0, d3.max(values_list)])
		.range([0, 420]);

	// var xcount = d3
	// 	.scaleLinear()
	// 	.domain([0, d3.max(counts_list)])
	// 	.range([0, 220]);

	const titlesDiv = d3.select(titlesDivRef["current"]);

	titlesDiv
		.selectAll("div")
		.data(data)
		.enter()
		.append("div")

		.text(function (d) {
			return d.id;
		});

	const valuesDiv = d3.select(valuesDivRef["current"]);

	valuesDiv
		.selectAll("div")
		.data(data)
		.enter()
		.append("div")
		.attr("class", "bar")
		.transition()
		.duration(duration_time)
		.style("width", function (d) {
			return x(parseInt(d.value)) + "px";
		})
		.style("background-color", "#9bffe6")
		// .style("background", "linear-gradient(to right, #5d24fc 0%, #9bffe6 100%)")
		.text(function (d) {
			return d.value;
		});

	// const data = [12, 5, 6, 6, 9, 10];
	// const h = 220;
	// const w = 650;
	// const svg = d3.select(svgRef["current"]);

	// console.log(svgRef);

	// svg
	// 	.attr("width", w)
	// 	.attr("height", h)
	// 	.style("margin-top", 50)
	// 	.style("margin-left", 50);

	// svg
	// 	.selectAll("rect")
	// 	.data(data)
	// 	.enter()
	// 	.append("rect")
	// 	.attr("x", (d, i) => i * 40)
	// 	.attr("y", (d, i) => h - 10 * d)
	// 	.attr("width", 20)
	// 	.attr("height", (d, i) => d * 10)
	// 	.attr("fill", "steelblue");
	// // Create scale
	// var scale = d3
	// 	.scaleLinear()
	// 	.domain([d3.min(data), d3.max(data)])
	// 	.range([0, w - 100]);

	// // Add scales to axis
	// var x_axis = d3.axisBottom().scale(scale);

	// //Append group and insert axis
	// svg.append("g").call(x_axis);

	// return svg;
};

const BarChartOne = ({ dataSource }) => {
	const titlesDiv = useRef(null);
	const valuesDiv = useRef(null);

	// const [dataSource] = dataSource;

	console.log(dataSource);

	React.useEffect(() => {
		drawChart(titlesDiv, valuesDiv, dataSource);
	}, [dataSource]);
	// React.useEffect(() => {
	// 	drawChart(titlesDiv, valuesDiv, dataSource);
	// }, []);

	return (
		<div className={`container ${utilStyles.test}`}>
			<div className={`chartTitles`} ref={titlesDiv}></div>
			<div className={`chartValues`} ref={valuesDiv}></div>
			<style jsx>{`
				.container {
					outline: 10px solid green;
					display: flex;
					width: 100%;
				}
				.chartTitles {
				}
				.chartTitles > div {
				}

				.chartValues {
					text-align: right;
					padding: 3px;
					margin: 1px;
					outline: 1px solid yellow;
				}
				.bar {
					font: 10px sans-serif;
					background-color: steelblue;
					text-align: right;
					padding: 3px;
					margin: 1px;
					color: white;
					outline: 1px solid yellow;
				}
			`}</style>
		</div>
	);
};

export default BarChartOne;
