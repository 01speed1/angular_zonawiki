import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDsgnComponent } from './material-dsgn.component';

describe('MaterialDsgnComponent', () => {
  let component: MaterialDsgnComponent;
  let fixture: ComponentFixture<MaterialDsgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDsgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDsgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
