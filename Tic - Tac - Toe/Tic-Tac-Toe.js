//MADE BY YASH JANGID
var X_array = new Array()
var O_array = new Array() 
var note = new Number     
var X = document.getElementById('X')
var O = document.getElementById('O')                             
var A = document.getElementById('Box-1')
var B = document.getElementById('Box-2')
var C = document.getElementById('Box-3')
var D = document.getElementById('Box-4')
var E = document.getElementById('Box-5')
var F = document.getElementById('Box-6')
var G = document.getElementById('Box-7')
var H = document.getElementById('Box-8')       
var I = document.getElementById('Box-9')
const rule= [[1,2,3],[1,4,7],
             [1,5,9],[2,5,8],
             [3,5,7],[3,6,9],
             [4,5,6],[7,8,9]]
A.addEventListener("click",()=>{
    if(A.textContent != 'O' && A.textContent != 'X'){
        A.textContent = Decide(1)
        Determine()
        Game()
        }
      }
    )
B.addEventListener("click",()=>{
    if(B.textContent != 'O' && B.textContent != 'X'){
        B.textContent = Decide(2)
        Determine()
        Game()
        }
       }
    )
C.addEventListener("click",()=>{
    if(C.textContent != 'O' && C.textContent != 'X'){
        C.textContent = Decide(3)
        Determine()
        Game()
        }
       } 
    )
D.addEventListener("click",()=>{
    if(D.textContent != 'O' && D.textContent != 'X'){
        D.textContent = Decide(4)
        Determine()
        Game()
        }
       }
    )                
E.addEventListener("click",()=>{
    if(E.textContent != 'O' && E.textContent != 'X'){
        E.textContent = Decide(5)
        Determine()
        Game()
        }
       }
    )
F.addEventListener("click",()=>{
    if(F.textContent != 'O' && F.textContent != 'X'){
        F.textContent = Decide(6)
        Determine()
        Game()
        }
       }
    )
G.addEventListener("click",()=>{
    if(G.textContent != 'O' && G.textContent != 'X'){
        G.textContent = Decide(7)
        Determine()
        Game()
       }
      }
    )
H.addEventListener("click",()=>{
    if(H.textContent != 'O' && H.textContent != 'X'){
        H.textContent = Decide(8)
        Determine()
        Game()
       }
      } 
    )
I.addEventListener("click",()=>{
    if(I.textContent != 'O' && I.textContent != 'X'){
        I.textContent = Decide(9)
        Determine()
        Game()
        }
      }
    )
function Determine(){
  if(X.style.color == 'teal')
    {
     X.style.color = 'white'
     O.style.color = 'teal'
    }
  else
   {
     X.style.color = 'teal'
     O.style.color = 'white'
   }
}
function Decide(renote){
    if(X.style.color == 'teal'){
        X_array.push(renote)
        X_array.sort()
        return 'X';
    }
    else{
        O_array.push(renote)
        O_array.sort()
        return 'O';
    }
}
function Game(){
    if(X_array.length >= 3)
    { 
     if(Check_X()){
        X.style.color = 'red'
        X.textContent = `${X.textContent + ' Winner'}`
        O.style.color = 'white'
        O.textContent = `${O.textContent + ' Loser'}`
    }
    }
    if(O_array.length >= 3){
        if(Check_O()){
            O.style.color  = 'red'
            O.textContent = `${O.textContent + 'Winner'}`
            X.style.color = 'white'
            X.textContent = `${X.textContent + 'Loser'}`
           }
}
}
function Check_X(){
    for( let i=0;i<8;i++){  
       if(Find_X(rule[i])){
            return 1
       }
    }
    return 0 
 }
 function Find_X(X_temprule){
    let count = 0
    for(let i=0;i< (X_array.length);i++){
        for(k=0;k<3;k++){
            if(X_array[i]==X_temprule[k]){
            count++}
        }}
        if(count == 3){
            return 1}
          return 0
}
 function Check_O(){
    for( let i=0;i< 8;i++){  
       if(Find_O(rule[i])){
            return 1
       }
    }
    return 0 
 }
function Find_O(O_temprule){
    let count = 0
    for(let i=0;i< (O_array.length);i++){
        for(k=0;k<3;k++){
            if(O_array[i]==O_temprule[k]){
            count++}
        }}
     if(count == 3){
        return 1}
        return 0
}
