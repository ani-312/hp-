function buyWhatsApp(product) {
    let phone = "919219696976";
    let message = "Hello, I want to enquire about " + product;
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

function openWhatsApp() {
    let phone = "919219696976";
    let message = "Hello, I want to know about HP products";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}