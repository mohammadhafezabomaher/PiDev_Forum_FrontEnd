import { Component, ViewEncapsulation } from '@angular/core';
import {Cloudinary} from '@cloudinary/url-gen'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  //title = 'piFront';
  ngOnInit() {
    const cld = new Cloudinary({cloud: {cloudName: 'she-codes-africa'}});

    (function(d, m){
      var kommunicateSettings = {"appId":"29a333b3e67d4ff0aeaf89ca4894eae1b","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
  })(document, (window as any).kommunicate || {});
  }

 
}
