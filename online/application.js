(function() {
  var db, input, ul;

  databaseOpen()
    .then(function() {
      input = document.querySelector('input');
      ul = document.querySelector('ul');
      document.body.addEventListener('submit', onSubmit); //when submit is clicked run function on submit
      document.body.addEventListener('click', onClick);  //when delete button is clicked run onClick function
      document.body.addEventListener('click', onView); //When view button is clicked
      // alert("The database has been opened");
    })
    .then(refreshView); //make new item visible

    /*Function called at the begining to open the database */
    function databaseOpen() { 
      return new Promise(function(resolve, reject) {
        var version = 1;
        var request = indexedDB.open('todos', version);
  
        // Run migrations if necessary
        request.onupgradeneeded = function(e) {
          db = e.target.result;
          e.target.transaction.onerror = reject;
          db.createObjectStore('todo', { keyPath: '_id' });
        }; 
  
        request.onsuccess = function(e) {
          db = e.target.result;
          resolve(); //This line does not allow us to open/upload files.
        }; 
        request.onerror = reject;
      }); 
    }

  /*Retrieve an image file as a blob
  var xhr = new XMLHttpRequest(),
    blob;
  
  xhr.open("GET", "elephant.png", true); //change this for testing
  //set responseType to blob
  xhr.responseType = "blob";
  
  xhr.addEventListener("load", function(){
    if(xhr.status === 200){
      console.log("File retrieved");
      blob = xhr.response; //File as response;
      putTodoInDb(blob);  // Put the recieved blob into IndexedDB    
    }
  }, false);
  xhr.send //send XHR
  /*End of Retrieve an image file as a blob*/

  /*Start of putTodoInDB function
  putTodoInDb 
 */

  /* Delete button*/
  function onClick(e) { 
    // We'll assume that any element with an ID attribute is a to-do item. Don't try this at home!
    e.preventDefault(); 
    if (e.target.hasAttribute('id')) { 
      databaseTodosGetById(e.target.getAttribute('id')) //gets item by id
        .then(function(todo) { 
          return databaseTodosDelete(todo); //runs databaseTodosDelete function
        })
        .then(refreshView); //refresh page and makes doc go bye bye
    }
  }

  /*Submit Button*/
  function onSubmit(e) { 
    e.preventDefault(); //safety
    var todo = { text: input.value, _id: String(Date.now()) }; //creates a todo value
    databaseTodosPut(todo) //Runs databaseTodosPut (i think this puts the value in the database) on todo
      .then(function() {
        input.value = '';
      })
      .then(refreshView);
  }

  /* View Button */
  function onView(e){
    e.preventDefault(); 
    console.log(e.target.class); //currently undefined
    if (e.target.class == viewer) {  //if button is a view button, view
      alert("alert 2");
      databaseTodosGetById(e.target.getAttribute('id')) //gets item by id
        .then(function(todo) { 
          return databaseTodosView(todo); 
        })
    }
  }

  /* Makes the pdf viewed*/
  function databaseTodosView(todo){
    alert('pressed');
  };

  
  
  

//all changes to IndexedDB must be wrapped in a transaction
function databaseTodosPut(todo) {
    return new Promise(function(resolve, reject) {
      var transaction = db.transaction(['todo'], 'readwrite');
      var store = transaction.objectStore('todo');
      var request = store.put(todo);
      transaction.oncomplete = resolve;
      request.onerror = reject;
    });
  }

function databaseTodosGet() {
    return new Promise(function(resolve, reject) {
      var transaction = db.transaction(['todo'], 'readonly');
      var store = transaction.objectStore('todo');

      // Get everything in the store
      var keyRange = IDBKeyRange.lowerBound(0);
      var cursorRequest = store.openCursor(keyRange);

      // This fires once per row in the store, so for simplicity collect the data
      // in an array (data) and send it pass it in the resolve call in one go
      var data = [];
      cursorRequest.onsuccess = function(e) {
        var result = e.target.result;

        // If there's data, add it to array
        if (result) {
          data.push(result.value);
          result.continue();

        // Reach the end of the data
        } else {
          resolve(data);
        }
      };
    });
  }

    function refreshView() {
    return databaseTodosGet().then(renderAllTodos);
  }

  function renderAllTodos(todos) {
    var html = '';
    todos.forEach(function(todo) {
      html += todoToHtml(todo);
    });
    ul.innerHTML = html;
  }

  //This is what creates the visual todo, these atributes will be useful later
  function todoToHtml(todo) {
    return '<li><button id="'+todo._id+'">delete</button>'+todo.text+' <button class="viewer">view</button> </li>';
  } 


  function databaseTodosGetById(id) { 
    return new Promise(function(resolve, reject) {
      var transaction = db.transaction(['todo'], 'readwrite');
      var store = transaction.objectStore('todo');
      var request = store.get(id);
      request.onsuccess = function(e) {
        var result = e.target.result;
        resolve(result);
      };
      request.onerror = reject;
    });
  }

  /*Deletes todo from database, associated with onclick" */
  function databaseTodosDelete(todo) {
    return new Promise(function(resolve, reject) {
      var transaction = db.transaction(['todo'], 'readwrite');
      var store = transaction.objectStore('todo');
      var request = store.delete(todo._id);
      transaction.oncomplete = resolve;
      request.onerror = reject;
    });
  }
  


}());