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
 * Per database settings of an elastic pool.
 *
 */
class ElasticPoolPerDatabaseSettings {
  /**
   * Create a ElasticPoolPerDatabaseSettings.
   * @member {number} [minCapacity] The minimum capacity all databases are
   * guaranteed.
   * @member {number} [maxCapacity] The maximum capacity any one database can
   * consume.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ElasticPoolPerDatabaseSettings
   *
   * @returns {object} metadata of ElasticPoolPerDatabaseSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ElasticPoolPerDatabaseSettings',
      type: {
        name: 'Composite',
        className: 'ElasticPoolPerDatabaseSettings',
        modelProperties: {
          minCapacity: {
            required: false,
            serializedName: 'minCapacity',
            type: {
              name: 'Number'
            }
          },
          maxCapacity: {
            required: false,
            serializedName: 'maxCapacity',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ElasticPoolPerDatabaseSettings;