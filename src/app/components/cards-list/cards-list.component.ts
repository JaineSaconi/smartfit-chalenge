import { Component, OnInit } from '@angular/core';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';
import { Input } from '@angular/core'
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit{
  @Input() unitsList: Location[] = [];

  constructor(
  ) { }

  ngOnInit() { }
}
