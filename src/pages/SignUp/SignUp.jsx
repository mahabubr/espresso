import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider";

const SignUp = () => {
	const { userSignUp, googleSignIn } = useContext(AUTH_CONTEXT);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		userSignUp(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				alert("Your Account Created");
				navigate("/");
			})
			.catch((e) => alert(e.message));
	};

	const handleGoogle = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				alert("Your Account Created");
				navigate("/");
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className='my-20'>
			<div className='my-20'>
				<div className='hero '>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<div className='card flex-shrink-0 w-full shadow-2xl bg-base-100'>
							<form
								onSubmit={handleSubmit}
								className='card-body'>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Email</span>
									</label>
									<input
										name='email'
										type='email'
										placeholder='email'
										className='input input-bordered'
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Password</span>
									</label>
									<input
										name='password'
										type='password'
										placeholder='password'
										className='input input-bordered'
									/>
									<label className='label'>
										<a
											href='#'
											className='label-text-alt link link-hover'>
											Forgot password?
										</a>
									</label>
								</div>
								<div className='form-control mt-6'>
									<button className='btn btn-primary'>Sign Up</button>
								</div>
								<p className='mt-2 text-sm text-center '>
									Create an account ?{" "}
									<Link
										to='/Login'
										className='font-bold text-sky-700'>
										Login
									</Link>
								</p>
								<div className='form-control mt-6'>
									<button
										onClick={handleGoogle}
										className='btn'>
										Google Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
