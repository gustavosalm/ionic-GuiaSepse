import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.page.html',
  styleUrls: ['./positions.page.scss'],
})
export class PositionsPage implements OnInit {
  pageBullets: any;
  pageButtons: any;
  sections: any;
  footBar: any;
  toolTip: any;
  bulletInd: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('positionsPageBullet');
    this.pageButtons = document.getElementsByClassName('positionsPageButtons');
    this.sections = document.getElementsByClassName('positionsSectionInfo');
    this.toolTip = document.getElementsByClassName('positionsTooltipCard');
    this.footBar = document.getElementById('positionsFootBar');

    this.pageBullets[this.bulletInd].classList.add('current');
  }

  nextPage(){
    if(this.bulletInd < 3){
      if(this.bulletInd === 0) {
        this.toolTip[0].classList.remove('hidden');
        this.pageButtons[0].innerHTML = 'Anterior';
      }
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
      if(this.bulletInd === 0) {
        this.pageButtons[0].innerHTML = 'Voltar';
        this.toolTip[0].classList.add('hidden');
      }
    }
    else{
      this.router.navigateByUrl('tabs/tab2');
    }
  }
}
