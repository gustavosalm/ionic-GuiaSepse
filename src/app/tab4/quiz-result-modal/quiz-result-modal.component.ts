import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-result-modal',
  templateUrl: './quiz-result-modal.component.html',
  styleUrls: ['./quiz-result-modal.component.scss'],
})
export class QuizResultModalComponent implements OnInit {
  correct: any;
  overlayBg: any;
  feedbackText: any;
  feedbackButton: any;
  state = -1;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.feedbackButton = document.getElementById('messageButton');
    this.feedbackText = document.getElementById('correctFeedback');
    this.overlayBg = document.getElementById('overlayHeader');

    if(this.correct){
      this.state = 0;
      this.feedbackText.innerHTML = 'Resposta correta!';
      this.feedbackButton.innerHTML = 'Próxima pergunta';
      this.overlayBg.style.backgroundImage = "url('../../../assets/backgrounds/quiz/CorrectBackground.svg')";
    }
    else{
      this.state = 1;
      this.feedbackText.innerHTML = 'Resposta incorreta!';
      this.feedbackButton.innerHTML = 'Tentar novamente';
      this.overlayBg.style.backgroundImage = "url('../../../assets/backgrounds/quiz/IncorrectBackground.svg')";
    }
  }

  closeOverlay(firstButton: boolean){
    let message;
    if(firstButton) message = (this.state == 0) ? 'next' : 'try again';
    this.modalController.dismiss(null, message);
  }
}
