class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref("gameState")
        gamestateref.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async startGame(){
        if(gameState===0){
            player = new Player()
            var playercountref= await database.ref("playerCount").once("value")
            if(playercountref.exists()){
                playerCount=playercountref.val()
                player.getCount()
            }

            
            form = new Form()
            form.display()
        }
    
    }
    play(){
        form.hide()
        textSize(30)
        text("game start ",120,100)
        Player.getplayerinfo()
        if(allplayers!==undefined){
            var displayposition = 130
            for(var plr in allplayers){
                if(plr==="player"+player.index){
                   fill("red")
                }
                else(
                    fill("black")
                )
                displayposition+=20
                textSize(15)
                text(allplayers[plr].playername+" : "+allplayers[plr].distance,120,displayposition)
            } 
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50
            player.update()
        }
    }
}