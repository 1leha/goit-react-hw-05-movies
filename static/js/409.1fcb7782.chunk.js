"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[409],{6409:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r,a,c,i=n(9439),s=n(2791),u=n(7689),o=n(9457),h=n(168),p=n(6444),f=p.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n"])),(function(e){return e.theme.space[4]})),d=p.ZP.p(a||(a=(0,h.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[0]}),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.fontWeights.bold})),v=p.ZP.p(c||(c=(0,h.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.theme.space[2]}),(function(e){return e.theme.space[0]}),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.fontWeights.normal})),x=n(184),m=function(e){var t=e.actors;return(0,x.jsx)(f,{children:t.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.actorPhotoPath;return(0,x.jsx)("li",{children:(0,x.jsxs)("article",{children:[(0,x.jsx)(o.x,{width:"150px",height:"200px",overflow:"hidden",borderRadius:"standart",children:(0,x.jsx)("img",{src:a,alt:n})}),(0,x.jsxs)(o.x,{width:"150px",overflow:"hidden",borderRadius:"standart",children:[(0,x.jsx)(d,{children:n}),(0,x.jsxs)(v,{children:["Character: ",r]})]})]})},t)}))})},g=n(1371),l=n(8131),w=new g.I,Z=function(){var e=(0,u.UO)().movieId,t=(0,s.useState)([]),n=(0,i.Z)(t,2),r=n[0],a=n[1],c=(0,s.useState)(l.Bh.IDLE),o=(0,i.Z)(c,2),h=o[0],p=o[1];if((0,s.useEffect)((function(){p(l.Bh.IDLE),w.getActors(e).then((function(e){0!==e.length?(p(l.Bh["SU\u0421CESS"]),a(e)):p(l.Bh.EMPTY)}))}),[e]),h!==l.Bh.IDLE)return h===l.Bh.EMPTY?(0,x.jsx)("div",{children:"We have no idea who starred in this movie."}):h===l.Bh["SU\u0421CESS"]?(0,x.jsx)(m,{actors:r}):void 0}},1371:function(e,t,n){n.d(t,{I:function(){return h}});var r=n(5861),a=n(3144),c=n(5671),i=n(7757),s=n.n(i),u=n(3263),o=n(8131);u.Z.defaults.baseURL=o.v2;var h=(0,a.Z)((function e(){var t=this;(0,c.Z)(this,e),this.init=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTrending();case 2:case"end":return e.stop()}}),e)}))),this.getTrendingMovies=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(o.q1));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),this.getMovie=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,c,i,h,p,f,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(o.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,a=r.genres,c=r.id,i=r.title,h=r.poster_path,p=r.vote_average,f=r.overview,e.next=14,h;case 14:if(!e.sent){e.next=18;break}e.t0="".concat(o.PN+h),e.next=19;break;case 18:e.t0="https://via.placeholder.com/200x300";case 19:return d=e.t0,e.abrupt("return",{genres:a,id:c,title:i,posterPath:d,vote_average:p,overview:f});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getActors=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(o.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data.cast;case 5:return r=e.sent,e.next=8,r.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return{id:t,name:n,character:r,actorPhotoPath:a?"".concat(o.PN+a):"https://via.placeholder.com/150x200"}}));case 8:return a=e.sent,e.next=11,a;case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getReviews=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.searchMovie=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(o.q1,"&language=en-US&query=").concat(t));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))},8131:function(e,t,n){n.d(t,{Bh:function(){return i},PN:function(){return c},q1:function(){return r},v2:function(){return a}});var r="769e92a3a56ccf8930092eceecb76b44",a="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p/w500",i={IDLE:"idle",EMPTY:"empty","SU\u0421CESS":"su\u0441cess"}}}]);
//# sourceMappingURL=409.1fcb7782.chunk.js.map