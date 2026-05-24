let a=3,b=4,c=5;

if(a===b && a===c && b===c){
    console.log("Triangle is equilateral")
}else if((a===b)||(b===c)||(a===c)){
    console.log("Triangle is isosceles")
}else {
    console.log("Triangle is scalene ")
}
  