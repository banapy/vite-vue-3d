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
define(["exports","./when-60b00257","./Check-4274a1fd","./Math-9d37f659","./Cartesian2-2951f601"],function(t,u,o,a,r){"use strict";var i={octEncodeInRange:function(t,o,e){var n;return e.x=t.x/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),e.y=t.y/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),t.z<0&&(n=e.x,t=e.y,e.x=(1-Math.abs(t))*a.CesiumMath.signNotZero(n),e.y=(1-Math.abs(n))*a.CesiumMath.signNotZero(t)),e.x=a.CesiumMath.toSNorm(e.x,o),e.y=a.CesiumMath.toSNorm(e.y,o),e},octEncode:function(t,o){return i.octEncodeInRange(t,255,o)}},e=new r.Cartesian2,n=new Uint8Array(1);function c(t){return n[0]=t,n[0]}i.octEncodeToCartesian4=function(t,o){return i.octEncodeInRange(t,65535,e),o.x=c(e.x*(1/256)),o.y=c(e.x),o.z=c(e.y*(1/256)),o.w=c(e.y),o},i.octDecodeInRange=function(t,o,e,n){return n.x=a.CesiumMath.fromSNorm(t,e),n.y=a.CesiumMath.fromSNorm(o,e),n.z=1-(Math.abs(n.x)+Math.abs(n.y)),n.z<0&&(e=n.x,n.x=(1-Math.abs(n.y))*a.CesiumMath.signNotZero(e),n.y=(1-Math.abs(e))*a.CesiumMath.signNotZero(n.y)),r.Cartesian3.normalize(n,n)},i.octDecode=function(t,o,e){return i.octDecodeInRange(t,o,255,e)},i.octDecodeFromCartesian4=function(t,o){var e=256*t.x+t.y,t=256*t.z+t.w;return i.octDecodeInRange(e,t,65535,o)},i.octPackFloat=function(t){return 256*t.x+t.y};var s=new r.Cartesian2;function d(t){return t>>1^-(1&t)}i.octEncodeFloat=function(t){return i.octEncode(t,s),i.octPackFloat(s)},i.octDecodeFloat=function(t,o){var e=t/256,t=Math.floor(e),e=256*(e-t);return i.octDecode(t,e,o)},i.octPack=function(t,o,e,n){t=i.octEncodeFloat(t),o=i.octEncodeFloat(o),e=i.octEncode(e,s);return n.x=65536*e.x+t,n.y=65536*e.y+o,n},i.octUnpack=function(t,o,e,n){var a=t.x/65536,r=Math.floor(a),c=65536*(a-r),a=t.y/65536,t=Math.floor(a),a=65536*(a-t);i.octDecodeFloat(c,o),i.octDecodeFloat(a,e),i.octDecode(r,t,n)},i.compressTextureCoordinates=function(t){return 4096*(4095*t.x|0)+(4095*t.y|0)},i.decompressTextureCoordinates=function(t,o){var e=t/4096,e=Math.floor(e);return o.x=e/4095,o.y=(t-4096*e)/4095,o},i.zigZagDeltaDecode=function(t,o,e){for(var n=t.length,a=0,r=0,c=0,i=0;i<n;++i)a+=d(t[i]),r+=d(o[i]),t[i]=a,o[i]=r,u.defined(e)&&(c+=d(e[i]),e[i]=c)},t.AttributeCompression=i});
