import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.categories = this.categoryService.findAll();
  }

  delete(id: number) {
    this.categoryService.deleteById(id);
  }
}
