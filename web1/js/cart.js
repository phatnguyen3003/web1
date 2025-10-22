const MAX_ITEM_COUNT = 3;

for (let i = 1; i <= MAX_ITEM_COUNT; i++) {
    const plusBtn = document.getElementById(`plusBtn${i}`);
    const minusBtn = document.getElementById(`minusBtn${i}`);
    const quantityInput = document.getElementById(`quantity${i}`);

    if (plusBtn && minusBtn && quantityInput) {

        plusBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });

        minusBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            let minValue = parseInt(quantityInput.min) || 1; 

            if (currentValue > minValue) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
}