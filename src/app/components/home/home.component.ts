import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private _spotifyService: SpotifyService
  ) {
    _spotifyService.getReleases();
  }

  ngOnInit(): void {}
}
