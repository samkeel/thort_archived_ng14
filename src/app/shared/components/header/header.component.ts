import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BpObserverService } from '../../services/bp-observer.service';
import { SideNavService } from '../../services/side-nav.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ishandset$: Observable<boolean> = this.bpoService.Handset$;

  constructor(
    private bpoService: BpObserverService,
    private sidenavService: SideNavService,
    public user: UserService
  ) { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    
  }

  onLogout() {
    this.user.logout();
  }

}
