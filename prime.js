let x=20;
for(let i=2;i<=x;i++)
{
let y=2;
let isPrime=true;
while(y**y<=i)
{
if(i%y==0){
isPrime=false;
break;
}
y++
}
if(isPrime==true)
console.log(i);
}