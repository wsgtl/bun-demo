interface parent{
    name:string,
    age:number
}
interface child extends parent{
    dj:string
}
const b:child={
    name:"3",age:32,dj:"丁真",
}

abstract class article{
    private title;
    constructor(title:string,private content:string){
        this.title =title;
        this.content = content;
    }
    private dd(){
        this.content
    }
    abstract name:string
}
class dd extends article{
    private ddd() {
        this.name="343"
    }
    name:string="3"
}
const bc=new dd("dd","343")
