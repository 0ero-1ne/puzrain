import './Categories.css';

export default function Categories(props) {
    const categories = props.categories;

    const categoriesFilters = categories.map(category => {
        return (
            <div key={category._id} className="filters-categories_category">
                <label htmlFor={category._id}>
                    <input type="checkbox" name="category" id={category._id} form="filters_form"/>
                    {category.title}
                </label>
            </div>
        );
    });

    return (
        <>
            <h2 className="categories-header">Категории &#8595;</h2>
            <div className="filters-categories">
                {categoriesFilters}
			</div>
        </>
    );
}