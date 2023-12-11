import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allUsers:any[],searchKey:string): unknown {
    const result:any=[]
    if(!allUsers || searchKey==""){
      return allUsers
    }else{
      allUsers.forEach((item:any)=>{
        if(item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
          result.push(item)
        }
      })
    }
    return result;
  }

}
