const accordion=document.getElementsByClassName("faq");
for(var i=0;i<accordion.length;i++)
    {
        accordion[i].addEventListener("click",function(){
            this.classList.toggle("active");
        })
    }