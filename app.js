'use strict';

function searchByName(){
  
    let firstNameInput = document.forms['dataForm']['fname'].value;
    let lastNameInput = document.forms['dataForm']['lname'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput || person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
    
    else{
        alert('Sorry, looks like is no one with that information.');
    }
    
}

function searchByGender(){
  
    let gender = document.forms['dataForm']['gender'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.gender === gender){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
}

function searchByDob(){
  
    let dob = document.forms['dataForm']['dob'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.dob === dob){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
}

function searchByHeight(){
  
    let height = document.forms['dataForm']['height'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.height == height){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
}

function searchByWeight(){
  
    let weight = document.forms['dataForm']['weight'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.weight == weight){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
}

function searchByEyeColor(){
  
    let eyeColor = document.forms['dataForm']['eyeColor'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.eyeColor === eyeColor){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
}

function searchByOccupation(){
  
    let occupation = document.forms['dataForm']['occupation'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.occupation === occupation){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
}

function searchByParents(){
  
    let parents = document.forms['dataForm']['parents'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.parents === parents){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
}

function searchByCurrentSpouse(){
  
    let currentSpouse = document.forms['dataForm']['currentSpouse'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.currentSpouse === currentSpouse){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
}

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
        <td>${el.parents}</td>
        <td>${el.currentSpouse}</td>
        </tr>`
    })      
    document.getElementById("people").innerHTML = concat
}



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
    <td>${el.parents}</td>
    <td>${el.currentSpouse}</td>
    </tr>`
})       


