import { Component } from '@angular/core';
import { NavBar } from 'src/app/main/interfaces/navBar.interface';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`

    input {
      border-width:1px;
      border-top-color:#cccccc;
      border-bottom-color:#cccccc;
      border-left-color:#cccccc;
      border-bottom-left-radius:6px;
      border-top-left-radius:6px;

      border-right:0px;
    },
    .btn-perso{
      border-bottom-left-radius:0px;
      border-top-left-radius:0px;
    }

  `
  ]
})
export class NavbarComponent {
  panelOpenState = false;
  // _toolBarText {
    _navBar:NavBar = {
      data:[{
          text:"Trade",
          subMenu:["Rice Exchange","Fertilizer Exchange","DCX Pulses","DCX Grains"]
        },
        {
          text:"Services",
          subMenu:["DCX Finance","DCX Freight","DCX Insurance"]
        },
        {
          text:"Our Partners",
          subMenu:[]
        },
        {
          text:"Market Insights",
          subMenu:[]
        },
        {
          text:"Community",
          subMenu:["Social Media","News & Updates","Blog Posts"]
        },
        {
          text:"About DCX",
          subMenu:[]
        }
  
      ]
  
    }
  // }
}
