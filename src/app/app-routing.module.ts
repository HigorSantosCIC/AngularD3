import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './components/bar/bar.component';
import { PieComponent } from './components/pie/pie.component';
import { ScatterComponent } from './components/scatter/scatter.component';
import { MapComponent } from './components/map/map.component';
import { HighchartComponent } from './components/highchart/highchart.component'

const routes: Routes = [
  { path: 'bar', component: BarComponent },
  { path: 'pie', component: PieComponent },
  { path: 'scatter', component: ScatterComponent },
  { path: 'map', component: MapComponent },
  { path: 'highchart', component: HighchartComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
