document.addEventListener("DOMContentLoaded", () => {
  const toastEl = document.getElementById("cartToast");
  if (!toastEl) return;
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
 
  document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // không chuyển trang
      toast.show();       // hiển thị popup
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ index.js loaded");
 
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentUser = localStorage.getItem("currentUser");
  const userButtons = document.getElementById("user-buttons");
 
  if (!userButtons) return;
 
  // 🧩 Tự động xác định đường dẫn tới profile.html
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const siteIndex = pathParts.indexOf("sites");
  let basePath = "./";
  if (siteIndex !== -1) {
    const depthAfterSites = pathParts.length - (siteIndex + 1);
    basePath = "../".repeat(depthAfterSites);
  }
  const profilePath = `${basePath}sites/profile.html`;
 
  console.log("🌐 Đường dẫn profile:", profilePath);
 
  // 🧩 Nếu chưa đăng nhập => giữ nguyên giao diện
  if (!isLoggedIn || !currentUser) return;
 
  // 🧩 Ẩn nút đăng nhập / đăng ký
  userButtons.querySelectorAll("a").forEach(a => {
    const alt = a.querySelector("img")?.getAttribute("alt")?.toLowerCase() || "";
    const text = a.textContent.trim().toLowerCase();
    const href = a.getAttribute("href")?.toLowerCase() || "";
 
    if (
      alt.includes("đăng nhập") || alt.includes("đăng ký") ||
      text.includes("đăng nhập") || text.includes("đăng ký") ||
      href.includes("login") || href.includes("register")
    ) {
      console.log("🧹 Ẩn nút:", text);
      a.style.setProperty("display", "none", "important");
      a.style.setProperty("visibility", "hidden", "important");
      a.style.setProperty("opacity", "0", "important");
      a.style.setProperty("pointer-events", "none", "important");
    }
  });
 
  // 🧩 Tạo nút thông tin người dùng
  const infoBtn = document.createElement("a");
  infoBtn.href = profilePath;
  infoBtn.className =
    "btn background-blue btn-lg fw-bold d-flex align-items-center user-btn nav-item-box btn-outline-dark";
  infoBtn.innerHTML = `${currentUser}`;
 
  // 🧩 Nút đăng xuất
  const logoutBtn = document.createElement("a");
  logoutBtn.href = "#";
  logoutBtn.className =
    "btn background-blue btn-lg fw-bold d-flex align-items-center user-btn nav-item-box btn-outline-dark";
  logoutBtn.innerHTML = "Đăng xuất";
 
  // 🧩 Thêm sau nút Giỏ hàng
  const cartBtn = userButtons.querySelector('img[alt="Giỏ hàng"]')?.closest("a");
  if (cartBtn) {
    cartBtn.insertAdjacentElement("afterend", infoBtn);
    infoBtn.insertAdjacentElement("afterend", logoutBtn);
  } else {
    userButtons.appendChild(infoBtn);
    userButtons.appendChild(logoutBtn);
  }
 
  // 🧩 Xử lý đăng xuất
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
    alert("Đã đăng xuất!");
    location.reload();
  });
});
 
 
// 🧩 Kiểm tra đăng nhập khi nhấn "Mua ngay", "🛒" hoặc giỏ hàng navbar
document.addEventListener("DOMContentLoaded", () => {
  console.log("🛒 Kích hoạt kiểm tra đăng nhập cho nút mua hàng...");
 
  // Kiểm tra trạng thái đăng nhập
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
 
  // ✅ Tự động xác định đường dẫn login.html phù hợp với vị trí hiện tại
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const siteIndex = pathParts.indexOf("sites");
  let basePath = "./";
  if (siteIndex !== -1) {
    const depthAfterSites = pathParts.length - (siteIndex + 1);
    basePath = "../".repeat(depthAfterSites);
  }
  const loginPath = `${basePath}sites/login.html`;
  console.log("📁 Đường dẫn login:", loginPath);
 
  // ✅ Chọn các nút cần kiểm tra
  const buyNowButtons = document.querySelectorAll('a[href$="check_out.html"]');
  const cartButtons = document.querySelectorAll(".add-to-cart-btn");
  const cartNavButtons = document.querySelectorAll('a[href$="cart.html"]');
 
  // ⚙️ Hàm xử lý khi chưa đăng nhập
  function redirectIfNotLoggedIn(event) {
    if (!isLoggedIn) {
      event.preventDefault();
      alert("⚠️ Vui lòng đăng nhập để tiếp tục mua hàng!");
      window.location.href = loginPath;
    }
  }
 
  // 🔗 Gắn sự kiện kiểm tra
  [...buyNowButtons, ...cartButtons, ...cartNavButtons].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", redirectIfNotLoggedIn);
    }
  });
 
  console.log("✅ Kiểm tra đăng nhập đã sẵn sàng.");
});