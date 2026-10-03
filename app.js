// --- CONFIGURACIÓN DEL SLIDER ---

// 1. Lista de imágenes para el fondo (Puedes cambiarlas por tus propias URLs)
// He usado imágenes de Unsplash que se parecen al estilo "tecnología/mundo/redes"
const imagenesSlider = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop', // Mundo/Red
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop', // Servidores/Datos
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop'  // Código/Matriz futurista
];

let indiceImagenActual = 0;
let intervaloSlider; // Variable para guardar el temporizador

// --- DEFINICIÓN DE PÁGINAS ---

const paginas = {
    inicio: `
        <section id="hero-slider" class="hero-section-dynamic">
            <div class="hero-overlay"></div>
            <div class="container">
                <div class="hero-content">
                    <h1>IMPULSANDO EL FUTURO DIGITAL DE MÉXICO</h1>
                    <p>En SSPIC, creamos soluciones tecnológicas innovadoras que conectan. Somos la red que está construyendo el mañana.</p>
                    <button class="btn-blue" onclick="navegar('servicios')">EXPLORA NUESTROS SERVICIOS</button>
                </div>
            </div>
        </section>

        <section class="content-section container" style="padding-top: 80px; padding-bottom: 80px;">
    
    <div class="nosotros-header reveal-text" style="background: transparent; padding: 0 0 50px 0;">
         <h2 style="text-align: center; font-size: 2.8rem; margin: 0;">Tenemos a tu disposición</h2>
         <p style="text-align: center; color: #00aaff; margin-top: 10px;">Soluciones integrales en infraestructura de telecomunicaciones</p>
    </div>


    <div class="grid-servicios">
                
        <div class="service-card" style="text-align: center; cursor: pointer;" onclick="navegar('servicios')">
            <i class="fas fa-broadcast-tower"></i>
            <h3>Tendido Aéreo</h3>
            <p>Instalación de Fibra Óptica en infraestructura de postería existente.</p>
        </div>

        <div class="service-card" style="text-align: center; cursor: pointer;" onclick="navegar('servicios')">
            <i class="fas fa-project-diagram"></i>
            <h3>Instalación Subterránea</h3>
            <p>Métodos avanzados de soplado y jalado de F.O. en ductería.</p>
        </div>

        <div class="service-card" style="text-align: center; cursor: pointer;" onclick="navegar('servicios')">
            <i class="fas fa-laptop-code"></i>
            <h3>Caracterización de Enlaces</h3>
            <p>Certificación y mediciones de precisión (OTDR, PMD, CD) para fibra oscura.</p>
        </div>

        <div class="service-card" style="text-align: center; cursor: pointer;" onclick="navegar('servicios')">
            <i class="fas fa-hard-hat"></i>
            <h3>Obra Civil</h3>
            <p>Construcción de canalizado, registros y perforaciones direccionales.</p>
        </div>

        <div class="service-card" style="text-align: center; cursor: pointer;" onclick="navegar('servicios')">
            <i class="fas fa-drafting-compass"></i>
            <h3>Diseño e Ingeniería</h3>
            <p>Levantamientos (Site Survey), ingeniería a detalle y gestoría de planos.</p>
        </div>

        <div class="service-card" style="text-align: center; cursor: pointer;" onclick="navegar('servicios')">
            <i class="fas fa-wifi"></i>
            <h3>Redes FTT-X</h3>
            <p>Implementación y configuración de redes de fibra hasta el hogar/usuario.</p>
        </div>

    </div>
        </section>

    <section class="content-section container" style="padding-bottom: 80px;">
            <div class="nosotros-header reveal-text" style="background: transparent; padding: 0 0 40px 0;">
                <h2 style="text-align: center; font-size: 2.8rem; margin: 0;">Nuestros Proyectos en Campo</h2>
                <p style="text-align: center; color: #00aaff; margin-top: 10px;">Infraestructura de primer nivel en acción</p>
            </div>

            <div class="galeria-grid reveal-text">
                <div class="zoom-img-container">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.Prs0nXvfiaO7OAji4H0ItQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Tendido aéreo en torre 1">
                </div>
                <div class="zoom-img-container">
                    <img src="https://tse3.mm.bing.net/th/id/OIP.VVCGAnlr2w3Qzxht3OFdJQHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Tendido aéreo en torre 2">
                </div>
                <div class="zoom-img-container">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.cX-Jrg-u5UBFtJbPzt2qOAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Mantenimiento de infraestructura">
                </div>
            </div>
        </section>
    `,
    // ... dentro del objeto paginas:
    //no quitar el stilo pq en css ya hay uno igual y no se puede cambiar el nombre, deberas dejarlo aqui 
    nosotros: `
        <section class="nosotros-header" style="background: transparent; padding: 80px 0 40px 0; padding-top: 30px;">
            <div class="container" style="text-align: center;">
                <h2 style="text-align: center; font-size: 2.8rem; margin: 0;">Acerca de Nosotros</h2>
                <p style="color: #00aaff; font-weight: bold; letter-spacing: 2px;">LIDERANDO LA INFRAESTRUCTURA DE FIBRA ÓPTICA</p>
            </div>
        </section>

       <section style="position: relative; width: 100%; height: 500px; overflow: hidden; margin-bottom: 60px;">

       <style>
        /* Definimos los pasos de la animación 'slideInFromLeft' */
        @keyframes slideInFromLeft {
            from {
                opacity: 0;
                transform: translateX(-100px); /* Empieza 100px a la izquierda */
            }
            to {
                opacity: 1;
                transform: translateX(0); /* Termina en su posición original */
            }
        }

        /* Creamos una clase para aplicar la animación */
        .animate-from-left {
            /* Ejecuta 'slideInFromLeft', dura 1.2 segundos, es suave al final, y mantiene el estado final visible */
            animation: slideInFromLeft 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
    </style>
            
            <img src="./fondo.jpg" alt="Infraestructura Novotech" 
         style="width: 100%; height: 100%; object-fit: cover; display: block;">
    
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.65); z-index: 1;"></div>

    <div class="container" style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); height: 100%; display: flex; align-items: center; justify-content: flex-end; z-index: 2;">
        
        <div class="reveal-text animate-from-left" style="background: rgba(10, 20, 40, 0.85); backdrop-filter: blur(10px); padding: 40px; width: 450px; border: 1px solid rgba(0, 170, 255, 0.4); border-radius: 8px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <div style="width: 50px; height: 4px; background: #00aaff; margin-bottom: 20px;"></div>
            <h2 style="font-size: 1.8rem; line-height: 1.2; margin-bottom: 15px; font-weight: 800;">SOMOS UNA EMPRESA NACIONAL CON LA RED MÁS IMPORTANTE DE FIBRA ÓPTICA QUE CONECTA A MÉXICO</h2>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #ddd;">
                Nuestros altos niveles de calidad y eficiencia son el pilar de nuestra cultura organizacional. Operamos infraestructura de transporte de datos en toda la República.
            </p>
        </div>
    </div>
</section>

        <section class="container" style="padding-bottom: 80px;">
            <div class="grid-servicios">
                
                <div class="service-card">
                    <i class="fas fa-rocket"></i>
                    <h3>Misión</h3>
                    <p>Conectar a cada hogar y empresa de México a través de redes de fibra óptica de última generación, garantizando estabilidad y velocidad sin límites mediante ingeniería de precisión.</p>
                </div>

                <div class="service-card">
                    <i class="fas fa-eye"></i>
                    <h3>Visión</h3>
                    <p>Ser la empresa referente en telecomunicaciones a nivel nacional, reconocida por cerrar la brecha digital con la red de transporte más robusta y confiable del país.</p>
                </div>

                <div class="service-card">
                    <i class="fas fa-bullseye"></i>
                    <h3>Objetivo Principal</h3>
                    <p>Optimizar la transmisión de datos masivos mediante instalaciones certificadas y el despliegue estratégico de redes FTTH (Fiber to the Home).</p>
                </div>

                <div class="service-card">
                    <i class="fas fa-handshake"></i>
                    <h3>Valores</h3>
                    <ul class="valores-list" style="text-align: left; margin-top: 15px;">
                        <li style="margin-bottom: 10px; color: #ccc;"> Integridad técnica</li>
                        <li style="margin-bottom: 10px; color: #ccc;"> Innovación constante</li>
                        <li style="margin-bottom: 10px; color: #ccc;"> Compromiso con la calidad</li>
                        <li style="margin-bottom: 10px; color: #ccc;"> Rapidez de respuesta</li>
                    </ul>
                </div>

                <div class="service-card" style="grid-column: span 1; border-color: rgba(255,255,255,0.1);">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>Ubicación</h3>
                    <p><strong>Sede Central:</strong> Av. Insurgentes Sur 123, CDMX.</p>
                    <p style="font-size: 0.8rem; margin-top: 10px; opacity: 0.7;">Operamos con cuadrillas especializadas en toda la zona metropolitana y estados colindantes.</p>
                </div>

            </div>
        </section>

    `,
    servicios: `
        <section class="nosotros-header" style="background: transparent; padding-top: 30px;">
            <div class="container" style="text-align: center;">
                <h2 style="text-align: center; font-size: 2.8rem; margin: 0;">Nuestras Soluciones Tecnológicas</h2>
                <p style="color: #00aaff; font-weight: bold; letter-spacing: 2px;">Pasa el cursor sobre cada servicio para expandir la información técnica.</p>
            </div>
        </section>

        <section class="container-fluid" style="padding: 0 50px;">
            <div class="grid-servicios-horizontal">
                
                <div class="service-card-horizontal">
                    <i class="fas fa-broadcast-tower"></i>
                    <h3>Tendido Aéreo</h3>
                    <p>Experiencia comprobada en despliegue de redes de fibra óptica sobre infraestructura aérea, mediante el uso de postería y herrajes certificados. Contamos con ingeniería especializada para levantamiento en campo, diseño de rutas, cálculo de cargas mecánicas y ejecución de obra, garantizando cumplimiento de normativas técnicas y seguridad operativa.</p>
                </div>

                <div class="service-card-horizontal">
                    <i class="fas fa-project-diagram"></i>
                    <h3>Instalación Subterránea</h3>
                    <p>Implementación de redes de fibra óptica mediante canalizaciones subterráneas, utilizando técnicas de soplado y jalado en sistemas de ductería. Disponemos de equipos de alta tecnología para garantizar eficiencia en el tendido, minimizando pérdidas y optimizando tiempos de instalación en entornos urbanos y de alta densidad.</p>
                </div>

                <div class="service-card-horizontal">
                    <i class="fas fa-microchip"></i>
                    <h3>Caracterización</h3>
                    <p>Servicios de certificación y diagnóstico de enlaces de fibra óptica mediante pruebas especializadas como reflectometría (OTDR), medición de dispersión cromática (CD) y PMD. Aseguramos la integridad y desempeño de la red conforme a estándares internacionales, facilitando la validación de enlaces y detección de fallas.</p>
                </div>

                <div class="service-card-horizontal">
                    <i class="fas fa-tools"></i>
                    <h3>Obra Civil</h3>
                    <p>Desarrollo de infraestructura física para telecomunicaciones, incluyendo canalizaciones, registros, bases estructurales y perforaciones direccionales. Ejecutamos proyectos bajo estrictos controles de calidad, seguridad y normatividad, garantizando la correcta preparación del entorno para el despliegue de redes.</p>
                </div>

                <div class="service-card-horizontal">
                    <i class="fas fa-drafting-compass"></i>
                    <h3>Diseño e Ingeniería</h3>
                    <p>Desarrollo de soluciones integrales mediante estudios de factibilidad, levantamientos en campo (Site Survey) y elaboración de ingeniería a detalle. Generamos planos, memorias técnicas y gestionamos permisos ante autoridades, optimizando la arquitectura de red conforme a requerimientos técnicos y operativos.</p>
                </div>

                <div class="service-card-horizontal">
                    <i class="fas fa-network-wired"></i>
                    <h3>Redes FTT-X</h3>
                    <p>Implementación y puesta en operación de redes de acceso basadas en fibra óptica (FTTH, FTTB, FTTC), incluyendo diseño personalizado, cálculo de presupuesto óptico, instalación de equipos activos y pasivos, así como pruebas y optimización del servicio para garantizar alto rendimiento y escalabilidad.</p>
                </div>

            </div>
        </section>

        <section style="position: relative; width: 100%; overflow: hidden; background-color: #000;">
    
    <video autoplay muted loop playsinline 
           style="display: block; width: 100%; height: auto; z-index: 0;">
        <source src="./earth.mp4" type="video/mp4">
        Tu navegador no soporta videos.
    </video>

    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); z-index: 1;"></div>

    <div class="container" style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 90%; height: 100%; display: flex; align-items: center; justify-content: space-between; z-index: 2;">
        
        <div class="reveal-text card-left" style="background: rgba(10, 20, 40, 0.8); backdrop-filter: blur(10px); padding: 30px; width: 400px; border: 1px solid rgba(0, 170, 255, 0.3); border-radius: 8px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <div style="width: 40px; height: 3px; background: #00aaff; margin-bottom: 15px;"></div>
            <h2 style="font-size: 1.4rem; line-height: 1.2; margin-bottom: 10px; font-weight: 800; text-transform: uppercase;">
                Conectividad Global
            </h2>
            <p style="font-size: 0.9rem; line-height: 1.5; color: #ddd;">
                Nuestra infraestructura de fibra óptica cruza fronteras para mantener a México en el centro de la innovación tecnológica mundial.
            </p>
        </div>

        <div class="reveal-text card-right" style="background: rgba(10, 20, 40, 0.8); backdrop-filter: blur(10px); padding: 30px; width: 400px; border: 1px solid rgba(0, 170, 255, 0.3); border-radius: 8px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <div style="width: 40px; height: 3px; background: #00aaff; margin-bottom: 15px;"></div>
            <h2 style="font-size: 1.4rem; line-height: 1.2; margin-bottom: 10px; font-weight: 800; text-transform: uppercase;">
                Liderazgo Nacional
            </h2>
            <p style="font-size: 0.9rem; line-height: 1.5; color: #ddd;">
                Operamos la red más importante del país, garantizando eficiencia y calidad en el transporte de datos para cada estado de la República.
            </p>
        </div>

    </div>
</section>
    `,
    // ... dentro del objeto paginas:
    contacto: `
        <section class="nosotros-header" style="background: transparent; padding-top: 30px;">
            <div class="container" style="text-align: center;">
                <h2 style="text-align: center; font-size: 2.8rem; margin: 0;">Contacto</h2>
                <p style="color: #00aaff; font-weight: bold; letter-spacing: 1px;">ESTAMOS LISTOS PARA LLEVAR TU CONEXIÓN AL SIGUIENTE NIVEL</p>
            </div>
        </section>

        <section class="container" style="padding-bottom: 80px; display: flex; justify-content: center;">
            <div class="service-card" style="max-width: 600px; width: 100%; border-radius: 30px; background: rgba(255, 255, 255, 0.03);">
                
                <div style="text-align: center; margin-bottom: 30px;">
                    <i class="fas fa-headset" style="font-size: 3.5rem; background: linear-gradient(45deg, #00aaff, #00ffcc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                    <h3 style="margin-top: 20px; color: #fff;">Datos</h3>
                </div>
                
                <div style="margin-top:10px; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 15px;">
                    <p style="color: #00aaff; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid rgba(0,170,255,0.2); padding-bottom: 5px;">
                         Correo electrónico y teléfono :
                    </p>
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #ccc;">
                        <span>contacto@sspic.com.mx</span>
                        
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #ccc; margin-top: 10px;">
                        <span>55 598 98 74</span>
                        
                    </div>
                </div>

                <div style="text-align: center; margin-bottom: 30px;">
                    
                    <h3 style="margin-top: 20px; color: #fff;">Horario</h3>
                </div>
                
                <div style="margin-top:10px; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 15px;">
                    <p style="color: #00aaff; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid rgba(0,170,255,0.2); padding-bottom: 5px;">
                         Horario de atención Operativa:
                    </p>
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #ccc;">
                        <span>Lunes a Viernes:</span>
                        <span style="color: #fff;">9:00 AM - 6:00 PM</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #ccc; margin-top: 10px;">
                        <span>Sábados:</span>
                        <span style="color: #fff;">9:00 AM - 2:00 PM</span>
                    </div>
                </div>

            </div>
        </section>
    `,
};

// --- FUNCIONES DEL SLIDER ---

function iniciarSlider() {
    const heroElement = document.getElementById('hero-slider');
    
    // Seguridad: Si no estamos en la página de inicio, no hacemos nada
    if (!heroElement) return;

    // Función interna que cambia la imagen
    const cambiarImagen = () => {
        // 1. Establecer la nueva imagen de fondo
        heroElement.style.backgroundImage = `url('${imagenesSlider[indiceImagenActual]}')`;
        
        // 2. Calcular el índice de la siguiente imagen (circular: 0, 1, 2, 0, 1...)
        indiceImagenActual = (indiceImagenActual + 1) % imagenesSlider.length;
    };

    // Poner la primera imagen inmediatamente
    cambiarImagen();

    // Configurar el intervalo para que cambie cada 5000ms (5 segundos)
    intervaloSlider = setInterval(cambiarImagen, 5000);
}

function detenerSlider() {
    // Si existe un intervalo activo, lo limpiamos para que no consuma recursos
    if (intervaloSlider) {
        clearInterval(intervaloSlider);
    }
}


// --- FUNCIÓN PRINCIPAL DE NAVEGACIÓN (Modificada) ---

function navegar(ruta) {
    // 1. Siempre detenemos el slider al cambiar de página
    detenerSlider();

    const contenedor = document.getElementById('app');
    contenedor.innerHTML = paginas[ruta];
    document.title = `SSPIC | ${ruta.charAt(0).toUpperCase() + ruta.slice(1)}`;

    // 2. Actualizar el menú activo
    actualizarMenuActivo(ruta);

    // 3. Lógica específica para la página de Inicio
    if (ruta === 'inicio') {
        // Usamos setTimeout para asegurar que el HTML ya existe
        setTimeout(() => {
            iniciarSlider(); // Arranca el cambio de imágenes de fondo
            ejecutarAnimacionHero(); // <-- ¡AQUÍ ARRANCA LA MÁQUINA DE ESCRIBIR!
            iniciarObservadorScroll();
        }, 100);
    }
}

// Función auxiliar para resaltar el botón del menú actual
function actualizarMenuActivo(rutaActual) {
    // Quitamos 'active' de todos los botones
    const botones = document.querySelectorAll('.menu-links button');
    botones.forEach(btn => btn.classList.remove('active'));

    // Buscamos el botón que corresponde a la ruta y le ponemos 'active'
    // (Esta es una forma sencilla, asume que el texto del botón coincide con la ruta en minúsculas)
    botones.forEach(btn => {
        if (btn.innerText.toLowerCase() === rutaActual) {
            btn.classList.add('active');
        }
    });
}


// Cargar 'inicio' al abrir la web
document.addEventListener('DOMContentLoaded', () => {
    navegar('inicio');
});

// ==========================================
// --- FUNCIONES DE ANIMACIÓN DE TEXTO ---
// ==========================================

/**
 * Función auxiliar que "escribe" el texto letra por letra en un elemento.
 * Retorna una Promesa que se resuelve cuando termina de escribir.
 */
function escribirTexto(elemento, velocidad) {
    return new Promise((resolve) => {
        if (!elemento) {
            resolve(); // Si no existe el elemento, terminamos rápido.
            return;
        }

        const textoOriginal = elemento.textContent; // Guardamos el texto
        elemento.textContent = ''; // Limpiamos el contenedor
        elemento.style.opacity = '1'; // Hacemos visible el contenedor vacío
        elemento.classList.add('cursor-blink'); // Añadimos cursor

        let i = 0;
        const intervalo = setInterval(() => {
            // Añadimos una letra
            elemento.textContent += textoOriginal.charAt(i);
            i++;

            // Si llegamos al final del texto
            if (i >= textoOriginal.length) {
                clearInterval(intervalo); // Detenemos el temporizador
                elemento.classList.remove('cursor-blink'); // Quitamos cursor
                resolve(); // Avisamos que hemos terminado
            }
        }, velocidad); // Velocidad en milisegundos por letra
    });
}

/**
 * Función orquestadora que ejecuta la secuencia de animación del Hero.
 * Usa 'async/await' para esperar a que termine una animación antes de empezar la otra.
 */
async function ejecutarAnimacionHero() {
    // 1. Seleccionamos los elementos
    const h1 = document.querySelector('.hero-content h1');
    const p = document.querySelector('.hero-content p');
    const btn = document.querySelector('.hero-content .btn-blue');

    // Seguridad: Si no estamos en inicio, no hacemos nada
    if (!h1 || !p) return;

    // 2. Escribimos el Título (velocidad 70ms por letra)
    // El 'await' hace que el código espere aquí hasta que termine de escribir el H1
    await escribirTexto(h1, 70);

    // 3. Escribimos el Párrafo (un poco más rápido, 40ms por letra)
    await escribirTexto(p, 40);

    // 4. Al final, hacemos aparecer el botón suavemente
    if (btn) {
        btn.style.opacity = '1';
    }
}

function iniciarObservadorScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el elemento entra en pantalla, añadimos la clase 'active'
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    });

    // Seleccionamos todos los elementos con la clase reveal-text
    const elementos = document.querySelectorAll('.reveal-text');
    elementos.forEach(el => observer.observe(el));

}

