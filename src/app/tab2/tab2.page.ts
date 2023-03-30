import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pageBullets: any;
  pageButtons: any;
  sections: any;
  footBar: any;
  toolTip: any;
  ind: number = 0;

  constructor() {}

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('tabsPageBullet');
    this.pageButtons = document.getElementsByClassName('tabsPageBullet');
    this.sections = document.getElementsByClassName('tabsSectionInfo');
    this.toolTip = document.getElementsByClassName('tabsTooltipCard');
    this.footBar = document.getElementById('tabsFootBar');

    if(this.ind === 0) this.footBar.classList.add('collapsedLeft');
  }

  nextPage(){
    console.log(this.ind);

    if(this.ind < 5){
      if(this.ind === 0) {
        this.footBar.classList.remove('collapsedLeft');
        this.toolTip[0].classList.add('hidden');
      }
      this.sections[this.ind].classList.add('hidden');
      this.pageBullets[this.ind++].classList.remove('current');
      this.pageBullets[this.ind].classList.add('current');
      this.sections[this.ind].classList.remove('hidden');
      if(this.ind === 5) this.footBar.classList.add('collapsedRight');
    }
  }

  previousPage() {
    console.log(this.ind);

    if(this.ind > 0){
      if(this.ind === 5) this.footBar.classList.remove('collapsedRight');
      this.sections[this.ind].classList.add('hidden');
      this.pageBullets[this.ind--].classList.remove('current');
      this.pageBullets[this.ind].classList.add('current');
      this.sections[this.ind].classList.remove('hidden');
      if(this.ind === 0) {
        this.footBar.classList.add('collapsedLeft');
        this.toolTip[0].classList.remove('hidden');
      }
    }
  }
}
