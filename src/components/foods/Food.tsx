interface FoodProps {
	food: {
		type: string;
		name: string;
		price: number;
		image: string;
	};
}

const Food: React.FC<FoodProps> = ({ food }) => {
	return (
		<div>
			<p>{food.name}</p>
		</div>
	);
};

export default Food;
