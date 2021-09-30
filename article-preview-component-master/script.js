var shareButton=document.getElementById("share");
var popUp=document.querySelector(".card-share-pop");
function showPopDesktop(){
    popUp.classList.toggle("card-share-pop--active");
}
shareButton.addEventListener("click",showPopDesktop);
//function showPopDesktop(){
//    var x=document.getElementsByClassName("pop-up");
//    if(x.style.display === "none"){
//        x.style.display="block";
//    }
//    else
//        {
//            x.style.display="none";
//        }
//}