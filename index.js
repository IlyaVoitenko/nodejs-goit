const contactsService = require("./db");
const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contactsService.getlistContacts();
      console.log(listContacts);
      return listContacts;
    case "getContactById":
      const contact = await contactsService.getContactById(id);
      console.log(contact);
      return contact;
    case "removeContactById":
      const contactRemoved = await contactsService.removeContact(id);
      return console.log(contactRemoved);

    case "addNewContact":
      const newContact = await contactsService.addContact(name, email, phone);
      console.log(newContact);
      return newContact;
    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

program
  .option("-a,--action <type>")
  .option("-i,--id <type>")
  .option("-n,--name <type>")
  .option("-e,--email <type>")
  .option("-p,--phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
