import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { AddEditComponent } from './add-edit/add-edit.component'
import { from } from 'rxjs';


const routes: Routes = [
  {path:'', component:ListingComponent},
  {path:'add-item', component:AddEditComponent},
  {path:'add-item/:id', component:AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
