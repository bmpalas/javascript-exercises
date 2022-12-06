const getTheTitles = function() {
        const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]


const a = []; // creat the array
books.forEach(function(obj){ //use Array.forEach()
    a.push(obj.title); // for each element, use Array.push() to push the 
    //element.title) 
})
return a;
};

// Do not edit below this line
module.exports = getTheTitles;
