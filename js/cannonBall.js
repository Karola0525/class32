class CannonBall {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.r = 60;
  //crear un cuerpo circular
      this.body=Bodies.circle(x,y,this.r,options)
  //cargar la imagen
      this.image=loadImage("./assets/cannonball.png")
      this.trajectory=[]
      World.add(world, this.body);
    }
  
    shoot() {
      
      //establecer el ángulo de la bala al cañón
      var velocity=p5.Vector.fromAngle(cannon.angle);
      velocity.mult(20)

      //establecer un valor estático al cuerpo

      Matter.Body.setStatic(this.body,false)
      //establecer la velocidad de la bala para moverla

      Matter.Body.setVelocity(this.body,{x:velocity.x, y:velocity.y})
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      console.log(pos)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
  //mostrar la imagen
      image(this.image,0,0,this.r,this.r)  
      pop();

      if(this.body.velocity.x>0 && this.body.position.x>300){
        var position=[this.body.position.x,this.body.position.y]
        this.trajectory.push(position)

      }

      for (var i=0; i<this.trajectory.length;i++){
        image(this.image,this.trajectory[i][0],this.trajectory[i][1],6,6)

      }
  
      }
    }
  
  