import { Component, OnInit } from "@angular/core";
import { TransactionService } from "./transaction.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionDialogComponent } from "./dialog/transaction-dialog.component";


@Component({
    selector:'transaction',
    templateUrl:'transaction.component.html',
    styleUrls:['transaction.component.scss']
})

export class TransitionComponent implements OnInit{

    transctionList:any;
    constructor(private transactionSvc: TransactionService,
        private modalService: NgbModal
    ){

    }

    ngOnInit(): void {
        this.transactionSvc.get().subscribe(re=>{
            this.transctionList = re;
        })
    }

    open(transaction: any) {
        const modalRef = this.modalService.open(TransactionDialogComponent
            , {
                backdrop: 'static',
                keyboard: false,
                size: 'md'
            }
        );
        modalRef.componentInstance.transaction = transaction;

        return modalRef.result;
      }
}