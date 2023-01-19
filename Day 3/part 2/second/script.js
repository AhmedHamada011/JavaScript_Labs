
var contacts = [] // used to store object of contact

function addContact()
{
    var newContact = {};
    newContact.name = prompt("Enter contact name");
    newContact.phone = prompt("Enter contact phone");
    contacts.push(newContact);
}

function searchByNameOrPhone()
{
    let serachKeyWord = prompt("Enter search Keyword");
    let notFound = true;
    for(let i=0; i< contacts.length;i++)
    {
        let currentContact = contacts[i];
        if(currentContact.name == serachKeyWord || currentContact.phone == serachKeyWord)
        {
            alert(`contact found\n name is ${currentContact.name}, phone is ${currentContact.phone}`);
            notFound = false;
            break;
        }

    }

    if(notFound)
    {
        alert("Sorry, Contact not found");
    }
}

function contactApp()
{
    let start = true;

    do{
        let op = prompt("Enter opeartion (add,search,exit)");
        switch (op) {
            case "add":
                addContact();
                break;
            case "search":
                searchByNameOrPhone();
                break;
            case "exit":
                start = false;
                break;
        }
    }while(start)
}

contactApp();
