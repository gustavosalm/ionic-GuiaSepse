import { Component } from '@angular/core';

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

  copyEmail(){
    if (!navigator.clipboard){
      this.emailSpan.focus();
      document.execCommand("Copy");
      this.emailSpan.blur();
    }
    else {
      navigator.clipboard.writeText(this.emailSpan.innerHTML);
    }
  }

}
