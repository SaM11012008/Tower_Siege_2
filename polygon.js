class Polygon{
    constructor(x,y,width,height){
        var opt = {
            isStatic:false,
        }

        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position

        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);


    }
}