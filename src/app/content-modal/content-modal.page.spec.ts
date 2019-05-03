import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModalPage } from './content-modal.page';

describe('ContentModalPage', () => {
  let component: ContentModalPage;
  let fixture: ComponentFixture<ContentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
