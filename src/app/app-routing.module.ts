import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactdetailComponent } from './components/factdetail/factdetail.component';
import { FactsComponent } from './components/facts/facts.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FactsComponent},
  { path: 'factdetail/:id', component: FactdetailComponent },
  { path: '**', component: PagenotfoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
