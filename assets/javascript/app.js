$(document).ready(function() {
    $("#pageOne").show();
    $("#pageTwo").hide();
    $("#pageThree").hide();

    $("#gitGo").on("click", function() {
        $("#pageOne").hide();
        $("#pageTwo").show();
        $("#pageThree").hide();
        var n = 31;
        setTimeout(countDown, 1000);

        function countDown() {
            n--;
            if (n > -1) {
                setTimeout(countDown, 1000);
                $("#timer").html(n + " Seconds");
            } else {
                n == 0;
                $("#pageOne").hide();
                $("#pageTwo").hide();
                $("#pageThree").show();
                handleClick();

            }

            // console.log(n);

        }


        $("#gitScore").on("click", function() {
            $("#pageOne").hide();
            $("#pageTwo").hide();
            $("#pageThree").show();
            handleClick();

        });
    });


});

function handleClick() {
    var amountCorrect = 0;
    var amountWrong = 0;
    for (var i = 1; i <= 45; i++) {
        var radios = document.getElementsByName('optradio group' + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == "correct" && radio.checked) {
                amountCorrect++;
                $(".numCorrect").html(amountCorrect);
            } else if (radio.value == "wrong" && radio.checked) {
                amountWrong++;
                $(".numWrong").html(amountWrong);
            }
        }
    }

}









// var correct = 0

// $("#numCorrect").html(correct)

// function correctAns {
//     if ("#a3".checked) {
//         alert("correct");
//     } else {
//         alert("wrong");
// }
// var button1 = document.getElementbyId("a1");
// var button2 = document.getElementbyId("a2");
// var button3 = document.getElementbyId("a3");

// function correctAns() {
//     if (button3.checked) {
//         alert("correct");
//     } else if (button2.checked || button1.checked) {
// //         alert("wrong");
// //     }
// // }

// if (document.getElementbyId('a3').checked) {
//     alert("correct");
// } else {
//     alert("wrong");
// }
