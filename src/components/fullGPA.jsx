import React, { Component } from "react";

export default class FullGPA extends Component {
	constructor(props) {
		super(props);
	}

	fullCalcGPA = () => {
		let terms = [...this.props.terms];
		console.log(terms);
		let totalgpa = 0;
		let totalcridits = 0;
		for (var i = 0; i < terms.length; i++) {
			for (var j = 0; j < terms[i].courses.length; j++) {
				if (
					terms[i].courses[j].gpa !== "" &&
					terms[i].courses[j].cridits !== ""
				) {
					totalgpa +=
						terms[i].courses[j].gpa * terms[i].courses[j].cridits;
					console.log(totalgpa);
					totalcridits += Number(terms[i].courses[j].cridits);
					console.log(totalcridits);
				}
			}
		}
		let GPA = (totalgpa / totalcridits).toFixed(2);
		if (isNaN(GPA)) {
			return "0.00";
		} else {
			return GPA;
		}
	};

	render() {
		return (
			<div>
				<h1>GPA: {this.fullCalcGPA()}</h1>
			</div>
		);
	}
}
