import { Component, OnInit, Input, OnChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { LookupService } from '../../../services/lookups/lookup.service';
import { SourceType } from '../../../components/lookups/lookups.component';

@Component({
  selector: 'app-source-history-tab',
  templateUrl: './source-history-tab.component.html',
  styleUrls: ['./source-history-tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SourceHistoryTabComponent implements OnInit, OnChanges {
  sourceTypesList: SourceType[] = new Array();
  @Input() sourceHistoryTabData: any;
  status: SelectItem[];
  sourceTypeSelect2Dropdown: SelectItem[];
  sortF: string;

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
        this.sourceHistoryTabData = changedProp.currentValue;
      }
    }
  }

}
