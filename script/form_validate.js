const $ = document.querySelector.bind(document);

const form = $("form");


const valid_form = (form) => {
    const emailReg = /^[\w\W\d._-]+@[\w\W\d.-]+\.[\w\W]{2,4}$/;
    if (emailReg.test(form.email.value) == false) {
        return false;
    }  
    if (form.password?.value.length < 8) {
        return false;
    };
    if (form.ten?.value.length < 4) {
        return false;
    };
    if (form.noidung?.value.length < 10) {
        return false;
    };
    return true;
}

form.addEventListener("submit", (event) => {
    
    if (valid_form(form)) {
        alert("da gui du lieu");
    } else {
        alert("ko dung dk");
    }
    event.preventDefault();

})