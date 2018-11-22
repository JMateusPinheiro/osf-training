var oddOrEven = number => {
    if(number%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}
var randomNumber = () =>{
    return Math.floor(Math.random() * 100)
}

module.exports= {
    oddOrEven,
    randomNumber
}