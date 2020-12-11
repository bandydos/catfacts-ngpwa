import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestModel } from '../models/RequestModel';

@Injectable({
  providedIn: 'root'
})

export class FactService {
  factsUrl = 'https://catfact.ninja/facts?limit=3&max_length=1000'; // API URL.
  facts: RequestModel;

  constructor(private http: HttpClient) { }

  getFacts(): Observable<RequestModel> {
    return new Observable(observer => {
      if (this.facts) {
        observer.next(this.facts); // No refetch.
        return observer.complete(); 
      }
      this.http
        .get(this.factsUrl).subscribe((facts: RequestModel) => {
          this.facts = facts; // Fill facts fitch fetched data.
          observer.next(this.facts);
          observer.complete();
        });
    });
  }
}
