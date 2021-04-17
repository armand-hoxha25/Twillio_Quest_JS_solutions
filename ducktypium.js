class Ducktypium{
    constructor(color){
        this.color=color;
        this.calibrationSequence=[];
        let colors=['red','blue','yellow'];
        if (!colors.includes(color)){
            let error= new Error(color + " is not a good color");
            throw error;
        }
    }

    refract(color2) {
        let colors=['red','blue','yellow'];
        if (!colors.includes(color2)){
            let error= new Error("Not good color");
            throw error;
        }
        
        if (color2==this.color){
            return color2;
        }
        if (this.color=='red' && color2=='blue'){return 'purple';}
        if (this.color=='red' && color2=='yellow'){return 'orange';}
        if (this.color=='yellow' && color2=='blue'){return 'green';}
        if (this.color=='yellow' && color2=='red'){return 'orange';}
        if (this.color=='blue' && color2=='red'){return 'purple';}
        if (this.color=='blue' && color2=='yellow'){return 'green';}

    }

    calibrate(arr){
        arr.sort();
        let out=[];
        arr.forEach((element)=>{out.push(element*3);})
        this.calibrationSequence=out;

        return ;
    }
}

const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
