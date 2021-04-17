function scanAndFilter(arr,keyword){

    arr.forEach((element,n) => {
        
        if (element==keyword) {
            arr.splice(n,1);
        }
    });

    return arr;
}