import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  transform(images: any[]) {
    if (!images) {
      return '../../../assets/img/spotifyLog2.jpg';
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return '../../../assets/img/spotifyLog2.jpg';
    }
  }
}
