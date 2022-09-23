import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLongCardComponent } from './product-long-card.component';

describe('ProductLongCardComponent', () => {
  let component: ProductLongCardComponent;
  let fixture: ComponentFixture<ProductLongCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLongCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLongCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
