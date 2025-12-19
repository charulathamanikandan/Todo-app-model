    let students = ["Anu", "Rahul", "Priya"];

    function displayStudents() {
      let list = document.getElementById("studentList");
      list.innerHTML = "";

      students.forEach(function(name) {
        let li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
      });

      document.getElementById("count").innerText =
        "Total Students: " + students.length;
    }

    

    function addStudent() {
      let name = document.getElementById("studentInput").value;
      if (name !== "") {
        students.push(name);
        document.getElementById("studentInput").value = "";
        displayStudents();
      }
    }

    function removeLast() {
      students.pop();
      displayStudents();
    }

    function removeFirst() {
      students.shift();
      displayStudents();
    }

    function addFirst() {
      let name = document.getElementById("studentInput").value;
      if (name !== "") {
        students.unshift(name);
        document.getElementById("studentInput").value = "";
        displayStudents();
      }
    }

    function findStudent() {
      let name = document.getElementById("studentInput").value;
      let index = students.indexOf(name);

      if (index === -1) {
        alert("Student not found");
      } else {
        alert(name + " found at index " + index);
      }
    }

    displayStudents();