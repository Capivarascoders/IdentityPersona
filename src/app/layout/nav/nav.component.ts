import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortisService } from 'src/app/services/portis.service';
import {  filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  public isNavbarCollapsed: boolean = true;
  public userAddress: string;
  subscription: Subscription;

  constructor(
    private portisService: PortisService
  ) {
  }

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.subscription.add(
      this.portisService.onEvent.pipe(filter(item => item.type === 'wallet')).subscribe((wallet) => {
        console.log(`nav: ${wallet.type} | ${wallet.data}`);
        this.userAddress = wallet.data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    this.portisService.logout();
  }

  showPortis() {
    this.portisService.show();
  }
}
