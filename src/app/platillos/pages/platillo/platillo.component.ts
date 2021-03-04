import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styles: [
  ]
})
export class PlatilloComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({ idCourse }) => console.log( idCourse ) );
  }

}
