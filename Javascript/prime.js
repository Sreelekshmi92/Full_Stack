var lower=2;
var upper=500;
print_prime(lower,upper);

function print_prime(lower,upper)
{
for(var n=lower; n<=upper; n++)
   {
     var prime = 1;
     for(var i=2; i<=n/2; i++)
       if(n%i == 0)
       {
         prime = 0;
         break;
       }
     if(prime)
       console.log(n);
   }
}