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

import { CheckIn } from '../model/checkIn';
import { Project } from '../model/project';
import { UserProject } from '../model/userProject';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProjectControllerService {

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
     * addUser
     * 
     * @param projectId projectId
     * @param userGuid userGuid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addUserUsingPOST(projectId: string, userGuid: string, observe?: 'body', reportProgress?: boolean): Observable<UserProject>;
    public addUserUsingPOST(projectId: string, userGuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserProject>>;
    public addUserUsingPOST(projectId: string, userGuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserProject>>;
    public addUserUsingPOST(projectId: string, userGuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling addUserUsingPOST.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling addUserUsingPOST.');
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

        return this.httpClient.post<UserProject>(`${this.basePath}/projects/${encodeURIComponent(String(projectId))}/user`,
            userGuid,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * checkOutUser
     * 
     * @param projectGuid projectGuid
     * @param userGuid userGuid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public checkOutUserUsingPUT(projectGuid: string, userGuid: string, observe?: 'body', reportProgress?: boolean): Observable<CheckIn>;
    public checkOutUserUsingPUT(projectGuid: string, userGuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CheckIn>>;
    public checkOutUserUsingPUT(projectGuid: string, userGuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CheckIn>>;
    public checkOutUserUsingPUT(projectGuid: string, userGuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectGuid === null || projectGuid === undefined) {
            throw new Error('Required parameter projectGuid was null or undefined when calling checkOutUserUsingPUT.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling checkOutUserUsingPUT.');
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

        return this.httpClient.put<CheckIn>(`${this.basePath}/projects/${encodeURIComponent(String(projectGuid))}/check-ins`,
            userGuid,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * checkUserIn
     * 
     * @param projectId projectId
     * @param userGuid userGuid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public checkUserInUsingPOST(projectId: string, userGuid: string, observe?: 'body', reportProgress?: boolean): Observable<CheckIn>;
    public checkUserInUsingPOST(projectId: string, userGuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CheckIn>>;
    public checkUserInUsingPOST(projectId: string, userGuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CheckIn>>;
    public checkUserInUsingPOST(projectId: string, userGuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling checkUserInUsingPOST.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling checkUserInUsingPOST.');
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

        return this.httpClient.post<CheckIn>(`${this.basePath}/projects/${encodeURIComponent(String(projectId))}/check-ins`,
            userGuid,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findAllCheckins
     * 
     * @param projectId projectId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllCheckinsUsingGET(projectId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CheckIn>>;
    public findAllCheckinsUsingGET(projectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CheckIn>>>;
    public findAllCheckinsUsingGET(projectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CheckIn>>>;
    public findAllCheckinsUsingGET(projectId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling findAllCheckinsUsingGET.');
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

        return this.httpClient.get<Array<CheckIn>>(`${this.basePath}/projects/${encodeURIComponent(String(projectId))}/check-ins`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllProjects
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllProjectsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Project>>;
    public getAllProjectsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Project>>>;
    public getAllProjectsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Project>>>;
    public getAllProjectsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Project>>(`${this.basePath}/projects`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProjectById
     * 
     * @param projectId projectId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProjectByIdUsingGET(projectId: string, observe?: 'body', reportProgress?: boolean): Observable<Project>;
    public getProjectByIdUsingGET(projectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Project>>;
    public getProjectByIdUsingGET(projectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Project>>;
    public getProjectByIdUsingGET(projectId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling getProjectByIdUsingGET.');
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

        return this.httpClient.get<Project>(`${this.basePath}/projects/${encodeURIComponent(String(projectId))}`,
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
     * @param project project
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST1(project: Project, observe?: 'body', reportProgress?: boolean): Observable<Project>;
    public saveUsingPOST1(project: Project, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Project>>;
    public saveUsingPOST1(project: Project, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Project>>;
    public saveUsingPOST1(project: Project, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling saveUsingPOST1.');
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

        return this.httpClient.post<Project>(`${this.basePath}/projects`,
            project,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}