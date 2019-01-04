import React, { Component } from "react";

export default class Term extends Component {
	render() {
		return (
			<div
				className="form-row align-items-center mx-auto"
				style={{ width: 400 }}
			>
				<div className="col-6">
					<input
						value={this.props.term}
						onChange={this.props.handleChange}
						id={this.props.id}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="col-sm-3">
					<button
						className="btn btn-danger mb-2"
						id={this.props.id}
						onClick={this.props.deleteAction}
					>
						Delete
					</button>
				</div>
				<div className="col-sm-3">
					<button
						className="btn btn-primary mb-2"
						id={this.props.id}
						onClick={this.props.selectAction}
					>
						Select
					</button>
				</div>
			</div>
		);
	}
}
