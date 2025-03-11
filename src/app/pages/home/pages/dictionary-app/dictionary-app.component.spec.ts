import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryAppComponent } from './dictionary-app.component';

describe('DictionaryAppComponent', () => {
  let component: DictionaryAppComponent;
  let fixture: ComponentFixture<DictionaryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictionaryAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictionaryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
