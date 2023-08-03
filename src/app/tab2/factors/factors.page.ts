import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factors',
  templateUrl: './factors.page.html',
  styleUrls: ['./factors.page.scss'],
})
export class FactorsPage implements OnInit {
  pageBullets: any;
  pageButtons: any;
  sections: any;
  footBar: any;
  bulletInd: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('factorsPageBullet');
    this.pageButtons = document.getElementsByClassName('factorsPageButtons');
    this.sections = document.getElementsByClassName('factorsSectionInfo');
    this.footBar = document.getElementById('factorsFootBar');

    this.pageBullets[this.bulletInd].classList.add('current');
  }

  nextPage(){
    if(this.bulletInd < 3){
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Anterior';
      this.sections[this.bulletInd].classList.add('hidden');
      this.pageBullets[this.bulletInd++].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      this.sections[this.bulletInd].classList.remove('hidden');
      if(this.bulletInd === 3) {
        this.footBar.classList.add('collapsedRight');
      }
    }
  }

  previousPage() {
    if(this.bulletInd > 0){
      if(this.bulletInd === 3) {
        this.footBar.classList.remove('collapsedRight');
      }
      this.sections[this.bulletInd].classList.add('hidden');
      this.pageBullets[this.bulletInd--].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      this.sections[this.bulletInd].classList.remove('hidden');
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Voltar';
    }
    else{
      this.router.navigateByUrl('tabs/tab2');
    }
  }
}
