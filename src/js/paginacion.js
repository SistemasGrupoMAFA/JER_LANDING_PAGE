



 //Capacitate con nosotros
const showModalCapacitate = document.getElementById('modalDetalleCapacitate');


const btnCerrarModalCapacitate = document.getElementById('btnCerrarModalCapacitate').addEventListener('click',cerrarModal);
const btnAbrirModalCapacitate =  document.getElementById('btnShowModalCapacitate').addEventListener('click',abrirModal);


// Construccion  de plantilla de cursos
 const createGridCursos = document.getElementById('generico');





let count = 1;

const showModalLink = document.getElementById('showModalLink')
showModalLink.addEventListener('click',abrirModal);


 const nextPage = document.getElementById('siguiente')
 nextPage.addEventListener('click',siguientePagina);


 const lastPage = document.getElementById('atras')
 lastPage.addEventListener('click',anteriorPagina);


let todosLosCursos = {

    "listado-cursos-1":[{
        
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

     }
    ],
    "listado-cursos-2":[
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

    },
    {
        
        "titulo":"MANEJO, RESPUESTA Y EVACUACION DE INMUEBLES ANTE UNA EMERGENCIA"

    }
    ],
    "listado-cursos-3":[
    {
        
        "titulo":"COLORES Y SEÑALES DE SEGURIDAD E HIGIENE EN LOS CENTROS DE TRABAJO"

    },
     {
        
        "titulo":"MANEJO SEGURO DE QUIMICOS BASADO EN EL SISTEMA GLOBALMENTE ARMONIZADO"

    },
     {
        
        "titulo":"MANEJO SEGURO DE RESIDUOS PELIGROSOS"

    },
     {
        
        "titulo":"DISPOSICIONES DE COMPATIBILIDAD Y SEGREGACION PARA EL ALMACENAMIENTO Y TRANSPORTE DE SUSTANCIAS, MATERIALES Y RESIDUOS PELIGROSOS"

    },
     {
        
        "titulo":"MANEJO SEGURO DE RESIDUOS DE MANEJO ESPECIAL"

    },
     {
        
        "titulo":"MANEJO TRANSPORTE Y ALMACENAMIENTO DE SUSTANCIAS QUIMICAS"

    },
     {
        
        "titulo":"ESPACIOS CONFINADOS Y MEDIDAS DE SEGURIDAD"

    },
     {
        
        "titulo":"MEDIDAS DE SEGURIDAD EN EXCAVACIONES"

    },
     {
        
        "titulo":"CONDICIONES DE SEGURIDAD E HIGIENE PARA REALIZAR ACTIVIDADES DE SOLADURA Y CORTE"

    },
    {
        
        "titulo":"MEDIDAS DE SEGURIDAD PARA EL ARMADO DE ANDAMIOS"

    }
    ],
    "listado-cursos-4":[
    {
        
        "titulo":"OPERACION SEGURA DE GRUAS E IZAJE DE CARGAS"

    },
     {
        
        "titulo":"CONSTITUCION, INTEGRACION, ORGANIZACIÓN Y FUNCIONAMIENTO DE LAS COMISIONES DE SEGURIDAD E HIGIENE"

    },
     {
        
        "titulo":"LA SEGURIDAD EN ANDMIOS"

    },
     {
        
        "titulo":"MEDIDAS DE SEGURIDAD EN LA SOLDADURA, CORTE Y ESMERILADO"

    },
     {
        
        "titulo":"CONDICIONES DE SEGURIDAD PARA LA CONSTRUCCION"

    },
     {
        
        "titulo":"PROTECCION AUDITIVA"

    },
     {
        
        "titulo":"PROTECCION RESPIRATORIA"

    },
     {
        
        "titulo":"OPERACION SEGURA DE PLATAFORMAS ARTICULADAS"

    },
     {
        
        "titulo":"SEGURIDAD EN EXCAVACION DE ZANJAS Y APUNTALAMIENTO"

    },
    {
        
        "titulo":"PROCEDMIENTO DE SEGURIDAD PARA TRABAJOS ELECTRICOS"

    }
    ],
    "listado-cursos-5":[
    {
        
        "titulo":"RECIPIENTES SUJETOS A PRESION EN CIPIENTES DE CRIOGENICOS Y GENERADORES DE VAPOR O CALDERAS"

    },
     {
        
        "titulo":"SEGREGACION DE RESIDUOS PELIGROSOS Y NO PELIGROSOS"

    },
     {
        
        "titulo":"OPERACIÓN DE MAQUINARIA Y EQUIPO PESADO"

    },
     {
        
        "titulo":"IDENTIFICACION DE ASPECTOS Y EVALUACION DE IMPACTOS AMBIENTALES"

    },
     {
        
        "titulo":"LOS PRIMEROS AUXILIOS INDUSTRIALES"

    },
     {
        
        "titulo":"SEGURIDAD Y SALUD EN EL TRABAJO"

    },
     {
        
        "titulo":"NORMATIVA EN MATERIA DE SEGURIDAD, SALUD Y MEDIO AMBIENTE"

    }
    ]
    

}


 

// Accion opara abrir el detalle  capacitate 
function abrirModal() {
    
      createGridCursos.id = 'listado-cursos-'+count

    
    
    
        lastPage.classList.add('hidden')
    
    

   
    showModalCapacitate.classList.remove('hidden');
    showModalCapacitate.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo

   
    todosLosCursos["listado-cursos-"+count].forEach(element => {

        
            
        createGridCursos.insertAdjacentHTML('beforeend', 
        ` <div class="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
            <span class="material-symbols-outlined text-accent-orange font-bold">check_circle</span>
            <span class="text-slate-700 dark:text-slate-200 font-medium">${element.titulo}</span>
        </div>`);


    });


}

function cerrarModal(){

 count=1;
    showModalCapacitate.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-habilita el scroll de la página
    createGridCursos.innerHTML='';

}

function siguientePagina() {
    

    lastPage.classList.remove('hidden')
    createGridCursos.innerHTML='';
    count+=1
   
     if (count == 5) {
        
        nextPage.classList.add('hidden')

    }
    
    



    todosLosCursos["listado-cursos-"+count].forEach(element => {

  
        createGridCursos.insertAdjacentHTML('beforeend', 
        ` <div class="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
            <span class="material-symbols-outlined text-accent-orange font-bold">check_circle</span>
            <span class="text-slate-700 dark:text-slate-200 font-medium">${element.titulo}</span>
        </div>`);


    });
    

}

function anteriorPagina(){

count-=1

    if (count == 1) {
        
        lastPage.classList.add('hidden')

    }

    if(count<5){

        nextPage.classList.remove('hidden')
    }

    
    createGridCursos.innerHTML='';
   
    
   

     todosLosCursos["listado-cursos-"+count].forEach(element => {

  
        createGridCursos.insertAdjacentHTML('beforeend', 
        ` <div class="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
            <span class="material-symbols-outlined text-accent-orange font-bold">check_circle</span>
            <span class="text-slate-700 dark:text-slate-200 font-medium">${element.titulo}</span>
        </div>`);


    });
   


}







