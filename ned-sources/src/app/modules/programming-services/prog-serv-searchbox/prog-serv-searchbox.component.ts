import { Component, OnInit, AfterViewInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LookupService } from '../../../services/lookups/lookup.service';
import { ProgServService } from '../../../services/prog-serv.service';
import { Country, SourceType, Dma, Affiliation, RelationshipType } from '../../../components/lookups/lookups.component';
import { SelectItem } from 'primeng/primeng';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AdvancedSearchComponent } from '../advanced-search/advanced-search.component';

@Component({
	selector: 'app-prog-serv-searchbox',
	templateUrl: './prog-serv-searchbox.component.html',
	styleUrls: ['./prog-serv-searchbox.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ProgServSearchboxComponent implements OnInit {

	//Modal Popup Attributes
	modalRef: NgbModalRef;

	//Quick Search Attributes
	quickSearchInput: string = "";
	radios: String = "finder";
	noLongerEdited: boolean;
	enableSearchBox: boolean = false;

	//Advanced Search Attributes
	advancedSearchForm: AdvancedSearchForm = {};
	advancedSearchComponent: AdvancedSearchComponent;

	//Lookup Attributes
	countriesList: Country[] = new Array();
	dmaList: Dma[] = new Array();
	affiliationsList: Affiliation[] = new Array();
	relationshipTypesList: RelationshipType[] = new Array();
	sourceTypesList: SourceType[] = new Array();

	//Dropdown Attributes
	countriesMultiSelect: SelectItem[];
	relationshipTypesMultiSelect: SelectItem[];
	dmaSelect2Dropdown: SelectItem[];
	sourceTypeSelect2Dropdown: SelectItem[];
	affiliationSelect2Dropdown: SelectItem[];

	//Event Emitter
	@Output() onFormSubmit = new EventEmitter<AdvancedSearchForm>();

	constructor(private router: Router, private progServ: ProgServService, private lookupService: LookupService, private modalService: NgbModal) { }

	ngOnInit() {
		this.loadCountries();
		this.loadDma();
		this.loadAffiliations();
		this.loadRelationshipTypes();
		this.loadSourceTypes();
		this.makePanelFullscreen();
	}

	ngAfterViewInit() {
		this.styleCheckbox();
		this.domEventsForQuickSearchBox();
	}

	validateQuickSearchForm() {
		if (this.quickSearchInput == "" || this.quickSearchInput == undefined) {
			return false;
		}
		else {
			this.advancedSearchForm = {};
			this.submitQuickSearch(this.radios, this.quickSearchInput, this.noLongerEdited);
		}
	}

	submitQuickSearch(radios, quickSearchInput, noLongerEdited) {
		switch (radios) {
			case 'finder': this.advancedSearchForm.finder = quickSearchInput;
				break;
			case 'progservId': this.advancedSearchForm.progservId = quickSearchInput;
				break;
			case 'name': this.advancedSearchForm.name = quickSearchInput;
				break;
			case 'callSign': this.advancedSearchForm.callSign = quickSearchInput;
				break;
			case 'contactName': this.advancedSearchForm.contactName = quickSearchInput;
				break;
			case 'city': this.advancedSearchForm.city = quickSearchInput;
				break;
			default: break;
		}

		this.advancedSearchForm.noLongerEdited = (noLongerEdited == undefined ? false : noLongerEdited);

		this.searchProgrammingService();
	}

	searchProgrammingService() {
		this.closeModalPopup();
		this.setParametersBeforeServiceCall();
		this.onFormSubmit.emit(this.advancedSearchForm);
	}

	setParametersBeforeServiceCall() {
		this.advancedSearchForm.page = (this.advancedSearchForm.page == undefined) ? 1 : this.advancedSearchForm.page;
		this.advancedSearchForm.limit = (this.advancedSearchForm.limit == undefined) ? 10 : this.advancedSearchForm.limit;
		this.advancedSearchForm.sortColumn = (this.advancedSearchForm.sortColumn == undefined) ? "finder" : this.advancedSearchForm.sortColumn;
	}

	closeModalPopup() {
		if (this.modalRef) {
			this.modalRef.close();
		}
	}

	loadCountries() {
		this.lookupService.getAllCountries().subscribe((countriesList) => {
			this.countriesList = countriesList;
			this.countriesMultiSelect = new Array();
			this.buildCountriesMultiselectOptions();
		}
		);
	}

	loadDma() {
		this.lookupService.getAllDma().subscribe((dmaList) => {
			this.dmaList = dmaList;
			this.dmaSelect2Dropdown = new Array();
			this.buildDmaSelect2Options();
		}
		);
	}

	loadAffiliations() {
		this.lookupService.getAllAffiliations().subscribe((affiliationsList) => {
			this.affiliationsList = affiliationsList;
			this.affiliationSelect2Dropdown = new Array();
			this.buildAffiliationSelect2Options();
		}
		);
	}

	loadRelationshipTypes() {
		this.lookupService.getAllRelationshipTypes().subscribe((relationshipTypesList) => {
			this.relationshipTypesList = relationshipTypesList;
			this.relationshipTypesMultiSelect = new Array();
			this.buildRelationshipTypesMultiselectOptions();
		}
		);
	}

	loadSourceTypes() {
		this.lookupService.getAllSourceTypes().subscribe((sourceTypesList) => {
			this.sourceTypesList = sourceTypesList;
			this.sourceTypeSelect2Dropdown = new Array();
			this.buildSourceTypeSelect2Options();
		}
		);
	}

	buildCountriesMultiselectOptions() {
		for (var i = 0; i < this.countriesList.length; i++) {
			this.countriesMultiSelect.push({ value: this.countriesList[i].tag, label: this.countriesList[i].name });
		}
	}

	buildRelationshipTypesMultiselectOptions() {
		for (var i = 0; i < this.relationshipTypesList.length; i++) {
			this.relationshipTypesMultiSelect.push({ value: this.relationshipTypesList[i].tag, label: this.relationshipTypesList[i].name });
		}
	}

	buildDmaSelect2Options() {
		this.dmaSelect2Dropdown.push({ value: null, label: "Choose" });
		for (var i = 0; i < this.dmaList.length; i++) {
			this.dmaSelect2Dropdown.push({ value: this.dmaList[i].name, label: this.dmaList[i].name });
		}
	}

	buildAffiliationSelect2Options() {
		this.affiliationSelect2Dropdown.push({ value: null, label: "Choose" });
		for (var i = 0; i < this.affiliationsList.length; i++) {
			this.affiliationSelect2Dropdown.push({ value: this.affiliationsList[i].tag, label: this.affiliationsList[i].name });
		}
	}

	buildSourceTypeSelect2Options() {
		this.sourceTypeSelect2Dropdown.push({ value: null, label: "Choose" });
		for (var i = 0; i < this.sourceTypesList.length; i++) {
			this.sourceTypeSelect2Dropdown.push({ value: this.sourceTypesList[i].id, label: this.sourceTypesList[i].name });
		}
	}

	openMedalPopup(content) {
		this.modalRef = this.modalService.open(content);
	}

	stopHidingSearchDropdown() {
		event.stopPropagation();
	}

	domEventsForQuickSearchBox() {

		document.addEventListener("click", function () {
			if (document.getElementsByClassName("sb_input")[0]) {
				document.getElementsByClassName("sb_input")[0].className = document.getElementsByClassName("sb_input")[0].className.replace(" chk-focus", "");
				this.enableSearchBox = false;
			}
		}.bind(this));

		document.getElementsByClassName("sb_input")[0].addEventListener("focus", function () {
			if (document.getElementsByClassName("sb_input")[0].className.indexOf("chk-focus") == -1) {
				document.getElementsByClassName("sb_input")[0].className = document.getElementsByClassName("sb_input")[0].className.concat(" chk-focus");
			}
			this.enableSearchBox = true;
			event.stopPropagation();
		}.bind(this));

		document.getElementsByClassName("sb_input")[0].addEventListener("click", function () {
			if (document.getElementsByClassName("sb_input")[0].className.indexOf("chk-focus") == -1) {
				document.getElementsByClassName("sb_input")[0].className = document.getElementsByClassName("sb_input")[0].className.concat(" chk-focus");
			}
			this.enableSearchBox = true;
			event.stopPropagation();
		}.bind(this));
	}

	isNumber(evt) {
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}

	checkNotANumber(evt) {
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return true;
		}
		return false;
	}

	checkNotASpecialCharacter(e) {
		e = (e) ? e : window.event;
		var charCode = (e.which) ? e.which : e.keyCode;
		//42 = * - to allow for wild character search
		if (charCode == 42 || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) ||
			charCode == 8 || (charCode >= 48 && charCode <= 57)) {
			return true;
		}
		return false;
	}

	styleCheckbox() {
		/*$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
			checkboxClass: 'icheckbox_minimal-blue',
			radioClass: 'iradio_minimal-blue'
		});*/
	}

	makePanelFullscreen() {
		/*$("#panel-fullscreen").click(function (e) {
			e.preventDefault();

			var $this = $(this);

			if ($this.children('i').hasClass('fa fa-expand')) {
				$this.children('i').removeClass('fa fa-expand');
				$this.children('i').addClass('fa fa-compress');
			}
			else if ($this.children('i').hasClass('fa fa-compress')) {
				$this.children('i').removeClass('fa fa-compress');
				$this.children('i').addClass('fa fa-expand');
			}
			$(this).closest('.box').toggleClass('panel-fullscreen');
		});*/
	}
}


export interface AdvancedSearchForm {
	finder?: String;
	name?: String;
	callSign?: String;
	contactName?: String;
	affiliation?: Affiliation;
	callSignHistory?: String;
	sourceType?: SourceType;
	numberHistory?: String;
	affiliationHistory?: String;
	editorUsername?: String;
	dma?: Dma;
	city?: String;
	phoneNumber?: String;
	progservId?: number;
	noLongerEdited?: boolean;
	primaryCountry?: boolean;
	relationshipTypes?: RelationshipType[];
	countries?: Country[];
	limit?: number;
	page?: number;
	sortColumn?: string;
	reverseOrder?: boolean;
	typeHistory?: string;
}