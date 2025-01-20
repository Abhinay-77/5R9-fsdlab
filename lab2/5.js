function updateProductInfo(product){
    let newObj={...product, discount: 10, inStock: true};
    delete newObj.price;
    delete newObj.category;
    console.log(newObj);

}

const product = {id: 101, name: 'Laptop', price: 1000, category:'Electronics'}
console.log(product);
updateProductInfo(product);
