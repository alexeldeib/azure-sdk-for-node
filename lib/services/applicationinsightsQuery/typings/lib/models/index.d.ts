import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing MetricsPostBodySchemaParameters.
 * The parameters for a single metrics query
 *
 */
export interface MetricsPostBodySchemaParameters {
    /**
     * @member {MetricId} metricId Possible values include: 'requests/count',
     * 'requests/duration', 'requests/failed', 'users/count',
     * 'users/authenticated', 'pageViews/count', 'pageViews/duration',
     * 'client/processingDuration', 'client/receiveDuration',
     * 'client/networkDuration', 'client/sendDuration', 'client/totalDuration',
     * 'dependencies/count', 'dependencies/failed', 'dependencies/duration',
     * 'exceptions/count', 'exceptions/browser', 'exceptions/server',
     * 'sessions/count', 'performanceCounters/requestExecutionTime',
     * 'performanceCounters/requestsPerSecond',
     * 'performanceCounters/requestsInQueue',
     * 'performanceCounters/memoryAvailableBytes',
     * 'performanceCounters/exceptionsPerSecond',
     * 'performanceCounters/processCpuPercentage',
     * 'performanceCounters/processIOBytesPerSecond',
     * 'performanceCounters/processPrivateBytes',
     * 'performanceCounters/processorCpuPercentage',
     * 'availabilityResults/availabilityPercentage',
     * 'availabilityResults/duration', 'billing/telemetryCount',
     * 'customEvents/count'
     */
    metricId: MetricId;
    /**
     * @member {string} [timespan]
     */
    timespan?: string;
    /**
     * @member {MetricsAggregation[]} [aggregation]
     */
    aggregation?: MetricsAggregation[];
    /**
     * @member {string} [interval]
     */
    interval?: string;
    /**
     * @member {MetricsSegment[]} [segment]
     */
    segment?: MetricsSegment[];
    /**
     * @member {number} [top]
     */
    top?: number;
    /**
     * @member {string} [orderby]
     */
    orderby?: string;
    /**
     * @member {string} [filter]
     */
    filter?: string;
}
/**
 * @interface
 * An interface representing MetricsPostBodySchema.
 * A metric request
 *
 */
export interface MetricsPostBodySchema {
    /**
     * @member {string} id An identifier for this query.  Must be unique within
     * the post body of the request.  This identifier will be the 'id' property
     * of the response object representing this query.
     */
    id: string;
    /**
     * @member {MetricsPostBodySchemaParameters} parameters The parameters for a
     * single metrics query
     */
    parameters: MetricsPostBodySchemaParameters;
}
/**
 * @interface
 * An interface representing MetricsSegmentInfo.
 * A metric segment
 *
 */
export interface MetricsSegmentInfo {
    /**
     * @member {{ [propertyName: string]: any }} [additionalProperties] Unmatched
     * properties from the message are deserialized this collection
     */
    additionalProperties?: {
        [propertyName: string]: any;
    };
    /**
     * @member {Date} [start] Start time of the metric segment (only when an
     * interval was specified).
     */
    start?: Date;
    /**
     * @member {Date} [end] Start time of the metric segment (only when an
     * interval was specified).
     */
    end?: Date;
    /**
     * @member {MetricsSegmentInfo[]} [segments] Segmented metric data (if
     * further segmented).
     */
    segments?: MetricsSegmentInfo[];
}
/**
 * @interface
 * An interface representing MetricsResultInfo.
 * A metric result data.
 *
 */
export interface MetricsResultInfo {
    /**
     * @member {{ [propertyName: string]: any }} [additionalProperties] Unmatched
     * properties from the message are deserialized this collection
     */
    additionalProperties?: {
        [propertyName: string]: any;
    };
    /**
     * @member {Date} [start] Start time of the metric.
     */
    start?: Date;
    /**
     * @member {Date} [end] Start time of the metric.
     */
    end?: Date;
    /**
     * @member {string} [interval] The interval used to segment the metric data.
     */
    interval?: string;
    /**
     * @member {MetricsSegmentInfo[]} [segments] Segmented metric data (if
     * segmented).
     */
    segments?: MetricsSegmentInfo[];
}
/**
 * @interface
 * An interface representing MetricsResult.
 * A metric result.
 *
 */
export interface MetricsResult {
    /**
     * @member {MetricsResultInfo} [value]
     */
    value?: MetricsResultInfo;
}
/**
 * @interface
 * An interface representing MetricsResultsItem.
 */
export interface MetricsResultsItem {
    /**
     * @member {string} id The specified ID for this metric.
     */
    id: string;
    /**
     * @member {number} status The HTTP status code of this metric query.
     */
    status: number;
    /**
     * @member {MetricsResult} body The results of this metric query.
     */
    body: MetricsResult;
}
/**
 * @interface
 * An interface representing ErrorDetail.
 * @summary Error details.
 *
 */
export interface ErrorDetail {
    /**
     * @member {string} code The error's code.
     */
    code: string;
    /**
     * @member {string} message A human readable error message.
     */
    message: string;
    /**
     * @member {string} [target] Indicates which property in the request is
     * responsible for the error.
     */
    target?: string;
    /**
     * @member {string} [value] Indicates which value in 'target' is responsible
     * for the error.
     */
    value?: string;
    /**
     * @member {string[]} [resources] Indicates resources which were responsible
     * for the error.
     */
    resources?: string[];
    /**
     * @member {any} [additionalProperties]
     */
    additionalProperties?: any;
}
/**
 * @interface
 * An interface representing ErrorInfo.
 * @summary The code and message for an error.
 *
 */
export interface ErrorInfo {
    /**
     * @member {string} code A machine readable error code.
     */
    code: string;
    /**
     * @member {string} message A human readable error message.
     */
    message: string;
    /**
     * @member {ErrorDetail[]} [details] error details.
     */
    details?: ErrorDetail[];
    /**
     * @member {ErrorInfo} [innererror] Inner error details if they exist.
     */
    innererror?: ErrorInfo;
    /**
     * @member {any} [additionalProperties]
     */
    additionalProperties?: any;
}
/**
 * @interface
 * An interface representing EventsResultDataCustomDimensions.
 * Custom dimensions of the event
 *
 */
export interface EventsResultDataCustomDimensions {
    /**
     * @member {any} [additionalProperties]
     */
    additionalProperties?: any;
}
/**
 * @interface
 * An interface representing EventsResultDataCustomMeasurements.
 * Custom measurements of the event
 *
 */
export interface EventsResultDataCustomMeasurements {
    /**
     * @member {any} [additionalProperties]
     */
    additionalProperties?: any;
}
/**
 * @interface
 * An interface representing EventsOperationInfo.
 * Operation info for an event result
 *
 */
export interface EventsOperationInfo {
    /**
     * @member {string} [name] Name of the operation
     */
    name?: string;
    /**
     * @member {string} [id] ID of the operation
     */
    id?: string;
    /**
     * @member {string} [parentId] Parent ID of the operation
     */
    parentId?: string;
    /**
     * @member {string} [syntheticSource] Synthetic source of the operation
     */
    syntheticSource?: string;
}
/**
 * @interface
 * An interface representing EventsSessionInfo.
 * Session info for an event result
 *
 */
export interface EventsSessionInfo {
    /**
     * @member {string} [id] ID of the session
     */
    id?: string;
}
/**
 * @interface
 * An interface representing EventsUserInfo.
 * User info for an event result
 *
 */
export interface EventsUserInfo {
    /**
     * @member {string} [id] ID of the user
     */
    id?: string;
    /**
     * @member {string} [accountId] Account ID of the user
     */
    accountId?: string;
    /**
     * @member {string} [authenticatedId] Authenticated ID of the user
     */
    authenticatedId?: string;
}
/**
 * @interface
 * An interface representing EventsCloudInfo.
 * Cloud info for an event result
 *
 */
export interface EventsCloudInfo {
    /**
     * @member {string} [roleName] Role name of the cloud
     */
    roleName?: string;
    /**
     * @member {string} [roleInstance] Role instance of the cloud
     */
    roleInstance?: string;
}
/**
 * @interface
 * An interface representing EventsAiInfo.
 * AI related application info for an event result
 *
 */
export interface EventsAiInfo {
    /**
     * @member {string} [iKey] iKey of the app
     */
    iKey?: string;
    /**
     * @member {string} [appName] Name of the application
     */
    appName?: string;
    /**
     * @member {string} [appId] ID of the application
     */
    appId?: string;
    /**
     * @member {string} [sdkVersion] SDK version of the application
     */
    sdkVersion?: string;
}
/**
 * @interface
 * An interface representing EventsApplicationInfo.
 * Application info for an event result
 *
 */
export interface EventsApplicationInfo {
    /**
     * @member {string} [version] Version of the application
     */
    version?: string;
}
/**
 * @interface
 * An interface representing EventsClientInfo.
 * Client info for an event result
 *
 */
export interface EventsClientInfo {
    /**
     * @member {string} [model] Model of the client
     */
    model?: string;
    /**
     * @member {string} [os] Operating system of the client
     */
    os?: string;
    /**
     * @member {string} [type] Type of the client
     */
    type?: string;
    /**
     * @member {string} [browser] Browser of the client
     */
    browser?: string;
    /**
     * @member {string} [ip] IP address of the client
     */
    ip?: string;
    /**
     * @member {string} [city] City of the client
     */
    city?: string;
    /**
     * @member {string} [stateOrProvince] State or province of the client
     */
    stateOrProvince?: string;
    /**
     * @member {string} [countryOrRegion] Country or region of the client
     */
    countryOrRegion?: string;
}
/**
 * Contains the possible cases for EventsResultData.
 */
export declare type EventsResultDataUnion = EventsResultData | EventsTraceResult | EventsCustomEventResult | EventsPageViewResult | EventsBrowserTimingResult | EventsRequestResult | EventsDependencyResult | EventsExceptionResult | EventsAvailabilityResultResult | EventsPerformanceCounterResult | EventsCustomMetricResult;
/**
 * @interface
 * An interface representing EventsResultData.
 * Events query result data.
 *
 */
export interface EventsResultData {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "eventsResultData";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
}
/**
 * @interface
 * An interface representing EventsResults.
 * An events query result.
 *
 */
export interface EventsResults {
    /**
     * @member {string} [odatacontext] OData context metadata endpoint for this
     * response
     */
    odatacontext?: string;
    /**
     * @member {ErrorInfo[]} [aimessages] OData messages for this response.
     */
    aimessages?: ErrorInfo[];
    /**
     * @member {EventsResultDataUnion[]} [value] Contents of the events query
     * result.
     */
    value?: EventsResultDataUnion[];
}
/**
 * @interface
 * An interface representing EventsResult.
 * An event query result.
 *
 */
export interface EventsResult {
    /**
     * @member {ErrorInfo[]} [aimessages] OData messages for this response.
     */
    aimessages?: ErrorInfo[];
    /**
     * @member {EventsResultDataUnion} [value]
     */
    value?: EventsResultDataUnion;
}
/**
 * @interface
 * An interface representing EventsTraceInfo.
 * The trace information
 *
 */
export interface EventsTraceInfo {
    /**
     * @member {string} [message] The trace message
     */
    message?: string;
    /**
     * @member {number} [severityLevel] The trace severity level
     */
    severityLevel?: number;
}
/**
 * @interface
 * An interface representing EventsTraceResult.
 * A trace result
 *
 */
export interface EventsTraceResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "trace";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsTraceInfo} [trace]
     */
    trace?: EventsTraceInfo;
}
/**
 * @interface
 * An interface representing EventsCustomEventInfo.
 * The custom event information
 *
 */
export interface EventsCustomEventInfo {
    /**
     * @member {string} [name] The name of the custom event
     */
    name?: string;
}
/**
 * @interface
 * An interface representing EventsCustomEventResult.
 * A custom event result
 *
 */
export interface EventsCustomEventResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "customEvent";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsCustomEventInfo} [customEvent]
     */
    customEvent?: EventsCustomEventInfo;
}
/**
 * @interface
 * An interface representing EventsPageViewInfo.
 * The page view information
 *
 */
export interface EventsPageViewInfo {
    /**
     * @member {string} [name] The name of the page
     */
    name?: string;
    /**
     * @member {string} [url] The URL of the page
     */
    url?: string;
    /**
     * @member {string} [duration] The duration of the page view
     */
    duration?: string;
    /**
     * @member {string} [performanceBucket] The performance bucket of the page
     * view
     */
    performanceBucket?: string;
}
/**
 * @interface
 * An interface representing EventsPageViewResult.
 * A page view result
 *
 */
export interface EventsPageViewResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "pageView";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsPageViewInfo} [pageView]
     */
    pageView?: EventsPageViewInfo;
}
/**
 * @interface
 * An interface representing EventsBrowserTimingInfo.
 * The browser timing information
 *
 */
export interface EventsBrowserTimingInfo {
    /**
     * @member {string} [urlPath] The path of the URL
     */
    urlPath?: string;
    /**
     * @member {string} [urlHost] The host of the URL
     */
    urlHost?: string;
    /**
     * @member {string} [name] The name of the page
     */
    name?: string;
    /**
     * @member {string} [url] The url of the page
     */
    url?: string;
    /**
     * @member {number} [totalDuration] The total duration of the load
     */
    totalDuration?: number;
    /**
     * @member {string} [performanceBucket] The performance bucket of the load
     */
    performanceBucket?: string;
    /**
     * @member {number} [networkDuration] The network duration of the load
     */
    networkDuration?: number;
    /**
     * @member {number} [sendDuration] The send duration of the load
     */
    sendDuration?: number;
    /**
     * @member {number} [receiveDuration] The receive duration of the load
     */
    receiveDuration?: number;
    /**
     * @member {number} [processingDuration] The processing duration of the load
     */
    processingDuration?: number;
}
/**
 * @interface
 * An interface representing EventsClientPerformanceInfo.
 * Client performance information
 *
 */
export interface EventsClientPerformanceInfo {
    /**
     * @member {string} [name] The name of the client performance
     */
    name?: string;
}
/**
 * @interface
 * An interface representing EventsBrowserTimingResult.
 * A browser timing result
 *
 */
export interface EventsBrowserTimingResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "browserTiming";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsBrowserTimingInfo} [browserTiming]
     */
    browserTiming?: EventsBrowserTimingInfo;
    /**
     * @member {EventsClientPerformanceInfo} [clientPerformance]
     */
    clientPerformance?: EventsClientPerformanceInfo;
}
/**
 * @interface
 * An interface representing EventsRequestInfo.
 * The request info
 *
 */
export interface EventsRequestInfo {
    /**
     * @member {string} [name] The name of the request
     */
    name?: string;
    /**
     * @member {string} [url] The URL of the request
     */
    url?: string;
    /**
     * @member {string} [success] Indicates if the request was successful
     */
    success?: string;
    /**
     * @member {number} [duration] The duration of the request
     */
    duration?: number;
    /**
     * @member {string} [performanceBucket] The performance bucket of the request
     */
    performanceBucket?: string;
    /**
     * @member {string} [resultCode] The result code of the request
     */
    resultCode?: string;
    /**
     * @member {string} [source] The source of the request
     */
    source?: string;
    /**
     * @member {string} [id] The ID of the request
     */
    id?: string;
}
/**
 * @interface
 * An interface representing EventsRequestResult.
 * A request result
 *
 */
export interface EventsRequestResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "request";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsRequestInfo} [request]
     */
    request?: EventsRequestInfo;
}
/**
 * @interface
 * An interface representing EventsDependencyInfo.
 * The dependency info
 *
 */
export interface EventsDependencyInfo {
    /**
     * @member {string} [target] The target of the dependency
     */
    target?: string;
    /**
     * @member {string} [data] The data of the dependency
     */
    data?: string;
    /**
     * @member {string} [success] Indicates if the dependency was successful
     */
    success?: string;
    /**
     * @member {number} [duration] The duration of the dependency
     */
    duration?: number;
    /**
     * @member {string} [performanceBucket] The performance bucket of the
     * dependency
     */
    performanceBucket?: string;
    /**
     * @member {string} [resultCode] The result code of the dependency
     */
    resultCode?: string;
    /**
     * @member {string} [type] The type of the dependency
     */
    type?: string;
    /**
     * @member {string} [name] The name of the dependency
     */
    name?: string;
    /**
     * @member {string} [id] The ID of the dependency
     */
    id?: string;
}
/**
 * @interface
 * An interface representing EventsDependencyResult.
 * A dependency result
 *
 */
export interface EventsDependencyResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "dependency";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsDependencyInfo} [dependency]
     */
    dependency?: EventsDependencyInfo;
}
/**
 * @interface
 * An interface representing EventsExceptionDetailsParsedStack.
 * A parsed stack entry
 *
 */
export interface EventsExceptionDetailsParsedStack {
    /**
     * @member {string} [assembly] The assembly of the stack entry
     */
    assembly?: string;
    /**
     * @member {string} [method] The method of the stack entry
     */
    method?: string;
    /**
     * @member {number} [level] The level of the stack entry
     */
    level?: number;
    /**
     * @member {number} [line] The line of the stack entry
     */
    line?: number;
}
/**
 * @interface
 * An interface representing EventsExceptionDetail.
 * Exception details
 *
 */
export interface EventsExceptionDetail {
    /**
     * @member {string} [severityLevel] The severity level of the exception
     * detail
     */
    severityLevel?: string;
    /**
     * @member {string} [outerId] The outer ID of the exception detail
     */
    outerId?: string;
    /**
     * @member {string} [message] The message of the exception detail
     */
    message?: string;
    /**
     * @member {string} [type] The type of the exception detail
     */
    type?: string;
    /**
     * @member {string} [id] The ID of the exception detail
     */
    id?: string;
    /**
     * @member {EventsExceptionDetailsParsedStack[]} [parsedStack] The parsed
     * stack
     */
    parsedStack?: EventsExceptionDetailsParsedStack[];
}
/**
 * @interface
 * An interface representing EventsExceptionInfo.
 * The exception info
 *
 */
export interface EventsExceptionInfo {
    /**
     * @member {number} [severityLevel] The severity level of the exception
     */
    severityLevel?: number;
    /**
     * @member {string} [problemId] The problem ID of the exception
     */
    problemId?: string;
    /**
     * @member {string} [handledAt] Indicates where the exception was handled at
     */
    handledAt?: string;
    /**
     * @member {string} [assembly] The assembly which threw the exception
     */
    assembly?: string;
    /**
     * @member {string} [method] The method that threw the exception
     */
    method?: string;
    /**
     * @member {string} [message] The message of the exception
     */
    message?: string;
    /**
     * @member {string} [type] The type of the exception
     */
    type?: string;
    /**
     * @member {string} [outerType] The outer type of the exception
     */
    outerType?: string;
    /**
     * @member {string} [outerMethod] The outer method of the exception
     */
    outerMethod?: string;
    /**
     * @member {string} [outerAssembly] The outer assmebly of the exception
     */
    outerAssembly?: string;
    /**
     * @member {string} [outerMessage] The outer message of the exception
     */
    outerMessage?: string;
    /**
     * @member {string} [innermostType] The inner most type of the exception
     */
    innermostType?: string;
    /**
     * @member {string} [innermostMessage] The inner most message of the
     * exception
     */
    innermostMessage?: string;
    /**
     * @member {string} [innermostMethod] The inner most method of the exception
     */
    innermostMethod?: string;
    /**
     * @member {string} [innermostAssembly] The inner most assembly of the
     * exception
     */
    innermostAssembly?: string;
    /**
     * @member {EventsExceptionDetail[]} [details] The details of the exception
     */
    details?: EventsExceptionDetail[];
}
/**
 * @interface
 * An interface representing EventsExceptionResult.
 * An exception result
 *
 */
export interface EventsExceptionResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "exception";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsExceptionInfo} [exception]
     */
    exception?: EventsExceptionInfo;
}
/**
 * @interface
 * An interface representing EventsAvailabilityResultInfo.
 * The availability result info
 *
 */
export interface EventsAvailabilityResultInfo {
    /**
     * @member {string} [name] The name of the availability result
     */
    name?: string;
    /**
     * @member {string} [success] Indicates if the availability result was
     * successful
     */
    success?: string;
    /**
     * @member {number} [duration] The duration of the availability result
     */
    duration?: number;
    /**
     * @member {string} [performanceBucket] The performance bucket of the
     * availability result
     */
    performanceBucket?: string;
    /**
     * @member {string} [message] The message of the availability result
     */
    message?: string;
    /**
     * @member {string} [location] The location of the availability result
     */
    location?: string;
    /**
     * @member {string} [id] The ID of the availability result
     */
    id?: string;
    /**
     * @member {string} [size] The size of the availability result
     */
    size?: string;
}
/**
 * @interface
 * An interface representing EventsAvailabilityResultResult.
 * An availability result result
 *
 */
export interface EventsAvailabilityResultResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "availabilityResult";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsAvailabilityResultInfo} [availabilityResult]
     */
    availabilityResult?: EventsAvailabilityResultInfo;
}
/**
 * @interface
 * An interface representing EventsPerformanceCounterInfo.
 * The performance counter info
 *
 */
export interface EventsPerformanceCounterInfo {
    /**
     * @member {number} [value] The value of the performance counter
     */
    value?: number;
    /**
     * @member {string} [name] The name of the performance counter
     */
    name?: string;
    /**
     * @member {string} [category] The category of the performance counter
     */
    category?: string;
    /**
     * @member {string} [counter] The counter of the performance counter
     */
    counter?: string;
    /**
     * @member {string} [instanceName] The instance name of the performance
     * counter
     */
    instanceName?: string;
    /**
     * @member {string} [instance] The instance of the performance counter
     */
    instance?: string;
}
/**
 * @interface
 * An interface representing EventsPerformanceCounterResult.
 * A performance counter result
 *
 */
export interface EventsPerformanceCounterResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "performanceCounter";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsPerformanceCounterInfo} [performanceCounter]
     */
    performanceCounter?: EventsPerformanceCounterInfo;
}
/**
 * @interface
 * An interface representing EventsCustomMetricInfo.
 * The custom metric info
 *
 */
export interface EventsCustomMetricInfo {
    /**
     * @member {string} [name] The name of the custom metric
     */
    name?: string;
    /**
     * @member {number} [value] The value of the custom metric
     */
    value?: number;
    /**
     * @member {number} [valueSum] The sum of the custom metric
     */
    valueSum?: number;
    /**
     * @member {number} [valueCount] The count of the custom metric
     */
    valueCount?: number;
    /**
     * @member {number} [valueMin] The minimum value of the custom metric
     */
    valueMin?: number;
    /**
     * @member {number} [valueMax] The maximum value of the custom metric
     */
    valueMax?: number;
    /**
     * @member {number} [valueStdDev] The standard deviation of the custom metric
     */
    valueStdDev?: number;
}
/**
 * @interface
 * An interface representing EventsCustomMetricResult.
 * A custom metric result
 *
 */
export interface EventsCustomMetricResult {
    /**
     * @member {string} type Polymorphic Discriminator
     */
    type: "customMetric";
    /**
     * @member {string} [id] The unique ID for this event.
     */
    id?: string;
    /**
     * @member {number} [count] Count of the event
     */
    count?: number;
    /**
     * @member {Date} [timestamp] Timestamp of the event
     */
    timestamp?: Date;
    /**
     * @member {EventsResultDataCustomDimensions} [customDimensions] Custom
     * dimensions of the event
     */
    customDimensions?: EventsResultDataCustomDimensions;
    /**
     * @member {EventsResultDataCustomMeasurements} [customMeasurements] Custom
     * measurements of the event
     */
    customMeasurements?: EventsResultDataCustomMeasurements;
    /**
     * @member {EventsOperationInfo} [operation] Operation info of the event
     */
    operation?: EventsOperationInfo;
    /**
     * @member {EventsSessionInfo} [session] Session info of the event
     */
    session?: EventsSessionInfo;
    /**
     * @member {EventsUserInfo} [user] User info of the event
     */
    user?: EventsUserInfo;
    /**
     * @member {EventsCloudInfo} [cloud] Cloud info of the event
     */
    cloud?: EventsCloudInfo;
    /**
     * @member {EventsAiInfo} [ai] AI info of the event
     */
    ai?: EventsAiInfo;
    /**
     * @member {EventsApplicationInfo} [application] Application info of the
     * event
     */
    application?: EventsApplicationInfo;
    /**
     * @member {EventsClientInfo} [client] Client info of the event
     */
    client?: EventsClientInfo;
    /**
     * @member {EventsCustomMetricInfo} [customMetric]
     */
    customMetric?: EventsCustomMetricInfo;
}
/**
 * @interface
 * An interface representing QueryBody.
 * The Analytics query. Learn more about the [Analytics query
 * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
 *
 */
export interface QueryBody {
    /**
     * @member {string} query The query to execute.
     */
    query: string;
    /**
     * @member {string} [timespan] Optional. The timespan over which to query
     * data. This is an ISO8601 time period value.  This timespan is applied in
     * addition to any that are specified in the query expression.
     */
    timespan?: string;
    /**
     * @member {string[]} [applications] A list of Application IDs for
     * cross-application queries.
     */
    applications?: string[];
}
/**
 * @interface
 * An interface representing Column.
 * @summary A table column.
 *
 * A column in a table.
 *
 */
export interface Column {
    /**
     * @member {string} [name] The name of this column.
     */
    name?: string;
    /**
     * @member {string} [type] The data type of this column.
     */
    type?: string;
}
/**
 * @interface
 * An interface representing Table.
 * @summary A query response table.
 *
 * Contains the columns and rows for one table in a query response.
 *
 */
export interface Table {
    /**
     * @member {string} name The name of the table.
     */
    name: string;
    /**
     * @member {Column[]} columns The list of columns in this table.
     */
    columns: Column[];
    /**
     * @member {any[][]} rows The resulting rows from this query.
     */
    rows: any[][];
}
/**
 * @interface
 * An interface representing QueryResults.
 * @summary A query response.
 *
 * Contains the tables, columns & rows resulting from a query.
 *
 */
export interface QueryResults {
    /**
     * @member {Table[]} tables The list of tables, columns and rows.
     */
    tables: Table[];
}
/**
 * @interface
 * An interface representing ErrorResponse.
 * @summary Error details.
 *
 * Contains details when the response code indicates an error.
 *
 */
export interface ErrorResponse {
    /**
     * @member {ErrorInfo} error The error details.
     */
    error: ErrorInfo;
}
/**
 * @interface
 * An interface representing MetricsGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface MetricsGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [timespan] The timespan over which to retrieve metric
     * values. This is an ISO8601 time period value. If timespan is omitted, a
     * default time range of `PT12H` ("last 12 hours") is used. The actual
     * timespan that is queried may be adjusted by the server based. In all
     * cases, the actual time span used for the query is included in the
     * response.
     */
    timespan?: string;
    /**
     * @member {string} [interval] The time interval to use when retrieving
     * metric values. This is an ISO8601 duration. If interval is omitted, the
     * metric value is aggregated across the entire timespan. If interval is
     * supplied, the server may adjust the interval to a more appropriate size
     * based on the timespan used for the query. In all cases, the actual
     * interval used for the query is included in the response.
     */
    interval?: string;
    /**
     * @member {MetricsAggregation[]} [aggregation] The aggregation to use when
     * computing the metric values. To retrieve more than one aggregation at a
     * time, separate them with a comma. If no aggregation is specified, then the
     * default aggregation for the metric is used.
     */
    aggregation?: MetricsAggregation[];
    /**
     * @member {MetricsSegment[]} [segment] The name of the dimension to segment
     * the metric values by. This dimension must be applicable to the metric you
     * are retrieving. To segment by more than one dimension at a time, separate
     * them with a comma (,). In this case, the metric data will be segmented in
     * the order the dimensions are listed in the parameter.
     */
    segment?: MetricsSegment[];
    /**
     * @member {number} [top] The number of segments to return.  This value is
     * only valid when segment is specified.
     */
    top?: number;
    /**
     * @member {string} [orderby] The aggregation function and direction to sort
     * the segments by.  This value is only valid when segment is specified.
     */
    orderby?: string;
    /**
     * @member {string} [filter] An expression used to filter the results.  This
     * value should be a valid OData filter expression where the keys of each
     * clause should be applicable dimensions for the metric you are retrieving.
     */
    filter?: string;
}
/**
 * @interface
 * An interface representing EventsGetByTypeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface EventsGetByTypeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [timespan] Optional. The timespan over which to retrieve
     * events. This is an ISO8601 time period value.  This timespan is applied in
     * addition to any that are specified in the Odata expression.
     */
    timespan?: string;
    /**
     * @member {string} [filter] An expression used to filter the returned events
     */
    filter?: string;
    /**
     * @member {string} [search] A free-text search expression to match for
     * whether a particular event should be returned
     */
    search?: string;
    /**
     * @member {string} [orderby] A comma-separated list of properties with
     * \"asc\" (the default) or \"desc\" to control the order of returned events
     */
    orderby?: string;
    /**
     * @member {string} [select] Limits the properties to just those requested on
     * each returned event
     */
    select?: string;
    /**
     * @member {number} [skip] The number of items to skip over before returning
     * events
     */
    skip?: number;
    /**
     * @member {number} [top] The number of events to return
     */
    top?: number;
    /**
     * @member {string} [format] Format for the returned events
     */
    format?: string;
    /**
     * @member {boolean} [count] Request a count of matching items included with
     * the returned events
     */
    count?: boolean;
    /**
     * @member {string} [apply] An expression used for aggregation over returned
     * events
     */
    apply?: string;
}
/**
 * @interface
 * An interface representing EventsGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface EventsGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [timespan] Optional. The timespan over which to retrieve
     * events. This is an ISO8601 time period value.  This timespan is applied in
     * addition to any that are specified in the Odata expression.
     */
    timespan?: string;
}
/**
 * Defines values for MetricId.
 * Possible values include: 'requests/count', 'requests/duration',
 * 'requests/failed', 'users/count', 'users/authenticated', 'pageViews/count',
 * 'pageViews/duration', 'client/processingDuration', 'client/receiveDuration',
 * 'client/networkDuration', 'client/sendDuration', 'client/totalDuration',
 * 'dependencies/count', 'dependencies/failed', 'dependencies/duration',
 * 'exceptions/count', 'exceptions/browser', 'exceptions/server',
 * 'sessions/count', 'performanceCounters/requestExecutionTime',
 * 'performanceCounters/requestsPerSecond',
 * 'performanceCounters/requestsInQueue',
 * 'performanceCounters/memoryAvailableBytes',
 * 'performanceCounters/exceptionsPerSecond',
 * 'performanceCounters/processCpuPercentage',
 * 'performanceCounters/processIOBytesPerSecond',
 * 'performanceCounters/processPrivateBytes',
 * 'performanceCounters/processorCpuPercentage',
 * 'availabilityResults/availabilityPercentage',
 * 'availabilityResults/duration', 'billing/telemetryCount',
 * 'customEvents/count'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: MetricId = <MetricId>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum MetricId {
    Requestscount = "requests/count",
    Requestsduration = "requests/duration",
    Requestsfailed = "requests/failed",
    Userscount = "users/count",
    Usersauthenticated = "users/authenticated",
    PageViewscount = "pageViews/count",
    PageViewsduration = "pageViews/duration",
    ClientprocessingDuration = "client/processingDuration",
    ClientreceiveDuration = "client/receiveDuration",
    ClientnetworkDuration = "client/networkDuration",
    ClientsendDuration = "client/sendDuration",
    ClienttotalDuration = "client/totalDuration",
    Dependenciescount = "dependencies/count",
    Dependenciesfailed = "dependencies/failed",
    Dependenciesduration = "dependencies/duration",
    Exceptionscount = "exceptions/count",
    Exceptionsbrowser = "exceptions/browser",
    Exceptionsserver = "exceptions/server",
    Sessionscount = "sessions/count",
    PerformanceCountersrequestExecutionTime = "performanceCounters/requestExecutionTime",
    PerformanceCountersrequestsPerSecond = "performanceCounters/requestsPerSecond",
    PerformanceCountersrequestsInQueue = "performanceCounters/requestsInQueue",
    PerformanceCountersmemoryAvailableBytes = "performanceCounters/memoryAvailableBytes",
    PerformanceCountersexceptionsPerSecond = "performanceCounters/exceptionsPerSecond",
    PerformanceCountersprocessCpuPercentage = "performanceCounters/processCpuPercentage",
    PerformanceCountersprocessIOBytesPerSecond = "performanceCounters/processIOBytesPerSecond",
    PerformanceCountersprocessPrivateBytes = "performanceCounters/processPrivateBytes",
    PerformanceCountersprocessorCpuPercentage = "performanceCounters/processorCpuPercentage",
    AvailabilityResultsavailabilityPercentage = "availabilityResults/availabilityPercentage",
    AvailabilityResultsduration = "availabilityResults/duration",
    BillingtelemetryCount = "billing/telemetryCount",
    CustomEventscount = "customEvents/count"
}
/**
 * Defines values for MetricsAggregation.
 * Possible values include: 'min', 'max', 'avg', 'sum', 'count', 'unique'
 * @readonly
 * @enum {string}
 */
export declare enum MetricsAggregation {
    Min = "min",
    Max = "max",
    Avg = "avg",
    Sum = "sum",
    Count = "count",
    Unique = "unique"
}
/**
 * Defines values for MetricsSegment.
 * Possible values include: 'applicationBuild', 'applicationVersion',
 * 'authenticatedOrAnonymousTraffic', 'browser', 'browserVersion', 'city',
 * 'cloudRoleName', 'cloudServiceName', 'continent', 'countryOrRegion',
 * 'deploymentId', 'deploymentUnit', 'deviceType', 'environment',
 * 'hostingLocation', 'instanceName'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: MetricsSegment =
 * <MetricsSegment>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum MetricsSegment {
    ApplicationBuild = "applicationBuild",
    ApplicationVersion = "applicationVersion",
    AuthenticatedOrAnonymousTraffic = "authenticatedOrAnonymousTraffic",
    Browser = "browser",
    BrowserVersion = "browserVersion",
    City = "city",
    CloudRoleName = "cloudRoleName",
    CloudServiceName = "cloudServiceName",
    Continent = "continent",
    CountryOrRegion = "countryOrRegion",
    DeploymentId = "deploymentId",
    DeploymentUnit = "deploymentUnit",
    DeviceType = "deviceType",
    Environment = "environment",
    HostingLocation = "hostingLocation",
    InstanceName = "instanceName"
}
/**
 * Defines values for EventType.
 * Possible values include: '$all', 'traces', 'customEvents', 'pageViews',
 * 'browserTimings', 'requests', 'dependencies', 'exceptions',
 * 'availabilityResults', 'performanceCounters', 'customMetrics'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: EventType = <EventType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum EventType {
    All = "$all",
    Traces = "traces",
    CustomEvents = "customEvents",
    PageViews = "pageViews",
    BrowserTimings = "browserTimings",
    Requests = "requests",
    Dependencies = "dependencies",
    Exceptions = "exceptions",
    AvailabilityResults = "availabilityResults",
    PerformanceCounters = "performanceCounters",
    CustomMetrics = "customMetrics"
}
