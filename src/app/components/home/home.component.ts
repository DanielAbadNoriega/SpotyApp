import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean = true;

  constructor(
    private http: HttpClient,
    private _spotifyService: SpotifyService
  ) {
    this._spotifyService.getReleases().subscribe((data: any) => {
      this.newSongs = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {}
}
