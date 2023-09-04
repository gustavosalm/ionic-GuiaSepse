import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuizPage } from './quiz/quiz.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  quizPage = QuizPage;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async displayQuiz() {
    const modal = await this.modalController.create({
      component: this.quizPage,
      cssClass: 'habitsPageOverlay',
      mode: 'md',
      backdropDismiss: true
    });

    await modal.present();
  }
}
