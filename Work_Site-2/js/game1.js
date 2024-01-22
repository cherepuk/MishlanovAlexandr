var startGame1 = document.getElementById('start-game-1')



startGame1.onclick = function (){
    
    var arrayBlock = []

    for (let i = 0; i < 6; i++) {
        elem = document.createElement('div')
        elem.class = 'block-container-locked'
        arrayBlock.push(elem)
        
    }

}