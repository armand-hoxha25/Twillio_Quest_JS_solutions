function scan(arr){
    let contInd=[]

    arr.forEach((element,n) => {
        if (element=='contraband'){
            contInd.push(n);
        }
    });
    return contInd;
}