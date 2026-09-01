import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeResponse } from '../interfaces/anime.interface';

/**
 * Servicio encargado de gestionar y consultar información sobre animes.
 *
 * Proporciona métodos para consumir los endpoints públicos de la API de Jikan v4 (MyAnimeList),
 * permitiendo obtener listas de animes destacados para la aplicación.
 *
 * @remarks
 * Está registrado a nivel raíz (`providedIn: 'root'`) y se comunica mediante el cliente HTTP de Angular.
 *
 * @example
 * ```ts
 * constructor(private animeService: AnimeService) {}
 *
 * ngOnInit() {
 *   this.animeService.getTopAnime().subscribe(response => {
 *     console.log(response.data);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  /**
   * Instancia inyectada del cliente HTTP de Angular.
   *
   * @type {HttpClient}
   * @private
   * @readonly
   */
  private readonly http = inject(HttpClient);

  /**
   * URL base de la API REST pública de Jikan v4.
   *
   * @type {string}
   * @private
   * @readonly
   */
  private readonly apiUrl = 'https://api.jikan.moe/v4';

  /**
   * Obtiene la lista de animes destacados (top) desde la API de Jikan.
   *
   * Realiza una petición HTTP GET al endpoint `/top/anime`.
   *
   * @returns Observable con la respuesta de la API tipada como `AnimeResponse`.
   */
  getTopAnime(): Observable<AnimeResponse> {
    return this.http.get<AnimeResponse>(
      `${this.apiUrl}/top/anime`
    );
  }
}
