import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MockService {

  
  constructor(private http: HttpClient) { 
  }
  getdata() {
    return this.http.get("https://reqres.in/api/users?page=2");
}
add(data:any)
{
  return this.http.post('https://reqres.in/api/users',data);
}
edit(data:any,id:any)
{
  return this.http.put('https://reqres.in/api/users/'+id,data);
}
delete(id:any)
{
  return this.http.delete('https://reqres.in/api/users/'+id);
}
search(id:any)
{
  return this.http.get('https://reqres.in/api/users/'+id);
}
}
