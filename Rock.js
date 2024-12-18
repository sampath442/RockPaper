console.log("hello");
let humanscore=0;
let computerscore=0;
let n;


function getHumanChoise(n)
{
    if(n<1)
    {
        return "Rock";
    }
    else if(n>=1&&n<5)
    {
        return "Paper";
    }
    else
    {
        return "Scissor";
    }
}
function getComputerChoice()
{
    let x=Math.random();
    if(x>0 && x<0.5)
    {
        return "Rock";
    }
    else if(x>=.5&&x<.75)
    {
        return "Paper";
    }
    else{
        return "Scissor";
    }
}
function playround(humanSelection,computerSelection)
{
    if((computerSelection=="Rock" && humanSelection=="Paper")||(computerSelection=="Paper" && humanSelection=="Scissor")||(computerSelection="Scissor"&& humanSelection=="Rock" ))
    {
        humanscore=humanscore+1;
        console.log("You won");
    }
    else if((computerSelection=="Paper" && humanSelection=="Rock")||(computerSelection=="Scissor" && humanSelection=="Paper")||(computerSelection="Rock"&&humanSelection=="Scissor" ))
    {
        computerscore=computerscore+1;
        console.log("you lost");
    }
    else
    {
        humanscore=humanscore;
        computerscore=computerscore;
    }
}
function playgame()
{
    for(let i=0;i<5;i++)
    {
        n=parseInt(prompt("enter less than 0.5 for Rock less than .75 to paper and less than 1 and greater than .75 for scissor"));
        let humanSelection=getHumanChoise(n);
        let computerSelection=getComputerChoice();
        playround(humanSelection,computerSelection);
        console.log("the human score is",humanscore);
        console.log("computer score",computerscore);
    }
    if(humanscore<computerscore)
    {
        console.log("you lost the game");
    }
    else if(humanscore>computerscore)
    {
        console.log("you won the game");
    }
    else
    {
        console.log("the game ended by draw");
    }
}


playgame();
