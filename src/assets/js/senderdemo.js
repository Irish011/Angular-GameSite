var isX=true;
function buttonClick(){
    var obj = event.target;
    if(isX)
        obj.value="X";
    else
        obj.value="0";
    isX=!isX;
    obj.disabled =true;
    isGameOver()
}
function resetAll(){
    var divButtons = document.getElementById('divButtons');
    
    console.log(divButtons.children);
    [...divButtons.children].forEach(ele=>{
        
        ele.value=""
        ele.disabled=false;
    });
}
function isGameOver(){
    var divButtons = document.getElementById('divButtons').children;
    if(divButtons[0].value==divButtons[1].value && divButtons[0].value==divButtons[2].value && divButtons[0].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
        
    }
    else if(divButtons[4].value==divButtons[5].value && divButtons[4].value==divButtons[6].value && divButtons[4].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
    }
    else if(divButtons[8].value==divButtons[9].value && divButtons[8].value==divButtons[10].value && divButtons[8].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
    }
    else if(divButtons[0].value==divButtons[4].value && divButtons[0].value==divButtons[8].value && divButtons[0].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
    }
    else if(divButtons[1].value==divButtons[5].value && divButtons[1].value==divButtons[9].value && divButtons[1].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
    }
    else if(divButtons[2].value==divButtons[6].value && divButtons[2].value==divButtons[10].value && divButtons[2].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
    }
    else if(divButtons[0].value==divButtons[4].value && divButtons[0].value==divButtons[8].value && divButtons[0].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
    }
    else if(divButtons[0].value==divButtons[5].value && divButtons[0].value==divButtons[10].value && divButtons[0].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
    }
    else if(divButtons[2].value==divButtons[5].value && divButtons[2].value==divButtons[8].value && divButtons[2].value!=""){
        if(divButtons[0].value == "X"){
            alert('Player 1 Winner');
            resetAll();
        }
        else{
            alert('Player 2 Winner');
            resetAll();
        }
        //alert('game over');
    }
}

function draw(){
    if(isGameOver()!=true)
    {
        alert('Game is draw');
    }
}

// console.log(divButtons.childNodes);
// console.log(divButtons.children);