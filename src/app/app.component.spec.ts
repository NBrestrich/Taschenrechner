/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {element} from "protractor";

describe('App: Testproject', () => {
  let a;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', async(() => {

    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Rechner`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Rechner');
   // expect(app.getParagraphText()).toEqual(('app works'));
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Rechner');
  }));

  it('should be compare', async(()=> {
    a = 'abc';
    a = 5;
    let b:number = 13.0;

    if(a.constructor == b.constructor)
    {
      console.info('das ergebniss ist wahr');
    }else
    {
      console.info('das ergebniss ist falsch');
    }
  }));

  it("A spec using the fail function", async(() =>{
    let foo = function(x, callBack) {
      if (x) {
        callBack();
      }
    }

      foo(false, function() {
        fail("Callback has been called");
        console.info('fail');

    });
  }));
});


describe("A spy", function() {
  let foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');
  });

  it("has a shortcut to the first call", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.first()).toEqual({object: foo, args: [123], returnValue: undefined});
  });
});


