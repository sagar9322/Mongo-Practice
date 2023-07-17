const Product = require('../models/app-product');
const mongoDb = require('mongodb');


exports.addProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.image;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, price, description, imageUrl, null,
      req.user._id);
    product
      .save()
      .then(result => {
        console.log(result);
        console.log('Created Product');
      })
      .catch(err => {
        console.log(err);
      });
};

exports.editProduct = (req, res, next) => {
    const prodId = req.params.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.image;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const product = new Product(updatedTitle, updatedPrice, updatedDescription, updatedImageUrl, new mongoDb.ObjectId(prodId));
    product.update()
        .then((result) => {
            console.log(`product updated.`);
        })
        .catch((error) => {
            console.error(error);
        });
}

// exports.addToCart = (req, res, next) => {
//     const prodId = req.params.productId;
//   let fetchedCart;
//   let newQuantity = 1;
//   req.user
//     .getCart()
//     .then(cart => {
//       fetchedCart = cart;
//       return cart.getProducts({ where: { id: prodId } });
//     })
//     .then(products => {
//         console.log(products, 'this is')
//       let product;
//       if (products.length > 0) {
//         product = products[0];
//       }

//       if (product) {
//         const oldQuantity = product.cartItem.quantity;
//         newQuantity = oldQuantity + 1;
//         return product;
//       }
//       return Product.findByPk(prodId);
//     })
//     .then(product => {
//       return fetchedCart.addProduct(product, {
//         through: { quantity: newQuantity }
//       });
//     })
//     .then(() => {
//       console.log('done');
//     })
//     .catch(err => console.log(err));
// }


// exports.orderPost = (req, res, next)=> {
//   let fetchedCart;
//   req.user
//     .getCart()
//     .then(cart => {
//       fetchedCart = cart;
//       return cart.getProducts();
//     })
//     .then(products => {
//       return req.user
//         .createOrder()
//         .then(order => {
//           return order.addProducts(
//             products.map(product => {
//               product.orderItem = { quantity: product.cartItem.quantity };
//               return product;
//             })
//           );
//         })
//         .catch(err => console.log(err));
//     })
//     .then(result => {
//       return fetchedCart.setProducts(null);
//     })
//     .then(result => {
//       console.log('orderd');
//     })
//     .catch(err => console.log(err));
// }