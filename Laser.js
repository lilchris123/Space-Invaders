function Laser(x,y)
{
    this.x=x;
    this.y= y;
    
    this.show = function(){
        noStroke();
        fill('blue');
        ellipse(this.x, this.y,10,10);
    }
    
    this.move = function(){
        this.y= this.y-5;
    }
}