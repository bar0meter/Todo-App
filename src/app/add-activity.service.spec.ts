import { TestBed, inject } from '@angular/core/testing';

import { AddActivityService } from './add-activity.service';

describe('AddActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddActivityService]
    });
  });

  it('should be created', inject([AddActivityService], (service: AddActivityService) => {
    expect(service).toBeTruthy();
  }));
});
