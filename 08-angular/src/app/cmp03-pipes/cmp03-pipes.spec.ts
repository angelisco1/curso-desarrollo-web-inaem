import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03Pipes } from './cmp03-pipes';

describe('Cmp03Pipes', () => {
  let component: Cmp03Pipes;
  let fixture: ComponentFixture<Cmp03Pipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp03Pipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp03Pipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
