function Readme()
{
    var getName=document.getElementById('name').value;
    var getRollno=document.getElementById('roll_no').value;
    var getClass=document.getElementById('cls').value;
    console.log(getName);
    console.log(getRollno);
    console.log(getClass);
    document.getElementById('result').innerHTML=getName;
}

function sum()
{
    
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
    var num3=num1+num2;
    document.getElementById('result').innerHTML=num3;
}