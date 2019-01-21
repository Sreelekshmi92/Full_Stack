var n=89;
var num=n;
var r=0;
var rev=0;
palindrome(n);

function palindrome(n)
{
while(n>=1)
{
    r=n%10;
    rev=rev*10+r;
    n=parseInt(n/10);
    
}

if(num==rev)
{
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}
}