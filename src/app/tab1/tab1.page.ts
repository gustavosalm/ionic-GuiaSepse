import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HowToKnowPage } from './how-to-know/how-to-know.page';
import { HabitsPage } from './habits/habits.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  quizPage = HowToKnowPage;
  habitsPage = HabitsPage;

  constructor(private modalController: ModalController) {}

  async displayQuizPage(){
    const modal = await this.modalController.create({
      component: this.quizPage,
      cssClass: 'quizPageOverlay',
      mode: 'md',
      backdropDismiss: true
    });

    await modal.present();
  }

  async displayHabitsPage(){
    const modal = await this.modalController.create({
      component: this.habitsPage,
      cssClass: 'habitsPageOverlay',
      mode: 'md',
      backdropDismiss: true
    });

    await modal.present();
  }

}
