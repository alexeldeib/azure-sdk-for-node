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
 * Schema of the Data property of an EventGridEvent for a
 * Microsoft.ServiceBus.DeadletterMessagesAvailableWithNoListenersEvent event.
 *
 */
class ServiceBusDeadletterMessagesAvailableWithNoListenersEventData {
  /**
   * Create a ServiceBusDeadletterMessagesAvailableWithNoListenersEventData.
   * @member {string} [namespaceName] The namespace name of the
   * Microsoft.ServiceBus resource.
   * @member {string} [requestUri] The endpoint of the Microsoft.ServiceBus
   * resource.
   * @member {string} [entityType] The entity type of the Microsoft.ServiceBus
   * resource. Could be one of 'queue' or 'subscriber'.
   * @member {string} [queueName] The name of the Microsoft.ServiceBus queue.
   * If the entity type is of type 'subscriber', then this value will be null.
   * @member {string} [topicName] The name of the Microsoft.ServiceBus topic.
   * If the entity type is of type 'queue', then this value will be null.
   * @member {string} [subscriptionName] The name of the Microsoft.ServiceBus
   * topic's subscription. If the entity type is of type 'queue', then this
   * value will be null.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceBusDeadletterMessagesAvailableWithNoListenersEventData
   *
   * @returns {object} metadata of ServiceBusDeadletterMessagesAvailableWithNoListenersEventData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceBusDeadletterMessagesAvailableWithNoListenersEventData',
      type: {
        name: 'Composite',
        className: 'ServiceBusDeadletterMessagesAvailableWithNoListenersEventData',
        modelProperties: {
          namespaceName: {
            required: false,
            serializedName: 'namespaceName',
            type: {
              name: 'String'
            }
          },
          requestUri: {
            required: false,
            serializedName: 'requestUri',
            type: {
              name: 'String'
            }
          },
          entityType: {
            required: false,
            serializedName: 'entityType',
            type: {
              name: 'String'
            }
          },
          queueName: {
            required: false,
            serializedName: 'queueName',
            type: {
              name: 'String'
            }
          },
          topicName: {
            required: false,
            serializedName: 'topicName',
            type: {
              name: 'String'
            }
          },
          subscriptionName: {
            required: false,
            serializedName: 'subscriptionName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceBusDeadletterMessagesAvailableWithNoListenersEventData;
