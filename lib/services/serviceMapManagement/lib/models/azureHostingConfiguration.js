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
 * Provides information about how a machine is hosted in Azure
 *
 * @extends models['HostingConfiguration']
 */
class AzureHostingConfiguration extends models['HostingConfiguration'] {
  /**
   * Create a AzureHostingConfiguration.
   * @member {string} [vmId] Virtual Machine ID (unique identifier).
   * @member {string} [location] Geographical location of the VM.
   * @member {string} [name] Machine name according to the hosting provider.
   * @member {string} [size] Size of the VM.
   * @member {string} [updateDomain] Update domain of the VM.
   * @member {string} [faultDomain] Fault domain of the VM.
   * @member {string} [subscriptionId] Subscription ID.
   * @member {string} [resourceGroup] Resource group name within the specified
   * subscription.
   * @member {string} [resourceId] Unique identifier of the resource.
   * @member {object} [image] Image of the machine.
   * @member {string} [image.publisher] Publisher of the VM image.
   * @member {string} [image.offering] Offering of the VM image.
   * @member {string} [image.sku] SKU of the VM image.
   * @member {string} [image.version] Version of the VM image.
   * @member {object} [cloudService] Contains information about machines hosted
   * as an Azure Cloud Service
   * @member {string} [cloudService.name] Cloud Service name
   * @member {string} [cloudService.instanceId] Cloud Service instance
   * identifier
   * @member {string} [cloudService.deployment] Cloud Service deployment
   * identifier
   * @member {string} [cloudService.roleName] Cloud Service role name
   * @member {string} [cloudService.roleType] Used to specify type of an Azure
   * Cloud Service role. Possible values include: 'unknown', 'worker', 'web'
   * @member {object} [vmScaleSet] Contains information about machines hosted
   * as an Azure Virtual Machine Scale Set
   * @member {string} [vmScaleSet.name] Virtual Machine Scale Set name
   * @member {string} [vmScaleSet.instanceId] Virtual Machine Scale Set
   * instance identifier
   * @member {string} [vmScaleSet.deployment] Virtual Machine Scale Set
   * deployment identifier
   * @member {string} [vmScaleSet.resourceId] Unique identifier of the
   * resource.
   * @member {object} [serviceFabricCluster] Contains information about
   * machines that belong an Azure Service Fabric Cluster
   * @member {string} [serviceFabricCluster.name] Service Fabric cluster name.
   * @member {string} [serviceFabricCluster.clusterId] Service Fabric cluster
   * indentifier.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureHostingConfiguration
   *
   * @returns {object} metadata of AzureHostingConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'provider:azure',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'HostingConfiguration',
        className: 'AzureHostingConfiguration',
        modelProperties: {
          provider: {
            required: false,
            serializedName: 'provider',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          vmId: {
            required: false,
            serializedName: 'vmId',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'String'
            }
          },
          updateDomain: {
            required: false,
            serializedName: 'updateDomain',
            type: {
              name: 'String'
            }
          },
          faultDomain: {
            required: false,
            serializedName: 'faultDomain',
            type: {
              name: 'String'
            }
          },
          subscriptionId: {
            required: false,
            serializedName: 'subscriptionId',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resourceGroup',
            type: {
              name: 'String'
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            serializedName: 'image',
            type: {
              name: 'Composite',
              className: 'ImageConfiguration'
            }
          },
          cloudService: {
            required: false,
            serializedName: 'cloudService',
            type: {
              name: 'Composite',
              className: 'AzureCloudServiceConfiguration'
            }
          },
          vmScaleSet: {
            required: false,
            serializedName: 'vmScaleSet',
            type: {
              name: 'Composite',
              className: 'AzureVmScaleSetConfiguration'
            }
          },
          serviceFabricCluster: {
            required: false,
            serializedName: 'serviceFabricCluster',
            type: {
              name: 'Composite',
              className: 'AzureServiceFabricClusterConfiguration'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureHostingConfiguration;