window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  function toggleMenu() {
    const menuToggle = document.querySelector(".menutoggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  }

  // function sendEmail(){
  //   Email.send({
  //     Host : "smtp.gmail.com",
  //     Username : "sukantasaha481@gmail.com",
  //     Password : "password",
  //     To : 'sukantasaha481@gmail.com',
  //     From : document.getElementById("email").value,
  //     Subject : "This is New Enquiry",
  //     Body : "And this is the body"
  // }).then(
  //   message => alert(message)
  // );
  // }
  let errorName=document.getElementById('errorName');
  let errorMail=document.getElementById('errorMail'); 
  let checkIcon=document.getElementsByClassName('icon');
  function nameValidation(){
    var name=document.getElementById('name').value;
    if (name.length===0){
      errorName.innerHTML="Full name required";
      return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
      errorName.innerHTML="Write Full Name";
      return false;
    }
    checkIcon.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
  }