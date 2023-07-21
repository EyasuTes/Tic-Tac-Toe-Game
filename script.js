// const one =document.querySelector('.one')
// const two =document.querySelector('.two')
// const three =document.querySelector('.three')
// const four =document.querySelector('.four')
// const five =document.querySelector('.five')
// const six =document.querySelector('.six')
// const seven =document.querySelector('.seven')
// const eight =document.querySelector('.eight')
// const nine =document.querySelector('.nine')

const cube = document.querySelectorAll('#cube');
const container = document.querySelector('.container');
const start = document.querySelector('.start');
const winner = document.querySelector('.winner');
const popup=document.querySelector('.popup')
const playerOne = document.getElementById('player1');
const playerTwo = document.getElementById('player2');
const p1=document.querySelector('.p1')
const p2=document.querySelector('.p2')


start.addEventListener('click',function(){
    popup.style.display='flex'
    cube.forEach(cube=>{
        cube.textContent=''
        cube.style.backgroundColor='#8A2BE2'
    })
    gameBoard.clear()
    winner.style.display='none'
    currentPlayer=player2.getox()
    if(count===1){count--;}
    
})
popup.addEventListener('submit',function(event){
    event.preventDefault();
    popup.style.display='none'
    p1.textContent=playerOne.value;
    p2.textContent=playerTwo.value;
       
})
//---------------------------------------------------------------------------

const Player = function(name, ox) {
    const getname = () => name;
    const getox = () => ox;
    return { getname, getox };
};
let count=0;
const player1 = Player("Player-1", 'x');
const player2 = Player('Player-2', 'o');
let currentPlayer=player2.getox()

container.addEventListener('click',function(event){
    
    const className = event.target.classList;
    const number = document.querySelector('.'+className)
    console.log(className)
    if(number.textContent===''){
        if (currentPlayer === player1.getox()) {
            currentPlayer = player2.getox();
          } else {
            currentPlayer = player1.getox();
          }
        if(count===0){gameBoard.selection(className, currentPlayer)}
        
    }
})

const gameBoard = (() => {
    let gameBoardarr = [];
    const clear =function(){
        gameBoardarr=[]
    }
    const selection = function(cubeNumber, ox) {
             
            const newobj = { [cubeNumber]: ox };
            gameBoardarr.push(newobj);
            assign(gameBoardarr)
        
    };

    
    return { selection, clear};
})();



function assign(arr){
    for(let i=0; i<arr.length;i++){
        let num= Object.keys(arr[i])[0]
        let val=Object.values(arr[i])[0]
        let stringnum =num.toString();
        let stringval =val.toString();
        const number = document.querySelector('.'+stringnum)
        if(number.textContent===''){
            number.textContent=stringval
        }
        check()
        

    }
}

function check(){
    arr=[['one','two','three'],['four','five','six'],['seven','eight','nine'],['one','four','seven'],['two','five','eight'],['three','six','nine'],['one','five','nine'],['three','five','seven']]
    for (let i=0;i<arr.length;i++){
        const one =document.querySelector('.'+arr[i][0])
        const two =document.querySelector('.'+arr[i][1])
        const three =document.querySelector('.'+arr[i][2])
        if (one.textContent === two.textContent && two.textContent === three.textContent && one.textContent!=='' && two.textContent!=='' && three.textContent!==''){
            count++;
            one.style.backgroundColor='#22c55e'
            two.style.backgroundColor='#22c55e'
            three.style.backgroundColor='#22c55e'
            if(one.textContent==='x'){
                winner.textContent= 'The Winner is '+p1.textContent
                winner.style.display='inline-block'
            }else{
                winner.textContent='The Winner is '+p2.textContent
                winner.style.display='inline-block'
            }
        }
    }
}














