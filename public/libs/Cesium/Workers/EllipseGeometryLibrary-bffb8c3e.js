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
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./Math-9d37f659","./Cartesian2-2951f601","./Transforms-53ff6d12"],function(a,E,V,y){"use strict";var e={},u=new V.Cartesian3,m=new V.Cartesian3,h=new y.Quaternion,c=new y.Matrix3;function A(a,e,r,t,i,n,s,o,l,C){e=a+e;V.Cartesian3.multiplyByScalar(t,Math.cos(e),u),V.Cartesian3.multiplyByScalar(r,Math.sin(e),m),V.Cartesian3.add(u,m,u);e=Math.cos(a);e*=e;a=Math.sin(a);a*=a;a=n/Math.sqrt(s*e+i*a)/o;return y.Quaternion.fromAxisAngle(u,a,h),y.Matrix3.fromQuaternion(h,c),y.Matrix3.multiplyByVector(c,l,C),V.Cartesian3.normalize(C,C),V.Cartesian3.multiplyByScalar(C,o,C),C}var R=new V.Cartesian3,W=new V.Cartesian3,S=new V.Cartesian3,M=new V.Cartesian3;e.raisePositionsToHeight=function(a,e,r){for(var t=e.ellipsoid,i=e.height,n=e.extrudedHeight,e=r?a.length/3*2:a.length/3,s=new Float64Array(3*e),o=a.length,l=r?o:0,C=0;C<o;C+=3){var y=C+1,u=C+2,m=V.Cartesian3.fromArray(a,C,R);t.scaleToGeodeticSurface(m,m);var h=V.Cartesian3.clone(m,W),c=t.geodeticSurfaceNormal(m,M),x=V.Cartesian3.multiplyByScalar(c,i,S);V.Cartesian3.add(m,x,m),r&&(V.Cartesian3.multiplyByScalar(c,n,x),V.Cartesian3.add(h,x,h),s[C+l]=h.x,s[y+l]=h.y,s[u+l]=h.z),s[C]=m.x,s[y]=m.y,s[u]=m.z}return s};var B=new V.Cartesian3,Q=new V.Cartesian3,b=new V.Cartesian3;e.computeEllipsePositions=function(a,e,r){var t=a.semiMinorAxis,i=a.semiMajorAxis,n=a.rotation,s=a.center,a=8*a.granularity,o=t*t,l=i*i,C=i*t,y=V.Cartesian3.magnitude(s),u=V.Cartesian3.normalize(s,B),m=V.Cartesian3.cross(V.Cartesian3.UNIT_Z,s,Q),m=V.Cartesian3.normalize(m,m),h=V.Cartesian3.cross(u,m,b),c=1+Math.ceil(E.CesiumMath.PI_OVER_TWO/a),x=E.CesiumMath.PI_OVER_TWO/(c-1),M=E.CesiumMath.PI_OVER_TWO-c*x;M<0&&(c-=Math.ceil(Math.abs(M)/x));var f,z,d,_,O,p=e?new Array(3*(c*(c+2)*2)):void 0,w=0,P=R,T=W,a=4*c*3,I=a-1,g=0,v=r?new Array(a):void 0,P=A(M=E.CesiumMath.PI_OVER_TWO,n,h,m,o,C,l,y,u,P);for(e&&(p[w++]=P.x,p[w++]=P.y,p[w++]=P.z),r&&(v[I--]=P.z,v[I--]=P.y,v[I--]=P.x),M=E.CesiumMath.PI_OVER_TWO-x,f=1;f<c+1;++f){if(P=A(M,n,h,m,o,C,l,y,u,P),T=A(Math.PI-M,n,h,m,o,C,l,y,u,T),e){for(p[w++]=P.x,p[w++]=P.y,p[w++]=P.z,d=2*f+2,z=1;z<d-1;++z)_=z/(d-1),O=V.Cartesian3.lerp(P,T,_,S),p[w++]=O.x,p[w++]=O.y,p[w++]=O.z;p[w++]=T.x,p[w++]=T.y,p[w++]=T.z}r&&(v[I--]=P.z,v[I--]=P.y,v[I--]=P.x,v[g++]=T.x,v[g++]=T.y,v[g++]=T.z),M=E.CesiumMath.PI_OVER_TWO-(f+1)*x}for(f=c;1<f;--f){if(P=A(-(M=E.CesiumMath.PI_OVER_TWO-(f-1)*x),n,h,m,o,C,l,y,u,P),T=A(M+Math.PI,n,h,m,o,C,l,y,u,T),e){for(p[w++]=P.x,p[w++]=P.y,p[w++]=P.z,d=2*(f-1)+2,z=1;z<d-1;++z)_=z/(d-1),O=V.Cartesian3.lerp(P,T,_,S),p[w++]=O.x,p[w++]=O.y,p[w++]=O.z;p[w++]=T.x,p[w++]=T.y,p[w++]=T.z}r&&(v[I--]=P.z,v[I--]=P.y,v[I--]=P.x,v[g++]=T.x,v[g++]=T.y,v[g++]=T.z)}P=A(-(M=E.CesiumMath.PI_OVER_TWO),n,h,m,o,C,l,y,u,P);a={};return e&&(p[w++]=P.x,p[w++]=P.y,p[w++]=P.z,a.positions=p,a.numPts=c),r&&(v[I--]=P.z,v[I--]=P.y,v[I--]=P.x,a.outerPositions=v),a},a.EllipseGeometryLibrary=e});
