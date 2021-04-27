import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MarketService } from '../core/service/market.service';
import { IMarket } from './../core/model/market'


@Component({
  selector: 'app-list-markets',
  templateUrl: './list-markets.component.html',
  styleUrls: ['./list-markets.component.css']
})
export class ListMarketsComponent implements OnInit {
  public markets : any [];
  public error: string ;

  constructor(private _marketService: MarketService, private _router: Router) { }

  displayedColumns: string[] = ['name', 'edit', 'delete'];
  reload$ = new Subject<void>();

  ngOnInit(): void {
    this.reload$.pipe(switchMap(() => this._marketService.getMarkets() ))
      .subscribe(data => this.markets = data, err => this.error = err );
      this.reload$.next();
  }

  onEdit(market: IMarket) {
    this._router.navigate(['markets', market.id]);
  }

  onDelete(market: IMarket) {
    this._marketService.delete(market.id).subscribe(it => this.reload$.next() );
  }

}
