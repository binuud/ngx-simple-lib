import { Component } from '@angular/core';
import { Tooltip } from './tooltip';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `<div title="Test"></div>`
})
class TestComponent {}


describe('ToolTip', () => {  
  let fixture: ComponentFixture<TestComponent>;
});