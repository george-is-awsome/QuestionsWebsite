

function submit(question){

    alert(question);
    var qtextbox;
    /*alert("submit run");*/

    switch(question){
        case (1):
            qtextbox = q1TextBox;
        case (2):
            qtextbox = q2TextBox;
        case (3):
            qtextbox = q3TextBox;
        case (4):
            qtextbox = q4TextBox;
    }

    var qtextboxValue = document.getElementById(qtextbox).setAttribute("value", "wrong");
    qtextboxValue = "Hello World!";

}



document.write(hello); 