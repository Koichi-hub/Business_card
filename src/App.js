import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.less";
import PageAboutMe from "./pages/PageAboutMe";
import PageProjects from "./pages/PageProjects";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/Business_card" element={<PageAboutMe />} />
          <Route path="/Business_card/projects" element={<PageProjects />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
