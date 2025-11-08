document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = document.querySelector(".btn.btn-primary"); // nút Đăng ký

  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // --- Lấy dữ liệu từ form ---
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("comfirm-password").value.trim();

    const inputs = document.querySelectorAll(".col-6 input, .row.text-center input");
    const customerName = inputs[3].value.trim();
    const email = inputs[4].value.trim();
    const address = inputs[5].value.trim();
    const phone = inputs[6].value.trim();
    const agree = document.getElementById("agree").checked;

    // --- Kiểm tra hợp lệ ---
    if (!username || !password || !confirmPassword || !customerName || !email || !address || !phone) {
      alert("⚠️ Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Mật khẩu nhập lại không khớp!");
      return;
    }

    if (!agree) {
      alert("⚠️ Bạn cần đồng ý với điều khoản trước khi đăng ký!");
      return;
    }

    // --- Lấy danh sách tài khoản đã đăng ký ---
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // --- Kiểm tra trùng tên đăng nhập ---
    if (users.some(u => u.username === username)) {
      alert("⚠️ Tên tài khoản đã tồn tại. Vui lòng chọn tên khác!");
      return;
    }

    // --- Thêm người dùng mới ---
    const newUser = {
      username,
      password,
      name: customerName,
      email,
      address,
      phone
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Đăng ký thành công! Hãy đăng nhập để tiếp tục.");
    window.location.href = "login.html";
  });
});
