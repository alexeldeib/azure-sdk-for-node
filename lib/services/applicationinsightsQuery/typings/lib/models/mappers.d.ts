import * as msRest from "ms-rest-js";
export declare const CloudError: msRest.CompositeMapper;
export declare const BaseResource: msRest.CompositeMapper;
export declare const MetricsPostBodySchemaParameters: msRest.CompositeMapper;
export declare const MetricsPostBodySchema: msRest.CompositeMapper;
export declare const MetricsSegmentInfo: msRest.CompositeMapper;
export declare const MetricsResultInfo: msRest.CompositeMapper;
export declare const MetricsResult: msRest.CompositeMapper;
export declare const MetricsResultsItem: msRest.CompositeMapper;
export declare const ErrorDetail: msRest.CompositeMapper;
export declare const ErrorInfo: msRest.CompositeMapper;
export declare const EventsResultDataCustomDimensions: msRest.CompositeMapper;
export declare const EventsResultDataCustomMeasurements: msRest.CompositeMapper;
export declare const EventsOperationInfo: msRest.CompositeMapper;
export declare const EventsSessionInfo: msRest.CompositeMapper;
export declare const EventsUserInfo: msRest.CompositeMapper;
export declare const EventsCloudInfo: msRest.CompositeMapper;
export declare const EventsAiInfo: msRest.CompositeMapper;
export declare const EventsApplicationInfo: msRest.CompositeMapper;
export declare const EventsClientInfo: msRest.CompositeMapper;
export declare const EventsResultData: msRest.CompositeMapper;
export declare const EventsResults: msRest.CompositeMapper;
export declare const EventsResult: msRest.CompositeMapper;
export declare const EventsTraceInfo: msRest.CompositeMapper;
export declare const EventsTraceResult: msRest.CompositeMapper;
export declare const EventsCustomEventInfo: msRest.CompositeMapper;
export declare const EventsCustomEventResult: msRest.CompositeMapper;
export declare const EventsPageViewInfo: msRest.CompositeMapper;
export declare const EventsPageViewResult: msRest.CompositeMapper;
export declare const EventsBrowserTimingInfo: msRest.CompositeMapper;
export declare const EventsClientPerformanceInfo: msRest.CompositeMapper;
export declare const EventsBrowserTimingResult: msRest.CompositeMapper;
export declare const EventsRequestInfo: msRest.CompositeMapper;
export declare const EventsRequestResult: msRest.CompositeMapper;
export declare const EventsDependencyInfo: msRest.CompositeMapper;
export declare const EventsDependencyResult: msRest.CompositeMapper;
export declare const EventsExceptionDetailsParsedStack: msRest.CompositeMapper;
export declare const EventsExceptionDetail: msRest.CompositeMapper;
export declare const EventsExceptionInfo: msRest.CompositeMapper;
export declare const EventsExceptionResult: msRest.CompositeMapper;
export declare const EventsAvailabilityResultInfo: msRest.CompositeMapper;
export declare const EventsAvailabilityResultResult: msRest.CompositeMapper;
export declare const EventsPerformanceCounterInfo: msRest.CompositeMapper;
export declare const EventsPerformanceCounterResult: msRest.CompositeMapper;
export declare const EventsCustomMetricInfo: msRest.CompositeMapper;
export declare const EventsCustomMetricResult: msRest.CompositeMapper;
export declare const QueryBody: msRest.CompositeMapper;
export declare const Column: msRest.CompositeMapper;
export declare const Table: msRest.CompositeMapper;
export declare const QueryResults: msRest.CompositeMapper;
export declare const ErrorResponse: msRest.CompositeMapper;
export declare const MetricsGetOptionalParams: msRest.CompositeMapper;
export declare const EventsGetByTypeOptionalParams: msRest.CompositeMapper;
export declare const EventsGetOptionalParams: msRest.CompositeMapper;
export declare const discriminators: {
    'eventsResultData': msRest.CompositeMapper;
    'EventsResultData.trace': msRest.CompositeMapper;
    'EventsResultData.customEvent': msRest.CompositeMapper;
    'EventsResultData.pageView': msRest.CompositeMapper;
    'EventsResultData.browserTiming': msRest.CompositeMapper;
    'EventsResultData.request': msRest.CompositeMapper;
    'EventsResultData.dependency': msRest.CompositeMapper;
    'EventsResultData.exception': msRest.CompositeMapper;
    'EventsResultData.availabilityResult': msRest.CompositeMapper;
    'EventsResultData.performanceCounter': msRest.CompositeMapper;
    'EventsResultData.customMetric': msRest.CompositeMapper;
};