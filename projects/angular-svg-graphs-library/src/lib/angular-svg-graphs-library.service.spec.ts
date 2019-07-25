import { TestBed } from '@angular/core/testing';

import { AngularSvgGraphsLibraryService } from './angular-svg-graphs-library.service';

describe('AngularSvgGraphsLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularSvgGraphsLibraryService = TestBed.get(AngularSvgGraphsLibraryService);
    expect(service).toBeTruthy();
  });
});
