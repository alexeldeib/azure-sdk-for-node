/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;

const models = require('./models');
const operations = require('./operations');


/** Class representing a FaceAPIClient. */
class FaceAPIClient extends ServiceClient {
  /**
   * Create a FaceAPIClient.
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   * @param {azureRegions} azureRegion - Supported Azure regions for Cognitive Services endpoints. Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(credentials, azureRegion, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (azureRegion === null || azureRegion === undefined) {
      throw new Error('\'azureRegion\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.baseUri = 'https://{AzureRegion}.api.cognitive.microsoft.com/face/v1.0';
    this.credentials = credentials;
    this.azureRegion = azureRegion;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.face = new operations.Face(this);
    this.person = new operations.Person(this);
    this.personGroup = new operations.PersonGroup(this);
    this.faceList = new operations.FaceList(this);
    this.models = models;
    msRest.addSerializationMixin(this);
  }

}

module.exports = FaceAPIClient;
