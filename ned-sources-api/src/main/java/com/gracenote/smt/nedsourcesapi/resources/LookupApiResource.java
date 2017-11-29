package com.gracenote.smt.nedsourcesapi.resources;

import com.fasterxml.jackson.databind.JsonNode;
import com.gracenote.smt.nedsourcesapi.beans.*;
import com.gracenote.smt.nedsourcesapi.externalApi.BackendApi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("/lookups")
public class LookupApiResource {
    private static final Logger LOGGER = LoggerFactory.getLogger(LookupApiResource.class);
    private BackendApi backendApi;

    public LookupApiResource(BackendApi backendApi) {
        this.backendApi = backendApi;
    }

    @GET
    @Path("/dma")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllDma() {

        Response response = backendApi.makeGetRequest("/lookups/dma");
        List<Dma> dma = response.readEntity(new GenericType<List<Dma>>(){});
        return Response.ok().entity(dma).build();
    }

    @GET
    @Path("/affiliations")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllAffiliation() {
        Response response = backendApi.makeGetRequest("/lookups/affiliations");
        List<Affiliation> affiliations = response.readEntity(new GenericType<List<Affiliation>>(){});
        return Response.ok().entity(affiliations).build();
    }

    @GET
    @Path("/countries")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllCountries() {
        Response response = backendApi.makeGetRequest("/lookups/countries");
        List<Country> countries = response.readEntity(new GenericType<List<Country>>(){});
        return Response.ok().entity(countries).build();
    }

    @GET
    @Path("/employees")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllEmployees() {
        Response response = backendApi.makeGetRequest("/lookups/employees");
        JsonNode employeeResponse = response.readEntity(new GenericType<JsonNode>(){});
        return Response.ok().entity(employeeResponse).build();
    }

    @GET
    @Path("/releaseAttributeTypes")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllAttributeTypes() {
        Response response = backendApi.makeGetRequest("/lookups/releaseAttributeTypes");
        JsonNode attributeTypeResponse = response.readEntity(new GenericType<JsonNode>(){});
        return Response.ok().entity(attributeTypeResponse).build();
    }

    @GET
    @Path("/relationshipTypes")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllRelationshipTypes() {
        List<RelationshipType> relationshipTypes = new ArrayList<RelationshipType>();
        relationshipTypes.add(new RelationshipType("1","Digital Version of","DIGITAL VERSION OF"));
        relationshipTypes.add(new RelationshipType("2","Child (satellite) of","CHILD (SATELLITE) OF"));
        relationshipTypes.add(new RelationshipType("3","Translator of","TRANSLATOR OF"));
        relationshipTypes.add(new RelationshipType("4","Local Market Agreement With","LOCAL MARKET AGREEMENT WITH"));
        relationshipTypes.add(new RelationshipType("5","National Version Of","NATIONAL VERSION OF"));
        relationshipTypes.add(new RelationshipType("6","EAS-Syndex Version Of","EAS-SYNDEX VERSION OF"));
        return Response.ok().entity(relationshipTypes).build();
    }

    @GET
    @Path("/sourceTypes")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllSourceTypes() {
        List<SourceType> sourceTypes = new ArrayList<SourceType>();
        sourceTypes.add(new SourceType("2","Split","SPL"));
        sourceTypes.add(new SourceType("3","Master","MAS"));
        sourceTypes.add(new SourceType("4","Network","NET"));
        sourceTypes.add(new SourceType("5","Satellite","SAT"));
        sourceTypes.add(new SourceType("6","Cable Only","CAB"));
        sourceTypes.add(new SourceType("7","Over-the-air","OTA"));
        return Response.ok().entity(sourceTypes).build();

    }

}
