import React, { Component } from 'react';

export class ProductList extends Component {
  state = {
    products: [
      { id: 1, name: 'oranges', cost: 20 },
      { id: 2, name: 'mango', cost: 30 },
      { id: 3, name: 'banana', cost: 10 },
      // Add more products as needed
    ],
    cart: [],
  };

  handleAddClick = (productId) => {
    const selectedProduct = this.state.products.find(product => product.id === productId);
    if (selectedProduct) {
      this.setState(prevState => ({
        cart: [...prevState.cart, selectedProduct],
      }));
      console.log(' Product with ID ${productId} added to the cart ');
    }
  };

  render() {
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.cost}
              <button onClick={() => this.handleAddClick(product.id)}>Add to cart</button>
            </li>
          ))}
        </ul>
        <h3>Shopping cart</h3>
        <ul>
          {this.state.cart.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} - ${cartItem.cost}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
