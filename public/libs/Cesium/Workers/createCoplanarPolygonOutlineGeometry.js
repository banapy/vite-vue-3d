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
define(["./arrayRemoveDuplicates-707c233c","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./ComponentDatatype-a867ddaa","./CoplanarPolygonGeometryLibrary-cd5a1869","./when-ad3237a0","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./GeometryInstance-42129c83","./GeometryPipeline-3334f964","./IndexDatatype-9504f550","./PolygonGeometryLibrary-967e68c5","./Math-5ca9b250","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc","./OrientedBoundingBox-2cc6ca57","./EllipsoidTangentPlane-f8b1fc8b","./AxisAlignedBoundingBox-718a9087","./IntersectionTests-75083888","./Plane-bb88dd7e","./AttributeCompression-9fbb8447","./EncodedCartesian3-a785c24c","./ArcType-98ec98bf","./EllipsoidRhumbLine-4a6ed5de","./PolygonPipeline-ac773b7c"],function(a,y,c,e,l,p,o,s,u,d,m,g,b,t,n,r,i,f,h,P,G,v,L,C,T,E,k){"use strict";function A(e){e=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=b.PolygonGeometryLibrary.computeHierarchyPackedLength(e)+1}A.fromPositions=function(e){return new A({polygonHierarchy:{positions:(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).positions}})},A.pack=function(e,t,n){return n=o.defaultValue(n,0),t[n=b.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n)]=e.packedLength,t};var H={polygonHierarchy:{}};return A.unpack=function(e,t,n){t=o.defaultValue(t,0);var r=b.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;t=e[t];return(n=!o.defined(n)?new A(H):n)._polygonHierarchy=r,n.packedLength=t,n},A.createGeometry=function(e){var t=e._polygonHierarchy,e=t.positions,e=a.arrayRemoveDuplicates(e,c.Cartesian3.equalsEpsilon,!0);if(!(e.length<3)&&p.CoplanarPolygonGeometryLibrary.validOutline(e)){var n=b.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(t,!1);if(0!==n.length){for(var r=[],o=0;o<n.length;o++){var i=new d.GeometryInstance({geometry:function(e){for(var t=e.length,n=new Float64Array(3*t),r=g.IndexDatatype.createTypedArray(t,2*t),o=0,i=0,a=0;a<t;a++){var y=e[a];n[o++]=y.x,n[o++]=y.y,n[o++]=y.z,r[i++]=a,r[i++]=(a+1)%t}var c=new u.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:l.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new s.Geometry({attributes:c,indices:r,primitiveType:s.PrimitiveType.LINES})}(n[o])});r.push(i)}e=m.GeometryPipeline.combineInstances(r)[0],t=y.BoundingSphere.fromPoints(t.positions);return new s.Geometry({attributes:e.attributes,indices:e.indices,primitiveType:e.primitiveType,boundingSphere:t})}}},function(e,t){return(e=o.defined(t)?A.unpack(e,t):e)._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),A.createGeometry(e)}});
