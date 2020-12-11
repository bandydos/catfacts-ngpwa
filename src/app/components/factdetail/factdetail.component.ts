import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FactModel } from 'src/app/models/FactModel';
import { FactService } from 'src/app/services/fact.service';

@Component({
  selector: 'app-factdetail',
  templateUrl: './factdetail.component.html',
  styleUrls: ['./factdetail.component.css']
})
export class FactdetailComponent implements OnInit {
  id: number;
  fact: FactModel;
  private sub: any;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private factService: FactService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => { // Subscribing on activated route.
      this.id = parseInt(params.id, 10); // Parse id as decimal.
      this.factService.getFacts().subscribe(response => { // Fetch via service.
        this.fact = response.data[this.id]; // Set fact to response.data at [id].
      });
    });
  }

  backClicked(): void {
    this.location.back(); // Go back (without refreshing).
  }
}
