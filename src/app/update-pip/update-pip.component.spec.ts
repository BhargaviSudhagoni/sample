import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePIPComponent } from './update-pip.component';

describe('UpdatePIPComponent', () => {
  let component: UpdatePIPComponent;
  let fixture: ComponentFixture<UpdatePIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePIPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
