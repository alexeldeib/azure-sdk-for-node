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
 * A tag resource.
 *
 * @extends models['ProxyResource']
 */
class Tags extends models['ProxyResource'] {
  /**
   * Create a Tags.
   * @member {array} [costTags] Tags.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Tags
   *
   * @returns {object} metadata of Tags
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Tags',
      type: {
        name: 'Composite',
        className: 'Tags',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          costTags: {
            required: false,
            serializedName: 'properties.costTags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TagElementType',
                  type: {
                    name: 'Composite',
                    className: 'Tag'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Tags;