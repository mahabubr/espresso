import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeMenu = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("cafe.json")
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	return (
		<div className='my-20'>
			<h2 className='text-2xl font-bold text-blue-500 text-center'>Menu</h2>
			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{items.slice(0, 3).map((item, i) => (
					<div
						key={i}
						className='card card-compact bg-base-100 shadow-xl'>
						<figure>
							<img
								className='h-56 object-cover w-full'
								src={item.image}
								alt='Shoes'
							/>
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>{item.name}</h2>
							<p className='text-xl font-medium text-pink-500'>
								$ {item.price}
							</p>
							<p className='text-gray-500'>{item.description}</p>
							<div className='card-actions mt-5'>
								<button
									onClick={() => alert("Developer Now Sleeping")}
									className='btn btn-primary w-full'>
									Buy Now
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<Link
				to='/menu'
				className='flex justify-center'>
				<button className='btn mt-10'>See More</button>
			</Link>
		</div>
	);
};

export default HomeMenu;
