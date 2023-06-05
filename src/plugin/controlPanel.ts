/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { FeatureFlag, isFeatureEnabled, t, validateNonEmpty } from '@superset-ui/core';
import {
  ControlPanelConfig, sections, columnChoices, ControlPanelState, sharedControls } from '@superset-ui/chart-controls';


const allColumns = {
  type: 'SelectControl',
  default: null,
  mapStateToProps: (state: ControlPanelState) => ({
    choices: columnChoices(state.datasource),
  }),
};

const columnsConfig = isFeatureEnabled(FeatureFlag.ENABLE_EXPLORE_DRAG_AND_DROP)
  ? sharedControls.entity
  : allColumns;


const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'longitude',
            config: {
              ...columnsConfig,
              label: t('Longitude'),
              description: t('Column containing longitude data'),
              validators: [validateNonEmpty],
            },
          },
        ],
        [
          {
            name: 'latitude',
            config: {
              ...columnsConfig,
              label: t('Latitude'),
              description: t('Column containing latitude data'),
              validators: [validateNonEmpty],
            },
          },
        ],
        [
          {
            name: 'cols',
            config: {
              ...sharedControls.groupby,
              label: t('Columns'),
              description: t('Columns to advanced popup'),
            },
          },
        ],
        [
          {
            name: 'js_funct',
            config: {
              type: 'TextAreaControl',
              label: t('Function to parse popup'),
              height: 100,
              description: t('Function to pass data to popup'),
            },
          },
        ],
        ['adhoc_filters'],
        [
          {
            name: 'row_limit',
            config: sharedControls.row_limit,
          },
        ],
      ],
    },
    {
      label: t('Customize'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'zoom',
            config: {
              type: 'TextControl',
              default: '3',
              renderTrigger: true,
              // ^ this makes it apply instantaneously, without triggering a "run query" button
              label: t('Zoom'),
              description: t('Zoom level'),
            },
          },
        ],
        [
          {
            name: 'center_lat',
            config: {
              type: 'TextControl',
              default: '-34.6027453',
              renderTrigger: true,
              // ^ this makes it apply instantaneously, without triggering a "run query" button
              label: t('Center Latitude'),
              description: t('Center Latitude'),
            },
          },
        ],
        [
          {
            name: 'center_lon',
            config: {
              type: 'TextControl',
              default: '-58.3595097',
              renderTrigger: true,
              // ^ this makes it apply instantaneously, without triggering a "run query" button
              label: t('Center longitude'),
              description: t('Center longitude'),
            },
          },
        ],
        [
          {
            name: 'tilelayer',
            config: {
              type: 'TextControl',
              default: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png',
              renderTrigger: true,
              // ^ this makes it apply instantaneously, without triggering a "run query" button
              label: t('Tile URL'),
              description: t('Tile URL'),
            },
          },
        ],
        [
          {
            name: 'attribution',
            config: {
              type: 'TextControl',
              default: '&copy; <a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>',
              renderTrigger: true,
              // ^ this makes it apply instantaneously, without triggering a "run query" button
              label: t('Attribution'),
              description: t('Attribution tag'),
            },
          },
        ],
      ],
    },
  ],
};

export default config;
