import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss'],
})
export class ResultModalComponent implements OnInit {
  finalPoints: any;
  overlayBg: any;
  tooltipCards: any;
  tooltipInfo = [
    {innerText: 'Cuide-se! Mantenha seus exames e vacinas atualizados!', iconFileName: 'GoodResultIcon.svg', cardClass: 'goodTooltip'},
    {innerText: 'Procure o serviço de saúde mais próximo, pode ser Sepse!', iconFileName: 'IntermediateResultIcon.svg', cardClass: 'intermediateTooltip'},
    {innerText: 'Procure imediatamente um hospital, sua vida está em risco. Pode ser Sepse!', iconFileName: 'BadResultIcon.svg', cardClass: 'badTooltip'}
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.overlayBg = document.getElementById('overlayHeader');
    this.tooltipCards = document.getElementsByClassName('resultTooltip');
    let innerElements = this.tooltipCards[0].children[0].children;
    let state;

    if(this.finalPoints >= 55){
      state = 2;
      this.overlayBg.style.backgroundImage = "url('../../../assets/backgrounds/HowToKnow/BadResultBackground.svg')";
      this.tooltipCards[0].classList.add(this.tooltipInfo[state].cardClass);
      innerElements[0].src = '../../../assets/icon/HowToKnow/' + this.tooltipInfo[state].iconFileName;
      innerElements[1].innerHTML = this.tooltipInfo[state].innerText;
    }
    else if(this.finalPoints >= 45){
      state = 1;
      this.overlayBg.style.backgroundImage = "url('../../../assets/backgrounds/HowToKnow/IntermediateResultBackground.svg')";
      this.tooltipCards[0].classList.add(this.tooltipInfo[state].cardClass);
      innerElements[0].src = '../../../assets/icon/HowToKnow/' + this.tooltipInfo[state].iconFileName;
      innerElements[1].innerHTML = this.tooltipInfo[state].innerText;
    }
    else{
      state = 0;
      this.overlayBg.style.backgroundImage = "url('../../../assets/backgrounds/HowToKnow/GoodResultBackground.svg')";
      this.tooltipCards[0].classList.add(this.tooltipInfo[state].cardClass);
      innerElements[0].src = '../../../assets/icon/HowToKnow/' + this.tooltipInfo[state].iconFileName;
      innerElements[1].innerHTML = this.tooltipInfo[state].innerText;
    }
  }

  closeOverlay(){
    this.modalController.dismiss(null, 'closeTab');
  }

}
