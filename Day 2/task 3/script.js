function convertToTowelveHours(hour)
{
  hour = Number(hour);
  if(hour > 0 && hour <= 12)
  {
    alert(`Hour is ${hour} AM`);
  }else if(hour > 12 && hour < 24)
  {
    alert(`Hour is ${hour - 12} PM`);

  }else
  {
    alert("Please enter valid hour");
  }
}

var hour = prompt("Enter hours: ");

convertToTowelveHours(hour);

