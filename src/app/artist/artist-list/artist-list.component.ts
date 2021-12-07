import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArtistsService } from '../artists.service';

import { Artist} from '../model/artist';

import {MatCardModule} from '@angular/material/card';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];


  artistsFiltered: Observable<Artist[]>;
  
  selectedArtists: Artist [] = [];

  myControl = new FormControl();

  name: string = '';
  
  constructor(
    private artistService: ArtistsService
  ) { }

  ngOnInit(): void {
    this.getArtist(this.name);
    this.artistsFiltered = this.myControl.valueChanges.pipe(
      startWith(''),
      map(v => (typeof v === 'string' ? v : v.name)),
      map(name => (name ? this._filter(name) : this.artists.slice()))
    );
  }

  displayFn(artist: Artist) : string{
    return artist && artist.name ? artist.name : '';
  }

  private _filter(name: string): Artist[] {
    const filterValue = name.toLowerCase();
    return this.artists.filter(option => option.name.toLowerCase().includes(filterValue))
  }

  getArtist(name: string){
    this.artistService.getArtists(name)
    .subscribe((data : any) => {
      // console.log(data)
      this.artists = data});
  }

  favouriteArtists(option: MatOption){
      this.selectedArtists.push(option.value);
      console.log(this.selectedArtists);
  }
}
