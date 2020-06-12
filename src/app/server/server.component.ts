
import {Component} from '@angular/core';
@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styleUrls:['./server.component.css']
})
export class ServerComponent{
  serverid:number=10;
  ServerStatus:string='Online and Runing'
}