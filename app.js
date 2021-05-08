'use strict';

function searchByName(){
  
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
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
        alert('Sorry, looks like there is no one with that name.');
    }
    
}

function searchByGender(){
  
    let gender = document.forms['genderForm']['gender'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.gender === gender){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }

    else{
        alert('Please search for male or female');
    }
}

function searchByDob(){
  
    let dob = document.forms['dobForm']['dob'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.dob === dob){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }

    else{
        alert('No existing date of birth');
    }
}

function searchByHeight(){
  
    let height = document.forms['heightForm']['height'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.height === height){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }

    else{
        alert('No existing height');
    }
}

function searchByWeight(){
  
    let weight = document.forms['weightForm']['weight'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.weight === weight){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }

    else{
        alert('No existing weight');
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


