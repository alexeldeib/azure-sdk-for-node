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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the JobHistoryDefinition class.
 * @constructor
 * @member {string} [id] Gets the job history identifier.
 *
 * @member {string} [type] Gets the job history resource type.
 *
 * @member {string} [name] Gets the job history name.
 *
 * @member {object} [properties] Gets or sets the job history properties.
 *
 * @member {date} [properties.startTime] Gets the start time for this job.
 *
 * @member {date} [properties.endTime] Gets the end time for this job.
 *
 * @member {date} [properties.expectedExecutionTime] Gets the expected
 * execution time for this job.
 *
 * @member {string} [properties.actionName] Gets the job history action name.
 * Possible values include: 'MainAction', 'ErrorAction'
 *
 * @member {string} [properties.status] Gets the job history status. Possible
 * values include: 'Completed', 'Failed', 'Postponed'
 *
 * @member {string} [properties.message] Gets the message for the job history.
 *
 * @member {number} [properties.retryCount] Gets the retry count for job.
 *
 * @member {number} [properties.repeatCount] Gets the repeat count for the job.
 *
 */
class JobHistoryDefinition {
  constructor() {
  }

  /**
   * Defines the metadata of JobHistoryDefinition
   *
   * @returns {object} metadata of JobHistoryDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobHistoryDefinition',
      type: {
        name: 'Composite',
        className: 'JobHistoryDefinition',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            readOnly: true,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'JobHistoryDefinitionProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = JobHistoryDefinition;