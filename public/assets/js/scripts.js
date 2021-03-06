
function onOff() {
    document
        .querySelector("#modal")
        .classList.toggle("hide")

    document
        .querySelector('body')
        .classList
        .toggle("hide-scroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("add-scroll")
}

function checkFields(event) {
    const valuesTocheck = [
        "image",
        "title",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesTocheck.find(function(value) {
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = ! event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) 
            return true
    })

    if(isEmpty) {
        event.preventDefault()
        alert('Por favor, preencha todos os campos.')
    }
}