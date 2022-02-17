import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailedViewComponent } from './product-detailed-view.component';

describe('ProductDetailedViewComponent', () => {
  let component: ProductDetailedViewComponent;
  let fixture: ComponentFixture<ProductDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
