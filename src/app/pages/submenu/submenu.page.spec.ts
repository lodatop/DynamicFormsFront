import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmenuPage } from './submenu.page';

describe('SubmenuPage', () => {
  let component: SubmenuPage;
  let fixture: ComponentFixture<SubmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
