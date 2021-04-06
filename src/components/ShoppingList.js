import Product from "./Product"

const ShoppingList = (props) => {
  const { shopping, removeFromShoppingList } = props
  return (
    <>
      <h2 class="mb-3 h4">Produits à acheter (1):</h2>
      <ol class="list-group mb-3 shadow">
        {shopping.map((product) => {
          return (
            <li key={product} class="list-group-item">
              <Product
                product={product}
                removeFromShoppingList={removeFromShoppingList}
              />
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default ShoppingList
