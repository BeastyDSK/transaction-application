import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionComponent } from './transaction/transaction.component';
import { TransactionService } from './transaction/transaction.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TransactionDialogComponent } from './transaction/dialog/transaction-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TransitionComponent,
    TransactionDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // TransitionComponent
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
