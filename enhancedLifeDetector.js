const argin=process.argv[2];

if (argin==0){
    console.log('alive')
}else if (argin==1){
    console.log('flowering')
}else if (argin==2){
    console.log('shedding')
}else if (argin>2){
    console.log('other')
}