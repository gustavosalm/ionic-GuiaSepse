import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {
  pageBullets: any;
  pageButtons: any;
  sections: any;
  footBar: any;
  bulletInd: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.pageBullets = document.getElementsByClassName('instructionsPageBullet');
    this.pageButtons = document.getElementsByClassName('instructionsPageButtons');
    this.sections = document.getElementsByClassName('instructionsSectionInfo');
    this.footBar = document.getElementById('instructionsFootBar');

    this.pageBullets[this.bulletInd].classList.add('current');
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
      }
    }
  }

  previousPage() {
    if(this.bulletInd > 0){
      if(this.bulletInd === 2) {
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
