class Box{
    constructor(x,y,width,height) {
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      
      /*console.log(this.body.speed)

      push()

      if(this.body.speed<3) {
        super.display();
        
   } else {
     
     World.remove(world,this.body);
     push()
     
     this.Visibility = this.Visibility-5;

     tint(255,this.Visibility);

     image(this.image,this.body.position.x,this.body.position.y,50,50)

     pop();
   }

      var pos =this.body.position;
      rectMode(CENTER);
      var angle = this.body.angle;
      fill(28,5,243);
     
      rotate(angle)
      rect(pos.x, pos.y, 30, 40);
      pop()
    }*/

    if (this.body.speed < 3) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill(28,5,243)
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 4;
      pop();
    }

  }
}