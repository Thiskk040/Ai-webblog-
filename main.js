window.onload = pageload;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });

    });
});


function pageload()
{
    var facebookbutton = document.getElementById("facebook");
    facebookbutton.onclick = facebooklinklocation;

    var githubbutton = document.getElementById("github");
    githubbutton.onclick = githublinklocation;

    var linkbutton = document.getElementById("button1");
    linkbutton.onclick = reflink;

}

function facebooklinklocation() {
    location.href = "https://colab.research.google.com/drive/1B6H4wFqdwqWGWy6amCvjBT-C2UKN74r6?usp=sharing";
}
function githublinklocation() {
    location.href = "https://github.com/Thiskk040/Heart-Diease-Prediction-with-Python.git";
}
function reflink(){
    location.href = "https://thecleverprogrammer.com/2020/11/10/heart-disease-prediction-using-machine-learning/"
}




