/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Organization } from '../model/organization';
import { Project } from '../model/project';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class OrganizationControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * findProjectsForOrganization
     * 
     * @param organizationId organizationId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findProjectsForOrganizationUsingGET(organizationId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Project>>;
    public findProjectsForOrganizationUsingGET(organizationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Project>>>;
    public findProjectsForOrganizationUsingGET(organizationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Project>>>;
    public findProjectsForOrganizationUsingGET(organizationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling findProjectsForOrganizationUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<Project>>(`${this.basePath}/organizations/${encodeURIComponent(String(organizationId))}/projects`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllOrganizations
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllOrganizationsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Organization>>;
    public getAllOrganizationsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Organization>>>;
    public getAllOrganizationsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Organization>>>;
    public getAllOrganizationsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<Organization>>(`${this.basePath}/organizations`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getOrganizationBy
     * 
     * @param organizationId organizationId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOrganizationByUsingGET(organizationId: string, observe?: 'body', reportProgress?: boolean): Observable<Organization>;
    public getOrganizationByUsingGET(organizationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Organization>>;
    public getOrganizationByUsingGET(organizationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Organization>>;
    public getOrganizationByUsingGET(organizationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling getOrganizationByUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Organization>(`${this.basePath}/organizations/${encodeURIComponent(String(organizationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * save
     * 
     * @param organization organization
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST(organization: Organization, observe?: 'body', reportProgress?: boolean): Observable<Organization>;
    public saveUsingPOST(organization: Organization, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Organization>>;
    public saveUsingPOST(organization: Organization, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Organization>>;
    public saveUsingPOST(organization: Organization, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling saveUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<Organization>(`${this.basePath}/organizations`,
            organization,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
