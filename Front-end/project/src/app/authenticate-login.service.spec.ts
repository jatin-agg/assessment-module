import { TestBed } from '@angular/core/testing';

import { AuthenticateLoginService } from './authenticate-login.service';

describe('AuthenticateLoginService', () => {
  let service: AuthenticateLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
