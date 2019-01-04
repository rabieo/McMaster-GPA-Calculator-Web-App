import React, { Component } from "react";
import "./App.css";
import TermPage from "./components/termPage";
import TermsPage from "./components/termsPage";
import TermGPA from "./components/termGPA";
import FullGPA from "./components/fullGPA";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTerm: 0,
      terms: [
        {
          term: "",
          id: 0,
          courses: [
            { course: "", cridits: "", gpa: "", id: 0 }
          ]
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="topnav border-bottom">
          <h2>McMaster GPA Calculator</h2>
        </div>
        <div className="sidenav border-right">
        <h3>Terms</h3>
          <TermsPage
            handleInput={this.handleTermInput}
            handleTermDelete={this.handleTermDelete}
            handleTermSelect={this.handleTermSelect}
            handleTermAdd={this.handleTermAdd}
            terms={this.state.terms}
          />
          <div className="fullgpa">
          <FullGPA terms={this.state.terms} />
          </div>
        </div>
        <div className="mainsss">
          <TermPage
            handleInput={this.handleCourseInput}
            handleCourseDelete={this.handleCourseDelete}
            handleCourseAdd={this.handleCourseAdd}
            courses={this.state.terms[this.state.currentTerm].courses}
            title={this.state.terms[this.state.currentTerm].term}
          />
          <div className="termgpa">
          <TermGPA courses={this.state.terms[this.state.currentTerm].courses} />
          </div>
        </div>
      </div>
    );
  }

  handleCourseAdd = () => {
    const terms = [...this.state.terms];
    const courses = terms[this.state.currentTerm].courses;
    const id = courses.length;
    courses.push({ course: "", cridits: "", gpa: "", id: id });
    this.setState({ terms });
    console.log(this.state);
  };

  handleCourseDelete = e => {
    console.log(this.state);
    console.log(e.target);
    let ide = e.target.id;
    let terms = [...this.state.terms];
    console.log(terms);
    let courses = terms[this.state.currentTerm].courses.filter(
      c => c.id != ide
    );
    console.log(terms);
    for (let j = 0; j < courses.length; j++) {
      courses[j].id = j;
    }
    terms[this.state.currentTerm].courses = courses;
    this.setState({ terms: terms });
    console.log(this.state);
  };

  handleCourseInput = e => {
    console.log(e.target);
    let value = e.target.value;
    let id = e.target.id;
    let name = e.target.name;
    const terms = [...this.state.terms];
    const courses = terms[this.state.currentTerm].courses;
    courses[id][name] = value;
    console.log(this.state);
    this.setState({ terms });
  };

  handleTermDelete = e => {
    console.log(e.target);
    let id = e.target.id;
    if (this.state.currentTerm == id && id != 0) {
      this.setState({ currentTerm: id - 1 });
    }
    if (id != 0) {
      const terms = this.state.terms.filter(c => c.id != id);
      for (let j = 0; j < terms.length; j++) {
        terms[j].id = j;
      }
      this.setState({ terms });
      console.log(this.state);
    } else {
      return;
    }
  };

  handleTermSelect = e => {
    let id = e.target.id;
    this.setState({ currentTerm: id });
  };

  handleTermInput = e => {
    console.log(e.target);
    let value = e.target.value;
    let id = e.target.id;
    const terms = [...this.state.terms];
    terms[id].term = value;
    console.log(this.state);
    this.setState({ terms });
  };

  handleTermAdd = () => {
    const terms = [...this.state.terms];
    const id = terms.length;
    terms.push({
      term: "",
      id: id,
      courses: [{ course: "", cridits: "", gpa: "", id: 0 }]
    });
    this.setState({ terms });
    console.log(this.state);
  };
}

export default App;
