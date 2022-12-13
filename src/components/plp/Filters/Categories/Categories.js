import './Categories.css';
let products = [];

function filterByCategory() {
    if (products.length === 0) {
        products = [...document.querySelectorAll('.plp-products_product')];
    }

    console.log(products);

    let filters = [];
    
    [...document.querySelectorAll('input[type=checkbox]')].forEach(item => {
        if (item.checked) {
            filters.push(item.parentNode.innerText);
        }
    });

    console.log(filters);

    if (filters.length !== 0) {
        let result = [];

        products.forEach(product => {
            if (filters.indexOf(product.getAttribute('category')) !== -1) {
                result.push(product);      
            }
        });

        document.getElementsByClassName('plp-content_products')[0].innerHTML = "";

        result.forEach(item => {
            document.getElementsByClassName('plp-content_products')[0].appendChild(item);
        });
    } else {
        products.forEach(item => {
            document.getElementsByClassName('plp-content_products')[0].appendChild(item);
        })
    }
}

export default function Categories(props) {
    const categories = props.categories;

    const categoriesFilters = categories.map(category => {
        return (
            <div key={category._id} className="filters-categories_category">
                <label htmlFor={category._id}>
                    <input type="checkbox" name="category" id={category._id} form="filters_form" onChange={filterByCategory}/>
                    {category.title}
                </label>
            </div>
        );
    });

    return (
        <>
            <h2 className="categories-header">Категории</h2>
            <div className="filters-categories">
                {categoriesFilters}
			</div>
        </>
    );
}