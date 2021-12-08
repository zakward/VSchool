const form = document["myForm"]
submitBTN = document.getElementById("submit")

function formAlert (e) {
    e.preventDefault()
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.location.value
    const diet = [ ]
    for(let i = 0; i < form.dietOptions.length; i++){
        if(form.dietOptions[i].checked) {
            diet.push(form.dietOptions[i].value)
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet);
}

submitBTN.addEventListener("click", formAlert)
