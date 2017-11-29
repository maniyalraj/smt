import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { ProgServService } from '../../../services/prog-serv.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AttributesTabComponent } from '../attributes-tab/attributes-tab.component';
import { SummaryTabComponent } from '../summary-tab/summary-tab.component';
import { InstructionsTabComponent } from '../instructions-tab/instructions-tab.component';
import { RelationshipsTabComponent } from '../relationships-tab/relationships-tab.component';
import { SourceHistoryTabComponent } from '../source-history-tab/source-history-tab.component';
import { UpdateLogTabComponent } from '../update-log-tab/update-log-tab.component';
import { ContactsTabComponent } from '../contacts-tab/contacts-tab.component';


@Component({
  selector: 'app-edit-prog-service',
  templateUrl: './edit-prog-service.component.html',
  styleUrls: ['./edit-prog-service.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EditProgServiceComponent implements OnInit {

  status: SelectItem[];
  progServiceId: string;
  lastUpdated: string = "";

  //EditProgService Attributes
  editProgServiceResponse: any;

  constructor(private progServ: ProgServService, private router: ActivatedRoute) {

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
    this.fetchProgServIdFromUrlAndMakeApiCall();
  }

  private fetchProgServIdFromUrlAndMakeApiCall() {
    this.router.paramMap
      .switchMap((params: ParamMap) => this.progServ.getEditProgrammingServiceDetails(params.get('progServiceId')))
      .subscribe(result => {
        this.editProgServiceResponse = result;
        this.lastUpdated = this.parseLastUpdated(this.editProgServiceResponse.history[0].modifiedDateTime);
        this.lastUpdated = this.lastUpdated + " - " + this.editProgServiceResponse.history[0].modifiedBy.username;
      });
  }

  private parseLastUpdated(dateToBeParsed) {
    if (dateToBeParsed) {
      var date = new Date(dateToBeParsed);
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var mon = months[date.getMonth()];
      return mon + " " + date.getDate() + ", " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    }
    return "";
  }
}