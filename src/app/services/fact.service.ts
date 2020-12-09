import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestModel } from '../models/RequestModel';

@Injectable({
  providedIn: 'root'
})

export class FactService {
  factsUrl = 'https://catfact.ninja/facts?limit=3&max_length=1000';
  facts: RequestModel;

  constructor(private http: HttpClient) { }

  getFacts(): Observable<RequestModel> {
    return new Observable(observer => {
      if (this.facts) {
        observer.next(this.facts);
        return observer.complete();
      }
      this.http
        .get(this.factsUrl).subscribe((fs: RequestModel) => {
          this.facts = fs;
          observer.next(this.facts);
          observer.complete();
        });
    });
  }
}
