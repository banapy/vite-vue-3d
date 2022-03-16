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
define(["exports","./when-60b00257","./Check-4274a1fd","./Cartesian2-2951f601","./Transforms-53ff6d12"],function(t,o,e,h,a){"use strict";function c(t,e,n,i){this.x=o.defaultValue(t,0),this.y=o.defaultValue(e,0),this.width=o.defaultValue(n,0),this.height=o.defaultValue(i,0)}c.packedLength=4,c.pack=function(t,e,n){return n=o.defaultValue(n,0),e[n++]=t.x,e[n++]=t.y,e[n++]=t.width,e[n]=t.height,e},c.unpack=function(t,e,n){return e=o.defaultValue(e,0),o.defined(n)||(n=new c),n.x=t[e++],n.y=t[e++],n.width=t[e++],n.height=t[e],n},c.fromPoints=function(t,e){if(o.defined(e)||(e=new c),!o.defined(t)||0===t.length)return e.x=0,e.y=0,e.width=0,e.height=0,e;for(var n=t.length,i=t[0].x,h=t[0].y,r=t[0].x,a=t[0].y,d=1;d<n;d++)var u=t[d],f=u.x,u=u.y,i=Math.min(f,i),r=Math.max(f,r),h=Math.min(u,h),a=Math.max(u,a);return e.x=i,e.y=h,e.width=r-i,e.height=a-h,e};var r=new a.GeographicProjection,d=new h.Cartographic,u=new h.Cartographic;c.fromRectangle=function(t,e,n){if(o.defined(n)||(n=new c),!o.defined(t))return n.x=0,n.y=0,n.width=0,n.height=0,n;var i=(e=o.defaultValue(e,r)).project(h.Rectangle.southwest(t,d)),t=e.project(h.Rectangle.northeast(t,u));return h.Cartesian2.subtract(t,i,t),n.x=i.x,n.y=i.y,n.width=t.x,n.height=t.y,n},c.clone=function(t,e){if(o.defined(t))return o.defined(e)?(e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e):new c(t.x,t.y,t.width,t.height)},c.union=function(t,e,n){o.defined(n)||(n=new c);var i=Math.min(t.x,e.x),h=Math.min(t.y,e.y),r=Math.max(t.x+t.width,e.x+e.width),e=Math.max(t.y+t.height,e.y+e.height);return n.x=i,n.y=h,n.width=r-i,n.height=e-h,n},c.expand=function(t,e,n){n=c.clone(t,n);var i=e.x-n.x,t=e.y-n.y;return i>n.width?n.width=i:i<0&&(n.width-=i,n.x=e.x),t>n.height?n.height=t:t<0&&(n.height-=t,n.y=e.y),n},c.intersect=function(t,e){var n=t.x,i=t.y,h=e.x,r=e.y;return n>h+e.width||n+t.width<h||i+t.height<r||i>r+e.height?a.Intersect.OUTSIDE:a.Intersect.INTERSECTING},c.equals=function(t,e){return t===e||o.defined(t)&&o.defined(e)&&t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},c.prototype.clone=function(t){return c.clone(this,t)},c.prototype.intersect=function(t){return c.intersect(this,t)},c.prototype.equals=function(t){return c.equals(this,t)},t.BoundingRectangle=c});
