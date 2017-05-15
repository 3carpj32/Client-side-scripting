function main() {
var form = document.getElementById("size");
form.addEventListener("change", formChanged);

}

function formChanged() {

var form1 = document.getElementById("size");
for(var i = 0; i < form1.length; i++)
{
    if (form1.size[i].checked){
        //this block of code is executed
        console.log("You selected" + form1[i].dataset.price);
    }
}
var form2 = document.getElementById("toppings");

for(var i = 0; i < form2.length; i++){
    
    if (form2.toppings[i].checked){
        //this block of code is executed
        console.log("You selected" + form2.toppings[i].value);
    }
    
}

    var form3 = document.getElementById("size");

for(var i = 0; i < form3.length; i++)
{
    if (form3[i].checked){
        //this block of code is executed
        console.log("You selected" + form3.extra[i].value);
    }
}
}
