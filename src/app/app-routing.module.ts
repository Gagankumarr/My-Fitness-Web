import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContinuedopComponent } from './continuedop/continuedop.component';
import { FAQComponent } from './faq/faq.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
{ path:'Home',
   component:HomeComponent,
},  
{ path:'',
   component:HomeComponent,
},      

{
   path:'Training',
   component:TrainingComponent,
},
{
   path:'About',
   component:AboutComponent,
},
{
   path:'Contact',
   component:ContactComponent,
},
{
   path:'FAQ',
   component:FAQComponent,
},
{
   path:'Franchise',
   component:FranchiseComponent,
},
{
   path:'T&C',
   component:TermsconditionComponent,
},
{
   path:'Continuedoperations',
   component:ContinuedopComponent,
},
{
   path:'FAQ',
   component:FAQComponent,
},
{ path:'**',
   component:HomeComponent,
},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
