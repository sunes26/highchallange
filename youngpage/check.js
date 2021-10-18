
const correct = document.getElementById("correct");
const wrong1 = document.getElementById("wrong1");
const wrong2 = document.getElementById("wrong2");
const answerX = document.getElementsByClassName("answerX")[0];
const answerO = document.getElementsByClassName("answerO")[0];

const problem = document.getElementsByClassName("problem")[0];

var sum=0;
correct.addEventListener("click",function(){

    //correct.style.backgroundColor="#339900"
    correct.style.border="4px solid #339900"
    answerO.style.display="block"
    wrong1.style.display="none";
    wrong2.style.display="none";
    problem.classList.add('correct');
    localStorage.getItem('Point')
    const point = parseInt(localStorage.getItem('Point')) +1
    localStorage.setItem('Point',point)
})



    wrong1.addEventListener("click", function(){
        wrong1.style.border="4px solid red"
        answerX.style.display="block"
        correct.style.display="none";
        wrong2.style.display="none";
        problem.classList.add('wrong');
    })

     wrong2.addEventListener("click", function(){
            wrong2.style.border="4px solid red"
        /*correct.style.border="4px solid #339900"
        wrong1.style.border="4px solid red"
        wrong2.style.border="4px solid red"*/
       
        answerX.style.display="block"
        wrong1.style.display="none";
        correct.style.display="none";
        problem.classList.add('wrong');
})


/*
  const box = document.getElementsByClassName("box")[0];

  box.addEventListener("click", function () {
    if (this.classList.contains("clicked")) {
     
    } 
    else {
        console.log(box)
      this.classList.add("clicked");

      box.style.backgroundColor = "green";
      
    }
  });

*/