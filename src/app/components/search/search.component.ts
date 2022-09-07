import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading!: boolean;

  constructor(private _spotifyService: SpotifyService) {}

  getArtist(artist: string) {
    artist === '' ? (artist = 'mejores exitos') : '';
    this.loading = true;
    this._spotifyService.searchArtist(artist).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

  isGenres(index: number) {
    return this.artists[index].genres.length > 0 ? true : false;
  }

  ngOnInit(): void {}
}
