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
    this.pageBullets = document.getElementsByClassName('pageBullet');
    this.pageButtons = document.getElementsByClassName('pageButtons');
    this.footBar = document.getElementById('footBar');
  }

  nextPage(){
    console.log('aaa');
    if(this.bulletInd < 2){
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Anterior';
      this.pageBullets[this.bulletInd++].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      if(this.bulletInd === 2) this.footBar.classList.add('collapsedRight');
    }
  }

  previousPage() {
    console.log('bbb');
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
