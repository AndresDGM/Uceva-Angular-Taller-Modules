import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from '../interfaces/anime.interface';

interface JikanResponse {
  data: Anime[];
}

@Injectable({
  providedIn: 'root'
})

export class AnimeService {
    private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://api.jikan.moe/v4';

  getTopAnime(): Observable<JikanResponse> {
    return this.http.get<JikanResponse>(
      `${this.apiUrl}/top/anime`
    );
  }
}
