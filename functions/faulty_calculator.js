/* The faulty calculator does the following =
1. + --> -
2. * --> +
3. - --> /
4. / --> **
The probability is 10%
*/
const faulty_calculator = (x, y)=>{
    console.log("The sum is:", x-y);
    console.log("The multiplication is: ", x+y)
    console.log("The subtraction is: ", x/y);
    console.log("The division is: ", x**y);
}
const calculator = (x, y)=>{
    console.log("The sum is:", x + y);
    console.log("The multiplication is: ", x*y)
    console.log("The subtraction is: ", x-y);
    console.log("The division is: ", x/y);
}
a = Math.random();
b = Math.random();
console.log(a, b)
p = prompt("enter 1st number: ");
q = prompt("Enter 2nd number: ");
if(a<0.1 || b<0.1){
    faulty_calculator(p,q);
}else{
    calculator(p, q);
}