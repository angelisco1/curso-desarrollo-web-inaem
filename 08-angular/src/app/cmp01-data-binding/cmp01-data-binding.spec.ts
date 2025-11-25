import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp01DataBinding } from './cmp01-data-binding';

describe('Cmp01DataBinding', () => {
  let component: Cmp01DataBinding;
  let fixture: ComponentFixture<Cmp01DataBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp01DataBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp01DataBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
