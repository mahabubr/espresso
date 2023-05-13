import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div
			className='hero h-screen mt-5'
			style={{
				backgroundImage: `url("https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")`,
			}}>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold'>Espressso</h1>
					<p className='mb-5'>
						Cafés are social establishments that serve various types of coffee,
						tea, pastries, and other light refreshments. They are often designed
						to provide a relaxing and comfortable atmosphere where people can
						meet, work, or simply enjoy a good cup of coffee.
					</p>
					<Link to='menu'>
						<button className='btn btn-accent'>Explore More</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
