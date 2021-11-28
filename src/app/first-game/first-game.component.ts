import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-game',
  templateUrl: './first-game.component.html',
  styleUrls: ['./first-game.component.scss']
})
export class FirstGameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('First game loaded');
  }


}
