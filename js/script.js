var turn = 0;
var gameOver = false;

function checkWin(){
    const elems = document.getElementsByClassName('square');
    // console.log(Array.from(elems, elem=>elem.innerHTML).includes(""));
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    var roundWon = false;
    var winner;
    for(let i=0; i<=7; i++){
        const win = winConditions[i];
        const a = elems[win[0]];
        const b = elems[win[1]];
        const c = elems[win[2]];
        if((a.innerHTML === "") && (b.innerHTML === "") && (c.innerHTML === "")){
            continue;
        }
        if((a.innerHTML===b.innerHTML) && (c.innerHTML===b.innerHTML)){
            roundWon = true;
            winner = a.innerHTML;
            break;
        }
    };

    if(roundWon){
        document.getElementById('result').innerHTML = winner + " Won!!";
        gameOver = true;
    }
    if(!Array.from(elems, elem=>elem.innerHTML).includes("")){
        document.getElementById('result').innerHTML = "Draw!!";
        gameOver = true;
    }
}

function resetBoard(){
    const squares = document.getElementsByClassName('square');
    Array.from(squares).forEach(square=>{
        square.innerHTML = "";
    });
    document.getElementById('result').innerHTML = "Result";
    gameOver=false;
}

//bug1 -- requires 2 clicks to operate becoz of the onclick in the html
// and the event listener inside the function
function selectBox(element){
    element.addEventListener('click', ()=>{
        //console.log(element.innerHTML);
        var val = element.innerHTML;
        if(val ==="" && !gameOver){
            if(turn%2==0){
                element.innerHTML = 'O';
                turn = turn + 1;
            }
            else{
                element.innerHTML = 'X';
                turn = turn + 1;
            }
            checkWin(); 
        }
    })  
}

