/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The response model for the undoedit runbook operation.
 *
 */
class RunbookDraftUndoEditResult {
  /**
   * Create a RunbookDraftUndoEditResult.
   * @member {string} [statusCode] Possible values include: 'Continue',
   * 'SwitchingProtocols', 'OK', 'Created', 'Accepted',
   * 'NonAuthoritativeInformation', 'NoContent', 'ResetContent',
   * 'PartialContent', 'MultipleChoices', 'Ambiguous', 'MovedPermanently',
   * 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod', 'NotModified',
   * 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb',
   * 'BadRequest', 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound',
   * 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired',
   * 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired',
   * 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong',
   * 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable',
   * 'ExpectationFailed', 'UpgradeRequired', 'InternalServerError',
   * 'NotImplemented', 'BadGateway', 'ServiceUnavailable', 'GatewayTimeout',
   * 'HttpVersionNotSupported'
   * @member {string} [requestId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of RunbookDraftUndoEditResult
   *
   * @returns {object} metadata of RunbookDraftUndoEditResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RunbookDraftUndoEditResult',
      type: {
        name: 'Composite',
        className: 'RunbookDraftUndoEditResult',
        modelProperties: {
          statusCode: {
            required: false,
            serializedName: 'statusCode',
            type: {
              name: 'Enum',
              allowedValues: [ 'Continue', 'SwitchingProtocols', 'OK', 'Created', 'Accepted', 'NonAuthoritativeInformation', 'NoContent', 'ResetContent', 'PartialContent', 'MultipleChoices', 'Ambiguous', 'MovedPermanently', 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod', 'NotModified', 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb', 'BadRequest', 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound', 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired', 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired', 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong', 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable', 'ExpectationFailed', 'UpgradeRequired', 'InternalServerError', 'NotImplemented', 'BadGateway', 'ServiceUnavailable', 'GatewayTimeout', 'HttpVersionNotSupported' ]
            }
          },
          requestId: {
            required: false,
            serializedName: 'requestId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RunbookDraftUndoEditResult;