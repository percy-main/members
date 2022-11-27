/* tslint:disable */
/* eslint-disable */
/**
 * Percy Main Match Fees API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateUserDTO
 */
export interface CreateUserDTO {
    /**
     * Name
     * @type {string}
     * @memberof CreateUserDTO
     */
    'name': string;
    /**
     * Date Of Birth
     * @type {string}
     * @memberof CreateUserDTO
     */
    'dob': string;
}
/**
 * 
 * @export
 * @interface Error400Dto
 */
export interface Error400Dto {
    /**
     * 
     * @type {number}
     * @memberof Error400Dto
     */
    'statusCode': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Error400Dto
     */
    'message': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Error400Dto
     */
    'error': string;
}
/**
 * 
 * @export
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * ID
     * @type {string}
     * @memberof UserDTO
     */
    'id': string;
    /**
     * Identity ID
     * @type {string}
     * @memberof UserDTO
     */
    'identityId': string;
    /**
     * Name
     * @type {string}
     * @memberof UserDTO
     */
    'name': string;
    /**
     * Date Of Birth
     * @type {string}
     * @memberof UserDTO
     */
    'dob': string;
    /**
     * Email address
     * @type {string}
     * @memberof UserDTO
     */
    'email': string;
    /**
     * Has email address been verified
     * @type {boolean}
     * @memberof UserDTO
     */
    'emailIsVerified': boolean;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateUserDTO} createUserDTO 
         * @param {string} [authorization] Bearer authorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerCreateUser: async (createUserDTO: CreateUserDTO, authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserDTO' is not null or undefined
            assertParamExists('userControllerCreateUser', 'createUserDTO', createUserDTO)
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [authorization] Bearer authorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerGetMe: async (authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateUserDTO} createUserDTO 
         * @param {string} [authorization] Bearer authorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerCreateUser(createUserDTO: CreateUserDTO, authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerCreateUser(createUserDTO, authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [authorization] Bearer authorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerGetMe(authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetMe(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateUserDTO} createUserDTO 
         * @param {string} [authorization] Bearer authorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerCreateUser(createUserDTO: CreateUserDTO, authorization?: string, options?: any): AxiosPromise<UserDTO> {
            return localVarFp.userControllerCreateUser(createUserDTO, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [authorization] Bearer authorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerGetMe(authorization?: string, options?: any): AxiosPromise<UserDTO> {
            return localVarFp.userControllerGetMe(authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     * 
     * @param {CreateUserDTO} createUserDTO 
     * @param {string} [authorization] Bearer authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    userControllerCreateUser(createUserDTO: CreateUserDTO, authorization?: string, options?: AxiosRequestConfig): AxiosPromise<UserDTO>;

    /**
     * 
     * @param {string} [authorization] Bearer authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    userControllerGetMe(authorization?: string, options?: AxiosRequestConfig): AxiosPromise<UserDTO>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * 
     * @param {CreateUserDTO} createUserDTO 
     * @param {string} [authorization] Bearer authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public userControllerCreateUser(createUserDTO: CreateUserDTO, authorization?: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).userControllerCreateUser(createUserDTO, authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [authorization] Bearer authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public userControllerGetMe(authorization?: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).userControllerGetMe(authorization, options).then((request) => request(this.axios, this.basePath));
    }
}

