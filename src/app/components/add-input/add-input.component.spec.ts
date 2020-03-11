import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddInputComponent } from './add-input.component';

describe('AddInputComponent', () => {
  let component: AddInputComponent;
  let fixture: ComponentFixture<AddInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
