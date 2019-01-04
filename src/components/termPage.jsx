import React, { Component } from "react";
import Course from "./course";
import "./termPage.css"

export default class TermPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<div
					className="form-row align-items-center mx-auto"
					style={{ width: 550 }}
				>
					<div className="col">
						<h4>Course</h4>
					</div>
					<div className="col">
						<h4 />
					</div>
					<div className="col">
						<h4>Cridits</h4>
					</div>
					<div className="col">
						<h4 />
					</div>
					<div className="col">
						<h4>GPA</h4>
					</div>
					<div className="col">
						<h4 />
					</div>
					<div className="col">
						<h4 />
					</div>
					<div className="col">
						<h4 />
					</div>
				</div>
				{this.props.courses.map(course => (
					<div className = "btwncourses">
					<Course
						course={course.course}
						courseName={"course"}
						cridits={course.cridits}
						criditsName={"cridits"}
						gpa={course.gpa}
						gpaName={"gpa"}
						handleChange={this.props.handleInput}
						action={this.props.handleCourseDelete}
						key={course.id}
						id={course.id}
					/>
					</div>
				))}
				<button
					className="btn btn-primary mb-2"
					onClick={this.props.handleCourseAdd}
				>
					Add course
				</button>
			</div>
		);
	}

}
