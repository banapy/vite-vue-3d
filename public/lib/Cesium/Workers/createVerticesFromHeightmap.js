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
define(["./Cartesian2-08065eec","./AxisAlignedBoundingBox-718a9087","./Transforms-1142ce48","./when-ad3237a0","./Check-be2d5acb","./TerrainEncoding-cd3482b3","./Math-5ca9b250","./OrientedBoundingBox-2cc6ca57","./WebMercatorProjection-2bca7e98","./RuntimeError-767bd866","./createTaskProcessorWorker","./combine-1510933d","./AttributeCompression-9fbb8447","./ComponentDatatype-a867ddaa","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-f8b1fc8b","./IntersectionTests-75083888","./Plane-bb88dd7e"],function(Ce,Fe,Le,Ne,e,Oe,Re,ze,He,r,t,a,i,n,s,l,o,f){"use strict";var u=Object.freeze({NONE:0,LERC:1}),_e={};_e.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var Ye=new Ce.Cartesian3,We=new Le.Matrix4,Xe=new Ce.Cartesian3,Ze=new Ce.Cartesian3;_e.computeVertices=function(e){var t,a,i,r=Math.cos,n=Math.sin,s=Math.sqrt,l=Math.atan,o=Math.exp,f=Re.CesiumMath.PI_OVER_TWO,u=Re.CesiumMath.toRadians,c=e.heightmap,d=e.width,h=e.height,m=e.skirtHeight,g=0<m,p=Ne.defaultValue(e.isGeographic,!0),x=Ne.defaultValue(e.ellipsoid,Ce.Ellipsoid.WGS84),w=1/x.maximumRadius,k=Ce.Rectangle.clone(e.nativeRectangle),y=Ce.Rectangle.clone(e.rectangle),b=Ne.defined(y)?(t=y.west,a=y.south,i=y.east,y.north):p?(t=u(k.west),a=u(k.south),i=u(k.east),u(k.north)):(t=k.west*w,a=f-2*l(o(-k.south*w)),i=k.east*w,f-2*l(o(-k.north*w))),I=e.relativeToCenter,U=Ne.defined(I),I=U?I:Ce.Cartesian3.ZERO,v=Ne.defaultValue(e.includeWebMercatorT,!1),T=Ne.defaultValue(e.exaggeration,1),M=Ne.defaultValue(e.exaggerationRelativeHeight,0),V=1!==T,e=Ne.defaultValue(e.structure,_e.DEFAULT_STRUCTURE),A=Ne.defaultValue(e.heightScale,_e.DEFAULT_STRUCTURE.heightScale),B=Ne.defaultValue(e.heightOffset,_e.DEFAULT_STRUCTURE.heightOffset),D=Ne.defaultValue(e.elementsPerHeight,_e.DEFAULT_STRUCTURE.elementsPerHeight),S=Ne.defaultValue(e.stride,_e.DEFAULT_STRUCTURE.stride),P=Ne.defaultValue(e.elementMultiplier,_e.DEFAULT_STRUCTURE.elementMultiplier),E=Ne.defaultValue(e.isBigEndian,_e.DEFAULT_STRUCTURE.isBigEndian),C=Ce.Rectangle.computeWidth(k),F=Ce.Rectangle.computeHeight(k),L=C/(d-1),N=F/(h-1);p||(C*=w,F*=w);var O,R,e=x.radiiSquared,z=e.x,H=e.y,_=e.z,Y=65536,W=-65536,e=Le.Transforms.eastNorthUpToFixedFrame(I,x),X=Le.Matrix4.inverseTransformation(e,We);v&&(O=He.WebMercatorProjection.geodeticLatitudeToMercatorAngle(a),R=1/(He.WebMercatorProjection.geodeticLatitudeToMercatorAngle(b)-O));var Z=Xe;Z.x=Number.POSITIVE_INFINITY,Z.y=Number.POSITIVE_INFINITY,Z.z=Number.POSITIVE_INFINITY;var j=Ze;j.x=Number.NEGATIVE_INFINITY,j.y=Number.NEGATIVE_INFINITY,j.z=Number.NEGATIVE_INFINITY;var G=Number.POSITIVE_INFINITY,q=d*h,Q=q+(0<m?2*d+2*h:0),J=new Array(Q),K=new Array(Q),$=new Array(Q),ee=v?new Array(Q):[],te=V?new Array(Q):[],ae=0,ie=h,re=0,ne=d;g&&(--ae,++ie,--re,++ne);for(var se=ae;se<ie;++se){var le=se;h<=(le=le<0?0:le)&&(le=h-1);var oe=k.north-N*le,oe=p?u(oe):f-2*l(o(-oe*w)),fe=Re.CesiumMath.clamp(fe=(oe-a)/(b-a),0,1),ue=se===ae,ce=se===ie-1;0<m&&(ue?oe+=1e-5*F:ce&&(oe-=1e-5*F));var de,he=r(oe),me=n(oe),ge=_*me;v&&(de=(He.WebMercatorProjection.geodeticLatitudeToMercatorAngle(oe)-O)*R);for(var pe=re;pe<ne;++pe){var xe=pe,we=le*(d*S)+(xe=d<=(xe=xe<0?0:xe)?d-1:xe)*S;if(1===D)ye=c[we];else{var ke,ye=0;if(E)for(ke=0;ke<D;++ke)ye=ye*P+c[we+ke];else for(ke=D-1;0<=ke;--ke)ye=ye*P+c[we+ke]}ye=ye*A+B;var W=Math.max(W,ye),Y=Math.min(Y,ye),be=k.west+L*xe;p?be=u(be):be*=w;var Ie=Re.CesiumMath.clamp(Ie=(be-t)/(i-t),0,1),Ue=le*d+xe;if(0<m){var ve=pe===re,Te=pe===ne-1,Me=ue||ce||ve||Te;if((ue||ce)&&(ve||Te))continue;Me&&(ye-=m,ve?(Ue=h-le-1+q,be-=1e-5*C):ce?Ue=q+h+(d-xe-1):Te?(Ue=q+h+d+le,be+=1e-5*C):ue&&(Ue=q+h+d+h+xe))}var Ve=he*r(be),Me=he*n(be),ve=z*Ve,Te=H*Me,xe=1/s(ve*Ve+Te*Me+ge*me),be=ve*xe,ve=Te*xe,Te=ge*xe,xe=new Ce.Cartesian3;xe.x=be+Ve*ye,xe.y=ve+Me*ye,xe.z=Te+me*ye,Le.Matrix4.multiplyByPoint(X,xe,Ye),Ce.Cartesian3.minimumByComponent(Ye,Z,Z),Ce.Cartesian3.maximumByComponent(Ye,j,j),G=Math.min(G,ye),J[Ue]=xe,$[Ue]=new Ce.Cartesian2(Ie,fe),K[Ue]=ye,v&&(ee[Ue]=de),V&&(te[Ue]=x.geodeticSurfaceNormal(xe))}}var Ae,Be,g=Le.BoundingSphere.fromPoints(J);Ne.defined(y)&&(Ae=ze.OrientedBoundingBox.fromRectangle(y,Y,W,x)),U&&(Be=new Oe.EllipsoidalOccluder(x).computeHorizonCullingPointPossiblyUnderEllipsoid(I,J,Y));for(var U=new Fe.AxisAlignedBoundingBox(Z,j,I),De=new Oe.TerrainEncoding(I,U,G,W,e,!1,v,V,T,M),Se=new Float32Array(Q*De.stride),Pe=0,Ee=0;Ee<Q;++Ee)Pe=De.encode(Se,Pe,J[Ee],$[Ee],K[Ee],void 0,ee[Ee],te[Ee]);return{vertices:Se,maximumHeight:W,minimumHeight:Y,encoding:De,boundingSphere3D:g,orientedBoundingBox:Ae,occludeePointInScaledSpace:Be}};var c,d,h,m,g,B,p,x,w,k,y,b={};c={defaultNoDataValue:-34027999387901484e22,decode:function(e,t){var a=(t=t||{}).encodedMaskData||null===t.encodedMaskData,i=g(e,t.inputOffset||0,a),e=null!==t.noDataValue?t.noDataValue:c.defaultNoDataValue,a=d(i,t.pixelType||Float32Array,t.encodedMaskData,e,t.returnMask),e={width:i.width,height:i.height,pixelData:a.resultPixels,minValue:a.minValue,maxValue:i.pixels.maxValue,noDataValue:e};return a.resultMask&&(e.maskData=a.resultMask),t.returnEncodedMask&&i.mask&&(e.encodedMaskData=i.mask.bitset||null),t.returnFileInfo&&(e.fileInfo=h(i),t.computeUsedBitDepths&&(e.fileInfo.bitDepths=m(i))),e}},d=function(e,t,a,i,r){var n,s,l,o=0,f=e.pixels.numBlocksX,u=e.pixels.numBlocksY,c=Math.floor(e.width/f),d=Math.floor(e.height/u),h=2*e.maxZError,m=Number.MAX_VALUE;a=a||(e.mask?e.mask.bitset:null),s=new t(e.width*e.height),r&&a&&(l=new Uint8Array(e.width*e.height));for(var g,p,x=new Float32Array(c*d),w=0;w<=u;w++){var k=w!==u?d:e.height%u;if(0!==k)for(var y=0;y<=f;y++){var b=y!==f?c:e.width%f;if(0!==b){var I,U,v,T,M=w*e.width*d+y*c,V=e.width-b,A=e.pixels.blocks[o];if(A.encoding<2?(I=0===A.encoding?A.rawData:(B(A.stuffedData,A.bitsPerPixel,A.numValidPixels,A.offset,h,x,e.pixels.maxValue),x),U=0):v=2===A.encoding?0:A.offset,a)for(p=0;p<k;p++){for(7&M&&(T=a[M>>3],T<<=7&M),g=0;g<b;g++)128&(T=!(7&M)?a[M>>3]:T)?(l&&(l[M]=1),m=(n=A.encoding<2?I[U++]:v)<m?n:m,s[M++]=n):(l&&(l[M]=0),s[M++]=i),T<<=1;M+=V}else if(A.encoding<2)for(p=0;p<k;p++){for(g=0;g<b;g++)m=(n=I[U++])<m?n:m,s[M++]=n;M+=V}else for(m=v<m?v:m,p=0;p<k;p++){for(g=0;g<b;g++)s[M++]=v;M+=V}if(1===A.encoding&&U!==A.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:s,resultMask:l,minValue:m}},h=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},m=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,a={},i=0;i<t;i++){var r=e.pixels.blocks[i];0===r.encoding?a.float32=!0:1===r.encoding?a[r.bitsPerPixel]=!0:a[0]=!0}return Object.keys(a)},g=function(e,t,a){var i={},r=new Uint8Array(e,t,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==i.fileIdentifierString.trim())throw"Unexpected file identifier string: "+i.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),t+=24,!a)if(n=new DataView(e,t,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),t+=16,0<i.mask.numBytes){var s=new Uint8Array(Math.ceil(i.width*i.height/8)),l=(n=new DataView(e,t,i.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(0<l)for(;l--;)s[f++]=n.getUint8(o++);else for(var u=n.getUint8(o++),l=-l;l--;)s[f++]=u}while(l=n.getInt16(o,!0),(o+=2)<i.mask.numBytes);if(-32768!==l||f<s.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=s,t+=i.mask.numBytes}else 0==(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(e,t,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),t+=16;var r=i.pixels.numBlocksX,a=i.pixels.numBlocksY,c=r+(0<i.width%r?1:0),d=a+(0<i.height%a?1:0);i.pixels.blocks=new Array(c*d);for(var h=0,m=0;m<d;m++)for(var g=0;g<c;g++){var p=0,x=e.byteLength-t;n=new DataView(e,t,Math.min(10,x));var w={};i.pixels.blocks[h++]=w;var k,x=n.getUint8(0);if(p++,w.encoding=63&x,3<w.encoding)throw"Invalid block encoding ("+w.encoding+")";if(2!==w.encoding){if(0!==x&&2!==x){if(x>>=6,2===(w.offsetType=x))w.offset=n.getInt8(1),p++;else if(1===x)w.offset=n.getInt16(1,!0),p+=2;else{if(0!==x)throw"Invalid block offset type";w.offset=n.getFloat32(1,!0),p+=4}if(1===w.encoding)if(x=n.getUint8(p),p++,w.bitsPerPixel=63&x,x>>=6,2===(w.numValidPixelsType=x))w.numValidPixels=n.getUint8(p),p++;else if(1===x)w.numValidPixels=n.getUint16(p,!0),p+=2;else{if(0!==x)throw"Invalid valid pixel count type";w.numValidPixels=n.getUint32(p,!0),p+=4}}if(t+=p,3!==w.encoding)if(0===w.encoding){var y=(i.pixels.numBytes-1)/4;if(y!==Math.floor(y))throw"uncompressed block has invalid length";k=new ArrayBuffer(4*y),new Uint8Array(k).set(new Uint8Array(e,t,4*y));var b=new Float32Array(k);w.rawData=b,t+=4*y}else 1===w.encoding&&(b=Math.ceil(w.numValidPixels*w.bitsPerPixel/8),y=Math.ceil(b/4),k=new ArrayBuffer(4*y),new Uint8Array(k).set(new Uint8Array(e,t,b)),w.stuffedData=new Uint32Array(k),t+=b)}else t++}return i.eofOffset=t,i},B=function(e,t,a,i,r,n,s){var l,o,f,u,c=(1<<t)-1,d=0,h=0,m=Math.ceil((s-i)/r),g=4*e.length-Math.ceil(t*a/8);for(e[e.length-1]<<=8*g,l=0;l<a;l++)0===h&&(u=e[d++],h=32),t<=h?(f=u>>>h-t&c,h-=t):(f=(u&c)<<(o=t-h)&c,f+=(u=e[d++])>>>(h=32-o)),n[l]=f<m?i+f*r:s;return n},x=c,w=function(){var y=function(e,t,a,i,r,n,s,l){var o,f,u,c,d,h=(1<<a)-1,m=0,g=0,p=4*e.length-Math.ceil(a*i/8);if(e[e.length-1]<<=8*p,r)for(o=0;o<i;o++)0===g&&(u=e[m++],g=32),a<=g?(f=u>>>g-a&h,g-=a):(f=(u&h)<<(c=a-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=r[f];else for(d=Math.ceil((l-n)/s),o=0;o<i;o++)0===g&&(u=e[m++],g=32),a<=g?(f=u>>>g-a&h,g-=a):(f=(u&h)<<(c=a-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=f<d?n+f*s:l},b=function(e,t,a,i,r,n){var s,l,o=(1<<t)-1,f=0,u=0,c=0,d=0,h=[],m=4*e.length-Math.ceil(t*a/8);e[e.length-1]<<=8*m;for(var g=Math.ceil((n-i)/r),u=0;u<a;u++)0===c&&(l=e[f++],c=32),t<=c?(d=l>>>c-t&o,c-=t):(d=(l&o)<<(s=t-c)&o,d+=(l=e[f++])>>>(c=32-s)),h[u]=d<g?i+d*r:n;return h.unshift(i),h},I=function(e,t,a,i,r,n,s,l){var o,f,u,c=(1<<a)-1,d=0,h=0,m=0;if(r)for(p=0;p<i;p++)0===h&&(f=e[d++],h=32,m=0),a<=h?(o=f>>>m&c,h-=a,m+=a):(o=f>>>m&c,h=32-(u=a-h),o|=((f=e[d++])&(1<<u)-1)<<a-u,m=u),t[p]=r[o];else for(var g=Math.ceil((l-n)/s),p=0;p<i;p++)0===h&&(f=e[d++],h=32,m=0),a<=h?(o=f>>>m&c,h-=a,m+=a):(o=f>>>m&c,h=32-(u=a-h),o|=((f=e[d++])&(1<<u)-1)<<a-u,m=u),t[p]=o<g?n+o*s:l;return t},U=function(e,t,a,i,r,n){for(var s,l,o=(1<<t)-1,f=0,u=0,c=0,d=0,h=0,m=[],g=Math.ceil((n-i)/r),u=0;u<a;u++)0===c&&(l=e[f++],c=32,h=0),t<=c?(d=l>>>h&o,c-=t,h+=t):(d=l>>>h&o,c=32-(s=t-c),d|=((l=e[f++])&(1<<s)-1)<<t-s,h=s),m[u]=d<g?i+d*r:n;return m.unshift(i),m},v=function(e,t,a,i){var r,n,s,l,o=(1<<a)-1,f=0,u=0,c=4*e.length-Math.ceil(a*i/8);for(e[e.length-1]<<=8*c,r=0;r<i;r++)0===u&&(s=e[f++],u=32),a<=u?(n=s>>>u-a&o,u-=a):(n=(s&o)<<(l=a-u)&o,n+=(s=e[f++])>>>(u=32-l)),t[r]=n;return t},T=function(e,t,a,i){for(var r,n,s,l=(1<<a)-1,o=0,f=0,u=0,c=0;c<i;c++)0===f&&(n=e[o++],f=32,u=0),a<=f?(r=n>>>u&l,f-=a,u+=a):(r=n>>>u&l,f=32-(s=a-f),r|=((n=e[o++])&(1<<s)-1)<<a-s,u=s),t[c]=r;return t},R={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,a=65535,i=e.length,r=Math.floor(i/2),n=0;r;){var s=359<=r?359:r;for(r-=s;t+=e[n++]<<8,a+=t+=e[n++],--s;);t=(65535&t)+(t>>>16),a=(65535&a)+(a>>>16)}return 1&i&&(a+=t+=e[n]<<8),((a=(65535&a)+(a>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var a=t.ptr,i=new Uint8Array(e,a,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,i),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;a+=6;var n=new DataView(e,a,8),i=n.getInt32(0,!0);if(a+=4,3<=(r.fileVersion=i)&&(r.checksum=n.getUint32(4,!0),a+=4),n=new DataView(e,a,12),r.height=n.getUint32(0,!0),r.width=n.getUint32(4,!0),a+=8,4<=i?(r.numDims=n.getUint32(8,!0),a+=4):r.numDims=1,n=new DataView(e,a,40),r.numValidPixel=n.getUint32(0,!0),r.microBlockSize=n.getInt32(4,!0),r.blobSize=n.getInt32(8,!0),r.imageType=n.getInt32(12,!0),r.maxZError=n.getFloat64(16,!0),r.zMin=n.getFloat64(24,!0),r.zMax=n.getFloat64(32,!0),a+=40,t.headerInfo=r,t.ptr=a,3<=i&&this.computeChecksumFletcher32(new Uint8Array(e,a-(4<=i?52:48),r.blobSize-14))!==r.checksum)throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var a=t.headerInfo,i=this.getDataTypeArray(a.imageType),r=a.numDims*this.getDataTypeSize(a.imageType),n=this.readSubArray(e,t.ptr,i,r),s=this.readSubArray(e,t.ptr+r,i,r);t.ptr+=2*r;for(var l=!0,o=0;o<a.numDims;o++)if(n[o]!==s[o]){l=!1;break}return a.minValues=n,a.maxValues=s,l},readSubArray:function(e,t,a,i){var r=a===Uint8Array?new Uint8Array(e,t,i):(r=new ArrayBuffer(i),new Uint8Array(r).set(new Uint8Array(e,t,i)),new a(r));return r},readMask:function(e,t){var a=t.ptr,i=t.headerInfo,r=i.width*i.height,i=i.numValidPixel,n=new DataView(e,a,4),s={};if(s.numBytes=n.getUint32(0,!0),a+=4,(0===i||r===i)&&0!==s.numBytes)throw"invalid mask";if(0===i)o=new Uint8Array(Math.ceil(r/8)),s.bitset=o,d=new Uint8Array(r),t.pixels.resultMask=d,a+=s.numBytes;else if(0<s.numBytes){var l,o=new Uint8Array(Math.ceil(r/8)),f=(n=new DataView(e,a,s.numBytes)).getInt16(0,!0),u=2,c=0;do{if(0<f)for(;f--;)o[c++]=n.getUint8(u++);else for(l=n.getUint8(u++),f=-f;f--;)o[c++]=l}while(f=n.getInt16(u,!0),(u+=2)<s.numBytes);if(-32768!==f||c<o.length)throw"Unexpected end of mask RLE encoding";for(var d=new Uint8Array(r),h=0,m=0,m=0;m<r;m++)7&m?(h=o[m>>3],h<<=7&m):h=o[m>>3],128&h&&(d[m]=1);t.pixels.resultMask=d,s.bitset=o,a+=s.numBytes}return t.ptr=a,t.mask=s,!0},readDataOneSweep:function(e,t,a){var i=t.ptr,r=t.headerInfo,n=r.numDims,s=r.width*r.height,l=r.imageType,r=r.numValidPixel*R.getDataTypeSize(l)*n,o=t.pixels.resultMask,f=a===Uint8Array?new Uint8Array(e,i,r):(l=new ArrayBuffer(r),new Uint8Array(l).set(new Uint8Array(e,i,r)),new a(l));if(f.length===s*n)t.pixels.resultPixels=f;else{t.pixels.resultPixels=new a(s*n);var u,c=0,d=0,h=0;if(1<n)for(h=0;h<n;h++)for(u=h*s,d=0;d<s;d++)o[d]&&(t.pixels.resultPixels[u+d]=f[c++]);else for(d=0;d<s;d++)o[d]&&(t.pixels.resultPixels[d]=f[c++])}return t.ptr=i+=r,!0},readHuffmanTree:function(e,t){var a=this.HUFFMAN_LUT_BITS_MAX,i=new DataView(e,t.ptr,16);if(t.ptr+=16,i.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=i.getInt32(4,!0),n=i.getInt32(8,!0),s=i.getInt32(12,!0);if(s<=n)return!1;var l=new Uint32Array(s-n);R.decodeBits(e,t,l);for(var o,f,u,c=[],d=n;d<s;d++)c[o=d-(d<r?0:r)]={first:l[d-n],second:null};var h=e.byteLength-t.ptr,i=Math.ceil(h/4),i=new ArrayBuffer(4*i);new Uint8Array(i).set(new Uint8Array(e,t.ptr,h));var m=new Uint32Array(i),g=0,p=0,x=m[0];for(d=n;d<s;d++)0<(u=c[o=d-(d<r?0:r)].first)&&(c[o].second=x<<g>>>32-u,u<=32-g?32===(g+=u)&&(g=0,x=m[++p]):(x=m[++p],c[o].second|=x>>>32-(g+=u-32)));var w=0,k=0,y=new V;for(d=0;d<c.length;d++)void 0!==c[d]&&(w=Math.max(w,c[d].first));k=a<=w?a:w,30<=w&&console.log("WARning, large NUM LUT BITS IS "+w);var b,I,U,v,T,M=[];for(d=n;d<s;d++)if(0<(u=c[o=d-(d<r?0:r)].first))if(b=[u,o],u<=k)for(I=c[o].second<<k-u,U=1<<k-u,f=0;f<U;f++)M[I|f]=b;else for(I=c[o].second,T=y,v=u-1;0<=v;v--)T=I>>>v&1?(T.right||(T.right=new V),T.right):(T.left||(T.left=new V),T.left),0!==v||T.val||(T.val=b[1]);return{decodeLut:M,numBitsLUTQick:k,numBitsLUT:w,tree:y,stuffedData:m,srcPtr:p,bitPos:g}},readHuffman:function(e,t,a){var i,r,n,s,l,o,f,u,c,d=t.headerInfo,h=d.numDims,m=t.headerInfo.height,g=t.headerInfo.width,p=g*m,e=this.readHuffmanTree(e,t),x=e.decodeLut,w=e.tree,k=e.stuffedData,y=e.srcPtr,b=e.bitPos,I=e.numBitsLUTQick,U=e.numBitsLUT,v=0===t.headerInfo.imageType?128:0,T=t.pixels.resultMask,M=0;0<b&&(y++,b=0);for(var V=k[y],A=1===t.encodeMode,B=new a(p*h),D=B,S=0;S<d.numDims;S++){if(1<h&&(D=new a(B.buffer,p*S,p),M=0),t.headerInfo.numValidPixel===g*m)for(o=u=0;o<m;o++)for(f=0;f<g;f++,u++){if(r=0,l=s=V<<b>>>32-I,x[l=32-b<I?s|=k[y+1]>>>64-b-I:l])r=x[l][1],b+=x[l][0];else for(l=s=V<<b>>>32-U,32-b<U&&(l=s|=k[y+1]>>>64-b-U),i=w,c=0;c<U;c++)if(!(i=s>>>U-c-1&1?i.right:i.left).left&&!i.right){r=i.val,b=b+c+1;break}32<=b&&(b-=32,V=k[++y]),n=r-v,A?(n+=!(0<f)&&0<o?D[u-g]:M,n&=255,M=D[u]=n):D[u]=n}else for(o=u=0;o<m;o++)for(f=0;f<g;f++,u++)if(T[u]){if(r=0,l=s=V<<b>>>32-I,x[l=32-b<I?s|=k[y+1]>>>64-b-I:l])r=x[l][1],b+=x[l][0];else for(l=s=V<<b>>>32-U,32-b<U&&(l=s|=k[y+1]>>>64-b-U),i=w,c=0;c<U;c++)if(!(i=s>>>U-c-1&1?i.right:i.left).left&&!i.right){r=i.val,b=b+c+1;break}32<=b&&(b-=32,V=k[++y]),n=r-v,A?(!(0<f&&T[u-1])&&0<o&&T[u-g]?n+=D[u-g]:n+=M,n&=255,M=D[u]=n):D[u]=n}t.ptr=t.ptr+4*(y+1)+(0<b?4:0)}t.pixels.resultPixels=B},decodeBits:function(e,t,a,i,r){var n=t.headerInfo,s=n.fileVersion,l=0,o=5<=e.byteLength-t.ptr?5:e.byteLength-t.ptr,f=new DataView(e,t.ptr,o),u=f.getUint8(0);l++;var c=u>>6,d=0==c?4:3-c,o=0<(32&u),c=31&u,u=0;if(1==d)u=f.getUint8(l),l++;else if(2==d)u=f.getUint16(l,!0),l+=2;else{if(4!=d)throw"Invalid valid pixel count type";u=f.getUint32(l,!0),l+=4}var h,m,g,p,x,w,k,d=2*n.maxZError,n=1<n.numDims?n.maxValues[r]:n.zMax;if(o){for(t.counter.lut++,w=f.getUint8(l),l++,p=Math.ceil((w-1)*c/8),x=Math.ceil(p/4),m=new ArrayBuffer(4*x),g=new Uint8Array(m),t.ptr+=l,g.set(new Uint8Array(e,t.ptr,p)),f=new Uint32Array(m),t.ptr+=p,k=0;w-1>>>k;)k++;p=Math.ceil(u*k/8),x=Math.ceil(p/4),m=new ArrayBuffer(4*x),(g=new Uint8Array(m)).set(new Uint8Array(e,t.ptr,p)),h=new Uint32Array(m),t.ptr+=p,f=(3<=s?U:b)(f,c,w-1,i,d,n),(3<=s?I:y)(h,a,k,u,f)}else t.counter.bitstuffer++,k=c,t.ptr+=l,0<k&&(p=Math.ceil(u*k/8),x=Math.ceil(p/4),m=new ArrayBuffer(4*x),(g=new Uint8Array(m)).set(new Uint8Array(e,t.ptr,p)),h=new Uint32Array(m),t.ptr+=p,3<=s?null===i?T(h,a,k,u):I(h,a,k,u,!1,i,d,n):null===i?v(h,a,k,u):y(h,a,k,u,!1,i,d,n))},readTiles:function(e,t,a){var i=t.headerInfo,r=i.width,n=i.height,s=i.microBlockSize,l=i.imageType,o=R.getDataTypeSize(l),f=Math.ceil(r/s),u=Math.ceil(n/s);t.pixels.numBlocksY=u,t.pixels.numBlocksX=f;for(var c,d,h,m,g,p,x,w,k,y,b,I,U,v,T=t.pixels.ptr=0,M=0,V=0,A=0,B=0,D=0,S=0,P=0,E=new a(s*s),C=n%s||s,F=r%s||s,L=i.numDims,N=t.pixels.resultMask,O=t.pixels.resultPixels,V=0;V<u;V++)for(c=V!==u-1?s:C,A=0;A<f;A++)for(B=V*r*s+A*s,p=r-(d=A!==f-1?s:F),v=0;v<L;v++){if(1<L&&(O=new a(t.pixels.resultPixels.buffer,r*n*v*o,r*n)),h=e.byteLength-t.ptr,k={},P=0,P++,g=(m=(w=new DataView(e,t.ptr,Math.min(10,h))).getUint8(0))>>6&255,(m>>2&15)!=(A*s>>3&15))throw"integrity issue";if(3<(b=3&m))throw t.ptr+=P,"Invalid block encoding ("+b+")";if(2!=b)if(0==b){if(t.counter.uncompressed++,t.ptr+=P,D=(D=c*d*o)<(x=e.byteLength-t.ptr)?D:x,I=new ArrayBuffer(D%o==0?D:D+o-D%o),new Uint8Array(I).set(new Uint8Array(e,t.ptr,D)),y=new a(I),S=0,N)for(T=0;T<c;T++){for(M=0;M<d;M++)N[B]&&(O[B]=y[S++]),B++;B+=p}else for(T=0;T<c;T++){for(M=0;M<d;M++)O[B++]=y[S++];B+=p}t.ptr+=S*o}else if(I=R.getDataTypeUsed(l,g),U=R.getOnePixel(k,P,I,w),P+=R.getDataTypeSize(I),3==b)if(t.ptr+=P,t.counter.constantoffset++,N)for(T=0;T<c;T++){for(M=0;M<d;M++)N[B]&&(O[B]=U),B++;B+=p}else for(T=0;T<c;T++){for(M=0;M<d;M++)O[B++]=U;B+=p}else if(t.ptr+=P,R.decodeBits(e,t,E,U,v),P=0,N)for(T=0;T<c;T++){for(M=0;M<d;M++)N[B]&&(O[B]=E[P++]),B++;B+=p}else for(T=0;T<c;T++){for(M=0;M<d;M++)O[B++]=E[P++];B+=p}else t.counter.constant++,t.ptr+=P}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:R.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t,a=e.headerInfo.zMax,i=e.headerInfo.numDims,r=e.headerInfo.height*e.headerInfo.width,n=r*i,s=0,l=0,o=e.pixels.resultMask;if(o)if(1<i)for(s=0;s<i;s++)for(t=s*r,l=0;l<r;l++)o[l]&&(e.pixels.resultPixels[t+l]=a);else for(l=0;l<r;l++)o[l]&&(e.pixels.resultPixels[l]=a);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(a);else for(l=0;l<n;l++)e.pixels.resultPixels[l]=a},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:t=Float32Array;break;case 7:t=Float64Array;break;default:t=Float32Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:t="F32";break;case 7:t="F64";break;default:t="F32"}return t},isValidPixelValue:function(e,t){if(null===t)return!1;var a;switch(e){case 0:a=-128<=t&&t<=127;break;case 1:a=0<=t&&t<=255;break;case 2:a=-32768<=t&&t<=32767;break;case 3:a=0<=t&&t<=65536;break;case 4:a=-2147483648<=t&&t<=2147483647;break;case 5:a=0<=t&&t<=4294967296;break;case 6:a=-34027999387901484e22<=t&&t<=34027999387901484e22;break;case 7:a=5e-324<=t&&t<=17976931348623157e292;break;default:a=!1}return a},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var a=e;switch(e){case 2:case 4:a=e-t;break;case 3:case 5:a=e-2*t;break;case 6:a=0===t?e:1===t?2:1;break;case 7:a=0===t?e:e-2*t+1;break;default:a=e}return a},getOnePixel:function(e,t,a,i){var r=0;switch(a){case 0:r=i.getInt8(t);break;case 1:r=i.getUint8(t);break;case 2:r=i.getInt16(t,!0);break;case 3:r=i.getUint16(t,!0);break;case 4:r=i.getInt32(t,!0);break;case 5:r=i.getUInt32(t,!0);break;case 6:r=i.getFloat32(t,!0);break;case 7:r=i.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return r}},V=function(e,t,a){this.val=e,this.left=t,this.right=a};return{decode:function(e,t){var a=(t=t||{}).noDataValue,i=0,r={};r.ptr=t.inputOffset||0,r.pixels={},R.readHeaderInfo(e,r);var n=r.headerInfo,s=n.fileVersion,l=R.getDataTypeArray(n.imageType);R.readMask(e,r),n.numValidPixel===n.width*n.height||r.pixels.resultMask||(r.pixels.resultMask=t.maskData);var o,f=n.width*n.height;if(r.pixels.resultPixels=new l(f*n.numDims),r.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==n.numValidPixel)if(n.zMax===n.zMin)R.constructConstantSurface(r);else if(4<=s&&R.checkMinMaxRanges(e,r))R.constructConstantSurface(r);else{var u=new DataView(e,r.ptr,2),c=u.getUint8(0);if(r.ptr++,c)R.readDataOneSweep(e,r,l);else if(1<s&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){u=u.getUint8(1);if(r.ptr++,2<(r.encodeMode=u)||s<4&&1<u)throw"Invalid Huffman flag "+u;u?R.readHuffman(e,r,l):R.readTiles(e,r,l)}else R.readTiles(e,r,l)}r.eofOffset=r.ptr,t.inputOffset?(o=r.headerInfo.blobSize+t.inputOffset-r.ptr,1<=Math.abs(o)&&(r.eofOffset=t.inputOffset+r.headerInfo.blobSize)):(o=r.headerInfo.blobSize-r.ptr,1<=Math.abs(o)&&(r.eofOffset=r.headerInfo.blobSize));var d={width:n.width,height:n.height,pixelData:r.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:r.pixels.resultMask};if(r.pixels.resultMask&&R.isValidPixelValue(n.imageType,a)){for(var h=r.pixels.resultMask,i=0;i<f;i++)h[i]||(d.pixelData[i]=a);d.noDataValue=a}return r.noDataValue=a,t.returnFileInfo&&(d.fileInfo=R.formatFileInfo(r)),d},getBandCount:function(e){for(var t=0,a=0,i={ptr:0,pixels:{}};a<e.byteLength-58;)R.readHeaderInfo(e,i),a+=i.headerInfo.blobSize,t++,i.ptr=a;return t}}}(),p=new ArrayBuffer(4),y=new Uint8Array(p),k=(new Uint32Array(p)[0]=1)===y[0],y={decode:function(e,t){if(!k)throw"Big endian system is not supported.";var a,i,r=(t=t||{}).inputOffset||0,n=new Uint8Array(e,r,10),n=String.fromCharCode.apply(null,n);if("CntZImage"===n.trim())a=x,i=1;else{if("Lerc2"!==n.substring(0,5))throw"Unexpected file identifier string: "+n;a=w,i=2}for(var s,l,o,f,u,c,d=0,h=e.byteLength-10,m=[],g={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};r<h;){var p=a.decode(e,{inputOffset:r,encodedMaskData:s,maskData:o,returnMask:0===d,returnEncodedMask:0===d,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null}),r=p.fileInfo.eofOffset;0===d&&(s=p.encodedMaskData,o=p.maskData,g.width=p.width,g.height=p.height,g.dimCount=p.dimCount||1,g.pixelType=p.pixelType||p.fileInfo.pixelType,g.mask=p.maskData),1<i&&p.fileInfo.mask&&0<p.fileInfo.mask.numBytes&&m.push(p.maskData),d++,g.pixels.push(p.pixelData),g.statistics.push({minValue:p.minValue,maxValue:p.maxValue,noDataValue:p.noDataValue,dimStats:p.dimStats})}if(1<i&&1<m.length){for(c=g.width*g.height,g.bandMasks=m,(o=new Uint8Array(c)).set(m[0]),f=1;f<m.length;f++)for(l=m[f],u=0;u<c;u++)o[u]=o[u]&l[u];g.maskData=o}return g}},b.Lerc=y;var I=b.Lerc;return t(function(e,t){if(e.encoding===u.LERC){try{i=I.decode(e.heightmap)}catch(e){throw new r.RuntimeError(e)}if(i.statistics[0].minValue===Number.MAX_VALUE)throw new r.RuntimeError("Invalid tile data");e.heightmap=i.pixels[0],e.width=i.width,e.height=i.height}e.ellipsoid=Ce.Ellipsoid.clone(e.ellipsoid),e.rectangle=Ce.Rectangle.clone(e.rectangle);var a=_e.computeVertices(e),i=a.vertices;return t.push(i.buffer),{vertices:i.buffer,numberOfAttributes:a.encoding.stride,minimumHeight:a.minimumHeight,maximumHeight:a.maximumHeight,gridWidth:e.width,gridHeight:e.height,boundingSphere3D:a.boundingSphere3D,orientedBoundingBox:a.orientedBoundingBox,occludeePointInScaledSpace:a.occludeePointInScaledSpace,encoding:a.encoding,westIndicesSouthToNorth:a.westIndicesSouthToNorth,southIndicesEastToWest:a.southIndicesEastToWest,eastIndicesNorthToSouth:a.eastIndicesNorthToSouth,northIndicesWestToEast:a.northIndicesWestToEast}})});
