// 1. Capturamos las referencias a los elementos del DOM (Esto sí va afuera)
const idForm = document.getElementById('idForm');
const idFullName = document.getElementById('idFullName');
const idCompany = document.getElementById('idCompany');
const idEmail = document.getElementById('idEmail');
const idPhoneNumber = document.getElementById('idPhoneNumber');
const idMessage = document.getElementById('idMessage');

if (idForm) {
    // 2. Escuchamos el evento 'submit' del formulario (No el 'click' del botón)
    idForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Detiene la recarga nativa para que no borre los datos antes de tiempo

        // 3. RECUPERAMOS LOS VALORES EN EL MOMENTO EXACTO (Dentro del evento)
        const fullname = idFullName.value.trim();
        const company = idCompany.value.trim();
        const email = idEmail.value.trim();
        const phone = idPhoneNumber.value.trim();
        const message = idMessage.value.trim();

     
        // 4. Empaquetamos todos los campos del formulario para Formspree
        const formData = new FormData(idForm);

        try {
            // 5. Enviamos a Formspree en segundo plano
            const response = await fetch(idForm.action, {
                method: idForm.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // 6. ¡ÉXITO! Hasta que Formspree confirma la recepción, limpiamos todo de golpe
                idForm.reset(); 
                alert('¡Mensaje enviado con éxito!');
            } else {
                alert('Hubo un problema al enviar tus datos. Intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error de red al conectar con el server:', error);
        }
    });
}