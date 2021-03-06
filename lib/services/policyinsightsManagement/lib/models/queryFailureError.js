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
 * Error definition.
 *
 */
class QueryFailureError {
  /**
   * Create a QueryFailureError.
   * @member {string} [code] Service specific error code which serves as the
   * substatus for the HTTP error code.
   * @member {string} [message] Description of the error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of QueryFailureError
   *
   * @returns {object} metadata of QueryFailureError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QueryFailure_error',
      type: {
        name: 'Composite',
        className: 'QueryFailureError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = QueryFailureError;
