const argin=process.argv[2];

let output='';
if (argin%3==0){
    output+='Java';
}

if (argin%5==0){
    output+='Script';
}

if (output=='') {
    output+=argin;
}

console.log(output);