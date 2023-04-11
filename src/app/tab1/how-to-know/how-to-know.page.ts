import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-know',
  templateUrl: './how-to-know.page.html',
  styleUrls: ['./how-to-know.page.scss'],
})
export class HowToKnowPage implements OnInit {
  checkboxes: any = [];
  boxStates: number[] = [-1, -1, -1, -1, -1];
  boxDenies = false;
  allChecked = 0;

  constructor(private router : Router) { }

  ngOnInit() {
    this.checkboxes = document.getElementsByClassName('listItem');
  }

  checkingBox(ind: number, box: number) {
    if(this.boxDenies) return;
    let item = this.checkboxes[ind];
    if(this.boxStates[ind] == box) {
      item.children[box+1].children[1].checked = true;
    }
    else if(this.boxStates[ind] !== -1) {
      this.boxDenies = true;
      item.children[this.boxStates[ind]+1].children[1].checked = false;
      console.log('aaa');
      setTimeout(() => {
        this.boxDenies = false;
      }, 100);
    }
    else this.allChecked++;
    this.boxStates[ind] = box;
  }

  goBack(){
    this.router.navigateByUrl('tabs/tab1');
  }
}
