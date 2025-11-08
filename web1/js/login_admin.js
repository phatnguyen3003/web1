const accounts = [
    { username: "quanly1", password: "abcd1234"}
];
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput= document.getElementById("password");
const error1 = document.getElementById("loginError");
 form.addEventListener("submit", function(test) {
test.preventDefault();
const username = usernameInput.value.trim();
const password = passwordInput.value.trim();
 if (!username || !password) {
          error1.textContent = "Vui lòng nhập đầy đủ tài khoản và mật khẩu!";
          error1.style.display = "block";
          return;
        }
    const found= accounts.find(
        acc => acc.username=== username &&  acc.password === password
    )
    if (found)
    {
        alert("Đăng nhập thành công!");
        localStorage.setItem("AdminLogged", "quanly1");
        window.location.href= "../admin/index.html";
 
    }
    else
    {
        passwordInput.value="";
        passwordInput.focus();
        error1.textContent="Nhập sai tên người dùng hoặc mật khẩu!";
        error1.style.display="block";
    }
 }
);
usernameInput.addEventListener("input", ()=> error1.style.display="none");
passwordInput.addEventListener("input", () => error1.style.display="none");