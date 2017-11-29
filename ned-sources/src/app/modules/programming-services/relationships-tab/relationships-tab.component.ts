import { Component, OnInit, Input, OnChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { LookupService } from '../../../services/lookups/lookup.service';
import { SourceType } from '../../../components/lookups/lookups.component';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-relationships-tab',
  templateUrl: './relationships-tab.component.html',
  styleUrls: ['./relationships-tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RelationshipsTabComponent implements OnInit, OnChanges {

  sourceTypesList: SourceType[] = new Array();
  sourceTypeSelect2Dropdown: SelectItem[];
  sortF: string;
  status: SelectItem[];

  @Input() relationshipsTabData: any;

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

  private loadSourceTypes() {
    this.lookupService.getAllSourceTypes().subscribe((sourceTypesList) => {
      this.sourceTypesList = sourceTypesList;
      this.sourceTypeSelect2Dropdown = new Array();
      this.buildSourceTypeSelect2Options();
    }
    );
  }

  private buildSourceTypeSelect2Options() {
    for (var i = 0; i < this.sourceTypesList.length; i++) {
      this.sourceTypeSelect2Dropdown.push({ value: this.sourceTypesList[i].id, label: this.sourceTypesList[i].name });
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (changedProp.currentValue) {
        this.relationshipsTabData = changedProp.currentValue;
      }
    }
  }
}
