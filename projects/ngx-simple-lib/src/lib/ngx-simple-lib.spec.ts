import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleLib } from './ngx-simple-lib';

describe('NgxSimpleLib', () => {
  let component: NgxSimpleLib;
  let fixture: ComponentFixture<NgxSimpleLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSimpleLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSimpleLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
