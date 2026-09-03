/**
 * Interfaz que define la estructura del modelo de datos para un tema de Sistemas de Diseño.
 *
 * @remarks
 * Esta interfaz establece los atributos requeridos para representar la información
 * completa de cada concepto o tema de Sistemas de Diseño en la aplicación.
 */
export interface sistemasdediseno {
    /**
     * Identificador único numérico del tema de Sistema de Diseño.
     */
    id: number;

    /**
     * Título o nombre principal del concepto o tema de Sistema de Diseño.
     */
    titulo: string;

    /**
     * Descripción detallada que explica el concepto o principio del Sistema de Diseño.
     */
    descripcion: string;

    /**
     * Listado de subtemas, conceptos clave o elementos secundarios pertenecientes al tema.
     */
    subtemas: string[];
}