a = prompt("Enter a number: ")
if(a%2==0 && a%3==0){
    console.log("Divisible by 2 and 3");
}else if (a%2==0){
    console.log("Divisible by 2 only")
}else if(a%3==0){
    console.log("Divisible by 3 only")
}else{
    console.log("not divisible by 2 or 3");
}