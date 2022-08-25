import "./categoryButtons.scss";

interface CategoryButtonsProps {
	categories: string[];
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ categories }) => {
	return (
		<div className="categories">
			{categories.map((category) => {
				return <button key={category}>{category}</button>;
			})}
		</div>
	);
};

export default CategoryButtons;
