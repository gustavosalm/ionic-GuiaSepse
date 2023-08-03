import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-it-happens',
  templateUrl: './how-it-happens.page.html',
  styleUrls: ['./how-it-happens.page.scss'],
})
export class HowItHappensPage implements OnInit {
  pageBullets: any;
  pageButtons: any;
  sections: any;
  footBar: any;
  toolTip: any;
  bulletInd: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('howItHappensPageBullet');
    this.pageButtons = document.getElementsByClassName('howItHappensPageButtons');
    this.sections = document.getElementsByClassName('howItHappensSectionInfo');
    this.toolTip = document.getElementsByClassName('howItHappensTooltipCard');
    this.footBar = document.getElementById('howItHappensFootBar');

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

