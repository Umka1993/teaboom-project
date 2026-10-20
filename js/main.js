(() => {
  "use strict";

  const packagingRoot = document.querySelector("[data-packaging]");
  const skuDisplay = document.querySelector("[data-sku-display]");
  const priceDisplay = document.querySelector("[data-price-display]");
  const oldPriceDisplay = document.querySelector("[data-old-price-display]");
  const oldPriceBlock = document.querySelector(".product__price-old");
  const addToCartButton = document.querySelector("[data-add-to-cart]");
  const toast = document.querySelector("[data-toast]");

  if (!packagingRoot || !skuDisplay || !priceDisplay) {
    return;
  }

  const formatPrice = (value) => {
    const number = Number(value);

    if (Number.isNaN(number)) {
      return value;
    }

    return number.toLocaleString("ru-RU", {
      minimumFractionDigits: number % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    });
  };

  const updatePurchaseInfo = (option) => {
    const sku = option.dataset.sku;
    const price = option.dataset.price;
    const oldPrice = option.dataset.oldPrice;

    skuDisplay.textContent = sku;
    priceDisplay.textContent = formatPrice(price);

    if (oldPrice && oldPriceDisplay && oldPriceBlock) {
      oldPriceDisplay.textContent = formatPrice(oldPrice);
      oldPriceBlock.hidden = false;
    } else if (oldPriceBlock) {
      oldPriceBlock.hidden = true;
    }
  };

  const setActiveOption = (option) => {
    const options = packagingRoot.querySelectorAll(".packaging__option");

    options.forEach((item) => {
      const isActive = item === option;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-checked", String(isActive));
    });

    updatePurchaseInfo(option);
  };

  packagingRoot.addEventListener("click", (event) => {
    const option = event.target.closest(".packaging__option");

    if (!option || !packagingRoot.contains(option)) {
      return;
    }

    setActiveOption(option);
  });

  packagingRoot.addEventListener("keydown", (event) => {
    const options = Array.from(
      packagingRoot.querySelectorAll(".packaging__option")
    );
    const currentIndex = options.findIndex((item) =>
      item.classList.contains("is-active")
    );

    if (currentIndex < 0) {
      return;
    }

    let nextIndex = currentIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % options.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + options.length) % options.length;
    } else {
      return;
    }

    event.preventDefault();
    options[nextIndex].focus();
    setActiveOption(options[nextIndex]);
  });

  let toastTimerId = null;

  const showToast = (message) => {
    if (!toast) {
      return;
    }

    toast.hidden = false;
    toast.textContent = message;

    // Force reflow so the transition runs after removing [hidden]
    void toast.offsetWidth;
    toast.classList.add("is-visible");

    clearTimeout(toastTimerId);
    toastTimerId = setTimeout(() => {
      toast.classList.remove("is-visible");
      setTimeout(() => {
        toast.hidden = true;
      }, 250);
    }, 2200);
  };

  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      const activeOption = packagingRoot.querySelector(
        ".packaging__option.is-active"
      );
      const weight = activeOption?.dataset.weight ?? "";
      const sku = activeOption?.dataset.sku ?? "";

      showToast(`Добавлено в корзину: Ананасовый улун, ${weight} (арт. ${sku})`);
    });
  }

  const initialOption =
    packagingRoot.querySelector(".packaging__option.is-active") ||
    packagingRoot.querySelector(".packaging__option");

  if (initialOption) {
    updatePurchaseInfo(initialOption);
  }
})();
