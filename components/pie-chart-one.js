import React, { useState, useEffect, useRef } from "react";
// import * as React from "react";
import * as d3 from "d3";

const drawChart = (chartDivRef, svgRef) => {
	console.log(svgRef);
	console.log(d3);

	const width = 800,
		height = 600,
		radius = 200,
		colors = d3.schemeCategory10;
	console.log(colors);
	console.log(d3.schemeYlOrBr[9]);

	const colorsAll = [...colors, ...d3.schemeSet3];

	console.log(colorsAll);

	const piedata = [
		{
			label: "Saudi Aramco, Saudi Arabia",
			value: 59262,
			percentStr: "4.38% of global total",
		},
		{
			label: "Chevron, US",
			value: 43345,
			percentStr: "3.2% of global total",
		},
		{
			label: "Gazprom, Russia",
			value: 43230,
			percentStr: "3.19% of global total",
		},
		{
			label: "ExxonMobil, US",
			value: 41904,
			percentStr: "3.09% of global total",
		},
		{
			label: "National Iranian Oil Co",
			value: 35658,
			percentStr: "2.63% of global total",
		},
		{
			label: "BP, UK",
			value: 34015,
			percentStr: "2.51% of global total",
		},
		{
			label: "Royal Dutch Shell, Netherlands",
			value: 31948,
			percentStr: "2.36% of global total",
		},
		{
			label: "Coal India, India",
			value: 23124,
			percentStr: "1.71% of global total",
		},
		{
			label: "Pemex, Mexico",
			value: 22645,
			percentStr: "1.67% of global total",
		},
		{
			label: "Petróleos de Venezuela (PDVSA)",
			value: 15745,
			percentStr: "1.16% of global total",
		},
		{
			label: "PetroChina",
			value: 15632,
			percentStr: "1.15% of global total",
		},
		{
			label: "Peabody Energy, US",
			value: 15385,
			percentStr: "1.14% of global total",
		},
		{
			label: "ConocoPhillips, US",
			value: 15229,
			percentStr: "1.12% of global total",
		},
		{
			label: "Abu Dhabi National Oil Company",
			value: 13840,
			percentStr: "1.01% of global total",
		},
		{
			label: "Kuwait Petroleum Corporation, Kuwait",
			value: 13479,
			percentStr: "1% of global total",
		},
		{
			label: "Iraq National Oil Co, Iraq",
			value: 12596,
			percentStr: "0.93% of global total",
		},
		{
			label: "Total SA, France",
			value: 12352,
			percentStr: "0.91% of global total",
		},
		{
			label: "Sonatrach, Algeria",
			value: 12302,
			percentStr: "0.91% of global total",
		},
		{
			label: "BHP Billiton, Australia",
			value: 9802,
			percentStr: "0.72% of global total",
		},
		{
			label: "Petrobras, Brazil",
			value: 8676,
			percentStr: "0.64% of global total",
		},
	];

	function selectArcAnimation(_d) {
		var dist = 20;
		_d.midAngle = (_d.endAngle - _d.startAngle) / 2 + _d.startAngle;
		var x = Math.sin(_d.midAngle) * dist;
		var y = -Math.cos(_d.midAngle) * dist;
		return "translate(" + x + "," + y + ")";
	}

	function onMouseIn(d, i) {
		svg
			.selectAll(".slice")
			.filter(function (_d, _i) {
				return i.index === _i;
			})
			.transition()
			.duration(200)
			.attr("transform", selectArcAnimation);

		svg
			.select(".main-legend")
			.select(".circle")
			.transition()
			.duration(200)
			.attr("opacity", 1)
			.attr("fill", colorsAll[i.index]);

		var b = i.data.label.split(",");
		console.log(b);

		svg
			.select(".main-legend")
			.select(".legend-title")
			.selectAll("tspan")
			.data(b)
			.enter()
			.append("tspan")
			.text(function (d) {
				return d;
			})
			.attr("lengthAdjust", "spacingAndGlyphs")
			.attr("dy", "1em")
			.attr("x", "0");

		svg
			.select(".main-legend")
			.select(".description")
			.text(i.data.percentStr)
			.attr("y", "20");
	}

	function onMouseOut(d, i) {
		console.log(i);
		console.log(d);

		svg
			.select(".main-legend")
			.select(".legend-title")
			.text("")
			.select(getParent)
			.select(".description")
			.text("");

		svg
			.selectAll(".slice")
			.filter(function (_d, _i) {
				return i.index === _i;
			})
			.transition()
			.duration(300)
			.attr("transform", "translate(0,0)");
	}

	function getParent() {
		return this.parentNode;
	}

	const pie = d3.pie().value(function (d) {
		console.log(d.value);
		return d.value;
	});

	const arc = d3.arc().outerRadius(radius).innerRadius(0);

	const chartDiv = d3.select(chartDivRef["current"]);
	const svg = d3.select(svgRef["current"]);

	svg
		.attr("width", width)
		.attr("height", height)

		.append("g")
		.attr("transform", "translate(220, 220)")
		.selectAll("path")
		.data(pie(piedata))
		.enter()
		.append("g")
		.attr("class", "slice");

	const slices = svg
		.selectAll("g.slice")
		.append("path")
		.attr("fill", function (d, i) {
			return colorsAll[i];
		})
		.attr("d", arc)
		.on("mouseenter", onMouseIn)
		.on("mouseout", onMouseOut);

	const labels = svg.append("g").attr("class", "labels");

	var legends = labels
		.selectAll(".legend")
		.data(pie(piedata))
		.enter()
		.append("g")
		.on("mouseenter", onMouseIn)
		.on("mouseout", onMouseOut)
		.attr("class", "legend")
		.append("rect")
		.attr("width", 30)
		.attr("height", 18)
		.attr("fill", function (d, i) {
			return colorsAll[i];
		})
		.attr("x", (d, i) => 460)
		.attr("y", function (d, i) {
			return 23 * (i + 1) - 15;
		})
		.select(getParent)
		.append("text")
		.text(function (d) {
			console.log(d);
			// return "• " + d.data.label;
			return `${d.data.label} : 23.5% of global total`;
		})

		// .attr("fill", function (d, i) {
		// 	return colorsAll[i];
		// })
		.attr("x", (d, i) => 495)
		.attr("y", function (d, i) {
			return 23 * (i + 1);
		})
		.exit();

	const mainLegend = svg
		.append("g")
		.attr("class", "main-legend")
		.attr("transform", "translate(220, 220)")
		.append("circle")
		.attr("class", "border")
		.attr("fill", "white")
		.attr("r", 100)
		.select(getParent)
		.append("circle")
		.attr("class", "circle")
		.attr("fill", "black")
		.attr("opacity", 0)
		.attr("r", 80)
		.select(getParent)
		.append("line")
		.attr("stroke", "red")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0)
		.select(getParent)
		.append("text")
		.attr("class", "legend-title")
		.attr("font-size", "18px")
		.attr("font-family", "Arial")
		.attr("y", -40)
		.attr("text-anchor", "middle")
		.attr("alignment-baseline", 0)
		.attr("fill", "white")
		.select(getParent)
		.append("text")
		.attr("class", "description")
		.attr("font-size", "14px")
		.attr("font-family", "Arial")
		.attr("y", 20)
		.attr("text-anchor", "middle")
		.attr("alignment-baseline", 0)
		.attr("fill", "white");

	return chartDiv;
};

const PieChartOne = () => {
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

export default PieChartOne;
