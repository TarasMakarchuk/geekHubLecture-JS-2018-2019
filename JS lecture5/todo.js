window.onload = function () {

    var arrTodo = [];

    document.getElementById("add").onclick = function () {
        var inputValue = document.getElementById("in").value;
        var temp = {};
        temp.todo = inputValue;
        temp.check = false;
        arrTodo[arrTodo.length] = temp;
        console.log(arrTodo);
        outputValues();
    };

    document.body.style.backgroundColor = "yellow";

    function outputValues() {
        var output = "";
        for (var key in arrTodo) {
            if (arrTodo[key].check === true) {
                output += "<input type='checkbox' checked>";
            } else {
                output += "<input type='checkbox'>";
            }
            output += arrTodo[key].todo + "<br>";
        }
        document.getElementById("out").innerHTML = output;

    }

        document.getElementById("reverse").onclick = function () {
         outputValues().reverse();
    };

    var reverse = document.getElementById("reverse");
    reverse.addEventListener('click', function () {
        reverseElements(this);
    });

    function reverseElements(elements) {
        elements.reverse();
    }
};
