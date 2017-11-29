package com.gracenote.smt.nedsourcesapi;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import io.dropwizard.client.JerseyClientConfiguration;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.time.Duration;

public class NedSourcesApiConfiguration extends Configuration {

    @Valid
    @NotNull
    @JsonProperty
    private JerseyClientConfiguration httpClient = new JerseyClientConfiguration();

    private String baseUrl;

    public String getBaseUrl() {
        return baseUrl;
    }

    public JerseyClientConfiguration getJerseyClientConfiguration() {
        httpClient.setTimeout(io.dropwizard.util.Duration.seconds(5));
        return httpClient;
    }

}
