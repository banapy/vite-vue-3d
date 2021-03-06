/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["./when-ad3237a0","./PrimitivePipeline-3d68cec1","./createTaskProcessorWorker","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./Math-5ca9b250","./combine-1510933d","./RuntimeError-767bd866","./ComponentDatatype-a867ddaa","./WebGLConstants-1c8239cc","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./GeometryPipeline-3334f964","./AttributeCompression-9fbb8447","./EncodedCartesian3-a785c24c","./IndexDatatype-9504f550","./IntersectionTests-75083888","./Plane-bb88dd7e","./WebMercatorProjection-2bca7e98"],function(d,u,e,r,t,n,a,o,i,c,s,b,f,m,p,l,y,P,k,C){"use strict";var v={};return e(function(e,r){for(var t=e.subTasks,n=t.length,a=new Array(n),o=0;o<n;o++){var i=t[o],c=i.geometry,s=i.moduleName;d.defined(s)?(s=function(e){var r=v[e];return d.defined(r)||("object"==typeof exports?v[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){v[r=e]=e})),r}(s),a[o]=s(c,i.offset)):a[o]=c}return d.when.all(a,function(e){return u.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
