// console.log("this is scipt of this project")

let validName=false;
let validEmail=false;
let validPhone=false;

const Name=document.getElementById('name');
const email=document.getElementById('email')
const phone=document.getElementById('phone');
const address=document.getElementById('address');
const extra=document.getElementById('extra');
const car=document.getElementById('car');
// console.log(car.value)

// console.log(email)
Name.addEventListener('blur',()=>{
    // console.log("name is blur")
    // validate name here
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str=Name.value;
    // console.log(regex,str);
    if(regex.test(str)){
        Name.classList.remove("is-invalid");
        Name.classList.add("is-valid");
        validName=true;
        // console.log("it entered a valid username")
    }else{
        // console.log("you have entered in-valid name ")
        Name.classList.remove("is-valid");
        Name.classList.add("is-invalid");
    }
})

email.addEventListener('blur',()=>{
    // console.log("email is blur")
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    // console.log(regex,str);
    if(regex.test(str)){
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        validEmail=true;
        // console.log("it entered a valid email")
    }else{
        // console.log("you have entered in-valid email ")
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
    }
})

phone.addEventListener('blur',()=>{
    // console.log("phone is blur")
    // validate phone here
    let regex=/([0-9]){10}$/;
    let str=phone.value;
    // console.log(regex,str);
    if(regex.test(str)){
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
       validPhone=true;
        // console.log("it entered a valid phone number")
    }else{
        // console.log("you have entered in-valid phone number ")
        phone.classList.remove("is-valid");
        phone.classList.add("is-invalid");
    }
})

let submit=document.getElementById("submit");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("you have clicked on submit")
    // submit your form
    if(validEmail && validName && validPhone){
        let html1=` <div id="success" class="alert alert-success alert-dismissible fade m-0  " role="alert">
        <strong>Sucess!</strong> Your travel request has been successfully submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`
        let alt=document.getElementById('alrt');
        alt.innerHTML=html1;
        let success=document.getElementById('success')
        success.classList.add("show")
        Name.value=null;
        email.value=null;
        phone.value=null;
        extra.value=null;
        address.value=null;
        car.value="Marcedies Benz";
        phone.classList.remove("is-valid");
        email.classList.remove("is-valid");
        Name.classList.remove("is-valid");

    }else{
        let html2=`<div id="danger" class="alert alert-danger alert-dismissible fade m-0  " role="alert">
        <strong>Error!</strong> Your have not filled any information correctly please check 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`
        let alt=document.getElementById('alrt');
        alt.innerHTML=html2;
        let danger=document.getElementById('danger')
        danger.classList.add("show")       
    }

})

