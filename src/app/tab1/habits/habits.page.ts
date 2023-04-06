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
  sections: any;
  footBar: any;
  toolTip: any;
  bulletInd: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('habitsPageBullet');
    this.pageButtons = document.getElementsByClassName('habitsPageButtons');
    this.sections = document.getElementsByClassName('habitsSectionInfo');
    this.toolTip = document.getElementsByClassName('habitsTooltipCard');
    this.footBar = document.getElementById('habitsFootBar');

    this.pageBullets[this.bulletInd].classList.add('current');
    // this.toolTip[0].style.position = 'absolute';
  }

  nextPage(){
    if(this.bulletInd < 2){
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Anterior';
      this.sections[this.bulletInd].classList.add('hidden');
      this.pageBullets[this.bulletInd++].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      this.sections[this.bulletInd].classList.remove('hidden');
      if(this.bulletInd === 2) {
        this.footBar.classList.add('collapsedRight');
        this.toolTip[0].classList.remove('hidden');
        // this.toolTip[0].style.position = 'relative';
      }
    }
  }

  previousPage() {
    if(this.bulletInd > 0){
      if(this.bulletInd === 2) {
        this.footBar.classList.remove('collapsedRight');
        this.toolTip[0].classList.add('hidden');
      }
      this.sections[this.bulletInd].classList.add('hidden');
      this.pageBullets[this.bulletInd--].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      this.sections[this.bulletInd].classList.remove('hidden');
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Voltar';
    }
    else{
      this.router.navigateByUrl('tabs/tab1');
    }
  }
}
