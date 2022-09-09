import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  bearer: string =
    'Bearer BQD3i5k9ZxMXQWy6yENfvrDlqXtrGNjlDk9t6QdbDn4COtKm5O-hrAQnMaMX4kKMMQU6ihhAAxdc7PqYh6lbjig7PYKxy5rqk74sp-cLCf70GbYQJMMcJkj_LlzjgSdS746hc-VC_S-cDy0YaKRtiVNNGy4Rs62cgJSCXSI9NslolWJ9OhTur7nDEAXBFrXJE14';

  constructor(private http: HttpClient) {
    console.log('Spotify Services!!');
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: this.bearer,
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  searchArtist(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}
