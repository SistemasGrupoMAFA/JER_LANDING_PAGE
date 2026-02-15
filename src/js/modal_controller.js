
//Supervisor de seguridad en obra civil
const showModalSupervisorSeguridadObraCivil = document.getElementById('modalDetalleSupervisorSeguridadObraCivil');

const btnCerrarModalSupervisorSeguridadObraCivil = document.getElementById('btnCerrarSupervisorSeguridadObraCivil');
const btnAbrirModalSupervisorSeguridadObraCivil =  document.getElementById('btnShowModalSupervisorSeguridadObraCivil')

// Accion opara abrir el detalle de seguridad en obra civil
btnAbrirModalSupervisorSeguridadObraCivil.addEventListener('click',()=>{

    showModalSupervisorSeguridadObraCivil.classList.remove('hidden');
    showModalSupervisorSeguridadObraCivil.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo

})

// Accion opara cerrar el detalle de seguridad en obra civil
btnCerrarModalSupervisorSeguridadObraCivil.addEventListener('click', ()=>{

    showModalSupervisorSeguridadObraCivil.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-habilita el scroll de la página

});



//Supervisor de seguridad industrial
const showModalSupervisorSeguridadIndustrial = document.getElementById('modalDetalleSupervisorSeguridadIndustrial');

const btnCerrarModalSupervisorSeguridadIndustrial = document.getElementById('btnCerrarSupervisorSeguridadIndustrial');
const btnAbrirModalSupervisorSeguridadIndustrial =  document.getElementById('btnShowModalSupervisorSeguridadIndustrial')

// Accion opara abrir el detalle de seguridad industrial
btnAbrirModalSupervisorSeguridadIndustrial.addEventListener('click',()=>{

    showModalSupervisorSeguridadIndustrial.classList.remove('hidden');
    showModalSupervisorSeguridadIndustrial.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo

})

// Accion opara cerrar el detalle de seguridad industrial
btnCerrarModalSupervisorSeguridadIndustrial.addEventListener('click', ()=>{

    showModalSupervisorSeguridadIndustrial.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-habilita el scroll de la página

});







//galeria de fotos

const showModalGaleria = document.getElementById('modalDetalleGaleria');

const btnCerrarModalGaleria = document.getElementById('btnCerrarModalGaleria');
const btnAbrirModalGaleria =  document.getElementById('btnShowModalGaleria');





// Accion opara abrir el detalle  capacitate 
btnAbrirModalGaleria.addEventListener('click',()=>{

    showModalGaleria.classList.remove('hidden');
    showModalGaleria.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo

})

// Accion opara cerrar el detalle capacitate 
btnCerrarModalGaleria.addEventListener('click', ()=>{

    showModalGaleria.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-habilita el scroll de la página

});


