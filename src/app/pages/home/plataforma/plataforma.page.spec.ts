import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlataformaPage } from './plataforma.page';

describe('PlataformaPage', () => {
  let component: PlataformaPage;
  let fixture: ComponentFixture<PlataformaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataformaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlataformaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
