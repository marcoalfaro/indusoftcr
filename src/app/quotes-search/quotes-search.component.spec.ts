import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesSearchComponent } from './quotes-search.component';

describe('QuotesSearchComponent', () => {
  let component: QuotesSearchComponent;
  let fixture: ComponentFixture<QuotesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
