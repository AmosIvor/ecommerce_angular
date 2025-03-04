import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHistoryDetailComponent } from './purchase-history-detail.component';

describe('PurchaseHistoryDetailComponent', () => {
  let component: PurchaseHistoryDetailComponent;
  let fixture: ComponentFixture<PurchaseHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseHistoryDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
