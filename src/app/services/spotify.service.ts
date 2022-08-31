import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Services!!');
  }

  getReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAp_FE5lZZeFrOgNH0KNEQzV6AwzpdfDBz_XQHcH3bpmr5gJ4mgbr244DTtJexp5dU2uLw4QTk0K-LqbfjIbp301zC_l06Og__UFf37lyrWnDai0ja-WF8caaq8Bx0KlD8QvBjFmd3uxxLz2-VGdqnz9cxW6clx2R5fGZNJFLe-YBf2JkxrHxbpvVEtwZZEDbWLxQ',
    });

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
