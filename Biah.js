document.getElementById("whatsapp-container").addEventListener("click", function () {
    const adminPhoneNumber = "081351558743";
    
    const message = "Kirim ke WhatsApp admin untuk menanyakan sesuatu";
    alert(message);

    if (confirm(message)) {
    	const whatsappURL = `https://wa.me/${adminPhoneNumber}`;

    	window.open(whatsappURL, "_blank");
    }
});



