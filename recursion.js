// Recursion: A function is recursive if it calls itself and reaches a stop condition.

//print 1 to 10
function printNumber(i,n){
    if(i>n)
    return;
    else
    {
        console.log(i);
        printNumber(++i,n);
    }
}
printNumber(1,10);

//print 4 to 30
function printNumber(i,n){
    if(i<=n)
    {
        console.log(i);
        printNumber(++i,n);
    }
}
printNumber(4,30);


//print 5 to 1
function printNumber(i,n)
{
    if(i>=n)
    {
        console.log(i);
        printNumber(--i,n);
    }
}
printNumber(5,1);

//print even number from 1 to 100
function printEvenNumber(i,n){
    if(i>n)
    return;
    if(i%2==0){
        console.log(i);
        printEvenNumber(++i,n);
    }
    else{
        printEvenNumber(i+1,n);
    }

}
printEvenNumber(1,100);

//print odd number from 1 to 100
function printOddNumber(i,n){
    if(i>n)
    return;
    if(i%2==1)
    {
        console.log(i);
        printOddNumber(++i,n);
    }
    else
    {
        printOddNumber(i+1,n);
    }
}
printOddNumber(1,100);

//Write factorial of 10
function factorial(n)
{
    if(n<=1)
     return 1;
     else{
         return n*factorial(n-1);
     }
}
factorial(5);