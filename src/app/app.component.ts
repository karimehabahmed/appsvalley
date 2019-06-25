import { Component, OnInit } from '@angular/core';
import{ MockService} from '../app/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private MS: MockService){}
  title = 'app2';
  data:any;
  show:boolean=false;
  result:any={};
  singleuser:any={email:"",first_name:"",last_name:""};
  showuser:boolean=false;
  
  ngOnInit(){
    
    this.MS.getdata().subscribe(result=>
      {
       this.data=result.data;
       console.log(this.data);
      });
    
  }
  showcontacts()
  {
    this.show=true;

  }

  Add(formData) {
    console.log(formData);
    this.MS.add(formData).subscribe(
      (res)=>{
       
      console.log(res);
      alert("contact created");
      },
      err=>{
      console.log(" Error..");
       } 
       );
  }
  Edit(formData) {
    console.log(formData);
    let ID:any;
    for(var i = 0; i < this.data.length; i++)
{
  if(this.data[i].name == formData.Name)
  {
    ID=this.data[i].id;
  }
}
    this.MS.edit(formData,ID).subscribe(
      (res)=>{
       
      console.log(res);
      alert("contact edited");
      },
      err=>{
      console.log(" Error..");
       } 
       );
   
  }
  Delete(formData) {
    console.log(formData);
    let ID:any;
    for(var i = 0; i < this.data.length; i++)
{
  if(this.data[i].name == formData.Name)
  {
    ID=this.data[i].id;
  }
}
    this.MS.delete(1).subscribe(
      (res)=>{
       
      console.log(res);
      alert("contact deleted");
      },
      err=>{
      console.log(" Error..");
       } 
       );
   
  }
  Search(formData) {
    console.log(formData);
    let ID:any;
    console.log(this.data);
    for(var i = 0; i < this.data.length; i++)
    {
      console.log(this.data[i].name)
      if(this.data[i].name == formData.Name)
      {
        ID=this.data[i].id;
        
      }
    }
    console.log(ID);
    this.MS.search(ID).subscribe(
      (res)=>{
       this.singleuser.email=res.email;
       this.singleuser.first_name=res.first_name;
       this.singleuser.last_name=res.last_name;
      console.log(res);
      this.showuser=true;
      },
      err=>{
      console.log(" Error..");
       } 
       );

  }

   
  }

