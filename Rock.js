
let flag=0;
let humanscore=0;
let computerscore=0;
let n;
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
function results()
{
    if(humanscore==5)
    {
        document.getElementById("result").textContent=("congratus u won the game");
    }
    else if(computerscore==5)
    {
        document.getElementById("result").textContent=("u lost the game");
    }
}
function playround(humanSelection,computerSelection)
{
    
    if((computerSelection=="Rock" && humanSelection=="Paper")||(computerSelection=="Paper" && humanSelection=="Scissor")||(computerSelection="Scissor"&& humanSelection=="Rock" ))
    {
        humanscore=humanscore+1;
        console.log("You won");
        results();
    }
    else if((computerSelection=="Paper" && humanSelection=="Rock")||(computerSelection=="Scissor" && humanSelection=="Paper")||(computerSelection="Rock"&&humanSelection=="Scissor" ))
    {
        computerscore=computerscore+1;
        console.log("you lost");
        results();
    }
    else
    {
        humanscore=humanscore;
        computerscore=computerscore;
        results();
    }
}



document.getElementById("Rock").addEventListener("click",function(){
    playround("Rock",getComputerChoice())
});
document.getElementById("Scissor").addEventListener("click",function(){
    playround("Scissor",getComputerChoice())
});
document.getElementById("Paper").addEventListener("click",function(){
    playround("Paper",getComputerChoice())
});

