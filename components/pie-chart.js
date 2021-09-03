import React, { useState, useEffect, useRef } from "react";
// import * as React from "react";
import * as d3 from "d3";

const drawChart = (chartDivRef, svgRef) => {
	console.log(svgRef);
	console.log(d3);

	const width = 400,
		height = 400,
		radius = 200,
		colors = d3.schemeCategory10;

	const piedata = [
		{
			label: "Bob",
			value: 150,
		},
		{
			label: "Gerald",
			value: 50,
		},
		{
			label: "Jennifer",
			value: 50,
		},
		{
			label: "Lorenzo",
			value: 50,
		},
		{
			label: "Hillary",
			value: 50,
		},
		{
			label: "Jane",
			value: 50,
		},
	];

	const pie = d3.pie().value(function (d) {
		return d.value;
	});

	const arc = d3.arc().outerRadius(radius);

	const chartDiv = d3.select(chartDivRef["current"]);
	const svg = d3.select(svgRef["current"]);

	svg
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr(
			"transform",
			"translate(" + (width - radius) + ", " + (height - radius) + ")"
		)
		.selectAll("path")
		.data(pie(piedata))
		.enter()
		.append("g")
		.attr("class", "slice");

	const slices = svg
		.selectAll("g.slice")
		.append("path")
		.attr("fill", function (d, i) {
			return "red";
		})
		.attr("d", arc)
		.on("mouseover", function () {
			d3.select(this).style("opacity", 0.8);
		})
		.on("mouseout", function () {
			d3.select(this).style("opacity", 1);
		});

	const text = svg
		.selectAll("g.slice")
		.append("text")
		.text(function (d) {
			return d.data.label;
		}) //slice = d, so we the slice's data.
		.attr("text-anchor", "middle")
		.attr("fill", "white")
		.attr("transform", function (d) {
			d.innerRadius = 0;
			d.outerRadius = radius;
			return "translate(" + arc.centroid(d) + ")"; //puts text at center of slice
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

	return chartDiv;
};

const PieChart = () => {
	const chart = useRef(null);
	const svg = useRef(null);

	React.useEffect(() => {
		drawChart(chart, svg);
	}, []);

	return (
		<div className="chart" ref={chart}>
			<svg ref={svg} />
		</div>
	);
};

export default PieChart;
