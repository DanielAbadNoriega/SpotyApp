import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  bearer: string =
    'Bearer BQBjQmal4u-fz7NKiOfbD3RXQjuek2OLygkZP-GDmb07VIP475yDjZgnmnvJxlGYnOC8bXfH_-ykemSBcLylQyHhWSQ0a8FXSONp_0lyHcSRPwOtEroe4FRMlKfObiV8JjwH4mVkLQJjonNmww8zJBrI6cm0pIPXAmHf_SkyS9BV9Bj04C3_nYDvsTYnrrHd4YI';

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
