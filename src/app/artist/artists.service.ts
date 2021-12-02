import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'


import {Artist} from './model/artist';
import { Genre } from './model/genre';

@Injectable({
  providedIn: 'root'
})

export class ArtistsService {
  private _APIURL: string = 'https://musicbrainz.org/ws/2/';

  constructor(
    private http: HttpClient,
  ) { }

  getArtists(name: string): Observable<Artist[]>{
    return this.http.get<Artist[]>(`${this._APIURL}artist/?query=${name}&inc=user-genres&fmt=json`)
  }
}
