import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  artist: any;
  loading!: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this._activatedRoute.params.subscribe((params) =>
      this.showArtist(params['id'])
    );
  }

  showArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe((data: any) => {
      this.artist = data;
      this.loading = false;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
