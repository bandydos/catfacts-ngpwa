import { Component, OnInit } from '@angular/core';
import { FactService } from '../../services/fact.service';
import { Router } from '@angular/router';
import { FactModel } from '../../models/FactModel';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  facts: FactModel[];

  constructor(private factService: FactService, private router: Router) { }

  ngOnInit(): void {
    this.factService.getFacts().subscribe(response => {
      this.facts = response.data;
    });
  }

  onDetail(i: number, f: FactModel): void {
    f.id = i;
    this.router.navigate(['/factdetail', f.id]);
  }

  onRefresh(): void {
    window.location.reload(); // Pure js reload.
  }
}
