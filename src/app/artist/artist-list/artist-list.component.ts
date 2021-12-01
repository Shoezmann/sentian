import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArtistsService } from '../artists.service';

import { Artist} from '../model/artist';

import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];

  name: string = 'Snop';
  constructor(
    private artistService: ArtistsService
  ) { }

  ngOnInit(): void {
    this.getArtist(this.name);
  }

  getArtist(name: string){
    this.artistService.getArtists(name)
    .subscribe((data : any) => {
      console.log(data)
      this.artists = data.artists});

  }
}
