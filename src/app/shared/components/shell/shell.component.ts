import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BpObserverService } from '../../services/bp-observer.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  ishandset$: Observable<boolean> = this.bpoService.Handset$;
  constructor(
    private bpoService: BpObserverService,
    public user: UserService
  ) {}

  ngOnInit(): void {}
}
