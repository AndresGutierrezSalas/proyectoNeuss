import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    	this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}
