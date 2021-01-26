class Block4{
    constructor(x,y) {
      var opt = {
          isStatic:false
      }

      this.body = Bodies.rectangle(x,y,20,20,opt);
      this.visibility = 255;
      World.add(world,this.body);
    }
    display() {
        if(this.body.speed<10){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(pos.x,pos.y,30,40);
        }else {
            World.remove(world,this.body);
            push()
            this.visibility = this.visibility -5;
            tint(255,this.visibility);
            pop()
        }
    }
}