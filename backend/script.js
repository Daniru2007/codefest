const showPassword = document.querySelector
("#show-password");
const PasswordField = document.querySelector
("#password");
showPassword.addEventListener("click",function(){
    this.classlist.toggle("fa-eye-slash");
    const type = PasswordField.getAttribute("type")
    ==="password" ? "text" : "password";
    PasswordField.setAttribute("type", type);
})