import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-contacts-tab',
  templateUrl: './contacts-tab.component.html',
  styleUrls: ['./contacts-tab.component.css']
})
export class ContactsTabComponent implements OnInit, OnChanges {
  @Input() contactsTabData: any;
  status: SelectItem[];

  constructor() { 
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
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (changedProp.currentValue) {
        this.contactsTabData = changedProp.currentValue;
      }
    }
  }
}
