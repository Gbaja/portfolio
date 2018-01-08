var question = document.getElementsByClassName("main__questions");
var i;

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
