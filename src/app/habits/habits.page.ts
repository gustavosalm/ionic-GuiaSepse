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
  bulletInd: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('habitsPageBullet');
    this.pageButtons = document.getElementsByClassName('habitsPageButtons');
    this.footBar = document.getElementById('footBar');

    this.pageBullets[this.bulletInd].classList.add('current');
  }

  nextPage(){
    if(this.bulletInd < 2){
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Anterior';
      this.pageBullets[this.bulletInd++].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      if(this.bulletInd === 2) this.footBar.classList.add('collapsedRight');
    }
  }

  previousPage() {
    if(this.bulletInd > 0){
      if(this.bulletInd === 2) this.footBar.classList.remove('collapsedRight');
      this.pageBullets[this.bulletInd--].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Voltar';
    }
    else{
      this.router.navigateByUrl('tabs/tab1');
    }
  }
}
