import "../CSS/App.css"


export default function Products({ products, incrementProductCount, decrementProductCount }){
    return <div className="product-cart-container">
        <h2 className="heading">Products</h2>
        {
            products.map((product) => {
                return <div key={product.id} className="items">
                    <span>{product.name }</span>
                    <span>{product.price}</span>
                    <span className="buttons">
                        <span className="add-subtract" onClick={() => incrementProductCount(product.id)} >+</span>
                        <span>{product.number}</span>
                        <span className="add-subtract" onClick={() => decrementProductCount(product.id)} >-</span>
                    </span>
                </div>
            })
        }
    </div>
}