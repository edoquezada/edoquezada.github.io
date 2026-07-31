const traducciones = {
    es: {
        //intro
        itag: "Disponible para trabajar",
        ititle: "Eduardo Quezada",
        ititle2: "Frontend & Sistemas Web",
        ipresent: "Diseñador y maquetador con 7+ años construyendo infraestructura digital real. <br/>+150 webs y sistemas que resuelven problemas de negocio.",
        ibtn1: "Ver proyectos",
        ibtn2: "Descargar CV",
        //menu
        nav1: "Proyectos",
        nav2: "Habilidades",
        nav3: "Sobre mí",
        nav4: "Contacto",
        //impacto
        imtitle: "IMPACTO REAL",
        im1: "Webs desarrolladas",
        im2: "Clientes conseguidos con automatización",
        im3: "Años de experiencia real",
        //sobre mi
        smtitle: "SOBRE MI",
        smdesc1: "Soy desarrollador web con más de siete años de experiencia creando soluciones digitales que combinan diseño, funcionalidad y automatización. A lo largo de mi trayectoria he desarrollado y mantenido más de 150 sitios web, participado en la creación de herramientas internas y optimizado procesos mediante tecnologías web y plataformas de automatización.",
        smdesc2: "Actualmente estoy ampliando mis conocimientos en React y desarrollo Full Stack con el objetivo de seguir evolucionando profesionalmente y afrontar proyectos cada vez más ambiciosos. Me motiva el aprendizaje continuo, escribir código limpio y desarrollar aplicaciones que ofrezcan una excelente experiencia tanto para el usuario como para los equipos que las mantienen y evolucionan.",
        smval1: "Autonomía",
        smval2: "Resultados medibles",
        smval3: "Comunicación directa",
        //destacado
        dtitle: "PROYECTOS DESTACADOS",
        dtitle2: "Red de agencias Linea Tours",
        ddesc1: "+150 webs personalizadas para agencias de viaje franquiciadas. Sistema de automatización que triplicó la captación de clientes.",
        dtitle3: "Intranet de proveedores",        
        ddesc2: "Sistema de publicación dinámica por categoría y país. Usuarios no técnicos publican contenido de forma autónoma.",
        dtag: "Taxonomías",
        //habilidades
        stitle: "HABILIDADES",
        sadvance: "Avanzado",
        ssolid: "Sólido",
        sinprogres: "En curso",
        //contact
        ctitle: "CONTACTO",
        clabel1: "Nombre*",
        clabel2: "Email*",
        clabel3: "Mensaje",
        frequired: "*Obligatorio",
        cbtn: "Enviar",
        formtext: "Tus datos solo se usarán para gestionar una posible relación laboral. No se almacenarán en ninguna base de datos ni se utilizarán con fines de SPAM.",
    },
    en: {
        //intro
        itag: "Open to Work",
        ititle: "Eduardo Quezada",
        ititle2: "Frontend & Web Systems",
        ipresent: "UI Designer and Front-End Developer with 7+ years of experience building production-ready digital infrastructure. <br>Deployed 150+ websites and systems designed to solve core business problems.",
        ibtn1: "View projects",
        ibtn2: "Download CV",
        //menu
        nav1: "Projects",
        nav2: "Skills",
        nav3: "About me",
        nav4: "Contact",
        //impacto
        imtitle: "REAL IMPACT",
        im1: "Websites developed",
        im2: "Clients acquired through automation",
        im3: "Years of hands-on experience",
        //sobre mi
        smtitle: "ABOUT ME",
        smdesc1: "I am a web developer with 7+ years of experience engineering digital solutions that merge design, functionality, and automation. Throughout my career, I have developed and maintained over 150 websites, contributed to the building of internal tools, and optimized business processes using web technologies and automation platforms.",
        smdesc2: "Currently, I am expanding my skills in React and Full-Stack development to continue growing professionally and take on increasingly ambitious projects. I am driven by continuous learning, writing clean code, and developing applications that deliver an outstanding experience for both the end-user and the teams responsible for maintaining and scaling them.",
        smval1: "Autonomy",
        smval2: "Measurable results",
        smval3: "Direct communication",
        //destacado
        dtitle: "FEATURED PROJECTS",
        dtitle2: "Linea Tours Agency Network",
        ddesc1: "150+ customized websites for franchised travel agencies. Built an automation system that tripled client acquisition.",
        dtitle3: "Vendor Intranet",        
        ddesc2: "Dynamic publishing system segmented by category and country. Enabled non-technical users to publish content autonomously.",
        dtag: "Taxonomies",
        //habilidades
        stitle: "SKILLS",
        sadvance: "Advanced",
        ssolid: "Strong",
        sinprogres: "In Progress",
        //contact
        ctitle: "CONTACT",
        clabel1: "Name*",
        clabel2: "Email*",
        clabel3: "Message",
        frequired: "*Required",
        cbtn: "Submit",
        formtext: "Your data will only be used to manage a potential employment relationship. It will not be stored in any database or used for SPAM purposes.",
    }
};

function aplicarIdioma(idioma){
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const clave = el.getAttribute("data-i18n");
        if(traducciones[idioma][clave]){
            el.innerHTML = traducciones[idioma][clave];
        }
    });
    document.documentElement.setAttribute("lang", idioma);
    localStorage.setItem("idioma", idioma);
}

// detección inicial
function idiomaInicial(){
    const guardado = localStorage.getItem("idioma");
    if(guardado) return guardado;

    const idiomaNavegador = navigator.language.slice(0, 2); // "es-ES" -> "es"
    return idiomaNavegador === "es" ? "es" : "en"; // por defecto inglés si no es español
}

aplicarIdioma(idiomaInicial());