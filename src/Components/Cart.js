import "../CSS/App.css"

export default function Cart({ products }){

    function isCartEmpty(){
        for(let i = 0; i < products.length; i++){
            if(products[i].number > 0){
                return false
            }
        }
        return true
    }

    function calculateTotal(){
        let total = 0
        products.forEach(product => {
            total += product.price * product.number
        });
        return total
    }

    return <div className="product-cart-container">
        <h2 className="heading">Cart</h2>
        {
            isCartEmpty() ?
            
            <p className="items">Cart is empty</p>

            :

            products.map((product) => {
                return product.number > 0 && <div key={product.id} className="items">
                    <span>{product.name}</span>
                    <span> {product.number} * {product.price}</span>  
                </div>
            })
        }

        <div className="items total"><span>Total:</span> <span>{calculateTotal()}</span></div>
    </div>
}