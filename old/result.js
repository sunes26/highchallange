localStorage.getItem('Point');
const result_point = localStorage.getItem('Point');
const point = document.getElementById('point');
const human = document.getElementById('human');
const comment = document.getElementById('comment');
point.innerHTML = result_point*20 +"점"


if(result_point ==0){
    human.innerHTML = "아기"
    comment.innerHTML="아무것도 모르시는군요"
}

else if(result_point ==1)
{
    human.innerHTML = "청소년"
    comment.innerHTML="1개맞은 사람에게 어울리는 문구"
}

else if(result_point ==2)
{
    human.innerHTML = "청년"
    comment.innerHTML="2개맞은사람에게 어울리는 문구"
}

else if(result_point ==3)
{
    human.innerHTML ="중년"
    comment.innerHTML="3개맞은사람에게 어울리는문구"
}

else if(result_point ==4)
{
    human.innerHTML ="꼰대"
    comment.innerHTML="혹시 '꼰대'라는 소리 종종 듣지 않나요?"
}

else if(result_point ==5)
{
    human.innerHTML ="노인"
    comment.innerHTML="5개맞은사람에게 어울리는문구"
}