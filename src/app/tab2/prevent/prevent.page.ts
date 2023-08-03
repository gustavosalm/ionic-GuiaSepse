import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prevent',
  templateUrl: './prevent.page.html',
  styleUrls: ['./prevent.page.scss'],
})
export class PreventPage implements OnInit {
  pageBullets: any;
  pageButtons: any;
  sections: any;
  footBar: any;
  bulletInd: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('preventPageBullet');
    this.pageButtons = document.getElementsByClassName('preventPageButtons');
    this.sections = document.getElementsByClassName('preventSectionInfo');
    this.footBar = document.getElementById('preventFootBar');

    this.pageBullets[this.bulletInd].classList.add('current');
  }

  nextPage(){
    if(this.bulletInd < 6){
      if(this.bulletInd === 0) this.pageButtons[0].innerHTML = 'Anterior';
      this.sections[this.bulletInd].classList.add('hidden');
      this.pageBullets[this.bulletInd++].classList.remove('current');
      this.pageBullets[this.bulletInd].classList.add('current');
      this.sections[this.bulletInd].classList.remove('hidden');
      if(this.bulletInd === 6) {
        this.footBar.classList.add('collapsedRight');
      }
    }
  }

  previousPage() {
    if(this.bulletInd > 0){
      if(this.bulletInd === 6) {
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
