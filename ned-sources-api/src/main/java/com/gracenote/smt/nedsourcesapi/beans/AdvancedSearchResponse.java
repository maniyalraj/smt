package com.gracenote.smt.nedsourcesapi.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class AdvancedSearchResponse {

    private long totalSize;
    private List<AdvancedSearchRecord> results;

    public AdvancedSearchResponse() {
        this.setResults(new ArrayList<AdvancedSearchRecord>());
    }

    public AdvancedSearchResponse(long totalSize, List<AdvancedSearchRecord> results) {
        this.totalSize = totalSize;
        this.results = results;
    }

    @JsonProperty
    public void setTotalSize(long totalSize) {
        this.totalSize = totalSize;
    }

    @JsonProperty
    public void setResults(List<AdvancedSearchRecord> results) {
        this.results = results;
    }

    @JsonProperty
    public long getTotalSize() {
        return totalSize;
    }

    @JsonProperty
    public List<AdvancedSearchRecord> getResults() {
        return results;
    }

    @Override
    public String toString() {
        return "AdvancedSearchResponse{" +
                ", totalSize=" + totalSize +
                ", results=" + results +
                '}';
    }
}

class AdvancedSearchRecord {

    private String callSign;
    private Country country;
    private String finder;
    private String name;
    private long progservId;
    private SourceType sourceType;

    public AdvancedSearchRecord() {
    }

    public AdvancedSearchRecord(String callSign, Country country, String finder, String name, long progservId, SourceType sourceType) {
        this.callSign = callSign;
        this.country = country;
        this.finder = finder;
        this.name = name;
        this.progservId = progservId;
        this.sourceType = sourceType;
    }

    @JsonProperty
    public void setCallSign(String callSign) {
        this.callSign = callSign;
    }

    @JsonProperty
    public void setCountry(Country country) {
        this.country = country;
    }

    @JsonProperty
    public void setFinder(String finder) {
        this.finder = finder;
    }

    @JsonProperty
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty
    public void setProgservId(long progservId) {
        this.progservId = progservId;
    }

    @JsonProperty
    public void setSourceType(SourceType sourceType) {
        this.sourceType = sourceType;
    }

    @JsonProperty
    public String getCallSign() {
        return callSign;
    }

    @JsonProperty
    public Country getCountry() {
        return country;
    }

    @JsonProperty
    public String getFinder() {
        return finder;
    }

    @JsonProperty
    public String getName() {
        return name;
    }

    @JsonProperty
    public long getProgservId() {
        return progservId;
    }

    @JsonProperty
    public SourceType getSourceType() {
        return sourceType;
    }

    @Override
    public String toString() {
        return "AdvancedSearchRecord{" +
                "callSign='" + callSign + '\'' +
                ", country=" + country +
                ", finder='" + finder + '\'' +
                ", name='" + name + '\'' +
                ", progservId=" + progservId +
                ", sourceType=" + sourceType +
                '}';
    }
}
