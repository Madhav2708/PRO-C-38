class Cyclist{

    constructor(x ,y, width, height){
    
        var options = {  
        
            isStatic : false

        }

      this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("images/CYCLIST.png")
      this.width = width;
      this.height = height;
      this.body.velocityX = +3;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }

    
}