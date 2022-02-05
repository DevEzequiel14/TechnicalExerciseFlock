import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ProvinceService } from './province.service';

describe('ProvinceService', () => {
  let service: ProvinceService;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientModule]
  })
    service = TestBed.get(ProvinceService)
});

  it('should be created', () => {
    const service: ProvinceService = TestBed.get(ProvinceService);
    expect(service).toBeTruthy();
  });

  it('Al ingresar Sant debe recibir 5 provincias', () => {
    const res = service.getProvinces('Sant').subscribe(res => {
      expect(res["total"]).toEqual(5)
    })
  })

});
