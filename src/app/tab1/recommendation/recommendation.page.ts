import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.page.html',
  styleUrls: ['./recommendation.page.scss'],
})
export class RecommendationPage implements OnInit {
  pageBullets: any;
  pageButtons: any;
  sections: any;
  footBar: any;
  bulletInd: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('recommendationPageBullet');
    this.pageButtons = document.getElementsByClassName('recommendationPageButtons');
    this.sections = document.getElementsByClassName('recommendationSectionInfo');
    this.footBar = document.getElementById('recommendationFootBar');

    this.pageBullets[this.bulletInd].classList.add('current');
  }

  nextPage(){
    if(this.bulletInd < 4){
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Anterior';
      this.sections[this.bulletInd].classList.add('hidden');
      this.pageBullets[this.bulletInd++].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      this.sections[this.bulletInd].classList.remove('hidden');
      if(this.bulletInd === 4) {
        this.footBar.classList.add('collapsedRight');
      }
    }
  }

  previousPage() {
    if(this.bulletInd > 0){
      if(this.bulletInd === 4) {
        this.footBar.classList.remove('collapsedRight');
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

