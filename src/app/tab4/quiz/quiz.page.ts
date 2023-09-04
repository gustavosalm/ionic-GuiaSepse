import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuizResultModalComponent } from '../quiz-result-modal/quiz-result-modal.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  quizResult = QuizResultModalComponent;
  checkboxes: any = [];
  fillBar: any;
  fillBarText: any;
  questionContainer: any;
  submitButton: any;
  ind: number = 0;
  boxStates: number[] = [-1, -1, -1, -1, -1, -1];
  correctAnswer: number[] = [1, 2, 2, 1, 3, 3];
  boxDenies = false;

  questions = ['1. O que pode causar uma lesão por pressão na pele?',
               '2. Qual é a principal forma de prevenção de lesões por pressão?',
               '3. Qual dessas orientações é a correta para casos de Lesão por pressão?',
               '4. Como se inicia uma lesão por pressão?',
               '5. Qual desses é um exemplo de colchão que ajuda na prevenção de lesões por pressão?',
               '6. Em quanto tempo deve ser trocada a posição da pessoa com ausência de mobilidade?'];

  alternatives = [['Um objeto cortante', 'Pressão constante entre a pele e uma superfície', 'Um trauma físico', 'Uma infecção'],
                  ['Realizar atividades físicas regularmente', 'Fazer uso de medicamentos preventivos', 'Realizar mudanças de posição frequentemente', 'Manter uma alimentação saudável'],
                  ['Não mudar a pessoa de posição', 'Tomar remédios sem consulta', 'Manter higiene adequada', 'Beber pouca água'],
                  ['Com uma coceira', 'Com uma vermelhidão na pele', 'Com uma bolha', 'Com uma dor forte'],
                  ['Colchão inflável', 'Colchão impermeável', 'Colchão rígido', 'Colchão pneumático'],
                  ['A cada 3 horas', 'A cada 4 horas', 'A cada 5 horas', 'A cada 2 horas']];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.questionContainer = document.getElementById('quizQuestion');
    this.checkboxes = document.getElementsByClassName('listCheckBox');
    this.fillBar = document.getElementById('fillBar');
    this.fillBarText = document.getElementById('fillBarText');
    this.submitButton = document.getElementsByClassName('submitButton')[0];
  }

  checkingBox(box: number) {
    if(this.boxDenies) return;
    console.log(this.boxStates[this.ind]);

    let item = this.checkboxes[box];
    if(this.boxStates[this.ind] === box) {
      this.boxStates[this.ind] = -1;
      this.submitButton.classList.add('disabled');
    }
    else if(this.boxStates[this.ind] !== -1) {
      this.boxDenies = true;
      this.checkboxes[this.boxStates[this.ind]].children[1].checked = false;
      this.boxStates[this.ind] = box;
      setTimeout(() => {
        this.boxDenies = false;
      }, 100);
    }
    else {
      this.submitButton.classList.remove('disabled');
      this.boxStates[this.ind] = box;
    }
  }

  async submitAnswer(){
    const modal = await this.modalController.create({
      component: this.quizResult,
      cssClass: 'resultOverlay',
      mode: 'md',
      backdropDismiss: false,
      componentProps: {
        correct: (this.boxStates[this.ind] == this.correctAnswer[this.ind])
      }
    });

    await modal.present();
    const { role } = await modal.onDidDismiss();

    if(role === 'try again'){
      this.boxDenies = true;
      this.checkboxes[this.boxStates[this.ind]].children[1].checked = false;
      setTimeout(() => {
        this.boxDenies = false;
      }, 100);

      this.boxStates[this.ind] = -1;
      this.submitButton.classList.add('disabled');
    }
    else if(role === 'next') {
      if(this.ind === 5){
        this.finishQuiz();
        return;
      }

      this.questionContainer.classList.add('hidden');
      setTimeout(() => {
        this.boxDenies = true;
        this.checkboxes[this.boxStates[this.ind++]].children[1].checked = false;
        setTimeout(() => {
          this.boxDenies = false;
        }, 100);

        this.questionContainer.children[0].innerHTML = this.questions[this.ind];
        for(let i = 0; i < 4; i++){
          this.checkboxes[i].children[0].innerHTML = this.alternatives[this.ind][i];
        }

        this.fillBar.style.width = (this.ind + 1)*100/6  + '%';
        this.fillBarText.innerHTML = (this.ind + 1) + ' de 6'

        this.submitButton.classList.add('disabled');
        this.questionContainer.classList.remove('hidden');
      }, 500);
    }
    else {
      this.modalController.dismiss();
    }
  }

  finishQuiz(){
    document.getElementById('quizLastScreen')?.classList.remove('hidden');
    document.getElementById('quizContent')?.classList.add('hidden');
    document.getElementById('quizHeader')?.classList.add('solid');
  }

  resetQuiz(){
    this.boxDenies = true;
    this.checkboxes[this.boxStates[this.ind]].children[1].checked = false;
    setTimeout(() => {
      this.boxDenies = false;
    }, 100);

    this.ind = 0;
    this.boxStates = [-1, -1, -1, -1, -1, -1];
    this.questionContainer.children[0].innerHTML = this.questions[this.ind];
    for(let i = 0; i < 4; i++){
      this.checkboxes[i].children[0].innerHTML = this.alternatives[this.ind][i];
    }

    this.fillBar.style.width = (this.ind + 1)*100/6  + '%';
    this.fillBarText.innerHTML = (this.ind + 1) + ' de 6'

    this.submitButton.classList.add('disabled');

    document.getElementById('quizLastScreen')?.classList.add('hidden');
    document.getElementById('quizContent')?.classList.remove('hidden');
    document.getElementById('quizHeader')?.classList.remove('solid');
  }

  leaveQuiz(){
    this.modalController.dismiss();
  }
}
