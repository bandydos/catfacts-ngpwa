import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  // Get data via input.
  @Input() fact: string;
  @Input() length: number;
  @Input() listindex: number;

  constructor() { }

  ngOnInit(): void {
  }
}
