import React, { Component } from "react";
import Term from "./term";
import "./termsPage.css"

export default class TermsPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.terms.map(term => (
					<div className="btwnterms">
					<Term
						term={term.term}
						id={term.id}
						handleChange={this.props.handleInput}
						deleteAction={this.props.handleTermDelete}
						selectAction={this.props.handleTermSelect}
						key={term.id}
					/>
					</div>
				))}
				<button
					className="btn btn-primary mb-2"
					onClick={this.props.handleTermAdd}
				>
					Add term
				</button>
			</div>
		);
	}
}
