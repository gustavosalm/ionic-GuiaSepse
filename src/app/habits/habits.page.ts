import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.page.html',
  styleUrls: ['./habits.page.scss'],
})
export class HabitsPage implements OnInit {
  pageBullets: any;
  pageButtons: any;
  footBar: any;
  ind: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('pageBullet');
    this.pageButtons = document.getElementsByClassName('pageButtons');
    this.footBar = document.getElementById('footBar');
  }

  nextPage(){
    if(this.ind < 2){
      if(this.ind === 0) this.pageButtons[0].innerHTML = 'Anterior';
      this.pageBullets[this.ind++].classList.remove('current');
      this.pageBullets[this.ind].classList.add('current');
      if(this.ind === 2) this.footBar.classList.add('collapsed');
    }
  }

  previousPage() {
    if(this.ind > 0){
      if(this.ind === 2) this.footBar.classList.remove('collapsed');
      this.pageBullets[this.ind--].classList.remove('current');
      this.pageBullets[this.ind].classList.add('current');
      if(this.ind === 0) this.pageButtons[0].innerHTML = 'Voltar';
    }
    else{
      this.router.navigateByUrl('tabs/tab1');
    }
  }
}
