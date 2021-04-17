function scan(arr){
    let n_contraband=0;
    arr.forEach((element) => {
        if (element=='contraband'){
            n_contraband=n_contraband+1;
        }
    });
    return n_contraband;
}