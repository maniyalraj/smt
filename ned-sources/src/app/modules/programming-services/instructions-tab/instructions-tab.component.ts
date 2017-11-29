import { Component, OnInit, Input, OnChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { LookupService } from '../../../services/lookups/lookup.service';
import { SourceType } from '../../../components/lookups/lookups.component';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-instructions-tab',
  templateUrl: './instructions-tab.component.html',
  styleUrls: ['./instructions-tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InstructionsTabComponent implements OnInit, OnChanges {

  sourceTypesList: SourceType[] = new Array();
  sourceTypeSelect2Dropdown: SelectItem[];
  sortF: string;
  status: SelectItem[];

  @Input() instructionsTabData: any;

  constructor(private lookupService: LookupService) { 
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
    this.loadSourceTypes();
  }

  loadSourceTypes() {
    this.lookupService.getAllSourceTypes().subscribe((sourceTypesList) => {
      this.sourceTypesList = sourceTypesList;
      this.sourceTypeSelect2Dropdown = new Array();
      this.buildSourceTypeSelect2Options();
    }
    );
  }

  buildSourceTypeSelect2Options() {
    for (var i = 0; i < this.sourceTypesList.length; i++) {
      this.sourceTypeSelect2Dropdown.push({ value: this.sourceTypesList[i].id, label: this.sourceTypesList[i].name });
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (changedProp.currentValue) {
        this.instructionsTabData = changedProp.currentValue;
      }
    }
  }
}
