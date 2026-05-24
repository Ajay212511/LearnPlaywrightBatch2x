for(let i=1;i<100;i++)
{
 //console.log(`Number = ${i}`)
 if(i%3===0 && i%5===0){
     console.log(`Number = ${i} Number is Fizzbuzz`)
 } else if(i%5===0){
    console.log(`Number = ${i} Number is buzz`)
 }else if(i%3===0){
     console.log(`Number = ${i} Number is fizz`)
 }
}
