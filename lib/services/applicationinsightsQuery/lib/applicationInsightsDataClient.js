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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Models = require("./models");
exports.ApplicationInsightsDataModels = Models;
var Mappers = require("./models/mappers");
exports.ApplicationInsightsDataMappers = Mappers;
var operations = require("./operations");
var applicationInsightsDataClientContext_1 = require("./applicationInsightsDataClientContext");
var ApplicationInsightsDataClient = /** @class */ (function (_super) {
    __extends(ApplicationInsightsDataClient, _super);
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
    function ApplicationInsightsDataClient(credentials, baseUri, options) {
        var _this = _super.call(this, credentials, baseUri, options) || this;
        _this.metrics = new operations.Metrics(_this);
        _this.events = new operations.Events(_this);
        _this.query = new operations.Query(_this);
        return _this;
    }
    return ApplicationInsightsDataClient;
}(applicationInsightsDataClientContext_1.ApplicationInsightsDataClientContext));
exports.ApplicationInsightsDataClient = ApplicationInsightsDataClient;