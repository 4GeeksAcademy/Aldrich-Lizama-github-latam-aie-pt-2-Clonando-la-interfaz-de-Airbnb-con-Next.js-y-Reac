# Contexto del Proyecto: Clon de Airbnb (Frontend Validation)

## 1. Propósito del Proyecto
El objetivo de este proyecto es validar la arquitectura de componentes para una plataforma de alquiler vacacional mediante la clonación de tres vistas clave de Airbnb. Esta aproximación nos permite identificar los componentes necesarios, definir sus estructuras de datos (props) y entender el flujo de navegación antes de proponer un sistema de diseño propio.

---

## 2. Definición del Usuario y Casos de Uso
El usuario principal es un **viajero** que busca alojamiento. Sus objetivos clave en cada vista son:
* **Inicio (Home):** Descubrir destinos, explorar categorías de alojamiento y comenzar una búsqueda.
* **Catálogo (Resultados):** Filtrar y comparar opciones de alojamiento según su búsqueda, visualizando precios, calificaciones y ubicaciones.
* **Detalle (Room Detail):** Evaluar a fondo un alojamiento específico (fotos, servicios, opiniones, anfitrión) y proceder con la intención de reserva.

---

## 3. Arquitectura y Estructura de Páginas

La aplicación se construirá en **Next.js** utilizando React. La navegación entre vistas se realizará del lado del cliente utilizando el componente `<Link>` de Next.js para evitar recargas de página.

### A. Vista 1: Inicio (Home)
* **Propósito:** Punto de entrada y descubrimiento.
* **Componentes Clave:**
    * `SearchBar` (Móvil: compacto en la parte superior / Escritorio: barra expandida con inputs de destino, fechas y huéspedes).
    * `CategorySelector` (Filtro horizontal deslizable con iconos de categorías como "Piscinas", "Cabañas", "Playas").
    * `ListingGrid` (Contenedor responsivo para las tarjetas de propiedades).
    * `ListingCard` (Tarjeta individual de propiedad: carrusel de imágenes, título/ubicación, calificación y precio por noche).
    * `MobileNavigation` (Barra de navegación fija en la parte inferior para dispositivos móviles).
    * `Footer` (Enlaces de navegación secundaria y copyright, visible principalmente en escritorio).

### B. Vista 2: Catálogo (Resultados de Búsqueda)
* **Propósito:** Comparación de opciones disponibles.
* **Componentes Clave:**
    * `SearchHeader` (Variación de la barra de búsqueda que muestra los parámetros activos de la consulta).
    * `FilterPills` (Botones de acceso rápido para filtros adicionales: precio, tipo de lugar, wifi, etc.).
    * `ResultsCounter` (Texto simple que indica la cantidad de alojamientos encontrados).
    * `ListingGrid` & `ListingCard` (Reutilizados de la Home, adaptados para mostrar de manera prominente la información relevante para la decisión).
    * `MapPreview` (Espacio para el mapa interactivo; oculto en móvil y visible en el lateral derecho a partir de viewport de 768px).

### C. Vista 3: Detalle de Habitación (Room Detail)
* **Propósito:** Decisión de reserva y lectura de especificaciones del alojamiento.
* **Componentes Clave:**
    * `ImageGallery` (Móvil: carrusel de pantalla completa / Escritorio: rejilla de 5 imágenes con una foto principal destacada).
    * `HostInfo` (Información del anfitrión, foto de perfil y tiempo en la plataforma).
    * `PropertyDescription` (Detalle de camas, baños, descripción del espacio y servicios incluidos).
    * `ReservationCard` (Móvil: barra fija inferior con precio y botón "Reservar" / Escritorio: tarjeta flotante lateral con selector de fechas, huéspedes, desglose de costos y botón de llamado a la acción).
    * `ReviewsSection` (Lista de reseñas de huéspedes anteriores con puntuaciones promedio).

---

## 4. Estrategia de Desarrollo y Diseño
* **Enfoque Mobile-First:** Todos los estilos se escribirán primero para pantallas de **375px**. Las adaptaciones a pantallas de escritorio (**768px** o superior) se manejarán progresivamente mediante *media queries* (o clases utilitarias de Tailwind, si se utiliza).
* **Componentización Atómica:** Se priorizarán los componentes pequeños y de responsabilidad única (ej. un componente exclusivo para el botón de favoritos `FavoriteButton`, el indicador de estrellas `StarRating`, etc.).