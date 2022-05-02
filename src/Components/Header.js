import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
// To use routing functionalities
import { Link } from "react-router-dom";
import "../index.css";

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar style={{
                        display:'flex',
                        flexDirection:'row',
                        margin:'20px',
                        alignItems:'center',
                        
                        justifyContent:'center',
                    }}>
					
						<a>MERN Stack CRUD Operations</a>
				
					<Nav style={{
                        display:'flex',
                        flexDirection:'row',
                       
            
                    }}>
						<NavItem style={{marginRight:'20px',
                        marginLeft:'20px',
                    }}>
							<Link to="/">Home</Link>
						</NavItem>
						<NavItem style={{ marginRight:'20px',}}>
							<Link to="/addemployee">Add New Employee</Link>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
export default Header;
