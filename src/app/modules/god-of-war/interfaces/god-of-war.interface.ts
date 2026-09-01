/**
 * Interfaz que define la estructura del modelo de datos para un personaje de God of War.
 *
 * @remarks
 * Esta interfaz establece los atributos requeridos para representar la información
 * completa de los personajes en la aplicación.
 */
export interface GodOfWarInterface {
  /**
   * Identificador único numérico del personaje.
   */
  id: number;

  /**
   * Nombre principal o nombre propio del personaje.
   */
  name: string;

  /**
   * Apodo, título o alias conocido del personaje.
   */
  alias: string;

  /**
   * Especie o raza a la que pertenece el personaje (ej. Dios, Semidiós, Enano).
   */
  species: string;

  /**
   * Reino o lugar de origen del personaje en la mitología.
   */
  origin: string;

  /**
   * Rol que desempeña el personaje en la historia (ej. Protagonista, Aliado, Antagonista).
   */
  role: string;

  /**
   * Arma o herramienta principal que utiliza el personaje.
   */
  weapon: string;

  /**
   * Juego o título específico de la saga en el que participa el personaje.
   */
  game: string;

  /**
   * Nivel numérico relativo de poder del personaje.
   */
  powerLevel: number;
}

