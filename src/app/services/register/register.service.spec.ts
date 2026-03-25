import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';

describe('RegisterService', () => {
  let service: RegisterService;
  let toastrSpy: jasmine.SpyObj<ToastrService>;
  let supabaseAuthSpy: { signUp: jasmine.Spy };

  beforeEach(() => {
    toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);
    supabaseAuthSpy = { signUp: jasmine.createSpy('signUp') };

    TestBed.configureTestingModule({
      providers: [
        RegisterService,
        { provide: ToastrService, useValue: toastrSpy },
        {
          provide: SupabaseService,
          useValue: { supabase: { auth: supabaseAuthSpy } },
        },
      ],
    });
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show error toast when email is already registered (empty identities)', async () => {
    supabaseAuthSpy.signUp.and.returnValue(
      Promise.resolve({
        data: { user: { email: 'test@example.com', identities: [] }, session: null },
        error: null,
      })
    );

    const result = await service.registerUser('test@example.com', 'password123');

    expect(toastrSpy.error).toHaveBeenCalledWith(
      'An account with this email already exists.'
    );
    expect(toastrSpy.success).not.toHaveBeenCalled();
    expect(result).toEqual({ user: null, session: null });
  });

  it('should show success toast when registration is successful', async () => {
    supabaseAuthSpy.signUp.and.returnValue(
      Promise.resolve({
        data: {
          user: { email: 'new@example.com', identities: [{ id: '1' }] },
          session: null,
        },
        error: null,
      })
    );

    const result = await service.registerUser('new@example.com', 'password123');

    expect(toastrSpy.success).toHaveBeenCalledWith(
      'Registration successful for new@example.com'
    );
    expect(toastrSpy.error).not.toHaveBeenCalled();
    expect(result?.user).toBeTruthy();
    expect(result?.session).toBeNull();
  });

  it('should show error toast when Supabase returns an error', async () => {
    supabaseAuthSpy.signUp.and.returnValue(
      Promise.resolve({
        data: null,
        error: { message: 'User already registered' },
      })
    );

    const result = await service.registerUser('test@example.com', 'password123');

    expect(toastrSpy.error).toHaveBeenCalledWith('User already registered');
    expect(toastrSpy.success).not.toHaveBeenCalled();
    expect(result).toEqual({ user: null, session: null });
  });
});
