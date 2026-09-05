function fizzbuzz(num){
    let three = (num%3);
    let five = (num%5);
    if(three==0 && five == 0){
        console.log("fizzbuzz");
    }else if(three==0){
        console.log("fizz");
    }else if(five==0){
        console.log("buzz");
    }else{
       console.log(num) 
    }
    
}
console.log(fizzbuzz(15));