import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-y',
  standalone: true,
  imports: [],
  templateUrl: './y.component.html',
  styleUrl: './y.component.css'
})
export class YComponent implements OnInit {
  @Input() nombre: string = '';
  constructor() {}

  ngOnInit() {

  }

}
