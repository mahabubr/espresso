import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../config/firebase.config";

const Header = () => {
	const { user } = useContext(AUTH_CONTEXT);
	const navigate = useNavigate();

	return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
						<li>
							<a>Item 1</a>
						</li>
					</ul>
				</div>
				<a className='btn btn-ghost normal-case text-xl'>Espresso</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link to='/'>home</Link>
					</li>
					<li>
						<Link to='/menu'>Menu</Link>
					</li>
				</ul>
			</div>
			<div className='navbar-end'>
				{user && user.uid ? (
					<button
						onClick={() => {
							signOut(auth).then(() => {
								alert("Sign Out Successful");
							});
							navigate("/");
							window.location.reload();
						}}
						className='btn btn-outline'>
						Logout
					</button>
				) : (
					<Link
						to='/login'
						className='btn btn-outline'>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
