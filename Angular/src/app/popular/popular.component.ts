import { Component, OnInit } from '@angular/core';
import {Film, films} from "../../model";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  films = films;
  PopularFilms: Film[] = [];
  PageFilms: Film[] = [];
  page: number;
  pageSize: number;
  startIndex: number;

  constructor(){
    this.page = 1;
    this.pageSize = 10;
    this.getPopularFilms();
    this.getPageFilms();
    this.startIndex = 0;
  }

  ngOnInit(): void{
    this.getPageFilms();
  }

  getPopularFilms(){
    this.PopularFilms = films.filter(value => value.rating > 7);
  }

  getPageFilms(){
    this.PageFilms = this.PopularFilms.slice(this.startIndex, this.startIndex + this.pageSize);
  }

  ChangePage(page: number){
    this.startIndex = this.pageSize * (page - 1);
    this.PageFilms = [];
    this.getPageFilms();
  }
}
