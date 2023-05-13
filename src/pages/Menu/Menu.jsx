import { useEffect, useState } from "react";

const Menu = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("cafe.json")
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	return (
		<div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
			{items.map((item, i) => (
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
						<p className='text-xl font-medium text-pink-500'>$ {item.price}</p>
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
	);
};

export default Menu;
