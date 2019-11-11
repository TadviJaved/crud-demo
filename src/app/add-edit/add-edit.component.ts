import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ItemDataService } from '../shared/item-data.service'
import { Router,ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
addItem:any;
updateItem:any;
isAdd : boolean=true;
isId:number;
data:any;
singleItem:any;
  constructor(private http:HttpClient,private itemData:ItemDataService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
 

    this.route.params.subscribe((params: Params) => {
      this.isId = +params['id'];
      if(this.isId){
        this.isAdd=false;
      }
    });
    this.itemData.getListing().subscribe((data:any)=>{
       this.data= data;
       for (var i = 0; i < this.data.length; i++) {
        if(parseInt(this.data[i].id)== this.isId){
          this.singleItem = this.data[i];
          break;
        }
      }
    });
  }
  addData(data){
    const url = this.itemData.url;
    this.addItem={
      name:data.name,
      cost:data.cost
    }
    this.http.post(url,this.addItem).toPromise().then(()=>{
this.router.navigate(['']);
    })
  }
  formUpdate(data){
    const updarteurl = this.itemData.url +`/${this.isId }`;
    this.updateItem={
      name:data.name,
      cost:data.cost
    }
    this.http.put(updarteurl,this.updateItem).toPromise().then(()=>{
this.router.navigate(['']);
    })
  }

  
}
