"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Models = require("./models");
exports.ApplicationInsightsDataModels = Models;
const Mappers = require("./models/mappers");
exports.ApplicationInsightsDataMappers = Mappers;
const operations = require("./operations");
const applicationInsightsDataClientContext_1 = require("./applicationInsightsDataClientContext");
class ApplicationInsightsDataClient extends applicationInsightsDataClientContext_1.ApplicationInsightsDataClientContext {
    /**
     * @class
     * Initializes a new instance of the ApplicationInsightsDataClient class.
     * @constructor
     *
     * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
     * {@link https://github.github.io/fetch/#Request Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.acceptLanguage] - The preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials, baseUri, options) {
        super(credentials, baseUri, options);
        this.metrics = new operations.Metrics(this);
        this.events = new operations.Events(this);
        this.query = new operations.Query(this);
    }
}
exports.ApplicationInsightsDataClient = ApplicationInsightsDataClient;
//# sourceMappingURL=applicationInsightsDataClient.js.map