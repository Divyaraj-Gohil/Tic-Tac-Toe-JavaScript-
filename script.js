let player1 = prompt("enter player-1 Name :");
let player2 = prompt("enter player-2 Name :");

let bt=document.querySelectorAll(".button");
let resetbt = document.querySelector("#reset");

let turn = true;
let count = 0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

resetbt.addEventListener("click",()=>{
    reset();
});

bt.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(turn){
            button.innerText="O";
            turn=false;
        }else{
            button.innerText="X";
            turn=true;
        }
        button.disabled =true;
        count++;

        let isWinner= checkWin();
        if(count === 9 && !isWinner){
            alert("Game was a Draw!");
            reset();
        }
    });
});

const checkWin=()=>{
    for(let pt of winpatterns){
        let p1 = bt[pt[0]].innerText;
        let p2 = bt[pt[1]].innerText;
        let p3 = bt[pt[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                if(p1==="O"){
                    alert(`${player1} Won the Game`);
                }else{
                    alert(`${player2} Won the Game`);
                }reset();
                return true;
            }
        }
    }
}
const reset = ()=>{
    turn= true;
    count=0;
    for(let i of bt){
        i.disabled=false;
        i.innerText="";
    }
}