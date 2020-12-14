import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject} from 'rxjs';
import { map } from "rxjs/operators";

export interface Item {name: string; description: string; image: string; price: Int16Array;}

@Injectable()

export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<any[]>;
  constructor(private asf: AngularFirestore) {
      this.itemsCollection = asf.collection<Item>('items');
      this.items = this.itemsCollection.snapshotChanges().pipe(map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data() as Item;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }));
  }

  ListaItem(){    //metodo para ver la coleccion de items de las base de datos
    return this.items;
  }
  agregarItem(item:Item){ //metodo para agregar un nuevo item a la base de datos
    this.itemsCollection.add(item);
  }
}
