let x=20;
for(let i=2;i<=x;i++)
{
let j=2;
let prime=true
while(j**2<=i)
{
if(i%j==0){
prime=false;
break;
}
j++
}
if(prime==true)
console.log(i);
}