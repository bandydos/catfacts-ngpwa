import { Component, OnInit } from '@angular/core';
import { FactService } from '../../services/fact.service';
import { Router } from '@angular/router';
import { FactModel } from '../../models/FactModel';
import { NgForage } from 'ngforage';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  facts: FactModel[];

  constructor(private factService: FactService,
    private router: Router,
    private readonly ngf: NgForage) { }

  ngOnInit(): void {
    this.factService.getFacts().subscribe(response => {
      this.facts = response.data;
      for (let i = 0; i < this.facts.length; i++) {
        this.ngf.setItem<string>(`Fact ${i + 1}`, this.facts[i].fact);
      }
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
