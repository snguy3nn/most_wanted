'use strict';

function searchById(filterPeople){
  
    let id = document.forms['dataForm']['id'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.id == id){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByName(filterPeople){
  
    let firstNameInput = document.forms['dataForm']['fname'].value;
    let lastNameInput = document.forms['dataForm']['lname'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.firstName === firstNameInput || person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByGender(filterPeople){
  
    let gender = document.forms['dataForm']['gender'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.gender === gender){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByDob(filterPeople){
  
    let dob = document.forms['dataForm']['dob'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.dob === dob){
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
  
    let eyeColor = document.forms['dataForm']['eyeColor'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.eyeColor === eyeColor){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByOccupation(filterPeople){
  
    let occupation = document.forms['dataForm']['occupation'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.occupation === occupation){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByParents(filterPeople){
  
    let parents = document.forms['dataForm']['parents'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.parents === parents){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

function searchByCurrentSpouse(filterPeople){
  
    let currentSpouse = document.forms['dataForm']['currentSpouse'].value;
    let filteredPeople = filterPeople.filter(function (person) {
        if(person.currentSpouse == currentSpouse){
            return true;
        }
        return false;
    });
    return filteredPeople;
}


function filteredSearch(foundPeople){
    let concat = ""
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


function searchByMultiple(){
    let filteredPeople = people;
    if(document.forms['dataForm']['id'].value != ""){
        filteredPeople = searchById(filteredPeople);
    }
    if(document.forms['dataForm']['fname'].value != ""){
        filteredPeople= searchByName(filteredPeople);
    }
    if(document.forms['dataForm']['lname'].value != ""){
        filteredPeople= searchByName(filteredPeople);
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
    if(document.forms['dataForm']['parents'].value != ""){
        filteredPeople = searchByParents(filteredPeople);
    }
    if(document.forms['dataForm']['currentSpouse'].value != ""){
        filteredPeople = searchByCurrentSpouse(filteredPeople);
    }
    if(filteredPeople.length > 0){
        filteredSearch(filteredPeople);
    }
    else{
        alert('Sorry, there are no matching results')
    }
    
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

