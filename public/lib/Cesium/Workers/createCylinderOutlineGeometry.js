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
define(["./GeometryOffsetAttribute-03006e80","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./ComponentDatatype-a867ddaa","./CylinderGeometryLibrary-913928ca","./when-ad3237a0","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550","./Math-5ca9b250","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc"],function(b,p,y,t,_,h,A,v,R,G,e,i,a,r){"use strict";var O=new y.Cartesian2;function s(t){var e=(t=A.defaultValue(t,A.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,a=t.bottomRadius,r=A.defaultValue(t.slices,128),n=Math.max(A.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=a,this._slices=r,this._numberOfVerticalLines=n,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}s.packedLength=6,s.pack=function(t,e,i){return i=A.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=A.defaultValue(t._offsetAttribute,-1),e};var d={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return s.unpack=function(t,e,i){e=A.defaultValue(e,0);var a=t[e++],r=t[e++],n=t[e++],o=t[e++],u=t[e++],e=t[e];return A.defined(i)?(i._length=a,i._topRadius=r,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===e?void 0:e,i):(d.length=a,d.topRadius=r,d.bottomRadius=n,d.slices=o,d.numberOfVerticalLines=u,d.offsetAttribute=-1===e?void 0:e,new s(d))},s.createGeometry=function(t){var e=t._length,i=t._topRadius,a=t._bottomRadius,r=t._slices,n=t._numberOfVerticalLines;if(!(e<=0||i<0||a<0||0===i&&0===a)){var o,u,s=2*r,d=h.CylinderGeometryLibrary.computePositions(e,i,a,r,!1),f=2*r;0<n&&(o=Math.min(n,r),u=Math.round(r/o),f+=o);for(var c=G.IndexDatatype.createTypedArray(s,2*f),l=0,m=0;m<r-1;m++)c[l++]=m,c[l++]=m+1,c[l++]=m+r,c[l++]=m+1+r;if(c[l++]=r-1,c[l++]=0,c[l++]=r+r-1,c[l++]=r,0<n)for(m=0;m<r;m+=u)c[l++]=m,c[l++]=m+r;n=new R.GeometryAttributes;n.position=new v.GeometryAttribute({componentDatatype:_.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d}),O.x=.5*e,O.y=Math.max(a,i);i=new p.BoundingSphere(y.Cartesian3.ZERO,y.Cartesian2.magnitude(O));return A.defined(t._offsetAttribute)&&(e=d.length,d=new Uint8Array(e/3),e=t._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(d,e),n.applyOffset=new v.GeometryAttribute({componentDatatype:_.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:d})),new v.Geometry({attributes:n,indices:c,primitiveType:v.PrimitiveType.LINES,boundingSphere:i,offsetAttribute:t._offsetAttribute})}},function(t,e){return A.defined(e)&&(t=s.unpack(t,e)),s.createGeometry(t)}});
