import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'transaction-dialog',
  templateUrl: 'transaction-dialog.component.html',
})
export class TransactionDialogComponent implements OnInit {
  transaction: any;
  isEdit = false;
  comments: string | undefined;
  constructor(
    public activeModal: NgbActiveModal,
    public transactionService: TransactionService
  ) {}

  ngOnInit() {
    console.log(this.transaction, 'transaction');
    this.comments = this.transaction.Comments;
  }

  close(status:any) {
    this.activeModal.close();
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  save() {
    if (!this.comments) {
      alert('Must add comment');
      return;
    }
    this.transaction.Comments = this.comments;
    this.transactionService.save(this.transaction).subscribe((res) => {
      this.close(res);
    });
  }
}
