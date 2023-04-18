import { Component } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  emailSpan: any;

  constructor() {}

  ngOnInit(){
    this.emailSpan = document.getElementById('emailText');
  }

  async copyEmail(){
    await Clipboard.write({
      string: this.emailSpan.innerHTML
    }).catch((err) => {
      if(navigator.clipboard) navigator.clipboard.writeText(this.emailSpan.innerHTML);
    }).then(() => {
      console.log('copier to clipboard');
    });
  }

}
