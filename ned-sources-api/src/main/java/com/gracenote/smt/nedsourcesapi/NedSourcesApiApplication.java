package com.gracenote.smt.nedsourcesapi;

import com.gracenote.smt.nedsourcesapi.externalApi.BackendApi;
import com.gracenote.smt.nedsourcesapi.resources.LookupApiResource;
import com.gracenote.smt.nedsourcesapi.resources.NedSourcesApiResource;
import io.dropwizard.Application;
import io.dropwizard.client.JerseyClientBuilder;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.eclipse.jetty.servlets.CrossOriginFilter;//Implementation of the cross-origin resource sharing
import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import javax.ws.rs.client.Client;
import java.util.EnumSet;

public class NedSourcesApiApplication extends Application<NedSourcesApiConfiguration> {

    public static void main(String[] args) throws Exception {
        new NedSourcesApiApplication().run(args);
    }

    @Override
    public void initialize(Bootstrap<NedSourcesApiConfiguration> bootstrap) {
        // nothing to do yet
    }

    @Override
    public void run(NedSourcesApiConfiguration configuration, Environment environment) {

        // Enable CORS headers
        final FilterRegistration.Dynamic cors =
                environment.servlets().addFilter("CORS", CrossOriginFilter.class);

        // Add URL mapping
        cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");//Registering filter for all(/*) URL patterns

        final Client client = new JerseyClientBuilder(environment)
                .using(configuration.getJerseyClientConfiguration())
                .build(getName());


        final BackendApi backendApi = new BackendApi(configuration.getBaseUrl(), client);

        final NedSourcesApiResource nedSourcesApiResource = new NedSourcesApiResource(backendApi);
        final LookupApiResource lookupApiResource = new LookupApiResource(backendApi);

        environment.jersey().register(nedSourcesApiResource);
        environment.jersey().register(lookupApiResource);
    }
}
