package com.gracenote.smt.nedsourcesapi.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ResponseBean {

    int draw = 1;
    int recordsTotal = 57;
    int recordsFiltered = 57;

    public List<List<String>> getData() {
        data = new ArrayList<>();
        data.add(Arrays.asList(new String[]{"A1","A2"}));
        data.add(Arrays.asList(new String[]{"B1","B2"}));

        return data;
    }

    public void setData(List<List<String>> data) {
        this.data = data;
    }

    List<List<String>> data;

    @JsonProperty
    public int getDraw() {
        return draw;
    }
    @JsonProperty
    public void setDraw(int draw) {
        this.draw = draw;
    }
    @JsonProperty
    public int getRecordsTotal() {
        return recordsTotal;
    }
    @JsonProperty
    public void setRecordsTotal(int recordsTotal) {
        this.recordsTotal = recordsTotal;
    }
    @JsonProperty
    public int getRecordsFiltered() {
        return recordsFiltered;
    }
    @JsonProperty
    public void setRecordsFiltered(int recordsFiltered) {
        this.recordsFiltered = recordsFiltered;
    }

}
