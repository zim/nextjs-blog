import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import utilStyles from "../styles/utils.module.css";

const drawChart = (titlesDivRef, valuesDivRef, data) => {
	var duration_time = 3000;
	var values_list = Array.from(data, (x) => x.value);

	var counts_list = Array.from(data, (x) => x.count);

	var x = d3
		.scaleLinear()
		.domain([0, d3.max(values_list)])
		.range([0, 420]);

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
};

const BarChartOne = ({ dataSource }) => {
	const titlesDiv = useRef(null);
	const valuesDiv = useRef(null);

	React.useEffect(() => {
		drawChart(titlesDiv, valuesDiv, dataSource);
	}, [dataSource]);

	return (
		<div className={`container ${utilStyles.test}`}>
			<div className={`chartTitles`} ref={titlesDiv}></div>
			<div className={`chartValues`} ref={valuesDiv}></div>
			<style jsx>{`
				.container {
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
				}
				.bar {
					font: 10px sans-serif;
					background-color: steelblue;
					text-align: right;
					padding: 3px;
					margin: 1px;
					color: white;
				}
			`}</style>
		</div>
	);
};

export default BarChartOne;
