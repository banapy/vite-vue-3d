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
define(["exports","./Cartesian2-08065eec","./Math-5ca9b250","./Transforms-1142ce48"],function(a,v,E,y){"use strict";var e={},u=new v.Cartesian3,c=new v.Cartesian3,m=new y.Quaternion,h=new y.Matrix3;function V(a,e,r,t,i,n,s,o,l,C){e=a+e;v.Cartesian3.multiplyByScalar(t,Math.cos(e),u),v.Cartesian3.multiplyByScalar(r,Math.sin(e),c),v.Cartesian3.add(u,c,u);e=Math.cos(a);e*=e;a=Math.sin(a);a*=a;a=n/Math.sqrt(s*e+i*a);return y.Quaternion.fromAxisAngle(u,a/o,m),y.Matrix3.fromQuaternion(m,h),y.Matrix3.multiplyByVector(h,l,C),v.Cartesian3.normalize(C,C),v.Cartesian3.multiplyByScalar(C,o,C),C}var A=new v.Cartesian3,R=new v.Cartesian3,W=new v.Cartesian3,M=new v.Cartesian3;e.raisePositionsToHeight=function(a,e,r){for(var t=e.ellipsoid,i=e.height,n=e.extrudedHeight,e=r?a.length/3*2:a.length/3,s=new Float64Array(3*e),o=a.length,l=r?o:0,C=0;C<o;C+=3){var y=C+1,u=C+2,c=v.Cartesian3.fromArray(a,C,A);t.scaleToGeodeticSurface(c,c);var m=v.Cartesian3.clone(c,R),h=t.geodeticSurfaceNormal(c,M),x=v.Cartesian3.multiplyByScalar(h,i,W);v.Cartesian3.add(c,x,c),r&&(v.Cartesian3.multiplyByScalar(h,n,x),v.Cartesian3.add(m,x,m),s[C+l]=m.x,s[y+l]=m.y,s[u+l]=m.z),s[C]=c.x,s[y]=c.y,s[u]=c.z}return s};var S=new v.Cartesian3,B=new v.Cartesian3,b=new v.Cartesian3;e.computeEllipsePositions=function(a,e,r){var t=a.semiMinorAxis,i=a.semiMajorAxis,n=a.rotation,s=a.center,a=8*a.granularity,o=t*t,l=i*i,C=i*t,y=v.Cartesian3.magnitude(s),u=v.Cartesian3.normalize(s,S),c=v.Cartesian3.cross(v.Cartesian3.UNIT_Z,s,B),c=v.Cartesian3.normalize(c,c),m=v.Cartesian3.cross(u,c,b),h=1+Math.ceil(E.CesiumMath.PI_OVER_TWO/a),x=E.CesiumMath.PI_OVER_TWO/(h-1),M=E.CesiumMath.PI_OVER_TWO-h*x;M<0&&(h-=Math.ceil(Math.abs(M)/x));var z,f,_,O,d=e?new Array(3*(h*(h+2)*2)):void 0,p=0,w=A,P=R,a=4*h*3,T=a-1,I=0,g=r?new Array(a):void 0,w=V(M=E.CesiumMath.PI_OVER_TWO,n,m,c,o,C,l,y,u,w);for(e&&(d[p++]=w.x,d[p++]=w.y,d[p++]=w.z),r&&(g[T--]=w.z,g[T--]=w.y,g[T--]=w.x),M=E.CesiumMath.PI_OVER_TWO-x,z=1;z<h+1;++z){if(w=V(M,n,m,c,o,C,l,y,u,w),P=V(Math.PI-M,n,m,c,o,C,l,y,u,P),e){for(d[p++]=w.x,d[p++]=w.y,d[p++]=w.z,_=2*z+2,f=1;f<_-1;++f)O=v.Cartesian3.lerp(w,P,f/(_-1),W),d[p++]=O.x,d[p++]=O.y,d[p++]=O.z;d[p++]=P.x,d[p++]=P.y,d[p++]=P.z}r&&(g[T--]=w.z,g[T--]=w.y,g[T--]=w.x,g[I++]=P.x,g[I++]=P.y,g[I++]=P.z),M=E.CesiumMath.PI_OVER_TWO-(z+1)*x}for(z=h;1<z;--z){if(w=V(-(M=E.CesiumMath.PI_OVER_TWO-(z-1)*x),n,m,c,o,C,l,y,u,w),P=V(M+Math.PI,n,m,c,o,C,l,y,u,P),e){for(d[p++]=w.x,d[p++]=w.y,d[p++]=w.z,_=2*(z-1)+2,f=1;f<_-1;++f)O=v.Cartesian3.lerp(w,P,f/(_-1),W),d[p++]=O.x,d[p++]=O.y,d[p++]=O.z;d[p++]=P.x,d[p++]=P.y,d[p++]=P.z}r&&(g[T--]=w.z,g[T--]=w.y,g[T--]=w.x,g[I++]=P.x,g[I++]=P.y,g[I++]=P.z)}w=V(-(M=E.CesiumMath.PI_OVER_TWO),n,m,c,o,C,l,y,u,w);a={};return e&&(d[p++]=w.x,d[p++]=w.y,d[p++]=w.z,a.positions=d,a.numPts=h),r&&(g[T--]=w.z,g[T--]=w.y,g[T--]=w.x,a.outerPositions=g),a},a.EllipseGeometryLibrary=e});
