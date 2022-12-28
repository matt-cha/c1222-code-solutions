var library = [
  {
    isbn: '100',
    title: '1984',
    author: 'George Orwell'
  },
  {
    isbn: '9',
    title: 'A cooking book',
    author: 'Betty Crocker'
  },
  {
    isbn: '51',
    title: 'The Schwa Was Here',
    author: 'Andy Something'
  }
];
console.log('type of library:', typeof library);
var libraryJSON = JSON.stringify(library);
console.log('type of JSON stringify library:', typeof libraryJSON);
var JSONstring = '{"name": "Joe Mama", "id": 8}';
console.log('type of json string:', typeof JSONstring);
var jsonParse = JSON.parse(JSONstring);
console.log('type of json parse:', typeof jsonParse);
