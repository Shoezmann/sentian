import { Component, OnInit } from '@angular/core';

import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
