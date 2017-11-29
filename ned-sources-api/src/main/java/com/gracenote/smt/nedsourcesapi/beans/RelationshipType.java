package com.gracenote.smt.nedsourcesapi.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

//Dummy class. API not ready
public class RelationshipType {
    private String id;
    private String name;
    private String tag;

    public RelationshipType() {

    }

    public RelationshipType(String id, String name, String tag) {
        this.id = id;
        this.name = name;
        this.tag = tag;
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
}
