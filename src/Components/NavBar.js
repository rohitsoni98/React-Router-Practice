
import { NavLink } from "react-router-dom"

const NavBar = () => {

	return (
		<div className="nav">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/users">Users</NavLink>
		</div>
	)
}

export default NavBar;