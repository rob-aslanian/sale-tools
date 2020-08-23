import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:`
       <div class='notifications' 
            (click)='navigate($event)' [innerHTML]='message'>
          {{ message }}          
       </div>
  `,
  styles: [`
       .notifications {
         background-color: #fff;
         position: absolute;
         padding: 15px 16px;
         bottom: 10px;
         border-radius: 4px;
         left: 15px;
         cursor: pointer;
         color: #808080;
         max-width: 292px;
        }
  `]
})
export class NotificationComponent implements OnInit {

  @Input() message: string = '' || 'Title';

  constructor() { }

  ngOnInit() { };

  navigate( e: any ) {

  };

}
