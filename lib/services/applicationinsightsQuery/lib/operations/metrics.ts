/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/metricsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsDataClientContext } from "../applicationInsightsDataClientContext";

/** Class representing a Metrics. */
export class Metrics {
  private readonly client: ApplicationInsightsDataClientContext;

  /**
   * Create a Metrics.
   * @param {ApplicationInsightsDataClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsDataClientContext) {
    this.client = client;
  }

  /**
   * @summary Retrieve metric data
   *
   * Gets metric values for a single metric
   *
   * @param {string} appId ID of the application. This is Application ID from the API Access settings
   * blade in the Azure portal.
   *
   * @param {MetricId} metricId ID of the metric. This is either a standard AI metric, or an
   * application-specific custom metric. Possible values include: 'requests/count',
   * 'requests/duration', 'requests/failed', 'users/count', 'users/authenticated', 'pageViews/count',
   * 'pageViews/duration', 'client/processingDuration', 'client/receiveDuration',
   * 'client/networkDuration', 'client/sendDuration', 'client/totalDuration', 'dependencies/count',
   * 'dependencies/failed', 'dependencies/duration', 'exceptions/count', 'exceptions/browser',
   * 'exceptions/server', 'sessions/count', 'performanceCounters/requestExecutionTime',
   * 'performanceCounters/requestsPerSecond', 'performanceCounters/requestsInQueue',
   * 'performanceCounters/memoryAvailableBytes', 'performanceCounters/exceptionsPerSecond',
   * 'performanceCounters/processCpuPercentage', 'performanceCounters/processIOBytesPerSecond',
   * 'performanceCounters/processPrivateBytes', 'performanceCounters/processorCpuPercentage',
   * 'availabilityResults/availabilityPercentage', 'availabilityResults/duration',
   * 'billing/telemetryCount', 'customEvents/count'
   *
   * @param {MetricsGetOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getWithHttpOperationResponse(appId: string, metricId: Models.MetricId, options?: Models.MetricsGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.MetricsResult>> {
    return this.client.sendOperationRequest(
      {
        appId,
        metricId,
        options
      },
      getOperationSpec);
  }

  /**
   * @summary Retrieve metric data
   *
   * Gets metric values for multiple metrics
   *
   * @param {string} appId ID of the application. This is Application ID from the API Access settings
   * blade in the Azure portal.
   *
   * @param {MetricsPostBodySchema[]} body The batched metrics query.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMultipleWithHttpOperationResponse(appId: string, body: Models.MetricsPostBodySchema[], options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.MetricsResultsItem[]>> {
    return this.client.sendOperationRequest(
      {
        appId,
        body,
        options
      },
      getMultipleOperationSpec);
  }

  /**
   * @summary Retrieve metric metatadata
   *
   * Gets metadata describing the available metrics
   *
   * @param {string} appId ID of the application. This is Application ID from the API Access settings
   * blade in the Azure portal.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMetadataWithHttpOperationResponse(appId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<any>> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      getMetadataOperationSpec);
  }

  /**
   * @summary Retrieve metric data
   *
   * Gets metric values for a single metric
   *
   * @param {string} appId ID of the application. This is Application ID from the API Access settings
   * blade in the Azure portal.
   *
   * @param {MetricId} metricId ID of the metric. This is either a standard AI metric, or an
   * application-specific custom metric. Possible values include: 'requests/count',
   * 'requests/duration', 'requests/failed', 'users/count', 'users/authenticated', 'pageViews/count',
   * 'pageViews/duration', 'client/processingDuration', 'client/receiveDuration',
   * 'client/networkDuration', 'client/sendDuration', 'client/totalDuration', 'dependencies/count',
   * 'dependencies/failed', 'dependencies/duration', 'exceptions/count', 'exceptions/browser',
   * 'exceptions/server', 'sessions/count', 'performanceCounters/requestExecutionTime',
   * 'performanceCounters/requestsPerSecond', 'performanceCounters/requestsInQueue',
   * 'performanceCounters/memoryAvailableBytes', 'performanceCounters/exceptionsPerSecond',
   * 'performanceCounters/processCpuPercentage', 'performanceCounters/processIOBytesPerSecond',
   * 'performanceCounters/processPrivateBytes', 'performanceCounters/processorCpuPercentage',
   * 'availabilityResults/availabilityPercentage', 'availabilityResults/duration',
   * 'billing/telemetryCount', 'customEvents/count'
   *
   * @param {MetricsGetOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.MetricsResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.MetricsResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(appId: string, metricId: Models.MetricId): Promise<Models.MetricsResult>;
  get(appId: string, metricId: Models.MetricId, options: Models.MetricsGetOptionalParams): Promise<Models.MetricsResult>;
  get(appId: string, metricId: Models.MetricId, callback: msRest.ServiceCallback<Models.MetricsResult>): void;
  get(appId: string, metricId: Models.MetricId, options: Models.MetricsGetOptionalParams, callback: msRest.ServiceCallback<Models.MetricsResult>): void;
  get(appId: string, metricId: Models.MetricId, options?: Models.MetricsGetOptionalParams, callback?: msRest.ServiceCallback<Models.MetricsResult>): any {
    return msRest.responseToBody(this.getWithHttpOperationResponse.bind(this), appId, metricId, options, callback);
  }

  /**
   * @summary Retrieve metric data
   *
   * Gets metric values for multiple metrics
   *
   * @param {string} appId ID of the application. This is Application ID from the API Access settings
   * blade in the Azure portal.
   *
   * @param {MetricsPostBodySchema[]} body The batched metrics query.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.MetricsResultsItem[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMultiple(appId: string, body: Models.MetricsPostBodySchema[]): Promise<Models.MetricsResultsItem[]>;
  getMultiple(appId: string, body: Models.MetricsPostBodySchema[], options: msRest.RequestOptionsBase): Promise<Models.MetricsResultsItem[]>;
  getMultiple(appId: string, body: Models.MetricsPostBodySchema[], callback: msRest.ServiceCallback<Models.MetricsResultsItem[]>): void;
  getMultiple(appId: string, body: Models.MetricsPostBodySchema[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricsResultsItem[]>): void;
  getMultiple(appId: string, body: Models.MetricsPostBodySchema[], options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MetricsResultsItem[]>): any {
    return msRest.responseToBody(this.getMultipleWithHttpOperationResponse.bind(this), appId, body, options, callback);
  }

  /**
   * @summary Retrieve metric metatadata
   *
   * Gets metadata describing the available metrics
   *
   * @param {string} appId ID of the application. This is Application ID from the API Access settings
   * blade in the Azure portal.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {any} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMetadata(appId: string): Promise<any>;
  getMetadata(appId: string, options: msRest.RequestOptionsBase): Promise<any>;
  getMetadata(appId: string, callback: msRest.ServiceCallback<any>): void;
  getMetadata(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  getMetadata(appId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<any>): any {
    return msRest.responseToBody(this.getMetadataWithHttpOperationResponse.bind(this), appId, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v1/apps/{appId}/metrics/{metricId}",
  urlParameters: [
    Parameters.appId,
    Parameters.metricId
  ],
  queryParameters: [
    Parameters.timespan,
    Parameters.interval,
    Parameters.aggregation,
    Parameters.segment,
    Parameters.top0,
    Parameters.orderby0,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getMultipleOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/apps/{appId}/metrics",
  urlParameters: [
    Parameters.appId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      required: true,
      serializedName: "body",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "MetricsPostBodySchema"
          }
        }
      }
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricsResultsItem"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getMetadataOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v1/apps/{appId}/metrics/metadata",
  urlParameters: [
    Parameters.appId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
