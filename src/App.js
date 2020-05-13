import React from "react";
import { useState, useEffect } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/muhammadusmanmushtaq")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  if (!user) return <div />;
  {
  }

  return (
    <div className="demo-big-content">
      <Layout>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Header
          transparent
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "24px",
              }}
              to="/"
            >
              My Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <NavLink
              to="/projects"
              activeStyle={{
                fontWeight: "bold",
                color: "#0072bc",
              }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: "bold",
                color: "#0072bc",
              }}
            >
              Contact
            </NavLink>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "#000" }} to="/">
              My portfolio
            </Link>
          }
        >
          <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main user={user}></Main>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
