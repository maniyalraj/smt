package com.gracenote.smt.nedsourcesapi.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Country {
    private String id;
    private String name;
    private String tag;
    private String abbrev;
    private String isoAlpha2Code;
    private String isoAlpha3Code;
    private String sequence;

    public Country() {
     }

    public Country(String id, String name, String tag, String abbrev, String isoAlpha2Code, String isoAlpha3Code, String sequence) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.abbrev = abbrev;
        this.isoAlpha2Code = isoAlpha2Code;
        this.isoAlpha3Code = isoAlpha3Code;
        this.sequence = sequence;
    }

    @JsonProperty
    public String getId() {
        return id;
    }

    @JsonProperty
    public void setId(String id) {
        this.id = id;
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
    public String getTag() {
        return tag;
    }

    @JsonProperty
    public void setTag(String tag) {
        this.tag = tag;
    }

    @JsonProperty
    public String getAbbrev() {
        return abbrev;
    }

    @JsonProperty
    public void setAbbrev(String abbrev) {
        this.abbrev = abbrev;
    }

    @JsonProperty
    public String getIsoAlpha2Code() {
        return isoAlpha2Code;
    }

    @JsonProperty
    public void setIsoAlpha2Code(String isoAlpha2Code) {
        this.isoAlpha2Code = isoAlpha2Code;
    }

    @JsonProperty
    public String getIsoAlpha3Code() {
        return isoAlpha3Code;
    }

    @JsonProperty
    public void setIsoAlpha3Code(String isoAlpha3Code) {
        this.isoAlpha3Code = isoAlpha3Code;
    }

    @JsonProperty
    public String getSequence() {
        return sequence;
    }

    @JsonProperty
    public void setSequence(String sequence) {
        this.sequence = sequence;
    }
}
