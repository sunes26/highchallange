const form = document.getElementById('year');

form.addEventListener('submit',function(event){
    const day = document.getElementById('day').value
    localStorage.setItem('Point',0)
    console.log(day)
    if(2021-day <=28){
       location.href = "old/page1.html"
    }
    else if(2021-day>=29){
       
          location.href = "youngpage/page1.html"
    }
    event.preventDefault()
});
