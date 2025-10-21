const accounts = [
    { username: "user1", password: "123456"}
];
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput= document.getElementById("password");
const error1 = document.getElementById("loginError");
 form.addEventListener("submit", function(test) {
test.preventDefault();
const username = usernameInput.value.trim();
const password = passwordInput.value.trim();
    const found= accounts.find(
        acc => acc.username=== username &&  acc.password === password
    )
    if (found)
    {
        alert("Đăng nhập thành công!");
        window.location.href= "../index.html";

    }
    else
    {
        passwordInput.value="";
        passwordInput.focus();
        error1.textContent="Nhập sai tên tài khoản dùng hoặc mật khẩu!";
        error1.style.display="block";
    }
 }
);
usernameInput.addEventListener("input", ()=> error1.style.display="none");
passwordInput.addEventListener("input", () => error1.style.display="none");
