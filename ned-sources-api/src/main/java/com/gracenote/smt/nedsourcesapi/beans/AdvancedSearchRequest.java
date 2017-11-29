package com.gracenote.smt.nedsourcesapi.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;

public class AdvancedSearchRequest {
    private String finder;
    private long progservId;
    private String name;
    private String callSign;
    private String contactName;
    private String phoneNumber;
    private String[] relationshipTypes;
    private boolean noLongerEdited;
    private boolean primaryCountry;
    private String[] countries;
    private String city;
    private String dma;
    private String affiliation;
    private String callSignHistory;
    private String numberHistory;
    private String affiliationHistory;
    private String editorUsername;
    private int limit;
    private int page;
    private String sortColumn;
    private boolean reverseOrder;

    @JsonProperty
    public void setFinder(String finder) {
        this.finder = finder;
    }

    @JsonProperty
    public void setProgservId(long progservId) {
        this.progservId = progservId;
    }

    @JsonProperty
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty
    public void setCallSign(String callSign) {
        this.callSign = callSign;
    }

    @JsonProperty
    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    @JsonProperty
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @JsonProperty
    public void setRelationshipTypes(String[] relationshipTypes) {
        this.relationshipTypes = relationshipTypes;
    }

    @JsonProperty
    public void setNoLongerEdited(boolean noLongerEdited) {
        this.noLongerEdited = noLongerEdited;
    }

    @JsonProperty
    public void setPrimaryCountry(boolean primaryCountry) {
        this.primaryCountry = primaryCountry;
    }

    @JsonProperty
    public void setCountries(String[] countries) {
        this.countries = countries;
    }

    @JsonProperty
    public void setCity(String city) {
        this.city = city;
    }

    @JsonProperty
    public void setDma(String dma) {
        this.dma = dma;
    }

    @JsonProperty
    public void setAffiliation(String affiliation) {
        this.affiliation = affiliation;
    }

    @JsonProperty
    public void setCallSignHistory(String callSignHistory) {
        this.callSignHistory = callSignHistory;
    }

    @JsonProperty
    public void setNumberHistory(String numberHistory) {
        this.numberHistory = numberHistory;
    }

    @JsonProperty
    public void setAffiliationHistory(String affiliationHistory) {
        this.affiliationHistory = affiliationHistory;
    }

    @JsonProperty
    public void setEditorUsername(String editorUsername) {
        this.editorUsername = editorUsername;
    }

    @JsonProperty
    public String getFinder() {
        return finder;
    }

    @JsonProperty
    public long getProgservId() {
        return progservId;
    }

    @JsonProperty
    public String getName() {
        return name;
    }

    @JsonProperty
    public String getCallSign() {
        return callSign;
    }

    @JsonProperty
    public String getContactName() {
        return contactName;
    }

    @JsonProperty
    public String getPhoneNumber() {
        return phoneNumber;
    }

    @JsonProperty
    public String[] getRelationshipTypes() {
        return relationshipTypes;
    }

    @JsonProperty
    public boolean isNoLongerEdited() {
        return noLongerEdited;
    }

    @JsonProperty
    public boolean isPrimaryCountry() {
        return primaryCountry;
    }

    @JsonProperty
    public String[] getCountries() {
        return countries;
    }

    @JsonProperty
    public String getCity() {
        return city;
    }

    @JsonProperty
    public String getDma() {
        return dma;
    }

    @JsonProperty
    public String getAffiliation() {
        return affiliation;
    }

    @JsonProperty
    public String getCallSignHistory() {
        return callSignHistory;
    }

    @JsonProperty
    public String getNumberHistory() {
        return numberHistory;
    }

    @JsonProperty
    public String getAffiliationHistory() {
        return affiliationHistory;
    }

    @JsonProperty
    public String getEditorUsername() {
        return editorUsername;
    }

    @JsonProperty
    public int getLimit() {
        return limit;
    }

    @JsonProperty
    public void setLimit(int limit) {
        this.limit = limit;
    }

    @JsonProperty
    public int getPage() {
        return page;
    }

    @JsonProperty
    public void setPage(int page) {
        this.page = page;
    }

    @JsonProperty
    public String getSortColumn() {
        return sortColumn;
    }

    @JsonProperty
    public void setSortColumn(String sortColumn) {
        this.sortColumn = sortColumn;
    }

    @JsonProperty
    public boolean isReverseOrder() {
        return reverseOrder;
    }

    @JsonProperty
    public void setReverseOrder(boolean reverseOrder) {
        this.reverseOrder = reverseOrder;
    }

    @Override
    public String toString() {
        return "AdvancedSearchRequest{" +
                "finder='" + finder + '\'' +
                ", progservId=" + progservId +
                ", name='" + name + '\'' +
                ", callSign='" + callSign + '\'' +
                ", contactName='" + contactName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", relationshipTypes=" + Arrays.toString(relationshipTypes) +
                ", noLongerEdited=" + noLongerEdited +
                ", primaryCountry=" + primaryCountry +
                ", countries=" + Arrays.toString(countries) +
                ", city='" + city + '\'' +
                ", dma='" + dma + '\'' +
                ", affiliation='" + affiliation + '\'' +
                ", callSignHistory='" + callSignHistory + '\'' +
                ", numberHistory='" + numberHistory + '\'' +
                ", affiliationHistory='" + affiliationHistory + '\'' +
                ", editorUsername='" + editorUsername + '\'' +
                ", limit=" + limit +
                ", page=" + page +
                ", sortColumn=" + sortColumn +
                ", reverseOrder='" + reverseOrder + '\'' +
                '}';
    }
}