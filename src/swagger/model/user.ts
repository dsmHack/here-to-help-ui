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
import { Project } from './project';


export interface User {
    email?: string;
    firstName?: string;
    lastName?: string;
    projectList?: Array<Project>;
    role?: string;
    userGuid?: string;
}
