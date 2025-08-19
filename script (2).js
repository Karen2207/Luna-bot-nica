let products = [
    
    { id: 1, name: "Suculenta em Vaso de Cerâmica", price: 45.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZWo4bohQTQCqqG1W5yKi3N-W74uj4gpn20qL8Gt1BRh8ioTZ8qOiSuUH&s=10", description: "Suculenta em vaso de cerâmica artesanal, perfeita para decoração de interiores.", category: "plantas" },
    { id: 2, name: "Samambaia Americana", price: 65.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUn9vUtMARV3LfjZoWiVmbryG7000WVCUpcqD5WV8GMpJOcSI9dHTYm4&s=10", description: "Samambaia americana em vaso suspenso, ideal para varandas e ambientes internos.", category: "plantas" },
    { id: 3, name: "Cactário Mini", price: 80.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJ5fymD5N6z4nEbl5OO1Nv86GMTmrydDTnXu8w0MqeNYVdt7qd-Z5qyc&s=10", description: "Conjunto de 3 mini cactos em vaso de madeira rústico.", category: "plantas" },
    { id: 4, name: "Orquídea Phalaenopsis", price: 120.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjykLpyXyKR3H_7TkEbmKedKIDOC1GuQPQegPhi6dt-Ka6uQrC6KNTrgA8&s=10", description: "Orquídea Phalaenopsis branca em vaso decorativo, com flores por até 3 meses.", category: "plantas" },
    { id: 5, name: "Jiboia em Vaso Suspenso", price: 55.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgIdUrIHQPXGnkURpR8_2-Bs2N7u6y6uk_3Ava3TPRkATs8Swhp0hcOM&s=10", description: "Jiboia em vaso suspenso de macramê, perfeita para prateleiras e estantes.", category: "plantas" },
    { id: 6, name: "Zamioculca", price: 75.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEycZmJ6e2-mHajAmVtMYbozKx_YWFdnka17dz2KjEemPvXC-1zgU-SY&s=10", description: "Zamioculca em vaso moderno, planta resistente que requer pouca manutenção.", category: "plantas" },
    { id: 11, name: "Vaso Autoirrigável Moderno", price: 130.00, image: "https://m.media-amazon.com/images/I/816hFPowyIL._UF350,350_QL80_.jpg", description: "Vaso autoirrigável em design moderno, disponível em várias cores.", category: "plantas" },
    { id: 12, name: "Terrário Aberto", price: 95.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLIZU7YhUjWAYdYxDweBWarW_C7f_xrtE5zVcurS5jlWDGf3rBejwhzXw&s=10", description: "Terrário aberto com suculentas e pedras decorativas.", category: "plantas" },
    
    
    { id: 7, name: "Buquê de Rosas Clássico", price: 180.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIav-Ii-Fwry-V7K_8PpE5aPaR8y1hzNFdzwN-2bdAx_qCZtwgjryOQFQ&s=10", description: "12 rosas vermelhas frescas com folhagem complementar.", category: "arranjos" },
    { id: 8, name: "Arranjo de Flores do Campo", price: 150.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OCrR1UbhDzLHWSiybrzYwDrjT8ZLJeufIySJAJhUz_JaoeGYktOysvQ&s=10", description: "Arranjo campestre com flores da estação em vaso rústico.", category: "arranjos" },
    { id: 13, name: "Arranjo Minimalista Branco", price: 220.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71k_OSAbAzWZQsITP1fuaL3jb7RpuJdy1lXWodSnEfEklkQfvSdGSSt0&s=10", description: "Arranjo elegante com flores brancas e folhagens verdes.", category: "arranjos" },
    { id: 14, name: "Cesta de Flores Primaveris", price: 190.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLMJAcu6X3QIn4-6hu9sL80-iFRmp9qjudfeavB4vju1U4QB3g2BNv7k&s=10", description: "Cesta com flores coloridas da estação, perfeita para presentear.", category: "arranjos" },
    { id: 15, name: "Arranjo de Rosas e Eucalipto", price: 210.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuEuRklOgJPJF9Xf9HoQsT3DyEklsrJhOYhsKUYGh40pcaWNk3BepTC6r&s=10", description: "Combinação clássica de rosas com folhas de eucalipto.", category: "arranjos" },
    { id: 16, name: "Buquê de Girassóis", price: 175.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2CE6FTyyu4ovUwPTY_GgAu9eNFmbMzGw9T8u5hQCKCIyMeFc8Vs6ogA&s=10", description: "Buquê vibrante com girassóis frescos.", category: "arranjos" },
    { id: 17, name: "Arranjo Tropical", price: 240.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RJUkRuO9ipvoQkMYOXJMwVxA0B4b-Z_E53NCw6M1Txxo0aF9C-uXZ5yn&s=10", description: "Arranjo exótico com flores tropicais e folhagens.", category: "arranjos" },
    
    
    
    { id: 9, name: "Caixa de Chocolates com Rosas", price: 220.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpVMIAySZ6Wmn48IaJOoE2VAldcswI5py9479stV2rfHHxkSW5SE2MqQ&s=10", description: "Caixa de chocolates finos acompanhada de buquê de 6 rosas frescas.", category: "presentes" },
    { id: 10, name: "Kit Romântico: Chocolates + Orquídea", price: 250.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7aEkOZl_qSC7SEr6QKak3inSzxX4em7AEh5gyFWuyDtOE0nA-qayGNuE&s=10", description: "Orquídea branca em vaso decorativo com caixa de chocolates premium.", category: "presentes" },
    { id: 18, name: "Cesta Premium de Chocolate e Flores", price: 280.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNcou9W-vBqZuzWdHhzJ2UxEjFM4EctRaFN_Mvk5Xk2MFubr3q82G-Ak&s=10", description: "Cesta com variedade de chocolates artesanais e arranjo floral médio.", category: "presentes" },
    { id: 19, name: "Mini Buquê com Trufas", price: 160.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNcou9W-vBqZuzWdHhzJ2UxEjFM4EctRaFN_Mvk5Xk2MFubr3q82G-Ak&s=10", description: "Buquê compacto de flores do campo com 8 trufas selecionadas.", category: "presentes" },
    { id: 20, name: "Chocolate Quente Especial + Flores", price: 180.00, image: "https://imageswscdn.wslojas.com.br/files/29572/MED_produto-kit-mini-arranjo-chocolates-7526.png", description: "Kit com chocolate premium e pequeno arranjo floral.", category: "presentes" },
    { id: 21, name: "Rosas Vermelhas e Caixa de Bombons", price: 210.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5vH79ZDWwfPYdfBLm2syEF7BWHyGYB-uBQsBw-Zh2UIpsZFiT34CYYE&s=10", description: "12 rosas vermelhas com caixa de bombons importados.", category: "presentes" },
    { id: 22, name: "Kit Aniversário: Flores + Chocolates", price: 230.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlDzlbqOjs1WaJRuwqDNO3NaAkdcWi9ZL2dzWa6sStD0k3sTpR3lgQzAj&s=10", description: "Arranjo festivo com flores coloridas e chocolates decorativos.", category: "presentes" },
    { id: 23, name: "Surpresa Doce com Mini Arranjo", price: 190.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdTTU7mvr4o14WFa1cK6i60gZncXqRPTRXrMNjkklGEniH0WsD6sKsvY&s=10", description: "Seleção de doces finos acompanhada de pequeno arranjo floral.", category: "presentes" },
    { id: 24, name: "Coleção de Chocolates com Girassóis", price: 240.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKJUPCb96Rj6qu4VbbwExkfSNntjmbCgxPfo4Bh3e_ez_GQR7Uqyybbbp&s=10", description: "3 girassóis frescos com coleção de chocolates especiais.", category: "presentes" },
    { id: 25, name: "Kit Premium: Flores + Champagne + Chocolates", price: 350.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWQXSXroGXRzlsRxdgTfIyElRQO0hnDwF5dr9oLHTKOPJQ2uGCedGasQ&s=10", description: "Arranjo floral premium, garrafa de champagne e chocolates finos.", category: "presentes" }
];


let cart = [];
let appliedCoupon = null;
let currentUser = null;

const coupons = {
    "LUNAROSA15": { type: "percentage", value: 15, minPurchase: 25 },
    "VERDEDESC20": { type: "fixed", value: 20, minPurchase: 100 }
};


const productList = document.getElementById("product-list");
const messageDiv = document.getElementById("message");
const searchInput = document.getElementById("search-input");
const loginModal = document.getElementById("login-modal");
const profileModal = document.getElementById("profile-modal");
const loginButton = document.getElementById("login-button-icon");
const welcomeMessage = document.getElementById("welcome-message");
const loginForm = document.getElementById("login-form");
const profileForm = document.getElementById("profile-form");
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");
const cartSection = document.getElementById("cart-section");
const cartItemsContainer = document.getElementById("cart-items-container");
const clearCartBtn = document.getElementById("clear-cart-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutSection = document.getElementById("checkout-section");
const paymentSection = document.getElementById("payment-section");
const checkoutItemsTableBody = document.getElementById("checkout-items-table-body");
const checkoutSubtotalSpan = document.getElementById("checkout-subtotal");
const checkoutDiscountSpan = document.getElementById("checkout-discount");
const checkoutFinalTotalSpan = document.getElementById("checkout-final-total");
const couponInput = document.getElementById("coupon-input");
const applyCouponBtn = document.getElementById("apply-coupon-btn");
const couponMessage = document.getElementById("coupon-message");
const confirmPurchaseBtn = document.querySelector(".confirm-purchase-btn");
const backToCartBtn = document.querySelector(".back-to-cart-btn");
const backToCheckoutBtn = document.querySelector(".back-to-checkout-btn");
const paymentMethods = document.querySelectorAll(".payment-method");
const pixPayment = document.getElementById("pix-payment");
const creditPayment = document.getElementById("credit-payment");
const navButtons = document.querySelectorAll(".nav-btn");
const profileBtn = document.getElementById("profile-btn");


function formatPrice(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function showMessage(message, isError = true) {
    messageDiv.textContent = message;
    messageDiv.style.color = isError ? "var(--error-color)" : "var(--success-color)";
    setTimeout(() => messageDiv.textContent = "", 3000);
}


function displayProducts(filteredProducts = products) {
    productList.innerHTML = "";
    
    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p class="empty-message">Nenhum produto encontrado.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
    
  
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const productId = parseInt(e.target.dataset.id);
            addProductToCart(productId);
        });
    });
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function addProductToCart(productId) {
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ productId, quantity: 1 });
    }
    
    updateCartCount();
    showMessage("Produto adicionado ao carrinho!", false);
    
    if (cartSection.classList.contains("hidden")) {
     
        const notification = document.createElement("div");
        notification.className = "cart-notification";
        notification.textContent = "Item adicionado ao carrinho!";
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add("show");
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

function removeProductFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    updateCartCount();
    renderCart();
    showMessage("Produto removido do carrinho!");
}

function updateCartItemQuantity(productId, newQuantity) {
    const item = cart.find(item => item.productId === productId);
    
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        updateCartCount();
        renderCart();
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm("Tem certeza que deseja esvaziar o carrinho?")) {
        cart = [];
        appliedCoupon = null;
        updateCartCount();
        renderCart();
        showMessage("Carrinho esvaziado!");
    }
}

function renderCart() {
    cartItemsContainer.innerHTML = "";
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio.</p>';
        checkoutBtn.disabled = true;
        return;
    }
    
    checkoutBtn.disabled = false;
    
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        
        if (product) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${product.name}</h4>
                    <p>Preço: ${formatPrice(product.price)}</p>
                    <div class="cart-item-quantity-control">
                        <button class="quantity-btn" data-id="${product.id}" data-action="decrease">-</button>
                        <span>${cartItem.quantity}</span>
                        <button class="quantity-btn" data-id="${product.id}" data-action="increase">+</button>
                    </div>
                    <p class="cart-item-total">Total: ${formatPrice(product.price * cartItem.quantity)}</p>
                </div>
                <button class="remove-from-cart-btn" data-id="${product.id}">Remover</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        }
    });
    
    
    document.querySelectorAll(".quantity-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const productId = parseInt(e.target.dataset.id);
            const action = e.target.dataset.action;
            const item = cart.find(item => item.productId === productId);
            
            if (item) {
                if (action === "increase") {
                    updateCartItemQuantity(productId, item.quantity + 1);
                } else if (action === "decrease") {
                    updateCartItemQuantity(productId, item.quantity - 1);
                }
            }
        });
    });
    
    document.querySelectorAll(".remove-from-cart-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const productId = parseInt(e.target.dataset.id);
            removeProductFromCart(productId);
        });
    });
}


function calculateOrderTotals() {
    let subtotal = 0;
    
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        if (product) {
            subtotal += product.price * cartItem.quantity;
        }
    });
    
    let discount = 0;
    
    if (appliedCoupon) {
        const couponData = coupons[appliedCoupon];
        if (couponData) {
            if (subtotal >= couponData.minPurchase) {
                if (couponData.type === "percentage") {
                    discount = subtotal * (couponData.value / 100);
                } else if (couponData.type === "fixed") {
                    discount = couponData.value;
                }
            }
        }
    }
    
    const finalTotal = subtotal - discount;
    return { subtotal, discount, finalTotal };
}

function renderCheckoutSummary() {
    checkoutItemsTableBody.innerHTML = "";
    const { subtotal, discount, finalTotal } = calculateOrderTotals();
    
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        
        if (product) {
            const row = checkoutItemsTableBody.insertRow();
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${cartItem.quantity}</td>
                <td>${formatPrice(product.price)}</td>
                <td>${formatPrice(product.price * cartItem.quantity)}</td>
            `;
        }
    });
    
    checkoutSubtotalSpan.textContent = formatPrice(subtotal);
    checkoutDiscountSpan.textContent = formatPrice(discount);
    checkoutFinalTotalSpan.textContent = formatPrice(finalTotal);
    

    const installmentsSelect = document.getElementById("card-installments");
    installmentsSelect.innerHTML = "";
    
    const maxInstallments = Math.min(12, Math.floor(finalTotal / 50));
    
    for (let i = 1; i <= maxInstallments; i++) {
        const installmentValue = finalTotal / i;
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `${i}x de ${formatPrice(installmentValue)} ${i > 1 ? 'sem juros' : ''}`;
        installmentsSelect.appendChild(option);
    }
    
    couponMessage.textContent = "";
    
    if (appliedCoupon) {
        couponInput.value = appliedCoupon;
        couponMessage.textContent = `Cupom "${appliedCoupon}" aplicado!`;
        couponMessage.style.color = "var(--success-color)";
    } else {
        couponInput.value = "";
    }
}


function setupPaymentMethods() {
    paymentMethods.forEach(method => {
        method.addEventListener("click", () => {
            paymentMethods.forEach(m => m.classList.remove("active"));
            method.classList.add("active");
            
            const paymentType = method.dataset.method;
            
            if (paymentType === "pix") {
                pixPayment.classList.remove("hidden");
                creditPayment.classList.add("hidden");
            } else if (paymentType === "credit") {
                pixPayment.classList.add("hidden");
                creditPayment.classList.remove("hidden");
            }
        });
    });
    

    document.querySelector(".copy-btn").addEventListener("click", () => {
        const pixCode = "123e4567-e89b-12d3-a456-426614174000";
        navigator.clipboard.writeText(pixCode)
            .then(() => {
                showMessage("Código PIX copiado!", false);
            })
            .catch(err => {
                console.error("Erro ao copiar código PIX:", err);
                showMessage("Erro ao copiar código. Tente novamente.");
            });
    });
    

    document.getElementById("credit-card-form").addEventListener("submit", (e) => {
        e.preventDefault();
        processCreditCardPayment();
    });
}

function processCreditCardPayment() {

    showMessage("Processando pagamento...", false);
    
    setTimeout(() => {
        const { finalTotal } = calculateOrderTotals();
        alert(`Pagamento de ${formatPrice(finalTotal)} realizado com sucesso!`);
        completePurchase();
    }, 2000);
}

function completePurchase() {
    if (cart.length === 0) return;
    
    const { finalTotal } = calculateOrderTotals();
    showMessage(`Compra finalizada! Valor: ${formatPrice(finalTotal)}`, false);
    
    
    cart = [];
    appliedCoupon = null;
    updateCartCount();
    

    showSection("product-list");
}


function showSection(sectionId, category = null) {
    
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    
    if (sectionId === "product-list") {
        productList.classList.remove("hidden");
        
        if (category) {
            const filtered = products.filter(product => product.category === category);
            displayProducts(filtered);
        } else {
            displayProducts();
        }
    } else if (sectionId === "cart-section") {
        cartSection.classList.remove("hidden");
        renderCart();
    } else if (sectionId === "checkout-section") {
        checkoutSection.classList.remove("hidden");
        renderCheckoutSummary();
    } else if (sectionId === "payment-section") {
        paymentSection.classList.remove("hidden");
    }
}

function setupNavigation() {
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const section = button.dataset.section;
            const category = button.dataset.category;
            

            navButtons.forEach(btn => btn.classList.remove("active"));
      
            button.classList.add("active");
            
            showSection(section, category);
        });
    });
    
    profileBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openProfileModal();
    });
}

// Funções de login/perfil
function openLoginModal() {
    loginModal.style.display = "flex";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login-message").textContent = "";
}

function closeLoginModal() {
    loginModal.style.display = "none";
}

function openProfileModal() {
    if (!currentUser) {
        openLoginModal();
        return;
    }
    
    profileModal.style.display = "flex";
    

    document.getElementById("profile-name").value = currentUser.name || "";
    document.getElementById("profile-email").value = currentUser.email || "";
    document.getElementById("profile-address").value = currentUser.address || "";
    document.getElementById("profile-phone").value = currentUser.phone || "";
}

function closeProfileModal() {
    profileModal.style.display = "none";
}

function updateUIForLoggedInUser() {
    if (currentUser) {
        loginButton.style.display = "none";
        welcomeMessage.textContent = `Olá, ${currentUser.name}`;
        welcomeMessage.style.display = "inline";
        

        if (!document.getElementById("logout-button")) {
            const logoutButton = document.createElement("button");
            logoutButton.id = "logout-button";
            logoutButton.textContent = "Sair";
            logoutButton.addEventListener("click", logoutUser);
            welcomeMessage.parentNode.appendChild(logoutButton);
        }
    } else {
        loginButton.style.display = "flex";
        welcomeMessage.style.display = "none";
        const logoutButton = document.getElementById("logout-button");
        if (logoutButton) logoutButton.remove();
    }
}

function logoutUser() {
    currentUser = null;
    updateUIForLoggedInUser();
    showMessage("Você foi desconectado.");
    closeProfileModal();
}


document.addEventListener("DOMContentLoaded", () => {
    
    displayProducts();
    

    setupNavigation();
    
    
    setupPaymentMethods();
    
    
    cartIcon.addEventListener("click", (e) => {
        e.preventDefault();
        showSection("cart-section");
    });
    
    clearCartBtn.addEventListener("click", clearCart);
    checkoutBtn.addEventListener("click", () => showSection("checkout-section"));
    
    
    applyCouponBtn.addEventListener("click", applyCoupon);
    confirmPurchaseBtn.addEventListener("click", () => showSection("payment-section"));
    backToCartBtn.addEventListener("click", () => showSection("cart-section"));
    backToCheckoutBtn.addEventListener("click", () => showSection("checkout-section"));
    
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const loginMessage = document.getElementById("login-message");
        
        
        if (email === "teste@email.com" && password === "123456") {
            currentUser = {
                name: "Usuário Teste",
                email: email,
                address: "Rua das Flores, 123",
                phone: "(11) 99999-9999"
            };
            
            loginMessage.textContent = "";
            closeLoginModal();
            updateUIForLoggedInUser();
            showMessage("Login realizado com sucesso!", false);
        } else {
            loginMessage.textContent = "E-mail ou senha incorretos.";
            loginMessage.style.color = "var(--error-color)";
        }
    });
    

    window.addEventListener("click", (e) => {
        if (e.target === loginModal) closeLoginModal();
        if (e.target === profileModal) closeProfileModal();
    });
    
  
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (currentUser) {
            
            currentUser.name = document.getElementById("profile-name").value;
            currentUser.email = document.getElementById("profile-email").value;
            currentUser.address = document.getElementById("profile-address").value;
            currentUser.phone = document.getElementById("profile-phone").value;
            
            showMessage("Perfil atualizado com sucesso!", false);
            updateUIForLoggedInUser();
            setTimeout(() => closeProfileModal(), 1000);
        }
    });
   
    document.querySelector(".search-box button").addEventListener("click", (e) => {
        e.preventDefault();
        searchProduct();
    });
    
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchProduct();
        }
    });
});

function searchProduct() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === "") {
        showMessage("Digite algo para buscar");
        displayProducts();
        return;
    }
    
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filtered);
    
    if (filtered.length === 0) {
        showMessage("Nenhum produto encontrado");
    }
}

function applyCoupon() {
    const code = couponInput.value.trim().toUpperCase();
    
    if (code === "") {
        couponMessage.textContent = "Digite um código de cupom";
        couponMessage.style.color = "var(--error-color)";
        appliedCoupon = null;
        renderCheckoutSummary();
        return;
    }
    
    const coupon = coupons[code];
    const { subtotal } = calculateOrderTotals();
    
    if (!coupon) {
        couponMessage.textContent = "Cupom inválido";
        couponMessage.style.color = "var(--error-color)";
        appliedCoupon = null;
    } else if (subtotal < coupon.minPurchase) {
        couponMessage.textContent = `Mínimo de ${formatPrice(coupon.minPurchase)} para este cupom`;
        couponMessage.style.color = "var(--error-color)";
        appliedCoupon = null;
    } else {
        appliedCoupon = code;
        couponMessage.textContent = `Cupom aplicado: ${code}`;
        couponMessage.style.color = "var(--success-color)";
    }
    
    renderCheckoutSummary();
}