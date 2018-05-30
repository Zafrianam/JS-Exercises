var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
//a)--------------------    
var newItem= {
    name: 'watch',
    price: 64,
    quantity: 1
};

function addItem(newItem){
    cart.push(newItem);
}
addItem(newItem);
//end-------------------

//b)-------------------
function compare(a, b){
    return a.price - b.price;
}
cart.sort(compare);
//end-------------------

//c)-------------------
function findByName(product) { 
    return product.name === 'watch';
}
console.log(cart.find(findByName)); 
//end-------------------

//d)-------------------
var Total = cart.reduce((a, b) => +a + +b.price, 0);
console.log('Total ', Total); 
//end-------------------


/* JavaScript code here */
var sum = 0;
for (var i = 0; i < 10; i++) {
	sum = sum + i;
	console.log(sum);
}
