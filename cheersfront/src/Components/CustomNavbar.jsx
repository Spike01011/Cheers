import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddIdea from "./AddIdea";
import GetDetails from "./GetDetails";
import AddPhoto from "./AddPhoto"
import LogInComponent from "../pages/LogInPage/LogInComponent";
import SignUpComponent from "../pages/SignUpPage/SignUpComponent";
import About from "./About";
import Contact from "./Contact";

export default class CustomNavbar extends Component {
	render() {
		return (
			<div>
				<Navbar bg="dark" variant={"dark"} expand="lg">
					<Container>
						<Navbar.Brand as={Link} to={"/"}>
							React-Bootstrap
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link as={Link} to={"/home"}>
									Home
								</Nav.Link>
								<Nav.Link as={Link} to={"/about"}>
									About
								</Nav.Link>
								<Nav.Link as={Link} to={"/contact"}>
									Contact
								</Nav.Link>
								<Nav.Link as={Link} to={"/add-idea"}>
									Add Idea
								</Nav.Link>
								<NavDropdown
									title="Dropdown"
									id="basic-nav-dropdown"
								>
									<NavDropdown.Item href="#action/3.1">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link as={Link} to={"/SignUp"}>
									SignUp
								</Nav.Link>
								<Nav.Link as={Link} to={"/LogIn"}>
									LogIn
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/home" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/LogIn" element={<LogInComponent/>}/>
					<Route path="/SignUp" element={<SignUpComponent/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/add-idea" element={<AddIdea/>}/>
					<Route path="/get-details/:id" element={<GetDetails/>}/>
					<Route path="/add-photo/:id" element={<AddPhoto/>}/>
				</Routes>
			</div>
		);
	}
}
