import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { ProgServService } from '../../../services/prog-serv.service';
import { HeaderComponent } from '../../../components/header/header.component';
import { LookupService } from '../../../services/lookups/lookup.service';
import { Router } from '@angular/router';
import { AdvancedSearchForm } from '../prog-serv-searchbox/prog-serv-searchbox.component';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { Country, SourceType } from '../../../components/lookups/lookups.component';

@Component({
	selector: 'app-advanced-search',
	templateUrl: './advanced-search.component.html',
	styleUrls: ['./advanced-search.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AdvancedSearchComponent implements AfterViewInit, OnInit {

	//UI Attributes
	searchResults: number;

	//Advanced Search Attributes
	advancedSearchForm: AdvancedSearchForm = {};
	advancedSearchResponse: AdvancedSearchResponse = new AdvancedSearchResponse();

	constructor(private router: Router, private progServ: ProgServService, private lookupService: LookupService) {

	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		this.searchProgrammingService();
	}

	listenSubmitEvent(advancedSearchForm: AdvancedSearchForm) {
		this.advancedSearchForm = advancedSearchForm;
		this.searchProgrammingService();
	}

	searchProgrammingService() {
		this.setParametersBeforeServiceCall();
		this.progServ.advancedSearchServerCall(this.advancedSearchForm).subscribe(result => {
			this.advancedSearchResponse = result;
			this.searchResults = this.advancedSearchResponse.totalSize;
		});
	}

	setParametersBeforeServiceCall() {
		this.advancedSearchForm.page = (this.advancedSearchForm.page == undefined) ? 1 : this.advancedSearchForm.page;
		this.advancedSearchForm.limit = (this.advancedSearchForm.limit == undefined) ? 10 : this.advancedSearchForm.limit;
		this.advancedSearchForm.sortColumn = (this.advancedSearchForm.sortColumn == undefined) ? "finder" : this.advancedSearchForm.sortColumn;
	}

	loadProgrammingServicesLazy(event: LazyLoadEvent) {
		this.setParametersForDatatableLazyLoading(event);
		this.searchProgrammingService();
	}

	setParametersForDatatableLazyLoading(event: LazyLoadEvent) {
		this.advancedSearchForm.page = (event.first / event.rows) + 1;
		this.advancedSearchForm.limit = event.rows;
		if (event.sortField == "sourceType.name") {
			event.sortField = "progservType";
		} else if (event.sortField == "country.name") {
			event.sortField = "country";
		}
		this.advancedSearchForm.sortColumn = event.sortField;
		if (event.sortOrder == 1) {
			this.advancedSearchForm.reverseOrder = false;
		}
		else {
			this.advancedSearchForm.reverseOrder = true;
		}
	}

	onRowSelect(event) {
		window.open("edit-prog-service/" + event.data.progservId);
	}

}

export class AdvancedSearchResponse {
	totalSize?: number;
	results?: {
		callSign?: string;
		country?: Country;
		finder?: string;
		name?: string;
		progservId?: number;
		sourceType?: SourceType;
	}[];
}