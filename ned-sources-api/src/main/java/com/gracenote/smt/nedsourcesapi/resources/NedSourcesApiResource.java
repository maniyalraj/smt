package com.gracenote.smt.nedsourcesapi.resources;

import javax.ws.rs.*;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import com.fasterxml.jackson.databind.JsonNode;
import com.gracenote.smt.nedsourcesapi.beans.*;
import com.gracenote.smt.nedsourcesapi.externalApi.BackendApi;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Path("/ned-sources-api")
public class NedSourcesApiResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(NedSourcesApiResource.class);
    private BackendApi backendApi;

    public NedSourcesApiResource(BackendApi backendApi) {
        this.backendApi = backendApi;
    }

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response authenticate(LoginRequest loginRequestBean) {

        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(backendApi.getBaseUrl()+"login/authenticate?username=" + loginRequestBean.getUsername());
        Response response = target.request().header("nedEncoded", false).post(Entity.entity(loginRequestBean.getPassword(), MediaType.APPLICATION_JSON_TYPE));
        LoginResponse loginResponse = response.readEntity(LoginResponse.class);
        LOGGER.debug("Login response for username: {} is {}",loginRequestBean.getUsername(), loginResponse.isSuccess());
        return Response.ok().entity(loginResponse).build();
    }

    @POST
    @Path("/advanced-search")
    @Produces(MediaType.APPLICATION_JSON)
    public Response advancedSearch(AdvancedSearchRequest advancedSearchRequestBean) {

        LOGGER.debug("Request: {}",advancedSearchRequestBean);
        AdvancedSearchResponse result = new AdvancedSearchResponse();
        if(!isNull(advancedSearchRequestBean)) {
            SearchCriteria searchCriteria = setSearchCriteria(advancedSearchRequestBean);

            Client client = ClientBuilder.newClient();
            WebTarget target = client.target(backendApi.getBaseUrl()+"v2/sources/progserv/search?limit=" + advancedSearchRequestBean.getLimit() + "&page=" + advancedSearchRequestBean.getPage());
            Response response = target.request().post(Entity.entity(searchCriteria, MediaType.APPLICATION_JSON_TYPE));
            result = response.readEntity(AdvancedSearchResponse.class);
        }

        LOGGER.debug("Response: {}",result);
        return Response.ok().entity(result).build();
    }

    private SearchCriteria setSearchCriteria(AdvancedSearchRequest advancedSearchRequest) {
        SearchCriteria searchCriteria = new SearchCriteria();
        searchCriteria.setFinder(advancedSearchRequest.getFinder());
        searchCriteria.setProgservId(advancedSearchRequest.getProgservId());
        searchCriteria.setName(advancedSearchRequest.getName());
        searchCriteria.setCallSign(advancedSearchRequest.getCallSign());
        searchCriteria.setContactName(advancedSearchRequest.getContactName());
        searchCriteria.setPhoneNumber(advancedSearchRequest.getPhoneNumber());
        searchCriteria.setRelationshipTypes(advancedSearchRequest.getRelationshipTypes());
        searchCriteria.setNoLongerEdited(advancedSearchRequest.isNoLongerEdited());
        searchCriteria.setPrimaryCountry(advancedSearchRequest.isPrimaryCountry());
        searchCriteria.setCountries(advancedSearchRequest.getCountries());
        searchCriteria.setCity(advancedSearchRequest.getCity());
        searchCriteria.setDma(advancedSearchRequest.getDma());
        searchCriteria.setAffiliation(advancedSearchRequest.getAffiliation());
        searchCriteria.setCallSignHistory(advancedSearchRequest.getCallSignHistory());
        searchCriteria.setNumberHistory(advancedSearchRequest.getNumberHistory());
        searchCriteria.setAffiliationHistory(advancedSearchRequest.getAffiliationHistory());
        searchCriteria.setEditorUsername(advancedSearchRequest.getEditorUsername());
        searchCriteria.setSortColumn(advancedSearchRequest.getSortColumn());
        searchCriteria.setReverseOrder(advancedSearchRequest.isReverseOrder());
        return searchCriteria;
    }

    private boolean isNull(AdvancedSearchRequest advancedSearchRequest) {
            if(!StringUtils.isBlank(advancedSearchRequest.getFinder()) ||  advancedSearchRequest.getProgservId() != 0 ||
                !StringUtils.isBlank(advancedSearchRequest.getName()) || !StringUtils.isBlank(advancedSearchRequest.getCallSign()) ||
                !StringUtils.isBlank(advancedSearchRequest.getContactName()) || !StringUtils.isBlank(advancedSearchRequest.getPhoneNumber()) ||
                (advancedSearchRequest.getRelationshipTypes() != null && advancedSearchRequest.getRelationshipTypes().length > 0) ||
                (advancedSearchRequest.getCountries() != null && advancedSearchRequest.getCountries().length > 0) ||
                !StringUtils.isBlank(advancedSearchRequest.getCity()) || !StringUtils.isBlank(advancedSearchRequest.getDma()) ||
                !StringUtils.isBlank(advancedSearchRequest.getAffiliation()) || !StringUtils.isBlank(advancedSearchRequest.getCallSignHistory()) ||
                !StringUtils.isBlank(advancedSearchRequest.getNumberHistory()) || !StringUtils.isBlank(advancedSearchRequest.getAffiliationHistory()) ||
                !StringUtils.isBlank(advancedSearchRequest.getEditorUsername())) {
            return false;
        }
        return true;
    }

    @GET
    @Path("/edit-prog-service/{progservId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response editProgrammingService(@PathParam("progservId") String progservId) {
        Response response = backendApi.makeGetRequest("v2/sources/progserv/"+progservId);
        JsonNode editApiResponse = response.readEntity(new GenericType<JsonNode>(){});
        return Response.ok().entity(editApiResponse).build();
    }


}
