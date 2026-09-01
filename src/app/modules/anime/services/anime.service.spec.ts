import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';

import { AnimeService } from './anime.service';
import { AnimeResponse } from '../interfaces/anime.interface';

describe('AnimeService', () => {
  let service: AnimeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(AnimeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar los animes del servicio', () => {
    const mockResponse = {} as AnimeResponse;

    service.getTopAnime().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(
      'https://api.jikan.moe/v4/top/anime'
    );

    expect(request.request.method).toBe('GET');

    request.flush(mockResponse);
  });
});