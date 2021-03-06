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
define(["./when-ad3237a0","./Cartesian2-08065eec","./arrayRemoveDuplicates-707c233c","./BoundingRectangle-8fed902e","./Transforms-1142ce48","./ComponentDatatype-a867ddaa","./PolylineVolumeGeometryLibrary-0e3fa363","./Check-be2d5acb","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550","./Math-5ca9b250","./PolygonPipeline-ac773b7c","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-f8b1fc8b","./AxisAlignedBoundingBox-718a9087","./IntersectionTests-75083888","./Plane-bb88dd7e","./PolylinePipeline-05927ee2","./EllipsoidGeodesic-dc284f08","./EllipsoidRhumbLine-4a6ed5de"],function(d,c,a,o,u,y,r,e,h,g,f,t,l,i,n,s,p,m,E,v,P,_,b){"use strict";function k(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=i,this._shape=n,this._ellipsoid=c.Ellipsoid.clone(d.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,r.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,t.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";i=1+i.length*c.Cartesian3.packedLength;i+=1+n.length*c.Cartesian2.packedLength,this.packedLength=i+c.Ellipsoid.packedLength+2}k.pack=function(e,i,n){var t;n=d.defaultValue(n,0);var a=e._positions,o=a.length;for(i[n++]=o,t=0;t<o;++t,n+=c.Cartesian3.packedLength)c.Cartesian3.pack(a[t],i,n);var r=e._shape,o=r.length;for(i[n++]=o,t=0;t<o;++t,n+=c.Cartesian2.packedLength)c.Cartesian2.pack(r[t],i,n);return c.Ellipsoid.pack(e._ellipsoid,i,n),n+=c.Ellipsoid.packedLength,i[n++]=e._cornerType,i[n]=e._granularity,i};var C=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),L={polylinePositions:void 0,shapePositions:void 0,ellipsoid:C,height:void 0,cornerType:void 0,granularity:void 0};k.unpack=function(e,i,n){i=d.defaultValue(i,0);for(var t=e[i++],a=new Array(t),o=0;o<t;++o,i+=c.Cartesian3.packedLength)a[o]=c.Cartesian3.unpack(e,i);var t=e[i++],r=new Array(t);for(o=0;o<t;++o,i+=c.Cartesian2.packedLength)r[o]=c.Cartesian2.unpack(e,i);var l=c.Ellipsoid.unpack(e,i,C);i+=c.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(n)?(n._positions=a,n._shape=r,n._ellipsoid=c.Ellipsoid.clone(l,n._ellipsoid),n._cornerType=s,n._granularity=p,n):(L.polylinePositions=a,L.shapePositions=r,L.cornerType=s,L.granularity=p,new k(L))};var T=new o.BoundingRectangle;return k.createGeometry=function(e){var i=e._positions,n=a.arrayRemoveDuplicates(i,c.Cartesian3.equalsEpsilon),t=e._shape,t=r.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(t);if(!(n.length<2||t.length<3)){l.PolygonPipeline.computeWindingOrder2D(t)===l.WindingOrder.CLOCKWISE&&t.reverse();i=o.BoundingRectangle.fromPoints(t,T);return function(e,i){var n=new g.GeometryAttributes;n.position=new h.GeometryAttribute({componentDatatype:y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var t=i.length,i=n.position.values.length/3,a=e.length/3/t,o=f.IndexDatatype.createTypedArray(i,2*t*(1+a)),r=0,l=0,s=l*t;for(c=0;c<t-1;c++)o[r++]=c+s,o[r++]=c+s+1;for(o[r++]=t-1+s,o[r++]=s,s=(l=a-1)*t,c=0;c<t-1;c++)o[r++]=c+s,o[r++]=c+s+1;for(o[r++]=t-1+s,o[r++]=s,l=0;l<a-1;l++)for(var p=t*l,d=p+t,c=0;c<t;c++)o[r++]=c+p,o[r++]=c+d;return new h.Geometry({attributes:n,indices:f.IndexDatatype.createTypedArray(i,o),boundingSphere:u.BoundingSphere.fromVertices(e),primitiveType:h.PrimitiveType.LINES})}(r.PolylineVolumeGeometryLibrary.computePositions(n,t,i,e,!1),t)}},function(e,i){return(e=d.defined(i)?k.unpack(e,i):e)._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),k.createGeometry(e)}});
