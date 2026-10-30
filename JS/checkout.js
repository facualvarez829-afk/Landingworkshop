
document.addEventListener("DOMContentLoaded", () => {
  const tickets = {
    early: {
      name: "Early Bird",
      price: 25000
    },

    general: {
      name: "General",
      price: 35000
    },

    virtual: {
      name: "Virtual",
      price: 15000
    }
  };
  const quantityElement = document.getElementById("quantity");

  const decreaseButton = document.getElementById("decrease");
  const increaseButton = document.getElementById("increase");

  const continueButton = document.getElementById("continueButton");
  const backButton = document.getElementById("backButton");

  const ticketSection = document.getElementById("ticketSection");
  const formSection = document.getElementById("formSection");

  const checkoutForm = document.getElementById("checkoutForm");

  const ticketSummary = document.getElementById("ticketSummary");
  const subtotalElement = document.getElementById("subtotal");
  const serviceFeeElement = document.getElementById("serviceFee");
  const totalElement = document.getElementById("total");

  const elements = [
    quantityElement,
    decreaseButton,
    increaseButton,
    continueButton,
    backButton,
    ticketSection,
    formSection,
    checkoutForm,
    ticketSummary,
    subtotalElement,
    serviceFeeElement,
    totalElement
  ];

  if (elements.some(element => !element)) {
    console.error(
      "Error: falta algún elemento del checkout en el HTML."
    );
    return;
  }

  let quantity = 1;

  function formatPrice(price) {
    return "$" + price.toLocaleString("es-AR");
  }

  function getSelectedTicket() {

    const selectedTicket = document.querySelector(
      'input[name="ticket"]:checked'
    );

    if (!selectedTicket) {
      return null;
    }

    return tickets[selectedTicket.value];
  }

  function updateSummary() {

    const ticket = getSelectedTicket();

    if (!ticket) {
      return;
    }

    const subtotal = ticket.price * quantity;

    const serviceFee = subtotal * 0.05;

    const total = subtotal + serviceFee;

    ticketSummary.textContent =
      `${quantity} ${quantity === 1 ? "entrada" : "entradas"} ${ticket.name}`;

    subtotalElement.textContent = formatPrice(subtotal);

    serviceFeeElement.textContent = formatPrice(serviceFee);

    totalElement.textContent = formatPrice(total);

  }

  increaseButton.addEventListener("click", () => {

    quantity++;

    quantityElement.textContent = quantity;

  });

  decreaseButton.addEventListener("click", () => {

    if (quantity > 0) {
      quantity--;
    }

    quantityElement.textContent = quantity;

  });

  continueButton.addEventListener("click", () => {

    // Evitar cantidad igual a cero
    if (quantity === 0) {

      alert("Tenés que seleccionar al menos una entrada.");

      return;
    }

    updateSummary();

    ticketSection.classList.add("d-none");

    formSection.classList.remove("d-none");

    formSection.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

  });

  backButton.addEventListener("click", () => {

    formSection.classList.add("d-none");

    ticketSection.classList.remove("d-none");

  });

  checkoutForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!checkoutForm.checkValidity()) {

      checkoutForm.reportValidity();

      return;
    }

    window.location.href = "./pages/Error404.html";

  });

  quantityElement.textContent = quantity;

  updateSummary();

});
