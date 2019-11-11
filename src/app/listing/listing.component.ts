import { Component, OnInit } from '@angular/core';
import { ItemDataService } from '../shared/item-data.service'
import { HttpClient} from '@angular/common/http';
import { Router,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private getlisting:ItemDataService, private http:HttpClient, private router:Router) { }
  allItem:any[];
  deletUrl:any;
    ngOnInit() {
      this.getList();
    }

    getList(){
      this.getlisting.getListing().subscribe((data: any[]) => {
         this.allItem = data;
       });
      }
      deleteItem(id){
        const test = this.getlisting.url + `/${id}`;
        return this.http.delete(test).toPromise().then(()=>{
          this.getList();
        });
      }
      // routeToId(id){
      //   this.router.navigate([`${"/add-item"}/${id}`]);
      // }

}
