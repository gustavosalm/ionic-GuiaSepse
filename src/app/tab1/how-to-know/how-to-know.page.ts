import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ResultModalComponent } from '../result-modal/result-modal.component';

@Component({
  selector: 'app-how-to-know',
  templateUrl: './how-to-know.page.html',
  styleUrls: ['./how-to-know.page.scss'],
})
export class HowToKnowPage implements OnInit {
  resultOverlay = ResultModalComponent;
  checkboxes: any = [];
  formContainers: any = [];
  containerTop: any;
  containerFooter: any;
  fillBar: any;
  fillBarText: any;
  boxStates: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  boxDenies = false;
  allChecked = 0;
  currentItem = 0;
  formsPart = 1;

  constructor(private router : Router, private modalController: ModalController) { }

  ngOnInit() {
    this.checkboxes = document.getElementsByClassName('listItem');
    this.formContainers.push(document.getElementById('questionsContainer1'), document.getElementById('questionsContainer2'))
    this.containerTop = document.getElementsByClassName('containerTop');
    this.containerFooter = document.getElementsByClassName('questionsFooter');
    this.fillBar = document.getElementById('fillBar');
    this.fillBarText = document.getElementById('fillBarText');
  }

  checkingBox(ind: number, box: number) {
    if(this.boxDenies) return;
    let item = this.checkboxes[ind];
    if(this.boxStates[ind] === box) {
      // item.children[box+1].children[1].checked = true;
      this.boxStates[ind] = -1;
      if(ind < 5) this.allChecked--;
      this.refreshCurrentItem();
      return;
    }
    else if(this.boxStates[ind] !== -1) {
      this.boxDenies = true;
      item.children[this.boxStates[ind]+this.formsPart].children[1].checked = false;
      setTimeout(() => {
        this.boxDenies = false;
      }, 100);
    }
    else {
      if(ind < 5) this.allChecked++;
    }
    this.currentItem = ind;
    this.boxStates[ind] = box;
    this.refreshCurrentItem();
  }

  changePart(ind : number){
    if(ind === 1) {
      this.containerTop[0].classList.remove('hidden');
      this.containerTop[1].classList.add('hidden');
      this.formContainers[0].classList.remove('contCollapsed');
      this.formContainers[1].classList.add('contCollapsed');
      this.formContainers[0].children[0].scrollTop = 0;
      this.formsPart = ind;
    }
    else if(ind === 2) {
      this.containerTop[0].classList.add('hidden');
      this.containerTop[1].classList.remove('hidden');
      this.formContainers[0].classList.add('contCollapsed');
      this.formContainers[1].classList.remove('contCollapsed');
      this.formsPart = ind;
      this.currentItem = 5;
      this.refreshCurrentItem();
    }
  }

  refreshCurrentItem(){
    if(this.currentItem < 5)
      return;
    if(this.boxStates[this.currentItem] === -1)
      this.containerFooter[0].classList.add('disabled');
    else
      this.containerFooter[0].classList.remove('disabled');

    this.fillBar.style.width = (this.currentItem - 4)*100/6  + '%';
    this.fillBarText.innerHTML = (this.currentItem - 4) + ' de 6'
  }

  nextIndex(){
    if(this.currentItem + 1 > 10){
      this.getResults();
      return;
    }

    if(this.currentItem + 1 === 10) {
      this.containerFooter[0].children[1].innerHTML = 'Resultado';
    }
    // else if(this.currentItem === 5){
    //   this.containerFooter[0].classList.remove('collapsedLeft');
    // }

    this.checkboxes[this.currentItem].classList.remove('current');
    this.checkboxes[this.currentItem+1].classList.add('current');
    this.currentItem++;
    this.refreshCurrentItem();
  }

  previousIndex(){
    if(this.currentItem < 5) return;

    if(this.currentItem === 10) {
      this.containerFooter[0].children[1].innerHTML = 'Próximo';
    }
    else if(this.currentItem - 1 === 4) {
      this.changePart(1);
      return;
    }
    // else if(this.currentItem - 1 === 5) {
    //   this.containerFooter[0].classList.add('collapsedLeft');
    // }

    this.checkboxes[this.currentItem].classList.remove('current');
    this.checkboxes[this.currentItem-1].classList.add('current');
    this.currentItem--;
    this.refreshCurrentItem();
  }

  async getResults(){
    let result = 0;
    let mod = 2;
    this.boxStates.forEach((val, ind) => {
      if(ind === 5) mod = 12;
      else if(ind === 10) mod = 30;
      result -= (val - 1) * mod;
    });

    const modal = await this.modalController.create({
      component: this.resultOverlay,
      cssClass: 'resultOverlay',
      mode: 'md',
      backdropDismiss: true,
      componentProps: {
        finalPoints: result
      }
    });

    await modal.present();
    const { role } = await modal.onDidDismiss();

    if(role === 'closeTab') this.goBack();
  }

  goBack(){
    this.modalController.dismiss();
    // document.getElementById('tab-button-tab1')?.click();
  }
}
