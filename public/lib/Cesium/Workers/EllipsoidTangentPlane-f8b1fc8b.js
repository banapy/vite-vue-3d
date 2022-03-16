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
define(["exports","./AxisAlignedBoundingBox-718a9087","./Cartesian2-08065eec","./Transforms-1142ce48","./Check-be2d5acb","./when-ad3237a0","./IntersectionTests-75083888","./Plane-bb88dd7e"],function(e,n,s,i,t,l,r,a){"use strict";var o=new i.Cartesian4;function d(e,t){e=(t=l.defaultValue(t,s.Ellipsoid.WGS84)).scaleToGeodeticSurface(e);var n=i.Transforms.eastNorthUpToFixedFrame(e,t);this._ellipsoid=t,this._origin=e,this._xAxis=s.Cartesian3.fromCartesian4(i.Matrix4.getColumn(n,0,o)),this._yAxis=s.Cartesian3.fromCartesian4(i.Matrix4.getColumn(n,1,o));n=s.Cartesian3.fromCartesian4(i.Matrix4.getColumn(n,2,o));this._plane=a.Plane.fromPointNormal(e,n)}Object.defineProperties(d.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});var c=new n.AxisAlignedBoundingBox;d.fromPoints=function(e,t){return new d(n.AxisAlignedBoundingBox.fromPoints(e,c).center,t)};var p=new r.Ray,u=new s.Cartesian3;d.prototype.projectPointOntoPlane=function(e,t){var n=p;n.origin=e,s.Cartesian3.normalize(e,n.direction);e=r.IntersectionTests.rayPlane(n,this._plane,u);if(l.defined(e)||(s.Cartesian3.negate(n.direction,n.direction),e=r.IntersectionTests.rayPlane(n,this._plane,u)),l.defined(e)){n=s.Cartesian3.subtract(e,this._origin,e),e=s.Cartesian3.dot(this._xAxis,n),n=s.Cartesian3.dot(this._yAxis,n);return l.defined(t)?(t.x=e,t.y=n,t):new s.Cartesian2(e,n)}},d.prototype.projectPointsOntoPlane=function(e,t){l.defined(t)||(t=[]);for(var n=0,i=e.length,r=0;r<i;r++){var a=this.projectPointOntoPlane(e[r],t[n]);l.defined(a)&&(t[n]=a,n++)}return t.length=n,t},d.prototype.projectPointToNearestOnPlane=function(e,t){l.defined(t)||(t=new s.Cartesian2);var n=p;n.origin=e,s.Cartesian3.clone(this._plane.normal,n.direction);e=r.IntersectionTests.rayPlane(n,this._plane,u);l.defined(e)||(s.Cartesian3.negate(n.direction,n.direction),e=r.IntersectionTests.rayPlane(n,this._plane,u));n=s.Cartesian3.subtract(e,this._origin,e),e=s.Cartesian3.dot(this._xAxis,n),n=s.Cartesian3.dot(this._yAxis,n);return t.x=e,t.y=n,t},d.prototype.projectPointsToNearestOnPlane=function(e,t){l.defined(t)||(t=[]);var n=e.length;t.length=n;for(var i=0;i<n;i++)t[i]=this.projectPointToNearestOnPlane(e[i],t[i]);return t};var f=new s.Cartesian3;d.prototype.projectPointOntoEllipsoid=function(e,t){l.defined(t)||(t=new s.Cartesian3);var n=this._ellipsoid,i=this._origin,r=this._xAxis,a=this._yAxis,o=f;return s.Cartesian3.multiplyByScalar(r,e.x,o),t=s.Cartesian3.add(i,o,t),s.Cartesian3.multiplyByScalar(a,e.y,o),s.Cartesian3.add(t,o,t),n.scaleToGeocentricSurface(t,t),t},d.prototype.projectPointsOntoEllipsoid=function(e,t){var n=e.length;l.defined(t)?t.length=n:t=new Array(n);for(var i=0;i<n;++i)t[i]=this.projectPointOntoEllipsoid(e[i],t[i]);return t},e.EllipsoidTangentPlane=d});
