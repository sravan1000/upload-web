import { TestBed } from '@angular/core/testing';

import { FileitemsService } from './fileitems.service';

describe('FileitemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileitemsService = TestBed.get(FileitemsService);
    expect(service).toBeTruthy();
  });
});
