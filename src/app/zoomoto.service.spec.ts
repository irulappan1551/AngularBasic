import { TestBed } from '@angular/core/testing';

import { ZoomotoService } from './zoomoto.service';

describe('ZoomotoService', () => {
  let service: ZoomotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
