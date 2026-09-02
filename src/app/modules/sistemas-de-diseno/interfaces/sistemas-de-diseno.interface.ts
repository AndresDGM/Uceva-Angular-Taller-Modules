/**
 * Interfaz que define la estructura del modelo de datos para un tema de Sistemas de Diseño.
 *
 * @remarks
 * Esta interfaz establece los atributos requeridos para representar la información
 * completa de cada concepto de Sistemas de Diseño en la aplicación.
 */
export interface sistemasdediseno {
    id: number;
    titulo: string;
    descripcion: string;
    subtemas: string[];
}