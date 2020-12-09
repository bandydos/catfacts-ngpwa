import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FactsComponent } from './components/facts/facts.component';
import { FactComponent } from './components/fact/fact.component';
import { CommonModule } from '@angular/common';
import { FactdetailComponent } from './components/factdetail/factdetail.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DEFAULT_CONFIG, NgForageOptions, NgForageConfig, Driver} from 'ngforage';

@NgModule({
  declarations: [
    AppComponent,
    FactsComponent,
    FactComponent,
    FactdetailComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: DEFAULT_CONFIG,
      useValue: {
        name: 'randomfacts-ng',
        driver: [ 
          Driver.INDEXED_DB,
          Driver.LOCAL_STORAGE
        ]
      } as NgForageOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
