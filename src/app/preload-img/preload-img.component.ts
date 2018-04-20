import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preload-img',
  templateUrl: './preload-img.component.html',
  styleUrls: ['./preload-img.component.css']
})
export class PreloadImgComponent {

  @Input() smallPhoto: string;
  @Input() largePhoto: string;
  hideBigImage: boolean = true;

  bigImageLoad() {
    /**
     * setTimeout ONLY for testing purposes
     */
    setTimeout( () => {
      this.hideBigImage = false;
    }, 1000); 
  }

}
