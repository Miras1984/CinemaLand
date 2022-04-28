import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewComponent} from "./new/new.component";
import {PopularComponent} from "./popular/popular.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {path: "", component: NewComponent},
  {path: "Popular", component: PopularComponent},
  {path: ":category_name", component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
