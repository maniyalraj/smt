package com.gracenote.smt.nedsourcesapi.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Affiliation {

    private String id;
    private String name;
    private String tag;

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
}
