import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordService } from 'src/app/services/forgot-password/forgot-password.service';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let forgotPasswordServiceSpy: jasmine.SpyObj<ForgotPasswordService>;

  beforeEach(async () => {
    forgotPasswordServiceSpy = jasmine.createSpyObj('ForgotPasswordService', [
      'sendResetEmail',
    ]);

    await TestBed.configureTestingModule({
      imports: [ForgotPasswordComponent],
      providers: [
        provideRouter([]),
        { provide: ForgotPasswordService, useValue: forgotPasswordServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set emailSent to true when sendResetEmail succeeds', async () => {
    forgotPasswordServiceSpy.sendResetEmail.and.returnValue(
      Promise.resolve(true)
    );
    component.email.setValue('test@example.com');

    await component.sendResetEmail();

    expect(forgotPasswordServiceSpy.sendResetEmail).toHaveBeenCalledWith(
      'test@example.com'
    );
    expect(component.emailSent).toBeTrue();
  });

  it('should not set emailSent when sendResetEmail fails', async () => {
    forgotPasswordServiceSpy.sendResetEmail.and.returnValue(
      Promise.resolve(false)
    );
    component.email.setValue('test@example.com');

    await component.sendResetEmail();

    expect(component.emailSent).toBeFalse();
  });

  it('should not call sendResetEmail when email is invalid', async () => {
    component.email.setValue('not-an-email');

    await component.sendResetEmail();

    expect(forgotPasswordServiceSpy.sendResetEmail).not.toHaveBeenCalled();
  });
});
