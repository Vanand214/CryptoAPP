import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortFolioComponent } from './my-port-folio.component';

describe('MyPortFolioComponent', () => {
  let component: MyPortFolioComponent;
  let fixture: ComponentFixture<MyPortFolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPortFolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPortFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
