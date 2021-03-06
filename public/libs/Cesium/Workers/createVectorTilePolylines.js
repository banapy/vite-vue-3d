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
define(["./Cartesian2-08065eec","./combine-1510933d","./AttributeCompression-9fbb8447","./Math-5ca9b250","./IndexDatatype-9504f550","./createTaskProcessorWorker","./Check-be2d5acb","./when-ad3237a0","./WebGLConstants-1c8239cc"],function(L,S,_,G,W,a,e,r,n){"use strict";var B=32767,O=new L.Cartographic,z=new L.Cartesian3;var H=new L.Rectangle,Y=new L.Ellipsoid,Z=new L.Cartesian3,j={min:void 0,max:void 0};var q=new L.Cartesian3,J=new L.Cartesian3,K=new L.Cartesian3,Q=new L.Cartesian3,V=new L.Cartesian3;return a(function(a,e){var r=new Uint16Array(a.positions),n=new Uint16Array(a.widths),t=new Uint32Array(a.counts),i=new Uint16Array(a.batchIds);!function(a){a=new Float64Array(a);var e=0;j.min=a[e++],j.max=a[e++],L.Rectangle.unpack(a,2,H),e+=L.Rectangle.packedLength,L.Ellipsoid.unpack(a,e,Y),e+=L.Ellipsoid.packedLength,L.Cartesian3.unpack(a,e,Z)}(a.packedBuffer);for(var s=Y,o=Z,u=function(a,e,r,n,t){var i=a.length/3,s=a.subarray(0,i),o=a.subarray(i,2*i),u=a.subarray(2*i,3*i);_.AttributeCompression.zigZagDeltaDecode(s,o,u);for(var c=new Float64Array(a.length),f=0;f<i;++f){var p=s[f],d=o[f],C=u[f],p=G.CesiumMath.lerp(e.west,e.east,p/B),d=G.CesiumMath.lerp(e.south,e.north,d/B),C=G.CesiumMath.lerp(r,n,C/B),C=L.Cartographic.fromRadians(p,d,C,O),C=t.cartographicToCartesian(C,z);L.Cartesian3.pack(C,c,3*f)}return c}(r,H,j.min,j.max,s),s=4*(r=u.length/3)-4,c=new Float32Array(3*s),f=new Float32Array(3*s),p=new Float32Array(3*s),d=new Float32Array(2*s),C=new Uint16Array(s),b=0,h=0,w=0,l=0,y=t.length,k=0;k<y;++k){for(var v,A=t[k],g=n[k],m=i[k],x=0;x<A;++x){0===x?(E=L.Cartesian3.unpack(u,3*l,q),D=L.Cartesian3.unpack(u,3*(l+1),J),v=L.Cartesian3.subtract(E,D,K),L.Cartesian3.add(E,v,v)):v=L.Cartesian3.unpack(u,3*(l+x-1),K);var D,E,I,P=L.Cartesian3.unpack(u,3*(l+x),Q);x===A-1?(D=L.Cartesian3.unpack(u,3*(l+A-1),q),E=L.Cartesian3.unpack(u,3*(l+A-2),J),I=L.Cartesian3.subtract(D,E,V),L.Cartesian3.add(D,I,I)):I=L.Cartesian3.unpack(u,3*(l+x+1),V),L.Cartesian3.subtract(v,o,v),L.Cartesian3.subtract(P,o,P),L.Cartesian3.subtract(I,o,I);for(var U=x===A-1?2:4,T=0===x?2:0;T<U;++T){L.Cartesian3.pack(P,c,b),L.Cartesian3.pack(v,f,b),L.Cartesian3.pack(I,p,b),b+=3;var F=T-2<0?-1:1;d[h++]=T%2*2-1,d[h++]=F*g,C[w++]=m}}l+=A}var N=W.IndexDatatype.createTypedArray(s,6*r-6),R=0,M=0,y=r-1;for(k=0;k<y;++k)N[M++]=R,N[M++]=R+2,N[M++]=R+1,N[M++]=R+1,N[M++]=R+2,N[M++]=R+3,R+=4;return e.push(c.buffer,f.buffer,p.buffer),e.push(d.buffer,C.buffer,N.buffer),r={indexDatatype:2===N.BYTES_PER_ELEMENT?W.IndexDatatype.UNSIGNED_SHORT:W.IndexDatatype.UNSIGNED_INT,currentPositions:c.buffer,previousPositions:f.buffer,nextPositions:p.buffer,expandAndWidth:d.buffer,batchIds:C.buffer,indices:N.buffer},a.keepDecodedPositions&&(a=function(a){for(var e=a.length,r=new Uint32Array(e+1),n=0,t=0;t<e;++t)r[t]=n,n+=a[t];return r[e]=n,r}(t),e.push(u.buffer,a.buffer),r=S.combine(r,{decodedPositions:u.buffer,decodedPositionOffsets:a.buffer})),r})});
