localStorage.getItem('Point');
const result_point = localStorage.getItem('Point');
const point = document.getElementById('point');
const human = document.getElementById('human');
const comment = document.getElementById('comment');
point.innerHTML = result_point*20 +"점"


if(result_point ==0){
    human.innerHTML = "노인"
    comment.innerHTML="젊은사람과의 대화가 매우 필요합니다"
}

else if(result_point ==1)
{
    human.innerHTML = "꼰대"
    comment.innerHTML="혹시 '꼰대'라는 소리 종종 듣지 않나요?"
}

else if(result_point ==2)
{
    human.innerHTML = "아재"
    comment.innerHTML="2개맞은사람에게 어울리는 문구"
}

else if(result_point ==3)
{
    human.innerHTML ="3개맞은사람"
    comment.innerHTML="3개맞은사람에게 어울리는문구"
}

else if(result_point ==4)
{
    human.innerHTML ="청년"
    comment.innerHTML="4개맞은사람에게 어울리는 문구"
}

else if(result_point ==5)
{
    human.innerHTML ="청소년"
    comment.innerHTML="5개맞은사람에게 어울리는문구"
}
