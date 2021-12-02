import { Injectable } from '@angular/core';
import { map, Observable, of} from 'rxjs';
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
    // return this.http.get<Artist[]>(`${this._APIURL}artist/?query=${name}&inc=user-genres&fmt=json`)
    return of(API as unknown as Artist[])
  }


}

export const API = [ {"country":"US","name":"Snoop Dogg","gender":"Male","disambiguation":"US rapper","gender-id":"36d3d30a-839d-3eda-8cb3-29be4384e4a9","isnis":["0000000120269646"],"end-area":null,"genres":[{"id":"b37aef4d-0029-4fc7-b634-6338197335a8","name":"g-funk","disambiguation":"","count":5},{"id":"bc8c2f79-dcea-43f3-962b-f0663868d42c","name":"gangsta rap","disambiguation":"","count":7},{"name":"hip hop","disambiguation":"","count":13,"id":"52faa157-6bad-4d86-a0ab-d4dec7d2513c"},{"count":-1,"disambiguation":"","name":"reggae","id":"02b2f720-d06e-42ce-85c2-1ecd4191ffcb"},{"id":"149a3524-0fd3-4bdc-9876-0361dfee8908","disambiguation":"","count":1,"name":"west coast hip hop"}],"end_area":null,"begin_area":{"sort-name":"Long Beach","id":"e183ffae-1d35-4c78-b552-957535e40af1","type":null,"name":"Long Beach","type-id":null,"disambiguation":""},"sort-name":"Snoop Dogg","user-genres":[],"type-id":"b6e035f4-3ce9-331c-97df-83397230b0df","type":"Person","area":{"type":null,"name":"United States","type-id":null,"disambiguation":"","sort-name":"United States","iso-3166-1-codes":["US"],"id":"489ce91b-6658-3307-9877-795b68554c98"},"ipis":[],"id":"f90e8b26-9e52-4669-a5c9-e28529c47894","begin-area":{"sort-name":"Long Beach","id":"e183ffae-1d35-4c78-b552-957535e40af1","type":null,"name":"Long Beach","type-id":null,"disambiguation":""},"life-span":{"begin":"1971-10-20","end":null,"ended":false}},
  
]
