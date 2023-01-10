import React, {Component} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, Route, Routes} from "react-router-dom";
import Home from "../Home";
import AddIdea from "../../pages/AddIdea/AddIdea";
import GetDetails from "../GetDetails";
import AddPhoto from "../AddPhoto";
import Logout from "../Logout";
import LogInComponent from "../../pages/LogInPage/LogInComponent";
import SignUpComponent from "../../pages/SignUpPage/SignUpComponent";
import AddCategory from "../AddCategory";
import AccountPage from "../AccountPage";
import PaymentWrapper from "../../pages/PaymentPage/PaymentWrapper";
import PaymentComponent from "../../pages/PaymentPage/PaymentComponent";
import AdminPage from "../AdminPage";
import EditIdea from "../EditIdea";
import GetIdea from "../../pages/Home/GetIdea";
import HomeTest from "../../pages/Home/HomeTest";
import About from "../About";
import Contact from "../Contact";

// Nu clasa
export default class CustomNavbar extends Component {
	render() {
		window.addEventListener("storage", () => {
			this.forceUpdate();
		})

		function ShowAdminPage() {
			if (localStorage.getItem("isAdmin") === "true") {
				return (
					<Nav.Link as={Link} to={"/adminPage"}>
						Admin Page
					</Nav.Link>
				)
			}
		}

		function AccountDropDown() {
			if (localStorage.getItem("token") != null) {
				return (
					<NavDropdown
						title={localStorage.getItem("user")}
						id="account-dropdown"
					>
						<NavDropdown.Item href="/account-page">
							Account Page
						</NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item href="/logout">
							Log Out
						</NavDropdown.Item>
					</NavDropdown>
				)
			} else {
				return (
					<NavDropdown
						title="Account"
						id="account-dropdown"
					>
						<NavDropdown.Item as={Link} to={'/login'}>
							Log In
						</NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item as={Link} to={'/register'}>
							Register
						</NavDropdown.Item>
					</NavDropdown>
				)
			}
		}

		return (
			<div>
				<Navbar bg="dark" variant={"dark"} expand="lg">
					<Container>
						<Navbar.Brand as={Link} to={"/"}>
							Cheers 🍻
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav"/>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link as={Link} to={"/home"}>
									Home
								</Nav.Link>
								<Nav.Link as={Link} to={"/HomeTest"}>
									HomeTest
								</Nav.Link>
								<Nav.Link as={Link} to={"/about"}>
									About
								</Nav.Link>
								<Nav.Link as={Link} to={"/contact"}>
									Contact
								</Nav.Link>
								<NavDropdown
									title="Add"
									id="basic-nav-dropdown">
									<NavDropdown.Item href="/add-idea">
										Idea
									</NavDropdown.Item>
									<NavDropdown.Item href="/add-category">
										Category
									</NavDropdown.Item>
								</NavDropdown>
								{AccountDropDown()}
								{ShowAdminPage()}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/home" element={<Home/>}/>
					<Route path="/HomeTest" element={<HomeTest/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/add-idea" element={<AddIdea/>}/>
					<Route path="/get-details/:id" element={<GetDetails/>}/>
					<Route path="/add-photo/:id" element={<AddPhoto/>}/>
					<Route path={"/add-category"} element={<AddCategory/>}/>
					<Route path={"/afterContinue"} element={<PaymentWrapper/>}/>
					<Route path={"/payment/:id"} element={<PaymentComponent/>}/>
					<Route path={"/register"} element={<SignUpComponent/>}/>
					<Route path={"/login"} element={<LogInComponent/>}/>
					<Route path={"/logout"} element={<Logout/>}/>
					<Route path={"/account-page"} element={<AccountPage/>}/>
					<Route path={"/adminPage"} element={<AdminPage/>}/>
					<Route path={"/edit-idea/:id"} element={<EditIdea/>}/>
				</Routes>
			</div>
		);
	}
}
