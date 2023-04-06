import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refs',
  templateUrl: './refs.page.html',
  styleUrls: ['./../tab3.page.scss'],
})
export class RefsPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navBack() {
    this.router.navigateByUrl('tabs/tab3');
  }
}
