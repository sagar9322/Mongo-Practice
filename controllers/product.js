const Product = require('../models/app-product');

exports.getProduct = (req, res, next) => {
    Product.fetchAll().then((product) => {
        res.send(JSON.stringify(product));
    });
};

exports.showDetails = (req, res, next)=> {
  const productId = req.params.productId;
  Product.findById(productId)
    .then(product => {
      res.status(200).json({product: product})
    })
    .catch(err => console.log(err));
}
exports.deleteProductDetail = (req, res, next) => {
    const prodId = req.params.productId;
    Product.delete(prodId)
    .then(result => {
      console.log("deleted Successfully");
    })
    .catch(err => console.log(err));
}

// exports.getCart = (req, res, next) => {
//     req.user
//     .getCart()
//     .then(cart => {
//       return cart
//         .getProducts()
//         .then(product => {
//             res.send(JSON.stringify(product));
//         })
//         .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));


//     req.user.getCart().then()
// }


// exports.deleteCartItem = (req, res, next) => {
//     const prodId = req.params.productId;
//   req.user
//     .getCart()
//     .then(cart => {
//       return cart.getProducts({ where: { id: prodId } });
//     })
//     .then(products => {
//       const product = products[0];
//       return product.cartItem.destroy();
//     })
//     .then(result => {
//       console.log("deleted");
//     })
//     .catch(err => console.log(err));
// }

// exports.getOrderItem = (req, res, next) => {
//   req.user
//     .getOrders({include: ['products']})
//     .then(orders => {
//       res.send(JSON.stringify(orders));
//       })
//     .catch(err => console.log(err));
// }