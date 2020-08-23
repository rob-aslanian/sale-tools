import { Component, OnInit, ViewChild, ViewContainerRef, Input, ViewEncapsulation } from '@angular/core';
import { SalesService } from 'src/app/sales.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-company-detailed-modal',
  templateUrl: './company-detailed-modal.component.html',
  styleUrls: ['./company-detailed-modal.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class CompanyDetailedModalComponent implements OnInit {

  @ViewChild( 'placeholder', {read: ViewContainerRef, static: false} ) _cp: ViewContainerRef

  isCommentesActive: boolean = true;
  modalType: string ;
  company: any = null;
  comment: string;
  editedComment:string;
  comments: any[] = [];
  histories:Observable<any[]>;
  isCommentEdit:boolean = false;
  
  @Input() companyId: string ;
  @Input() isEdit: boolean = false;

  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit() {
    
    this.histories = this.salesService.getCompanyHistroy(this.companyId)
    
    forkJoin(
      this.salesService
          .getCompanyById(this.companyId),
      this.salesService
          .getCompanyComments(this.companyId)
    ).subscribe( ([ comp, comments ]) => { this.comments = comments['comments']; this.company = comp; console.log(comp)  } );
  };

  openModal( type: string ) {
     this.modalType = type;
  }

  getRestult(e: any) {
     const {_case} = e;
     if(_case === 'CLOSE') {
         this.modalType = null;
     }

   
     
  }
  
  addComment(  ) {    
      if( this.comment.length > 2 ) {
        this.salesService
            .addComment(this.companyId, this.comment)
            .subscribe( res =>  {
                const posted =  new Date();
                this.comments.push({
                     _id:res,
                     text: this.comment,
                     created_at: posted.toLocaleDateString()
                })
                this.comment = '';
            })
      }
  };

  editComment(id:string, comment:HTMLTextAreaElement) {

    if(!comment.hasAttribute('disabled')) {
      this.salesService
          .editComment(this.companyId , id , comment.value)
          .subscribe(_ => comment.setAttribute('disabled' , 'disabled'))
    }

    comment.removeAttribute('disabled');
    comment.focus();

    
  }

  deleteComment( id: string, idx: number ) {
       this.salesService
           .deleteComment(this.companyId, id)
           .subscribe(() => this.comments.splice(idx, 1));
  }
}
