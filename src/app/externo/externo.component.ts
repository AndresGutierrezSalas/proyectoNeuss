import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;

  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    this._peticionesService.getUser().subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }

    );
  }

}
