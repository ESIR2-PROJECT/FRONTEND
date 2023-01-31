import { TestBed } from "@angular/core/testing";
import { DataService } from "./data.service";



describe('DataService', () => {
    let service: DataService;
  
    beforeEach(async () => {
        //service = new DataService();
        TestBed.configureTestingModule({ providers: [DataService] });
        service = TestBed.inject(DataService);
    });
  
    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should return a list of bornes', () => {
        expect(service.getAllBornes()).toBeTruthy();
    });
  });