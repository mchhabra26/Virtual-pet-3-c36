class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock =0;
        this.lastFed = 0;

        
    }
    display(){
        var x=80;
        var y=100;

        imageMode(CENTER);
        image(this.image,720,720,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
     
    }

    getFoodStock(){
        
      var foodStockRef=database.ref('Food');
  foodStockRef.on("value",(data)=>{
    this.foodStock = data.val();
  });
    }
    updateStock(x){
        
          database.ref('/').update({
            Food:x,
            Feedtime:hour()
          })
    }
    bedroom(){
        imageMode(CENTER);
        image(bedroomImg,250, 250, 550,500);
    }
    washroom(){
        imageMode(CENTER);
        image(washroomImg, 250, 250, 550,500);
    }
    garden(){
        imageMode(CENTER);
        image(gardenImg, 250,250,550,500);
    }
    
}