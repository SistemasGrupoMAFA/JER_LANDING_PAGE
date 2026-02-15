



 //Capacitate con nosotros
const showModalCapacitate = document.getElementById('modalDetalleCapacitate');

const btnCerrarModalCapacitate = document.getElementById('btnCerrarModalCapacitate');
const btnAbrirModalCapacitate =  document.getElementById('btnShowModalCapacitate')

 const createGridCursos = document.getElementById('listado-cursos');

 const nextPage = document.getElementById('siguiente')



let count = 0

 let cursos =[
    {
        
        "titulo":"SEGURIDAD INDUSTRIAL NIVEL SUPERIOR"

    },
     {
        
        "titulo":"USO Y MANEJO DE EXTINTORES"

    },
     {
       
        "titulo":"SELECCIÓN USO Y MANEJO DE PROTECCION PERSONAL"

    },
     {
        
        "titulo":"SEGURIDAD EN ESCALINATAS Y ESCALERAS DE MANO"

    },
      {
        
        "titulo":"PROTECCION CONTRA CAIDAS"

    },
     {
        
        "titulo":"IDENTIFICACION DE PELIGROS Y EVALUACION DE RIESGOS"

    },
     {
        
        "titulo":"CONDICIONES DE SEGURIDAD E HIGIENE PARA REALIZAR TRABAJOS EN ALTURAS"

    },
     {
        
        "titulo":"CONTROL DE ENERGIA PELIGROSA BLOQUEO Y ETIQUETADO"

    },
     {
        
        "titulo":"SEGURIDAD INDUSTRIAL A NIVEL SUPERVISOR"

    },
     {
        
        "titulo":"FORMACION DE INSTRUCTORES"

    },
     {
        
        "titulo":"MANEJO, RESPUESTA Y EVACUACION DE INMUEBLES ANTE UNA EMERGENCIA"

    },
     {
        
        "titulo":"MANEJO, TRANSPORTE Y ALMACENAMIENTO DE QUIMICOS"

    },
     {
        
        "titulo":"MANEJO DE RESIDUOS PELIGROSOS BIOLOGICOS INFECCIOSOS"

    },
     {
        
        "titulo":"CARACTERISTICAS DE LAS ETIQUETAS DE ENVASES Y EMBALAJES DESTINADAS AL TRANSPORTE DE SUSTANCIAS, MATERIALES Y RESIDUOS PELIGROSOS"

    },
     {
        
        "titulo":"MANEJO SEGURO DE CARGAS Y ERGONIMIA"

    },
     {
        
        "titulo":"CARACTERISTICAS, EL PROCEDIMIENTO DE IDENTIFICACION, CLASIFICACION DE LOS LISTADOS DE RESIDUOS PELIGROSOS"

    },
     {
        
        "titulo":"IDENTIFICACION Y MANEJO DE RESIDUOS PELIGROSOS"

    },
     {
        
        "titulo":"OPERACIÓN, SEGURIDAD Y MANEJO DE MONTACARGAS, TUGGER Y PATINETAS ELECTRICAS"

    },
     {
        
        "titulo":"MEDIDAS DE SEGURIDAD PARA EL USO DE HERRAMIENTAS DE MANO Y MECANICAS"

    },
     {
        
        "titulo":"COLORES Y SEÑALES DE SEGURIDAD E HIGIENE EN LOS CENTROS DE TRABAJO"

    }


]



 nextPage.addEventListener('click',()=>{

   createGridCursos.innerHTML='';


 })






// Accion opara abrir el detalle  capacitate 
btnAbrirModalCapacitate.addEventListener('click',()=>{

    

    
    showModalCapacitate.classList.remove('hidden');
    showModalCapacitate.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo

    // while (count<=10) {

    // count+=1
        
    //       cursos.forEach(element => {

        
            
    // createGridCursos.insertAdjacentHTML('beforeend', 
    // ` <div class="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
    //         <span class="material-symbols-outlined text-accent-orange font-bold">check_circle</span>
    //         <span class="text-slate-700 dark:text-slate-200 font-medium">${element.titulo}</span>
    //     </div>`);


    // });

    // }

    

})

// Accion opara cerrar el detalle capacitate 
btnCerrarModalCapacitate.addEventListener('click', ()=>{

    showModalCapacitate.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-habilita el scroll de la página
    createGridCursos.innerHTML='';
    // count = 0

});



 






    










