const username = 'pamelazuni';
const profileImg = document.querySelector('.about-me > div > img'); //The child combinator (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first. https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator
const profileRepo = document.querySelector('.right-side > .github-actions > .repo');    
const profileFollowers = document.querySelector('.right-side .followers')

async function getApiGitHub(){

    try{

        const dadosPerfil = await fetch(`https://api.github.com/users/${username}`);
        const perfil = await dadosPerfil.json();

        profileImg.src = perfil.avatar_url;
        profileRepo.innerHTML = `${perfil.public_repos} Repositories`;
        profileFollowers.innerHTML = `${perfil.followers} Followers`;

    }catch (error) {
        console.log(error);
    }

}
getApiGitHub();



let userName = window.document.getElementById('name');
let userEmail = document.querySelector('#email'); //id select is # if it was a class would be .
let newSubject = document.querySelector('#subject');
let newMessage = document.querySelector('#message');
let nameOk = false //boolean variable
let emailOk = false
let subjectOk = false
let messageOk = false

function validateName() { //these functions are called through the events in index.html code
    let txtName = document.querySelector('#txtName')
    
    if (userName.value.length < 3) {
       txtName.innerHTML = 'Name Invalid'
       txtName.style.color = 'red'
    } else {
        txtName.innerHTML = 'Name Valid'
        txtName.style.color = 'green'
        nameOk = true
    }
}

function validateEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    
    if (userEmail.value.indexOf('@') == -1 || userEmail.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = 'E-mail Invalid'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Valid'
        txtEmail.style.color = 'green' 
        emailOk = true
    }
}

function validateSubject() {
    let txtSubject = document.querySelector('#txtSubject')

    if (newSubject.value.length >= 50) {
        txtSubject.innerHTML = 'Text is too big, digit maximum 50 caracteres'
        txtSubject.style.color = 'red'
        txtSubject.style.display = 'block'
    } else {
        txtSubject.style.display = 'none'
        subjectOk = true
    }
}
function validateMessage() {
    let txtMessage = document.querySelector('#txtMessage')

    if (newMessage.value.length >= 500) {
        txtMessage.innerHTML = 'Text is too big, digit maximum 500 caracteres'
        txtMessage.style.color = 'red'
        txtMessage.style.display = 'block'
    } else {
        txtMessage.style.display = 'none'
        messageOk = true
    }
}

function toSend() {
    if(nameOk == true && emailOk == true && subjectOk == true && messageOk == true) {
        alert ('Form sent successfully')
    } else {
        alert ('Full out the form correctly before sending')
    }
}



