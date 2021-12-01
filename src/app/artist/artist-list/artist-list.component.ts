import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArtistsService } from '../artists.service';

import { ArtistInterface } from '../model/artist';

import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: ArtistInterface[] = [];
  name: string = 'Snopp';
  constructor(
    private artistService: ArtistsService
  ) { }

  ngOnInit(): void {
    
  }

  getArtist(name: string){
    this.artistService.getArtists(this.name)
    .subscribe(console.log)

  }

}
