var a=50;
var b=100;
var c=30;
largest(a,b,c);


function largest(a,b,c)
{
if(a>b)
{
    if(a>c)
    {
        console.log(a);
    }
    else
    {
        console.log(c);
    }
}
else
{
    if(b>c)
    {
        console.log(b);
    }
    else
    {
        console.log(c);
    }
}
}