import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.less";
import PageAboutMe from "./pages/PageAboutMe";
import PageProjects from "./pages/PageProjects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'aboutme',
    };
  }
  onChangeActiveKey = (activeKey) => {
    this.setState({
      activeKey,
    });
  };
  render() {
    return (
      <Router>
        <Header onChangeActiveKey={this.onChangeActiveKey} activeKey={this.state.activeKey} />
        <Routes>
          <Route path="/" element={<PageAboutMe onChangeActiveKey={this.onChangeActiveKey} />} />
          <Route path="/projects" element={<PageProjects />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
