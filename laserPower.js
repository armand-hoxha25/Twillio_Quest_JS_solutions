function calculatePower(arr){
    let total_power=0;
    arr.forEach((element)=>{
        total_power=total_power + (2*element);
    });
    return total_power;
}