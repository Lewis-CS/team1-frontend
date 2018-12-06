import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeComponent } from './components/authorize/authorize.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { ViewComponent } from './components/view/view.component';
import { UploadComponent } from './components/upload/upload.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'', component: MainComponent,
    children: [
      { path: '', component:HomeComponent },
      { path: 'view/:id', component:ViewComponent },
      { path: 'upload', component:UploadComponent },
      { path: 'search', component:SearchComponent }
    ]
  },
  {path:'authorize', component: AuthorizeComponent },
  {path:'**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
