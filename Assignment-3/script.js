//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");



function addNewStudent(){
    
    

    var table = document.getElementById("myTable");
    var selectedRow = table.lastElementChild.lastElementChild;
    var index = selectedRow.rowIndex
    
    console.log("There are " + index + "row in table")
    var tbody = document.getElementsByTagName("tbody")[0];
    var studentName = table.lastElementChild.lastElementChild?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0"

    var lastIndex = studentName.split(" ")[1];

    var trNode = document.createElement("tr");
    var tdCheckBoxNode = document.createElement("td");
    tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /> </br></br> <buttun id = "hideBottun"><img src = "down.png" width="25" height="25"></button>' 
    
    var tdButton = document.createElement("td")
    tdButton.innerHTML = '<buttun><img src = "down.png"></button>'


    var tdStudent = document.createElement("td");
    tdStudent.innerHTML = 'Student '+ (parseInt(lastIndex)+1)
    var tdTeacher = document.createElement("td");
    tdTeacher.innerHTML = 'Teacher '+ (parseInt(lastIndex)+1)

    var tdSatus = document.createElement("td");
    tdSatus.innerHTML = 'Approved'

    var tdSemester = document.createElement("td");
    tdSemester.innerHTML = 'Fall'

    if ((parseInt(lastIndex)+1) % 2 == 0){
      var tdType = document.createElement("td");
      tdType.innerHTML = 'TA'
    }else{
      var tdType = document.createElement("td");
      tdType.innerHTML = 'RA'
    }
    

    var tdBudget = document.createElement("td");
    tdBudget.innerHTML = '12345'

    var tdPerc = document.createElement("td");
    tdPerc.innerHTML = '100%'

    trNode.appendChild(tdCheckBoxNode);
    
    trNode.appendChild(tdStudent);
    trNode.appendChild(tdTeacher);
    trNode.appendChild(tdSatus);
    trNode.appendChild(tdSemester);
    trNode.appendChild(tdType);
    trNode.appendChild(tdBudget);
    trNode.appendChild(tdPerc);
    tbody.appendChild(trNode)
  
    alert("New student successfully added!");


    // if(trNode.rowIndex % 2 == 0){
    //   hiddenRow()
    // }
    var selectedRow = table.lastElementChild.lastElementChild;
    var index = selectedRow.rowIndex
    
    console.log("There are " + index + "row in table")

    var tdNode2 = table.insertRow(index+1)

    var tdText = document.createElement("td");
    tdText.innerHTML = 'Advisor: </br></br>Award detail: </br>Summer 1 2014(TA or RA) </br>Budget number: </br>Tuition Number: </br> Comment: id = "M" '

    tdNode2.appendChild(tdText)

}



function onClickCheckBox(checkBox){
  var selectedRow = checkBox.parentElement.parentElement;
  if(checkBox.checked==true){
      selectedRow.style.backgroundColor="yellow";
      var deleteButton = document.createElement("td");
      deleteButton.innerHTML = '<button id="Delete" type="button" onclick="onDeleteRow(this)">Delete</button> </br> <button id="Edit" type="button" onclick="onEdit(this)">&nbsp;&nbspEdit&nbsp;&nbsp</button>' 
      
      selectedRow.appendChild(deleteButton);
  }
  else{
      selectedRow.style.backgroundColor="#fff";
      selectedRow.deleteCell(8) 
  }
  
  console.log(checkBox);
}


function onDeleteRow(deletedRef){
  var selectedRow = deletedRef.parentElement.parentElement;
  var index = selectedRow.rowIndex
  console.log(selectedRow.rowIndex);
  document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
  alert(index +" has been deleted");

}

function onEdit(){
  var message = prompt("Enter a new Award value: ")
  alert(message);

}
// function showDetail(){
//   if( document.getElementById("hidethis").style.display=='none' ){
//     document.getElementById("hidethis").style.display = 'table-row'; // set to table-row instead of an empty string
//   }else{
//     document.getElementById("hidethis").style.display = 'none';
//   }
// }

// function toggle(){
//   var table = document.getElementById("myTable");

//   var rowIndex = table.lastElementChild.lastElementChild.rowIndex

//   if(rowIndex % 2 == 0){
//     var tbody = document.getElementsByTagName("tbody")[0];

//     var textAdded = "Advisor: </br></br>Award detail: </br>Summer 1 2014(TA or RA) </br>Budget number: </br>Tuition Number: </br> Comment: "

//     var trNode = document.createElement("tr");

//     var tdMerge = document.querySelector('td');
//     tdMerge.setAttribute('colspan', 20);

//     var tdhiddenCell = document.createElement("td");
//     tdhiddenCell.innerHTML = textAdded

//     trNode.appendChild(tdhiddenCell);
//     tbody.appendChild(trNode)
//   }
  

// }

// function toggle(btnID, eIDs) {
//   // Feed the list of ids as a selector
//   var theRows = document.querySelectorAll(eIDs);
//   // Get the button that triggered this
//   var theButton = document.getElementById(btnID);
//   // If the button is not expanded...
//   if (theButton.getAttribute("aria-expanded") == "false") {
//     // Loop through the rows and show them
//     for (var i = 0; i < theRows.length; i++) {
//       theRows[i].classList.add("shown");
//       theRows[i].classList.remove("hidden");
//     }
//     // Now set the button to expanded
//     theButton.setAttribute("aria-expanded", "true");
//   // Otherwise button is not expanded...
//   } else {
//     // Loop through the rows and hide them
//     for (var i = 0; i < theRows.length; i++) {
//       theRows[i].classList.add("hidden");
//       theRows[i].classList.remove("shown");
//     }
//     // Now set the button to collapsed
//     theButton.setAttribute("aria-expanded", "false");
//   }
// }