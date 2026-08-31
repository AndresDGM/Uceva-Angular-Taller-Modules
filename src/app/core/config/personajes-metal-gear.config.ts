import { Personaje } from "../../modules/metal-gear/interfaces/metal-gear.interface";

/**
 * Listado de personajes de la saga Metal Gear.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de los personajes más icónicos de la saga.
 *
 * @type {Personaje[]}
 */
export const PERSONAJES_METAL_GEAR: Personaje[] = [
  {
    id: 1,
    nombre: 'David',
    alias: 'Solid Snake',
    rol: 'Protagonista',
    juego: 'Metal Gear Solid',
    
  },
  {
    id: 2,
    nombre: 'Adamska',
    alias: 'Revolver Ocelot',
    rol: 'Antagonista',
    juego: 'Metal Gear Solid 3',
    
  },
  {
    id: 3,
    nombre: 'Hal Emmerich',
    alias: 'Otacon',
    rol: 'Aliado',
    juego: 'Metal Gear Solid 2',
    
  },
  {
    id: 4,
    nombre: 'The Boss',
    alias: 'The Joy',
    rol: 'Mentor',
    juego: 'Metal Gear Solid 3',
  
  },
  {
    id: 5,
    nombre: 'Jack',
    alias: 'Naked Snake',
    rol: 'Protagonista',
    juego: 'Metal Gear Solid 4',
    
  },

  {
    id: 6,
    nombre: 'Raiden',
    alias: 'Raiden',
    rol: 'Protagonista',
    juego: 'Metal Gear Rising',
  },

  {
    id: 7,
    nombre: 'Zero',
    alias: 'Zero',
    rol: 'Antagonista',
    juego: 'Metal Gear Solid V'
  },
  {
    id: 8,
    nombre: 'Roy Campbell',
    alias: 'Roy Campbell',
    rol: 'Aliado',
    juego: 'Metal Gear Solid 1'
  }

];
