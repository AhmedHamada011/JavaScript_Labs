var howManyNumbers, numberHolder=[],  sum=0;

alert("Welcome to sum and average calc");

howManyNumbers =  Number(prompt("How many numbers you want to calc sum and average"));

for(let i = 0; i < howManyNumbers; i++)
{
    let temp = Number(prompt(`Enter number (${i+1}) : `));
    numberHolder.push(temp);
}

for(var item of numberHolder)
{
    sum = sum + item;
}
alert(`The sum is: ${sum}`);

alert(`The average is: ${sum/numberHolder.length}`);









