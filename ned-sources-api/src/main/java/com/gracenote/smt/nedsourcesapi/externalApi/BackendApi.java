package com.gracenote.smt.nedsourcesapi.externalApi;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

public class BackendApi {

    private String baseUrl;
    private Client client;

    public String getBaseUrl() {
        return baseUrl;
    }

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public BackendApi(String baseUrl, Client client) {
        this.baseUrl = baseUrl;
        this.client = client;
    }

    public Response makeGetRequest(String url) {
        WebTarget target = client.target(baseUrl+url);
        Invocation.Builder invocationBuilder =  target.request(MediaType.APPLICATION_JSON);
        Response response = invocationBuilder.get();
        return response;
    }

}
