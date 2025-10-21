document.addEventListener("DOMContentLoaded", () => {
  const qtyInput = document.getElementById("quantity");
  const minusBtn = qtyInput?.previousElementSibling;
  const plusBtn = qtyInput?.nextElementSibling;

  if (qtyInput && minusBtn && plusBtn) {
    minusBtn.addEventListener("click", () => {
      let value = parseInt(qtyInput.value) || 1;
      if (value > 1) qtyInput.value = value - 1;
    });

    plusBtn.addEventListener("click", () => {
      let value = parseInt(qtyInput.value) || 1;
      qtyInput.value = value + 1;
    });
  }
});
