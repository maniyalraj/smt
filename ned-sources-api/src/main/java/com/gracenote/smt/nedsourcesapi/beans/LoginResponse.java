package com.gracenote.smt.nedsourcesapi.beans;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginResponse {
    private boolean success;

    public LoginResponse() {
    }

    public LoginResponse(boolean success) {
        this.success = success;
    }

    @JsonProperty
    public boolean isSuccess() {
        return success;
    }

    @JsonProperty
    public void setSuccess(boolean success) {
        this.success = success;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "success=" + success +
                '}';
    }
}
