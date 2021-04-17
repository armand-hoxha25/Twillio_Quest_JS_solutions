class Materializer{
    constructor(t){
        this.target=t;
        this.activated=false;
    }
    activate(){
        this.activated=true;
    }
    materialize(){
        if (this.activated) {
            return this.target;
        } else {
            return ;
        }
    }
}