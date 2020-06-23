class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.reset = createButton("Reset");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Hurdles Game");
        this.title.position(displayWidth/2,0);

        this.input.position(displayWidth/2,displayHeight/2+100);
        this.button.position(displayWidth/2+200,displayHeight/2+100);
        this.reset.position(displayWidth/2-750,displayHeight/2+250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2 - 70,displayHeight/4);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
    }
}