class Form {
    constructor(){
        this.input = createInput("enter your name:")
        this.button = createButton("PLAY")
        this.greeting = createElement("h3")
        this.resetbutton=createButton("reset")
    }
    display(){
        var titan = createElement("h2")
        titan.html("car racing game")
        titan.position(displayWidth/2-50,10)
            
        
        this.input.position(displayWidth/2-50,displayHeight/2-80)

        
        this.button.position(displayWidth/2+50,displayHeight/2)
        this.resetbutton.position(displayWidth-100,30)
        this.resetbutton.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
            Player.deleteplayer()
        })

        
        
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount+=1
        player.index= playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("Welcome "+player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
        
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
}