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