import { Component, OnInit, Input, OnChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SummaryTabComponent implements OnInit, OnChanges {
  @Input() summaryTabData: any;
  callSign: string = "";
  sourceType: string = "";
  launchDate: string = "";
  lastUpdated: string = "";
  primaryCountryOfCoverage: string = "";
  otherCountriesOfCoverage: string = "";
  broadcastLanguages: string;
  editedLanguages: string;
  broadcastNumber: string = "";
  majorNumber: string = "";
  minorNumber: string = "";
  affiliationNumber: string = "";
  status: SelectItem[];
  broadcastNumberArray: any[] = new Array();

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
        this.summaryTabData = changedProp.currentValue;
        this.mapResponseToScreen();
      }
    }
  }

  private mapResponseToScreen() {
    this.sourceType = this.sortAndfetchSourceType();
    this.callSign = this.sortAndfetchCallSign();
    this.launchDate = this.parseDate(this.summaryTabData.launchDate);
    this.mapCountriesOfCoverage();
    this.editedLanguages = this.mapLanguages(this.summaryTabData.editingLanguages);
    this.broadcastLanguages = this.mapLanguages(this.summaryTabData.broadcastLanguages);
    this.broadcastNumberArray = this.sortBroadcastNumberByDate();
    this.broadcastNumber = this.fetchNumberFromBroadcastNumbers("BROADCAST");
    this.majorNumber = this.fetchNumberFromBroadcastNumbers("MAJOR");
    this.minorNumber = this.fetchNumberFromBroadcastNumbers("MINOR");
    this.mapAffiliationNumbers();
    this.lastUpdated = this.parseDate(this.summaryTabData.history[0].modifiedDateTime);
  }

  private sortAndfetchSourceType() {
    var tempArray: any = new Array();
    for (var i = 0; i < this.summaryTabData.progservTypes.length; i++) {
      tempArray.push(this.summaryTabData.progservTypes[i]);
    }
    tempArray = this.sortDescByEffectiveDate(tempArray);
    if (tempArray.length > 0) {
      return tempArray[0].description;
    }
  }

  private sortAndfetchCallSign() {
    var tempArray: any = new Array();
    for (var i = 0; i < this.summaryTabData.callsigns.length; i++) {
      tempArray.push(this.summaryTabData.callsigns[i]);
    }
    tempArray = this.sortDescByEffectiveDate(tempArray);
    if (tempArray.length > 0) {
      return tempArray[0].callSignText;
    }
  }

  private parseDate(dateToBeParsed) {
    var date = new Date();
    if (dateToBeParsed) {
      date = new Date(dateToBeParsed);
      return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    }
  }

  private mapCountriesOfCoverage() {
    for (let object of this.summaryTabData.countriesOfCoverage) {
      if (object.sequence == 1) {
        this.primaryCountryOfCoverage = object.name;
      }
      else {
        this.otherCountriesOfCoverage += object.name + ", ";
      }
    }
    this.otherCountriesOfCoverage = this.removeLastComma(this.otherCountriesOfCoverage);
  }

  private mapLanguages(objectToBeConcatinated) {
    var tempString: string = "";
    for (let object of objectToBeConcatinated) {
      tempString += object.name + ", ";
    }
    return this.removeLastComma(tempString);
  }

  private sortBroadcastNumberByDate() {
    var tempArray: any = new Array();
    for (var i = 0; i < this.summaryTabData.broadcastNumbers.length; i++) {
      tempArray.push(this.summaryTabData.broadcastNumbers[i]);
    }
    tempArray = this.sortDescByEffectiveDate(tempArray);
    return tempArray;
  }

  private fetchNumberFromBroadcastNumbers(tag) {
    for (let object of this.broadcastNumberArray) {
      if (object.numberType.tag == tag)
        return object.number;
    }
  }

  private mapAffiliationNumbers() {
    for (let object of this.summaryTabData.affiliations) {
      this.affiliationNumber += object.abbreviation + ", ";
    }
    this.affiliationNumber = this.removeLastComma(this.affiliationNumber);
  }

  private removeLastComma(str: string) {
    if (str) {
      str = str.substring(0, str.length - 2);
    }
    return str;
  }

  private sortDescByEffectiveDate(tempArray) {
    tempArray.sort((a, b) => {
      if (a.effectiveDate < b.effectiveDate) {
        return 1;
      } else if (a.effectiveDate > b.effectiveDate) {
        return -1;
      }
      return 0;
    });
    return tempArray;
  }
}