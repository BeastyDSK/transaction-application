import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:1234/api/transaction';
  }

  get() {
    return this.http.get<any[]>(this.apiUrl);
  }

  save(transaction: any) {
    return this.http.patch(this.apiUrl + `/${transaction.id}`, transaction);
  }
}
