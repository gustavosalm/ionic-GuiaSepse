import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./../tab3.page.scss'],
})
export class TeamPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navBack() {
    this.router.navigateByUrl('tabs/tab3');
  }
}
