import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  constructor() {}
  @Input()
  photoCoverBigCard: string = '';
  @Input()
  cardTitleBigCard: string = '';
  @Input()
  cardDescriptionBigCard: string = '';

  ngOnInit(): void {}
}
