package com.gracenote.smt.nedsourcesapi.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;

public class SearchCriteria {
    private String finder;
    private long progservId;
    private String name;
    private String callSign;
    private String contactName;
    private String phoneNumber;
    private String[] relationshipTypes;
    //private String sourceType;
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
    private String sortColumn;
    private boolean reverseOrder;

    public SearchCriteria() {
    }

    public SearchCriteria(String finder, long progservId, String name, String callSign, String contactName, String phoneNumber, String[] relationshipTypes, boolean noLongerEdited, boolean primaryCountry, String[] countries, String city, String dma, String affiliation, String callSignHistory, String numberHistory, String affiliationHistory, String editorUsername, String sortColumn, boolean reverseOrder) {
        this.finder = finder;
        this.progservId = progservId;
        this.name = name;
        this.callSign = callSign;
        this.contactName = contactName;
        this.phoneNumber = phoneNumber;
        this.relationshipTypes = relationshipTypes;
        this.noLongerEdited = noLongerEdited;
        this.primaryCountry = primaryCountry;
        this.countries = countries;
        this.city = city;
        this.dma = dma;
        this.affiliation = affiliation;
        this.callSignHistory = callSignHistory;
        this.numberHistory = numberHistory;
        this.affiliationHistory = affiliationHistory;
        this.editorUsername = editorUsername;
        this.sortColumn = sortColumn;
        this.reverseOrder = reverseOrder;
    }

    @JsonProperty
    public String getFinder() {
        return finder;
    }

    @JsonProperty
    public void setFinder(String finder) {
        this.finder = finder;
    }

    @JsonProperty
    public long getProgservId() {
        return progservId;
    }

    @JsonProperty
    public void setProgservId(long progservId) {
        this.progservId = progservId;
    }

    @JsonProperty
    public String getName() {
        return name;
    }

    @JsonProperty
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty
    public String getCallSign() {
        return callSign;
    }

    @JsonProperty
    public void setCallSign(String callSign) {
        this.callSign = callSign;
    }

    @JsonProperty
    public String getContactName() {
        return contactName;
    }

    @JsonProperty
    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    @JsonProperty
    public String getPhoneNumber() {
        return phoneNumber;
    }

    @JsonProperty
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @JsonProperty
    public String[] getRelationshipTypes() {
        return relationshipTypes;
    }

    @JsonProperty
    public void setRelationshipTypes(String[] relationshipTypes) {
        this.relationshipTypes = relationshipTypes;
    }

    @JsonProperty
    public boolean isNoLongerEdited() {
        return noLongerEdited;
    }

    @JsonProperty
    public void setNoLongerEdited(boolean noLongerEdited) {
        this.noLongerEdited = noLongerEdited;
    }

    @JsonProperty
    public boolean isPrimaryCountry() {
        return primaryCountry;
    }

    @JsonProperty
    public void setPrimaryCountry(boolean primaryCountry) {
        this.primaryCountry = primaryCountry;
    }

    @JsonProperty
    public String[] getCountries() {
        return countries;
    }

    @JsonProperty
    public void setCountries(String[] countries) {
        this.countries = countries;
    }

    @JsonProperty
    public String getCity() {
        return city;
    }

    @JsonProperty
    public void setCity(String city) {
        this.city = city;
    }

    @JsonProperty
    public String getDma() {
        return dma;
    }

    @JsonProperty
    public void setDma(String dma) {
        this.dma = dma;
    }

    @JsonProperty
    public String getAffiliation() {
        return affiliation;
    }

    @JsonProperty
    public void setAffiliation(String affiliation) {
        this.affiliation = affiliation;
    }

    @JsonProperty
    public String getCallSignHistory() {
        return callSignHistory;
    }

    @JsonProperty
    public void setCallSignHistory(String callSignHistory) {
        this.callSignHistory = callSignHistory;
    }

    @JsonProperty
    public String getNumberHistory() {
        return numberHistory;
    }

    @JsonProperty
    public void setNumberHistory(String numberHistory) {
        this.numberHistory = numberHistory;
    }

    @JsonProperty
    public String getAffiliationHistory() {
        return affiliationHistory;
    }

    @JsonProperty
    public void setAffiliationHistory(String affiliationHistory) {
        this.affiliationHistory = affiliationHistory;
    }

    @JsonProperty
    public String getEditorUsername() {
        return editorUsername;
    }

    @JsonProperty
    public void setEditorUsername(String editorUsername) {
        this.editorUsername = editorUsername;
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
        return "SearchCriteria{" +
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
                ", sortColumn='" + sortColumn + '\'' +
                ", reverseOrder=" + reverseOrder +
                '}';
    }
}

