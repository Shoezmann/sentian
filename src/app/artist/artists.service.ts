import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import {ArtistInterface} from './model/artist';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ArtistsService {
  private _APIURL: string = 'https://musicbrainz.org/ws/2/artist/';

  constructor(
    private http: HttpClient,
  ) { }

  getArtists(name: string): Observable<ArtistInterface[]>{
    return this.http.get<ArtistInterface[]>(`${this._APIURL}?query=${name}&offset=0`);
  }
}
