import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { ListAnimesComponent } from './list-animes.component';
import { TableAnimesComponent } from '../../components/table-animes.component/table-animes.component';
import { AnimeService } from '../../services/anime.service';
import { Anime, AnimeResponse } from '../../interfaces/anime.interface';

describe('ListAnimesComponent', () => {
  let component: ListAnimesComponent;
  let fixture: ComponentFixture<ListAnimesComponent>;
  let animeService: AnimeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListAnimesComponent,
        TableAnimesComponent
      ],
      providers: [
        provideHttpClient()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListAnimesComponent);
    component = fixture.componentInstance;
    animeService = TestBed.inject(AnimeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getTopAnime al iniciar', () => {
    const response: AnimeResponse = {
      pagination: {
        last_visible_page: 1,
        has_next_page: false,
        current_page: 1,
        items: {
          count: 0,
          total: 0,
          per_page: 0
        }
      },
      data: []
    };

    const spy = jest
      .spyOn(animeService, 'getTopAnime')
      .mockReturnValue(of(response));

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('debería asignar los animes recibidos del servicio', () => {
    const anime: Anime = {
      mal_id: 1,
      url: 'https://example.com/naruto',
      images: {
        jpg: {
          image_url: 'https://example.com/naruto.jpg',
          small_image_url: 'https://example.com/naruto-small.jpg',
          large_image_url: 'https://example.com/naruto-large.jpg'
        }
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null
        }
      },
      approved: true,
      titles: [],
      title: 'Naruto',
      title_english: 'Naruto',
      title_japanese: 'NARUTO -ナルト-',
      title_synonyms: [],
      type: 'TV',
      source: 'Manga',
      episodes: 220,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: new Date('2002-10-03'),
        to: new Date('2007-02-08'),
        prop: {
          from: {
            day: 3,
            month: 10,
            year: 2002
          },
          to: {
            day: 8,
            month: 2,
            year: 2007
          }
        },
        string: 'Oct 3, 2002 to Feb 8, 2007'
      },
      duration: '23 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 9,
      scored_by: 1000000,
      rank: 1,
      popularity: 1,
      members: 2000000,
      favorites: 100000,
      synopsis: 'Anime de prueba',
      background: '',
      season: 'fall',
      year: 2002,
      broadcast: {
        day: 'Thursday',
        time: '19:30',
        timezone: 'Asia/Tokyo',
        string: 'Thursdays at 19:30 (JST)'
      },
      producers: [],
      licensors: [],
      studios: [],
      genres: [],
      explicit_genres: [],
      themes: [],
      demographics: []
    };

    const response: AnimeResponse = {
      pagination: {
        last_visible_page: 1,
        has_next_page: false,
        current_page: 1,
        items: {
          count: 1,
          total: 1,
          per_page: 1
        }
      },
      data: [anime]
    };

    jest
      .spyOn(animeService, 'getTopAnime')
      .mockReturnValue(of(response));

    fixture.detectChanges();

    expect(component.anime).toEqual(response.data);
  });

  it('debería manejar el error del servicio', () => {
    const error = new Error('Error al obtener animes');

    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    jest
      .spyOn(animeService, 'getTopAnime')
      .mockReturnValue(throwError(() => error));

    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalledWith(error);

    consoleSpy.mockRestore();
  });
});