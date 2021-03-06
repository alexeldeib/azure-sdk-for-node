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
 * Describes all the settings to be used when encoding the input video with the
 * Standard Encoder.
 *
 * @extends models['Preset']
 */
class StandardEncoderPreset extends models['Preset'] {
  /**
   * Create a StandardEncoderPreset.
   * @member {object} [filters] One or more filtering operations that are
   * applied to the input media before encoding.
   * @member {object} [filters.deinterlace] The de-interlacing settings.
   * @member {string} [filters.deinterlace.parity] The field parity for
   * de-interlacing, defaults to Auto. Possible values include: 'Auto',
   * 'TopFieldFirst', 'BottomFieldFirst'
   * @member {string} [filters.deinterlace.mode] The deinterlacing mode.
   * Defaults to AutoPixelAdaptive. Possible values include: 'Off',
   * 'AutoPixelAdaptive'
   * @member {string} [filters.rotation] The rotation, if any, to be applied to
   * the input video, before it is encoded. Default is Auto. Possible values
   * include: 'Auto', 'None', 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270'
   * @member {object} [filters.crop] The parameters for the rectangular window
   * with which to crop the input video.
   * @member {string} [filters.crop.left] The number of pixels from the
   * left-margin. This can be absolute pixel value (e.g 100), or relative to
   * the size of the video (For example, 50%).
   * @member {string} [filters.crop.top] The number of pixels from the
   * top-margin. This can be absolute pixel value (e.g 100), or relative to the
   * size of the video (For example, 50%).
   * @member {string} [filters.crop.width] The width of the rectangular region
   * in pixels. This can be absolute pixel value (e.g 100), or relative to the
   * size of the video (For example, 50%).
   * @member {string} [filters.crop.height] The height of the rectangular
   * region in pixels. This can be absolute pixel value (e.g 100), or relative
   * to the size of the video (For example, 50%).
   * @member {array} [filters.overlays] The properties of overlays to be
   * applied to the input video. These could be audio, image or video overlays.
   * @member {array} [codecs] The list of codecs to be used when encoding the
   * input video.
   * @member {array} [formats] The list of outputs to be produced by the
   * encoder.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StandardEncoderPreset
   *
   * @returns {object} metadata of StandardEncoderPreset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.StandardEncoderPreset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Preset',
        className: 'StandardEncoderPreset',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          filters: {
            required: false,
            serializedName: 'filters',
            type: {
              name: 'Composite',
              className: 'Filters'
            }
          },
          codecs: {
            required: false,
            serializedName: 'codecs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CodecElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Codec',
                    className: 'Codec'
                  }
              }
            }
          },
          formats: {
            required: false,
            serializedName: 'formats',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FormatElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Format',
                    className: 'Format'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StandardEncoderPreset;
