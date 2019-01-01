function Fighter()
{
    this.x=width/2;
    
    
    this.show = function(){
        fill(255);
        rectMode(CENTER);
        //rect(this.x, height-20,30,20);
        var s=createSprite(this.x, height-20,30,30);
    }
    
    this.move=function(dir)
    {
        this.x += dir*10;
    }
}