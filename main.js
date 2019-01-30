var button = document.getElementById('button');
var light = document.getElementById('light');

button.addEventListener('mousedown', (event) => {
    var buttonPress = event.target;

    buttonPress.setAttribute("style", "margin-top:104px; box-shadow: 0px 1px black; background-color:rgb(45,45,45);");
    light.setAttribute("style", "background-color: rgb(155,36,200); box-shadow: 0px 0px 35px 12px rgb(175,56,220); border:1px solid grey;");
});

button.addEventListener('mouseup', (event) => {
    var buttonPress = event.target;

    buttonPress.setAttribute("style", "margin-top:100px; box-shadow: 0px 5px black;background-color: rgb(50,50,50);");
    light.setAttribute("style", "background-color: rgba(85,0,130,0.1); box-shadow: 1px 1px 2px 1px inset black;");
});