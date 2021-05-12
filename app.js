'use strict';

//Appended data table will always show
people.map(function(el){
    document.getElementById("people").innerHTML += `<tr>
    <td>${el.id}</td>
    <td>${el.firstName}</td>
    <td>${el.lastName}</td>
    <td>${el.gender}</td>
    <td>${el.dob}</td>
    <td>${el.height}</td>
    <td>${el.weight}</td>
    <td>${el.eyeColor}</td>
    <td>${el.occupation}</td>
    </tr>`
})       

//This function will display the filtered results
function filteredSearch(foundPeople){
    let concat = ''
    foundPeople.map(function(el){
        return concat += `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>                                            
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        </tr>`
    })      
    document.getElementById("people").innerHTML = concat
}


//Filtered search functions 
function searchById(filterPeople){
  
    let id = document.forms['dataForm']['id'].value.toLowerCase();
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.id.toLowerCase() == id){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByFirstName(filterPeople){
  
    let firstNameInput = document.forms['dataForm']['fname'].value.toLowerCase();
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.firstName.toLowerCase() === firstNameInput){
            return true;
        }
        return false;  
    });
    return filteredPeople;
}

function searchByLastName(filterPeople){
  
    let lastNameInput = document.forms['dataForm']['lname'].value.toLowerCase();
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.lastName.toLowerCase() === lastNameInput){
            return true;
        }
        return false;  
    });
    return filteredPeople;
}

function searchByGender(filterPeople){
  
    let gender = document.forms['dataForm']['gender'].value.toLowerCase();
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.gender.toLowerCase() === gender){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByDob(filterPeople){
  
    let dob = document.forms['dataForm']['dob'].value.toLowerCase();
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.dob.toLowerCase() === dob){
            return true;
        }
        return false;
    });
    return filteredPeople
}

function searchByHeight(filterPeople){
  
    let height = document.forms['dataForm']['height'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.height == height){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByWeight(filterPeople){
  
    let weight = document.forms['dataForm']['weight'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.weight == weight){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByEyeColor(filterPeople){
  
    let eyeColor = document.forms['dataForm']['eyeColor'].value.toLowerCase();
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.eyeColor.toLowerCase() === eyeColor){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByOccupation(filterPeople){
  
    let occupation = document.forms['dataForm']['occupation'].value.toLowerCase();
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.occupation.toLowerCase() === occupation){
            return true;
        }
        return false;
    });
    return filteredPeople;
}





//Multiple search function to narrow down list
function searchByMultiple(){
    let filteredPeople = people;
    if(document.forms['dataForm']['id'].value != ""){
        filteredPeople = searchById(filteredPeople);
    }
    if(document.forms['dataForm']['fname'].value != ""){
        filteredPeople= searchByFirstName(filteredPeople);
    }
    if(document.forms['dataForm']['lname'].value != ""){
        filteredPeople= searchByLastName(filteredPeople);
    }
    if(document.forms['dataForm']['gender'].value != ""){
        filteredPeople = searchByGender(filteredPeople);
    }
    if(document.forms['dataForm']['dob'].value != ""){
        filteredPeople = searchByDob(filteredPeople);
    }
    if(document.forms['dataForm']['height'].value != ""){
        filteredPeople = searchByHeight(filteredPeople);
    }
    if(document.forms['dataForm']['weight'].value != ""){
        filteredPeople = searchByWeight(filteredPeople);
    }
    if(document.forms['dataForm']['eyeColor'].value != ""){
        filteredPeople = searchByEyeColor(filteredPeople);
    }
    if(document.forms['dataForm']['occupation'].value != ""){
        filteredPeople = searchByOccupation(filteredPeople);
    }
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
    else{
        alert('Sorry, there are no matching results')
    }
}

