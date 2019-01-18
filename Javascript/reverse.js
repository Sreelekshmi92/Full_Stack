var n=123;
var r=0;
var rev=0;
while(n>=1)
{
    r=n%10;
    rev=rev*10+r;
    n=parseInt(n/10);
    
}
console.log(rev);
