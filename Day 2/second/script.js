var text, count=0;

text = prompt("Enter a string");

for (let index = 0; index < text.length; index++) {
  
  if(text[index].toLocaleLowerCase() == "a" || text[index].toLocaleLowerCase() == "e" || text[index].toLocaleLowerCase() == "o" ||
  text[index].toLocaleLowerCase() == "u" || text[index].toLocaleLowerCase() == "i")
  {
    count++;
  }

}

alert(count);
