import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  { path: 'widgets', component: WidgetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
