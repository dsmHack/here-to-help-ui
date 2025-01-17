export * from './loginController.service';
import { LoginControllerService } from './loginController.service';
export * from './organizationController.service';
import { OrganizationControllerService } from './organizationController.service';
export * from './projectController.service';
import { ProjectControllerService } from './projectController.service';
export * from './reportController.service';
import { ReportControllerService } from './reportController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [LoginControllerService, OrganizationControllerService, ProjectControllerService, ReportControllerService, UserControllerService];
