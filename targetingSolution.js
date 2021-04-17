class TargetingSolution{
    constructor(dicttype){
        this.x=dicttype.x;
        this.y=dicttype.y;
        this.z=dicttype.z;

    }
    target(){
        let x=this.x;
        let y=this.y;
        let z=this.z;
        return "(" + x + ", " +y + ", " +z +")";
    }
}


const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900
  });
  
  console.log(m.target()); 