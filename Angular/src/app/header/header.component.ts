import { Component, OnInit } from '@angular/core';
import {categories, Category} from "../../model";

declare function show(): void;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
  categories = categories;
}

