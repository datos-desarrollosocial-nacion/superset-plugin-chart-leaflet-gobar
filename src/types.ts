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
import { QueryFormData, TimeseriesDataRecord } from '@superset-ui/core';

export interface SupersetPluginChartLeafletGobarStylesProps {
  height: number;
  width: number;
}

interface SupersetPluginChartLeafletGobarCustomizeProps {
  headerText: string;
}

export type SupersetPluginChartLeafletGobarQueryFormData = QueryFormData &
  SupersetPluginChartLeafletGobarStylesProps &
  SupersetPluginChartLeafletGobarCustomizeProps;

export type SupersetPluginChartLeafletGobarProps = SupersetPluginChartLeafletGobarStylesProps &
  SupersetPluginChartLeafletGobarCustomizeProps & {
    data: TimeseriesDataRecord[];
    // add typing here for the props you pass in from transformProps.ts!
    latitude: 'string',
    longitude: 'string',
    cols: 'string',
    jsFunct: 'string',
    zoom: 'string',
    centerLat: 'string',
    centerLon: 'string',
    tilelayer: 'string',
    attribution: 'string',
  };
