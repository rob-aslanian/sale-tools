import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit {

  @ViewChild('appModal', { static: true }) modal: TemplateRef<any>;


  @Input() title: string;
  @Input() width:number | string = 597;
  @Input() size:string = 'md';


  @Output() closeModal:EventEmitter<any> = new EventEmitter<any>();
  
  

 @Input() withoutContent: boolean = false;

 constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() { }
   
  @Input()  isBlue: boolean = true;

  public close(){
    this.modalService.dismissAll();
    this.closeModal.emit();
  }

  public open(){
   setTimeout(() => {
    // @ts-ignore
    this.modalService.open(this.modal, { size: this.size, backdrop:'static' }).result.then(
      (res) => {
   
      }, reason => {;
        this.close();
        this.title = '';
        
      });
   });
  }


 
}
