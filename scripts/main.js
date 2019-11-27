/*---Set function to prompt user for input when they visit site---*/
myName = () => {
  var userName = prompt('What is your name?');
  if (userName != null) {
    alert('Hello there, ' + userName + '!');
  } else {
    alert('You didn\'t enter your name!');
  }
};
myName();
/*---Set variable to addBtn element on to-do list by accessing DOM using
 query selector to search for its class name--*/
const addBtn = document.querySelector('.addBtn');
/*---Set variable to input element on to-do list--*/
var input = document.querySelector('.myInput');
/*---Set variable to content div---*/
var content = document.querySelector('.content');

/*---Set class named task to create constructor object, which will create the
 task div for list---*/
class task {
  constructor(taskName) {
    this.createDiv(taskName);
  }
  /*Create parent object from constructor, which is used to create a new input
   element for every task added to list---*/
  createDiv(taskName) {
      let input = document.createElement('input');
      input.value = taskName;
      /*---Input value is set to disabled so users can't add task until
       condition is met of entering text value---*/
      input.disabled = true;
      input.classList.add('taskInput');
      input.type = "text";

      /*---Create a new div element for adding new tasks to list---*/
      var taskBox = document.createElement('div');
      taskBox.classList.add('task');

      /*---Declare variables for creating an edit button that will be displayed
      for each task added to the list and add this to editBtn class---*/
      let editBtn = document.createElement('button');
      editBtn.innerHTML = "Edit";
      editBtn.classList.add('editBtn');

      /*---Declare variables for creating a delete button that will be displayed
      for each task added to the list and add this to deleteBtn class---*/
      let deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "Delete";
      deleteBtn.classList.add('deleteBtn');

      /*---Add tasks to content div on page---*/
      content.appendChild(taskBox);

      /*---Add input, edit, and delete buttons to new div on list---*/
      taskBox.appendChild(input);
      taskBox.appendChild(editBtn);
      taskBox.appendChild(deleteBtn);

      /*---Add EventListener event to listen for edit and delete buttons
       being clicked--*/
      editBtn.addEventListener('click', () => this.edit(input));

      deleteBtn.addEventListener('click', () => this.delete(taskBox));
    }
    /*---Set conditional statement for deleting tasks from list if task input
    value is given---*/
    edit(input) {
      input.disabled = !input.disabled;
    }
    /*---Delete task from list---*/
    delete(task) {
      content.removeChild(task);
    }

}

/*--Function checks for add button being clicked, sets conditional statement to
 check if user adds task by entering text values---*/
function myCheck() {
  if (input.value != "") {
      new task(input.value);
      input.value = "";
    /*---If they don't add text values, execute alert statement---*/
  } else {
    alert('Please type text to add tasks!');
  }
}
/*---Listening for add button being clicked---*/
addBtn.addEventListener('click', myCheck);
/*---Listening for ENTER key being pressed to add tasks---*/
window.addEventListener('keypress', (e) => {
  if (e.which === 13) {
    myCheck();
  }
})
