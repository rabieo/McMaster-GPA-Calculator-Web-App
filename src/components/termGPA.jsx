import React, { Component } from "react";

export default class TermGPA extends Component {
	constructor(props) {
		super(props);
	}

	termCalcGPA = () => {
		let courses = [...this.props.courses];
		let totalgpa = 0;
		let totalcridits = 0;
		for (var i = 0; i < courses.length; i++) {
			if (courses[i].gpa !== "" && courses[i].cridits !== "") {
				totalgpa += ((courses[i].gpa)*(courses[i].cridits));
				console.log(totalgpa);
				totalcridits += Number(courses[i].cridits);
				console.log(totalcridits);
			}
		}
		let GPA = (totalgpa / totalcridits).toFixed(2);
		if (isNaN(GPA)) {return "0.00"}
		else {return GPA}
	};

	render() {
		return (
			<div>
				<h1>Term GPA: {this.termCalcGPA()}</h1>
			</div>
		);
	}

}
