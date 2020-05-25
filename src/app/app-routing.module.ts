import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FunComponent } from './fun/fun.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExComponent } from './work-ex/work-ex.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  {
    path : '',
    component : AboutMeComponent
  },
  {
    path : 'about-me',
    component : AboutMeComponent
  },
  {
    path : 'work-ex',
    component : WorkExComponent
  },
  {
    path : 'projects',
    component : ProjectsComponent
  },
  {
    path : 'fun',
    component : FunComponent
  },
  {
    path : 'blogs',
    component : BlogsComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
