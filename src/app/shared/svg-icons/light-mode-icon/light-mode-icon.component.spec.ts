/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LightModeIconComponent } from './light-mode-icon.component';

describe('LightModeIconComponent', () => {
  let component: LightModeIconComponent;
  let fixture: ComponentFixture<LightModeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightModeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightModeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
