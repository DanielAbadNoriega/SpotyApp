import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() loading!: boolean;

  constructor(private router: Router) {}

  showArtist(item: any) {
    let id: string = '';
    if (item.type === 'artist') {
      id = item.id;
    } else {
      id = item.artists[0].id;
    }
    console.log('[cardComponent - showArtist] Mostrando artista. Id: ' + id);
    this.router.navigate(['artist', id]);
  }

  ngOnInit(): void {}
}
