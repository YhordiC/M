//Funcion para obtener elemento por su ID
let game= true;
const get_element_ID=(ID)=>{
  const elemento= document.getElementById(ID);
  return elemento;
}
const num1= Math.ceil(Math.random()*10);
const num2= Math.ceil(Math.random()*10);

const questionEl= get_element_ID('question');
const formEl =get_element_ID('form');
const scoreEl =get_element_ID('score');
const inputEl =get_element_ID('input');
const gameOverEl =get_element_ID('game-over');
const btnEl =get_element_ID('btn');

let score=JSON.parse(localStorage.getItem('score'));

/*if(!score){
    score=0;
}*/
if(score <=0){ // si se acaban las oportunidades =0, sale la ventana de game over
    gameOverEl.style.display="block";
     game= false;
}else{
 gameOverEl.style.display="none";
     
}
scoreEl.innerHTML=`score: ${score}`;


questionEl.innerHTML=`What is ${num1} multiply by ${num2}?`;

const correctAns= num1*num2;

formEl.addEventListener('submit',()=>{ 
    
    if(game){ // si es falso nuestro form no sirve
        const userAns= +inputEl.value 
        if(inputEl.value.length>0){  // si no colocan nada el el imput manda un alert
            if(userAns=== correctAns){ 
                score++;
                updateLocalScore();
              }else score--; updateLocalScore(); 
        }else alert('Please select a number');
    }
    
      
});
btnEl.addEventListener('click', ()=>{ // esta funcion hace que nustro form funsione de nuevo
    game=true;
    
    score=3; 
    updateLocalScore();
    location.reload(); // refresca la pagina web 
});

function updateLocalScore(){
    localStorage.setItem('score',JSON.stringify(score));
}