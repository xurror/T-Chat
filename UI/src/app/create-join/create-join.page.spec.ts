import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateJoinPage } from './create-join.page';

describe('CreateJoinPage', () => {
  let component: CreateJoinPage;
  let fixture: ComponentFixture<CreateJoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateJoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
