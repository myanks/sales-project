import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css',
  imports: [CommonModule],
})
export class SalesPersonListComponent implements OnInit {
  targetedQuota: number = 5000;
  SalesPersonList: SalesPerson[] = [
    new SalesPerson('John', 'Doe', 'john.doe@example.com', 5000),
    new SalesPerson('Jane', 'Doe', 'jane.doe@example.com', 4000),
    new SalesPerson('John', 'Doe', 'john.doe@example.com', 6000),
    new SalesPerson('Jane', 'Doe', 'jane.doe@example.com', 7000),
  ];
  constructor() {}
  ngOnInit(): void {}
}
