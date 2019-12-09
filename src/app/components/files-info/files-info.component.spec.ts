import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesInfoComponent } from './files-info.component';

describe('FilesInfoComponent', () => {
  let component: FilesInfoComponent;
  let fixture: ComponentFixture<FilesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
