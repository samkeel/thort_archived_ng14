import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { BpObserverService } from '../../services/bp-observer.service';
import { SideNavService } from '../../services/side-nav.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  ishandset$: Observable<boolean> = this.bpoService.Handset$;
  constructor(
    private bpoService: BpObserverService,
    public user: UserService,
    private sidenavService: SideNavService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
