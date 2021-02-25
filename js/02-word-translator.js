let translate = prompt('Please enter the language you wish to translate es, de, en or fr');

switch (translate) {
  case "es":
    alert('Hello World in Spanish is: "Hola Mundo"');
    break;
  case "de":
    alert('Hello World in German is: "Hallo Welt"');
    break;
  case "en":
    alert('Hello World in English is: "Hello World"');
    break;
  case "fr":
    alert('Hello World in French is: "Bonjour le monde"');
    break; 
  default:
    alert('Hello World in English is: "Hello World"');
}