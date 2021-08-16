let addTask = document.querySelector('#input-btn');
let input = document.querySelector('#input-field');
let tasksList = document.querySelector('#tasksList');

// Create the 'Add' Button and the tasks list 
addTask.onclick = function () {
    if (input.value === '') {
        alert('No task written, please write a task to do');

    } else {

        let task = document.createElement("li");
        let taskContent = document.createTextNode(input.value);
        task.appendChild(taskContent);

        //  Styling the task when checked

        task.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                console.log(ev.target);
                ev.target.classList.toggle('checked');
            }
        });
        tasksList.appendChild(task);

        //   Clear the input field
        input.value = '';

        // Create the "close" X button and append it to each list item

        let tasksNumber = document.getElementsByTagName('li');

        for (let i = 0; i < tasksNumber.length; i++) {
            var btnSpan = document.createElement("SPAN");
            let closeBtn = document.createTextNode("\u00D7");
            btnSpan.className = "close";
            btnSpan.appendChild(closeBtn);
            tasksNumber[i].appendChild(btnSpan);
        }

        let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                this.parentElement.style.display = "none";
            }
        }
        // create the 'Remove all' button

        if (tasksNumber.length === 1) {
            let removeAllBtnContainer = document.querySelector('.container')
            let removeAll = document.createElement('button');
            removeAll.classList.add('removeAll-btn');
            removeAll.innerHTML += 'Remove All';
            removeAllBtnContainer.appendChild(removeAll);
            removeAll.onclick = function () {
                while (tasksList.firstChild) {
                    tasksList.removeChild(tasksList.firstChild);
                }
                removeAll.remove()
            }

        }


    }

}