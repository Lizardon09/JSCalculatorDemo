import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Renderer2, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jsdemo';

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document){
   
  }

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.onload = this.loadNextScript.bind(this);
    s.type = 'text/javascript';
    s.src = './assets/scripts/vendor.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
 }

 loadNextScript() {
  const s = this.renderer2.createElement('script');
  s.src = './assets/scripts/app.js';
  s.text = '';
  this.renderer2.appendChild(this._document.body, s);
}

}
