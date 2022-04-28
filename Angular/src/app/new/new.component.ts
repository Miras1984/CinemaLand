import { Component, OnInit } from '@angular/core';
import {Film, films} from "../../model";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  films = films;
  NewFilms: Film[] = [];
  PageFilms: Film[] = [];
  page: number;
  pageSize: number;
  startIndex: number;

  constructor(){
    this.page = 1;
    this.pageSize = 10;
    this.getNewFilms();
    this.getPageFilms();
    this.startIndex = 0;
  }

  ngOnInit(): void{
    this.getPageFilms();
  }

  getNewFilms(){
    this.NewFilms = films.filter(value => value.year > 2010);
  }

  getPageFilms(){
    this.PageFilms = this.NewFilms.slice(this.startIndex, this.startIndex + this.pageSize);
  }

  ChangePage(page: number){
    this.startIndex = this.pageSize * (page - 1);
    this.PageFilms = [];
    this.getPageFilms();
  }
}
