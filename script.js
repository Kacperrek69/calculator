setInterval(() => {
    if(isNaN($("textarea").val().toString().charAt($("textarea").val().toString().length-1))){
        return;
    }
    else if(eval($("textarea").val()) == undefined){
        document.getElementById("wynik").innerHTML = 0;
    }
    else{
        document.getElementById("wynik").innerHTML = eval($("textarea").val());    }
}, 10);




document.getElementById("b1").addEventListener('click', function () {
    $("textarea").val($("textarea").val() + "+"); 
},);
document.getElementById("b2").addEventListener('click', function () {
    $("textarea").val($("textarea").val() + "-"); 
},);
document.getElementById("b3").addEventListener('click', function () {
    $("textarea").val($("textarea").val() + "*"); 
},);
document.getElementById("b4").addEventListener('click', function () {
    $("textarea").val($("textarea").val() + "/"); 
},);
document.getElementById("b5").addEventListener('click', function () {
    $("textarea").val($("textarea").val() + "%"); 
},);
document.getElementById("b6").addEventListener('click', function () {
    $("textarea").val(Math.sqrt(eval($("textarea").val()))); 
},);
document.getElementById("b7").addEventListener('click', function () {
    $("textarea").val(Math.cbrt(eval($("textarea").val()))); 
},);
document.getElementById("b8").addEventListener('click', function () {
    $("textarea").val(Math.pow(eval($("textarea").val()), 2)); 
},);
document.getElementById("b9").addEventListener('click', function () {
    $("textarea").val(Math.pow(eval($("textarea").val()), 3)); 
},);
document.getElementById("b10").addEventListener('click', function () {
    $("textarea").val(Math.abs(eval($("textarea").val()))); 
},);
document.getElementById("b11").addEventListener('click', function () {
    $("textarea").val(Math.round(eval($("textarea").val()))); 
},);
document.getElementById("b12").addEventListener('click', function () {
    var wynik = 1; 
    var n = Math.round(eval($("textarea").val()));
    while (n > 0)
    {
            wynik = wynik * n ;
            n -- ;
    }
    $("textarea").val(wynik);
},);




document.getElementById("b_0").addEventListener('click', function () { $("textarea").val($("textarea").val() + "0"); },);
document.getElementById("b_1").addEventListener('click', function () { $("textarea").val($("textarea").val() + "1"); },);
document.getElementById("b_2").addEventListener('click', function () { $("textarea").val($("textarea").val() + "2"); },);
document.getElementById("b_3").addEventListener('click', function () { $("textarea").val($("textarea").val() + "3"); },);
document.getElementById("b_4").addEventListener('click', function () { $("textarea").val($("textarea").val() + "4"); },);
document.getElementById("b_5").addEventListener('click', function () { $("textarea").val($("textarea").val() + "5"); },);
document.getElementById("b_6").addEventListener('click', function () { $("textarea").val($("textarea").val() + "6"); },);
document.getElementById("b_7").addEventListener('click', function () { $("textarea").val($("textarea").val() + "7"); },);
document.getElementById("b_8").addEventListener('click', function () { $("textarea").val($("textarea").val() + "8"); },);
document.getElementById("b_9").addEventListener('click', function () { $("textarea").val($("textarea").val() + "9"); },);
document.getElementById("b_10").addEventListener('click', function () { $("textarea").val($("textarea").val() + "."); },);

document.getElementById("b_11").addEventListener('click', function () { $("textarea").val($("textarea").val() + Math.PI); },);
document.getElementById("b_12").addEventListener('click', function () { $("textarea").val($("textarea").val() + Math.E); },);
document.getElementById("b_13").addEventListener('click', function () { $("textarea").val($("textarea").val() + "0.5772156649"); },);