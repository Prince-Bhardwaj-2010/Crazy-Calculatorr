function display(num){
    document.getElementById('input').value+=num;
}
function calculate(){
    var number = document.getElementById('input').value;
    var result = eval(number)
    document.getElementById('input').value = result;
}
function clearScreen(){
    document.getElementById('input').value = '';
}