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
 * Represents a PropertyBatchOperation that compares the value of the property
 * with the expected value.
 * The CheckValuePropertyBatchOperation is generally used as a precondition for
 * the write operations in the batch.
 * Note that if one PropertyBatchOperation in a PropertyBatch fails,
 * the entire batch fails and cannot be committed in a transactional manner.
 *
 *
 * @extends models['PropertyBatchOperation']
 */
class CheckValuePropertyBatchOperation extends models['PropertyBatchOperation'] {
  /**
   * Create a CheckValuePropertyBatchOperation.
   * @member {object} value The expected property value.
   * @member {string} [value.kind] Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CheckValuePropertyBatchOperation
   *
   * @returns {object} metadata of CheckValuePropertyBatchOperation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckValue',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'PropertyBatchOperation',
        className: 'CheckValuePropertyBatchOperation',
        modelProperties: {
          propertyName: {
            required: true,
            serializedName: 'PropertyName',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'Value',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'Kind',
                clientName: 'kind'
              },
              uberParent: 'PropertyValue',
              className: 'PropertyValue'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckValuePropertyBatchOperation;