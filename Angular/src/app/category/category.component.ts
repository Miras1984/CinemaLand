import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Film, films} from "../../model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  films = films;
  Films: Film[] = [];
  PageFilms: Film[] = [];
  page: number;
  pageSize: number;
  startIndex: number;
  constructor(private route: ActivatedRoute){
    this.page = 1;
    this.pageSize = 10;
    this.getFilms();
    this.getPageFilms();
    this.startIndex = 0;
  }

  ngOnInit(): void {
    this.getPageFilms();
  }

  getFilms(){
    const routeParams = this.route.snapshot.paramMap;
    const category = String(routeParams.get('category_name'));
    for(let f of films){
      for(let c of f.category){
        if(c == category){
          this.Films.push(f);
          break;
        }
      }
    }
  }

  getPageFilms(){
    this.PageFilms = this.Films.slice(this.startIndex, this.startIndex + this.pageSize);
  }

  ChangePage(page: number){
    this.startIndex = this.pageSize * (page - 1);
    this.PageFilms = [];
    this.getPageFilms();
  }
}
