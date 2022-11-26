const body = document.querySelector("body");
const navBar = document.querySelector(".nav-bar");
const logoBrand = document.getElementById("logo");
const lineWork = document.querySelector(".line-work");
const arrowTop = document.querySelector(".arrow-top");


let scrollYBefore = 0;

const changeNavBar = (e) =>{
    // console.log(window.scrollY);
    // console.log("dentro de la funcion");
    // console.log(e);


    if(window.scrollY >= scrollYBefore ){
        scrollYBefore = window.scrollY;

        if(window.scrollY > 350){
            
            navBar.classList.remove("sliceDown");
            navBar.classList.add("sliceUp");
            navBar.classList.add("hide");
        }
        
    }else{
        scrollYBefore = window.scrollY;
        
        navBar.classList.remove("hide");
        navBar.classList.add("sliceDown");
        navBar.classList.remove("sliceUp");
    }

    if(window.scrollY > 50){
        navBar.classList.add("nav-gray");
        logoBrand.classList.add("scale-down");
        lineWork.classList.add("fade-out");
        
        //colorNav.style.opacity = 0.8;
    }

    if(window.scrollY < 50){
        navBar.classList.remove("nav-gray");
        logoBrand.classList.remove("scale-down");
        lineWork.classList.remove("fade-out");
    }

    if(window.scrollY > 350){
        arrowTop.classList.remove("hide");
    }
    if(window.scrollY < 350){
        arrowTop.classList.add("hide");
    }


}

    


window.addEventListener("scroll", e => changeNavBar(e));







// //!  Form Validation

// const $nameField = document.querySelector("[name=name]"),
//         $emailField = document.querySelector("[name=email]"),
//         $subjectField = document.querySelector("[name=subject]"),
//         $textAreaField = document.querySelector("[name=text-area]");


// $nameField.addEventListener("blur", (e) => verifyEmptyField(e, "Por favor, complete el nombre"));
// $emailField.addEventListener("blur", (e) => verifyEmptyField(e, "Ingrese un email"));
// $subjectField.addEventListener("blur", (e) => verifyEmptyField(e, "Coloque un asunto"));
// $textAreaField.addEventListener("blur", (e) => verifyEmptyField(e, "Falta un mensaje"));

// $emailField.addEventListener("input", (e) => validateEmailFormat(e, "Ingrese un email válido"));


// const verifyEmptyField = (e, message) => {
//     const field = e.target;

//     if(field.value.trim().length === 0){
//         setError(e, message, true);
//     }else {
//         setError(e, "", false);
//     }
// }

// const setError = (e, message, isError = true) => {
//     const field = e.target;

//     if(isError === true){
//         field.classList.add("error");
//         field.nextElementSibling.classList.add("invalid");
//         field.nextElementSibling.textContent = message;
//     }else {
//         field.classList.remove("error");
//         field.nextElementSibling.classList.remove("invalid");
//         field.nextElementSibling.textContent = "";
//     }
// }

// const validateEmailFormat = (e, message) => {
//     const field = e.target;

//     const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

//     if (field.value.trim().length > 5 && !regex.test(field.value)){ 
//         setError(e, message, true);
//     } else {
//         setError(e, "", false);
//     }
// }