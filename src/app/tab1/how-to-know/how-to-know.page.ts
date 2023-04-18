import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-know',
  templateUrl: './how-to-know.page.html',
  styleUrls: ['./how-to-know.page.scss'],
})
export class HowToKnowPage implements OnInit {
  checkboxes: any = [];
  formContainers: any = [];
  tooltipCard: any;
  boxStates: number[] = [-1, -1, -1, -1, -1];
  boxDenies = false;
  allChecked = 0;
  formsPart = 1;

  constructor(private router : Router) { }

  ngOnInit() {
    this.checkboxes = document.getElementsByClassName('listItem');
    this.formContainers.push(document.getElementById('questionsContainer1'), document.getElementById('questionsContainer2'))
    this.tooltipCard = document.getElementsByClassName('staticTooltipCard');
  }

  checkingBox(ind: number, box: number) {
    if(this.boxDenies) return;
    let item = this.checkboxes[ind];
    if(this.boxStates[ind] === box) {
      // item.children[box+1].children[1].checked = true;
      this.boxStates[ind] = -1;
      this.allChecked--;
      return;
    }
    else if(this.boxStates[ind] !== -1) {
      this.boxDenies = true;
      item.children[this.boxStates[ind]+1].children[1].checked = false;
      setTimeout(() => {
        this.boxDenies = false;
      }, 100);
    }
    else {
      this.allChecked++;
    }
    this.boxStates[ind] = box;
  }

  changePart(ind : number){
    console.log('sss');

    if(ind === 1) {
      this.tooltipCard[0].classList.remove('hidden');
      this.formContainers[0].classList.remove('contCollapsed');
      this.formContainers[1].classList.add('contCollapsed');
      this.formContainers[0].children[0].scrollTop = 0;
      this.formsPart = ind;
    }
    else if(ind === 2) {
      this.tooltipCard[0].classList.add('hidden');
      this.formContainers[0].classList.add('contCollapsed');
      this.formContainers[1].classList.remove('contCollapsed');
      this.formsPart = ind;
    }
  }

  goBack(){
    this.router.navigateByUrl('tabs/tab1');
  }
}
