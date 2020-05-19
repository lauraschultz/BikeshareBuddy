import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'map/:systemID', component: MapComponent},
  { path: '', redirectTo: 'search', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }