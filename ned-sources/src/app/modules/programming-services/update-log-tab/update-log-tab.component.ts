import { Component, OnInit, Input, OnChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { LookupService } from '../../../services/lookups/lookup.service';
import { SourceType } from '../../../components/lookups/lookups.component';
import { SelectItem } from 'primeng/primeng';

@Component({
	selector: 'app-update-log-tab',
	templateUrl: './update-log-tab.component.html',
	styleUrls: ['./update-log-tab.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class UpdateLogTabComponent implements OnInit, OnChanges {

	status: SelectItem[];

	@Input() updateLogTabData: any;

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

	updateLogList: updateLogData[] = new Array();


	ngOnInit() {
	}

	private parseDate(dateToBeParsed) {
		var date = new Date();
		var days, dayName, months, monthNames, regiontimeZone, timeZoneRegion, expectedTimezone, fullTime;
		if (dateToBeParsed) {
			date = new Date(dateToBeParsed);

			days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
			dayName = days[date.getDay()];

			months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
				"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
			monthNames = months[date.getMonth()];

			regiontimeZone = date.toTimeString().split("(");
			timeZoneRegion = regiontimeZone[1].replace(/[()]/g, '');

			fullTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

			return dayName + " " + monthNames + " " + date.getDate() + " " + fullTime + " " + timeZoneRegion + " " + date.getFullYear();
		}
	}
	
	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		for (let propName in changes) {
			let changedProp = changes[propName];
			if (changedProp.currentValue) {
				this.updateLogTabData = changedProp.currentValue;
				var modifiedDateField;
				for (let updateInfo of this.updateLogTabData.history) {
					modifiedDateField = this.parseDate(updateInfo.modifiedDateTime);
					this.updateLogList.push({
						modifiedBy: updateInfo.modifiedBy.lastName + ", " + updateInfo.modifiedBy.firstName,
						modifiedDateTime: modifiedDateField,
						updateType: updateInfo.updateType.name,
						updateField: updateInfo.tableName,
						previousValue: updateInfo.previousState
					});
				}
				this.updateLogList = [...this.updateLogList];
			}
		}
	}
}

interface updateLogData {
	modifiedBy: string;
	modifiedDateTime: string;
	updateType: string;
	updateField: string;
	previousValue: string;
}

