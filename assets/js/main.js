const signInButton = document.querySelector(".sign-in__btn");
const cartButton = document.querySelector(".cart-btn");
const modal = document.querySelector(".overlay");
const loginSection = document.querySelector(".login__wrap");
const cart = document.querySelector(".cart__wrap");
const closeModalButtons = document.querySelectorAll(".btn-close-modal");

const openMenuButton = document.querySelector(".btn-open-menu");
const closeMenuButton = document.querySelector(".btn-close-menu");
const menu = document.querySelector(".menu");

const products = document.querySelectorAll(".product .product__card");
const addToCartButtons = document.querySelectorAll(".product .add-to-cart-btn");
const formSizes = document.querySelectorAll(".form-sizes");
const selectedSizes = document.querySelectorAll(".selected-size");

signInButton.onclick = () => {
    modal.classList.add("active");
    loginSection.classList.add("active");
};

openMenuButton.onclick = () => {
    modal.classList.add("active");
    menu.classList.add("active");
};

closeMenuButton.onclick = () => {
    modal.classList.remove("active");
    menu.classList.remove("active");
};

cartButton.onclick = () => {
    modal.classList.add("active");
    cart.classList.add("active");
};

modal.onclick = () => {
    modal.classList.remove("active");
    loginSection.classList.remove("active");
    cart.classList.remove("active");
    menu.classList.remove("active");
};

for (const button of closeModalButtons) {
    button.addEventListener("click", () => {
        modal.classList.remove("active");
        loginSection.classList.remove("active");
        cart.classList.remove("active");
    });
}

for (const [index, form] of formSizes.entries()) {
    const closeBtn = form.querySelector(".close-submit-btn");
    for (const input of form) {
        if (input.type === "radio") {
            input.id = `${input.value}-${index}`;
            const label = input.nextElementSibling;
            label.htmlFor = `${input.value}-${index}`;
            input.addEventListener("change", (e) => {
                selectedSizes[index].innerHTML = e.target.value;
            });
        }
    }

    closeBtn.onclick = () => {
        formSizes[index].classList.remove("active");
    };
}

for (const [index, button] of addToCartButtons.entries()) {
    button.addEventListener("click", () => {
        formSizes[index].classList.add("active");
    });
}

for (const [index, product] of products.entries()) {
    product.addEventListener("mouseleave", function () {
        formSizes[index].classList.remove("active");
    });
}

AOS.init();
