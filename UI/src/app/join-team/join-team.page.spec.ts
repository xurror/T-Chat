import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinTeamPage } from './join-team.page';

describe('JoinTeamPage', () => {
  let component: JoinTeamPage;
  let fixture: ComponentFixture<JoinTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
