const checkLength = (element, errorMessage ="This field is required", minLength = 1) => {
    console.log(element.target.id)

    if (element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = errorMessage
    }
    else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText =""
    }
}

const checkEmail = (element, errorMessage = "You must enter an valid email") => {
    if (!element.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = errorMessage
    } else {
        cument.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText =""
    }
}
const validate = (e) => {
  switch(e.target.type) {
    case "text":
        checkLength(e, `You must enter a ${e.target.id}`, 2)
        break;
        case "email":
        checkLength(e)
        break;
        case "textarea":
            checkLength(e, `You must enter a ${e.target.id}`, 5)
            break;
  }
} 