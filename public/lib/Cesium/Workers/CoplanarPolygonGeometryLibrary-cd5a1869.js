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
define(["exports","./Cartesian2-08065eec","./Check-be2d5acb","./Transforms-1142ce48","./OrientedBoundingBox-2cc6ca57"],function(n,d,e,l,f){"use strict";var t={},i=new d.Cartesian3,x=new d.Cartesian3,B=new d.Cartesian3,P=new d.Cartesian3,M=new f.OrientedBoundingBox;function o(n,e,t,r,a){e=d.Cartesian3.subtract(n,e,i),t=d.Cartesian3.dot(t,e),e=d.Cartesian3.dot(r,e);return d.Cartesian2.fromElements(t,e,a)}t.validOutline=function(n){var e=f.OrientedBoundingBox.fromPoints(n,M).halfAxes,t=l.Matrix3.getColumn(e,0,x),n=l.Matrix3.getColumn(e,1,B),e=l.Matrix3.getColumn(e,2,P),t=d.Cartesian3.magnitude(t),n=d.Cartesian3.magnitude(n),e=d.Cartesian3.magnitude(e);return!(0===t&&(0===n||0===e)||0===n&&0===e)},t.computeProjectTo2DArguments=function(n,e,t,r){var a,i,o=f.OrientedBoundingBox.fromPoints(n,M),u=o.halfAxes,s=l.Matrix3.getColumn(u,0,x),c=l.Matrix3.getColumn(u,1,B),C=l.Matrix3.getColumn(u,2,P),m=d.Cartesian3.magnitude(s),g=d.Cartesian3.magnitude(c),n=d.Cartesian3.magnitude(C),u=Math.min(m,g,n);return(0!==m||0!==g&&0!==n)&&(0!==g||0!==n)&&(u!==g&&u!==n||(a=s),u===m?a=c:u===n&&(i=c),u!==m&&u!==g||(i=C),d.Cartesian3.normalize(a,t),d.Cartesian3.normalize(i,r),d.Cartesian3.clone(o.center,e),!0)},t.createProjectPointsTo2DFunction=function(r,a,i){return function(n){for(var e=new Array(n.length),t=0;t<n.length;t++)e[t]=o(n[t],r,a,i);return e}},t.createProjectPointTo2DFunction=function(t,r,a){return function(n,e){return o(n,t,r,a,e)}},n.CoplanarPolygonGeometryLibrary=t});
