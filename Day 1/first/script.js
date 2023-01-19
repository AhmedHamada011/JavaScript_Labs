var firstName, lastName, fullName, isFullName, birthYear;

firstName = prompt("Enter your first name:");

lastName = prompt("Enter your last name:");

fullName = `${firstName} ${lastName}`;

isFullName = confirm(`Is "${fullName}" `);

if(isFullName)
{

}
birthYear = prompt("Enter your birth year:");

alert(`Welcome ${fullName} you are ${2023 - birthYear} years old`);