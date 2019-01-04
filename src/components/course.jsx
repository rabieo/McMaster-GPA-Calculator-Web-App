import React, { Component } from "react";

export default class Course extends Component {

	render() {
		return (
			<div
				className="form-row align-items-center mx-auto"
				style={{ width: 550 }}
			>
				<div className="col">
					<input
						value={this.props.course}
						name={this.props.courseName}
						onChange={this.props.handleChange}
						id={this.props.id}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="col">
					<input
						value={this.props.cridits}
						name={this.props.criditsName}
						onChange={this.props.handleChange}
						id={this.props.id}
						type="number"
						className="form-control"
					/>
				</div>
				<div className="col">
					<input
						value={this.props.gpa}
						name={this.props.gpaName}
						onChange={this.props.handleChange}
						id={this.props.id}
						type="number"
						className="form-control"
					/>
				</div>
				<div className="col">
					<button
						type="submit"
						className="btn btn-danger mb-2"
						onClick={this.props.action}
						id={this.props.id}
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
}
