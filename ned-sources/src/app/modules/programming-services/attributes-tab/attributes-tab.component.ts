import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChange } from '@angular/core';
import { LookupService } from '../../../services/lookups/lookup.service';
import { SourceType } from '../../../components/lookups/lookups.component';
import { SelectItem } from 'primeng/primeng';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AdvancedSearchForm } from '../prog-serv-searchbox/prog-serv-searchbox.component';

@Component({
  selector: 'app-attributes-tab',
  templateUrl: './attributes-tab.component.html',
  styleUrls: ['./attributes-tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AttributesTabComponent implements OnInit, OnChanges {
  
  status: SelectItem[];
  employeeDetailsLookup: any[] = new Array();
  employeesSelect2Dropdown: SelectItem[];
  empList: EmployeeData[] = new Array();

  attributeTypesSelect2Dropdown: SelectItem[];
  attributeTypesList: any[];

  //Modal Popup Attributes
  modalRef: NgbModalRef;
  //Advanced Search Attributes
  advancedSearchForm: AdvancedSearchForm = {};

  @Input() attributesTabData: any;

  constructor(private lookupService: LookupService, private modalService: NgbModal) {
    //SelectItem API with label-value pairs
    this.status = [
      { label: 'Training', value: 'Training' },
      { label: 'Test', value: 'Test' },
      { label: 'No Longer Edited', value: 'No Longer Edited' },
      { label: 'Lineup Only', value: 'Lineup Only' },
      { label: 'Edited', value: 'Edited' },
      { label: 'Template', value: 'Template' }
    ];
   }
  


  ngOnInit() {
    this.loadEmployees();
    this.loadAttributeTypes();
  }

  closeModalPopup() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  openMedalPopup(content) {
    this.modalRef = this.modalService.open(content);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (changedProp.currentValue) {
        this.attributesTabData = changedProp.currentValue;
        this.mapEmployeesToArray();
      }
    }
  }

  private loadEmployees() {
    this.lookupService.getAllEmployees().subscribe((employeesListLookup) => {
      this.employeeDetailsLookup = employeesListLookup;
      this.employeesSelect2Dropdown = new Array();
      this.buildEmployeeSelect2Options();
    });
  }

  private loadAttributeTypes() {
    this.lookupService.getAllAttributeTypes().subscribe((attributeTypesList) => {
      this.attributeTypesList = attributeTypesList;
      this.attributeTypesSelect2Dropdown = new Array();
      this.buildAttributeTypesSelect2Options();
    }
    );
  }

  private buildAttributeTypesSelect2Options() {
    for (var i = 0; i < this.attributeTypesList.length; i++) {
      this.attributeTypesSelect2Dropdown.push({ value: this.attributeTypesList[i].name, label: this.attributeTypesList[i].name });
    }
  }

  private buildEmployeeSelect2Options() {
    for (var i = 0; i < this.employeeDetailsLookup.length; i++) {
      this.employeesSelect2Dropdown.push({ value: this.employeeDetailsLookup[i].employeeId, label: this.employeeDetailsLookup[i].lastName + ", " + this.employeeDetailsLookup[i].firstName });
    }
  }

  private mapEmployeesToArray() {
    for (let emp of this.attributesTabData.editorAssignments) {
      this.empList.push({ employee: emp, fullName: emp.editor.lastName + ", " + emp.editor.firstName });
    }
    this.empList = [...this.empList];
  }
}

interface EmployeeData {
  employee: any;
  fullName: string;
}
