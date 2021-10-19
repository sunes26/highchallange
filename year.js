const form = document.getElementById('year');

form.addEventListener('click',function(event){
    const day = document.getElementById('day').value
    localStorage.setItem('Point',0)
    console.log(day)

    if(day==0){
        alert("년도를 입력하세요~")
        location.href = "main.html"
    }
    else if(2021-day <=28){
        location.href = "old/page1.html"
    }
    else if(2021-day>=29){
       
        location.href = "youngpage/page1.html"
    }
    event.preventDefault()
});
