import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { NgxIndexedDBService } from 'ngx-indexed-db';
const dbConfig: DBConfig = {
name: 'MyDb',
version: 1,   
objectStoresMeta: [{
  store: 'PDF',
  storeConfig: { keyPath: 'id', autoIncrement: true },
  storeSchema: [
    { name: 'name', keypath: 'name', options: { unique: false } },
    { name: 'base64', keypath: 'base64', options: { unique: false } }
  ]
}]
};
@Component({
  selector: 'app-indexeddb',
  templateUrl: './indexeddb.component.html',
  styleUrls: ['./indexeddb.component.css']
})


export class IndexeddbComponent{

  constructor(private dbService: NgxIndexedDBService){
  }

      this.dbService.createObjectStore(storeSchema);
      db.openDatabase(1, evt => {
      objectStore = evt.currentTarget.result.createObjectStore('PDF', { keyPath: 'id', autoIncrement: true });
    
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('base64', 'base64', { unique: true });
      objectStore.transaction.oncomplete = function(event) {
        // Store values in the newly created objectStore.
  
      };
    });


    db.add('PDF', { name: 'name', base64: 'base64' }).then(
      () => {
        // Do something after the value was added
      },
      error => {
        console.log(error);
      } 
    );
    
  




  

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [NgxIndexedDBModule.forRoot(dbConfig)

  ]
})

