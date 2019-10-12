import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import { user } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [GlobalService]
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public global: GlobalService, public router: Router) { }

  logout() {

    this.global.currentUser = new user(0, null, null, null, null, null, false);
    this.router.navigate(['/landing']);

  }
}
