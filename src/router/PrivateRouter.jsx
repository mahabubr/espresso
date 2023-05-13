import { useContext } from "react";
import { AUTH_CONTEXT } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
	const { user, loading } = useContext(AUTH_CONTEXT);

	const location = useLocation();

	if (loading) {
		return (
			<div className=' flex justify-center items-center'>
				<div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
			</div>
		);
	}

	if (user) {
		return children;
	}

	return (
		<Navigate
			to='/login'
			state={{ from: location }}
			replace
		/>
	);
};

export default PrivateRouter;
