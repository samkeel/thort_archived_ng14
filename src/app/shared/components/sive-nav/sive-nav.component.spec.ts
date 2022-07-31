import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiveNavComponent } from './sive-nav.component';

describe('SiveNavComponent', () => {
  let component: SiveNavComponent;
  let fixture: ComponentFixture<SiveNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiveNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiveNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
