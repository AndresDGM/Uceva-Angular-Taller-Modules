/**
 * Respuesta principal de la API de Jikan v4 para consultas de anime.
 *
 * Encapsula la lista de animes devuelta y los metadatos de paginación correspondientes.
 */
export interface AnimeResponse {
    /** Metadatos de paginación de la consulta */
    pagination: Pagination;
    /** Colección de animes devueltos por el endpoint */
    data: Anime[];
}

/**
 * Representa una entidad completa de Anime proveniente de la API de Jikan / MyAnimeList.
 */
export interface Anime {
    /** Identificador único del anime en MyAnimeList */
    mal_id:          number;
    /** URL de la ficha del anime en el portal MyAnimeList */
    url:             string;
    /** Mapa de imágenes disponibles organizadas por formato (por ejemplo 'jpg', 'webp') */
    images:          { [key: string]: Image };
    /** Información y recursos multimedia del tráiler promocional */
    trailer:         Trailer;
    /** Indica si el registro ha sido validado y aprobado en la base de datos de MAL */
    approved:        boolean;
    /** Variaciones y traducciones del título en distintos idiomas */
    titles:          Title[];
    /** Título canónico o por defecto del anime */
    title:           string;
    /** Título oficial en inglés (o null si no dispone de traducción en inglés) */
    title_english:   null | string;
    /** Título original en japonés */
    title_japanese:  string;
    /** Sinónimos o títulos alternativos comúnmente utilizados */
    title_synonyms:  string[];
    /** Formato o tipo de medio de la producción (ej. TV, Movie, OVA, etc.) */
    type:            string;
    /** Origen de la obra adaptada (ej. Manga, Light novel, Original) */
    source:          string;
    /** Cantidad total de episodios (o null si aún se desconoce o sigue en emisión continua) */
    episodes:        number | null;
    /** Estado de emisión del anime */
    status:          Status;
    /** Indica si el anime se encuentra actualmente en emisión */
    airing:          boolean;
    /** Fechas y periodo de transmisión del anime */
    aired:           Aired;
    /** Duración estimada por episodio o duración global de la obra */
    duration:        string;
    /** Clasificación por edad y audiencia recomendada */
    rating:          Rating;
    /** Calificación promedio otorgada por los usuarios (escala 1 a 10) */
    score:           number;
    /** Número total de usuarios que han puntuado la obra */
    scored_by:       number;
    /** Posición en el ranking global según puntuación */
    rank:             number;
    /** Posición en el ranking de popularidad según cantidad de seguidores */
    popularity:       number;
    /** Total de miembros que han guardado el anime en sus listas */
    members:          number;
    /** Cantidad de usuarios que han marcado el anime como favorito */
    favorites:       number;
    /** Sinopsis o resumen argumental del anime */
    synopsis:         string;
    /** Información contextual y antecedentes de producción */
    background:       string;
    /** Temporada de estreno del anime */
    season:          Season | null;
    /** Año de estreno del anime */
    year:             number | null;
    /** Información de emisión televisiva periódica */
    broadcast:       Broadcast;
    /** Lista de productores asociados al anime */
    producers:        Demographic[];
    /** Lista de licenciatarios encargados de la distribución */
    licensors:        Demographic[];
    /** Estudios de animación principales a cargo del proyecto */
    studios:          Demographic[];
    /** Géneros temáticos principales asignados */
    genres:           Demographic[];
    /** Géneros de contenido explícito */
    explicit_genres:  unknown[];
    /** Temas narrativos o subgéneros secundarios */
    themes:           Demographic[];
    /** Grupos demográficos a los que va dirigida la obra (Shounen, Seinen, etc.) */
    demographics:     Demographic[];
}


/**
 * Información sobre el periodo de fechas en que fue emitido el anime.
 */
export interface Aired {
    /** Fecha de inicio de transmisión */
    from:   Date;
    /** Fecha de finalización de transmisión (o null si continúa en emisión) */
    to:     Date | null;
    /** Desglose numérico estructurado de las fechas de inicio y fin */
    prop:   Prop;
    /** Representación legible en texto del intervalo de emisión */
    string: string;
}

/**
 * Propiedad que desglosa las fechas de inicio y fin en componentes individuales (día, mes, año).
 */
export interface Prop {
    /** Componentes de la fecha de inicio */
    from: From;
    /** Componentes de la fecha de culminación */
    to:   From;
}

/**
 * Estructura de fecha desglosada en día, mes y año numéricos.
 */
export interface From {
    /** Día del mes (1-31) o null si se desconoce */
    day:   number | null;
    /** Mes del año (1-12) o null si se desconoce */
    month: number | null;
    /** Año o null si se desconoce */
    year:  number | null;
}

/**
 * Detalles sobre el horario de emisión periódica en televisión japonesa.
 */
export interface Broadcast {
    /** Día de la semana de emisión o null */
    day:      null | string;
    /** Hora de emisión programada o null */
    time:     null | string;
    /** Zona horaria correspondiente a la transmisión o null */
    timezone: Timezone | null;
    /** Descripción en texto completo del horario de emisión o null */
    string:   null | string;
}

/**
 * Zona horaria de transmisión en Japón.
 */
export type Timezone = "Asia/Tokyo";

/**
 * Representa una entidad de clasificación, género, tema, estudio o demografía asociada.
 */
export interface Demographic {
    /** Identificador único del registro en MyAnimeList */
    mal_id: number;
    /** Tipo de entidad */
    type:   DemographicType;
    /** Nombre o etiqueta de la entidad */
    name:   string;
    /** URL de la entidad en MyAnimeList */
    url:    string;
}

/**
 * Tipo de recurso demográfico en Jikan API.
 */
export type DemographicType = "anime";

/**
 * Conjunto de URLs de imágenes en diferentes resoluciones.
 */
export interface Image {
    /** URL de la imagen en tamaño estándar */
    image_url:       string;
    /** URL de la imagen en miniatura o tamaño pequeño */
    small_image_url: string;
    /** URL de la imagen en alta resolución */
    large_image_url: string;
}

/**
 * Clasificación por edades y restricción de contenido del anime.
 */
export type Rating = "PG-13 - Teens 13 or older" | "R - 17+ (violence & profanity)";

/**
 * Temporada climática/calendario del año en que se estrenó la obra.
 */
export type Season = "fall" | "spring" | "winter";

/**
 * Estado actual de la producción/emisión del anime.
 */
export type Status = "Finished Airing" | "Currently Airing";

/**
 * Estructura de un título alternativo o traducido.
 */
export interface Title {
    /** Categoría o idioma del título */
    type:  TitleType;
    /** Texto del título */
    title: string;
}

/**
 * Tipos de títulos reconocidos por la API.
 */
export type TitleType = "Default" | "Synonym" | "Japanese" | "English" | "French" | "German" | "Spanish";

/**
 * Información del tráiler oficial en video.
 */
export interface Trailer {
    /** Identificador único del video en YouTube (o null si no está disponible) */
    youtube_id: null;
    /** URL directa del video (o null si no está disponible) */
    url:        null;
    /** URL incrustable para reproducción en iframe (o null si no está disponible) */
    embed_url:  null | string;
    /** Miniaturas e imágenes asociadas al tráiler */
    images:     Images;
}

/**
 * Colección de URLs de miniaturas e imágenes del tráiler en distintas resoluciones.
 */
export interface Images {
    /** URL de la imagen en tamaño base o null */
    image_url:         null;
    /** URL de la imagen pequeña o null */
    small_image_url:   null;
    /** URL de la imagen mediana o null */
    medium_image_url:  null;
    /** URL de la imagen grande o null */
    large_image_url:   null;
    /** URL de la imagen en resolución máxima o null */
    maximum_image_url: null;
}

/**
 * Metadatos de paginación provistos en las respuestas de la API de Jikan.
 */
export interface Pagination {
    /** Número de la última página disponible */
    last_visible_page: number;
    /** Indica si existen páginas adicionales posteriores */
    has_next_page:     boolean;
    /** Número de la página actual */
    current_page:      number;
    /** Resumen numérico del total de elementos y cantidades por página */
    items:             Items;
}

/**
 * Métricas cuantitativas de elementos en la paginación.
 */
export interface Items {
    /** Cantidad de elementos presentes en la página devuelta */
    count:    number;
    /** Número total de elementos disponibles en la consulta */
    total:    number;
    /** Cantidad máxima de elementos configurados por página */
    per_page: number;
}
