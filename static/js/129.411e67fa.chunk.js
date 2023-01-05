"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[129],{9129:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r,a,c,i=n(9439),s=n(2791),u=n(9457),o=n(168),p=n(6444),f=p.ZP.li(r||(r=(0,o.Z)(["\n  display: block;\n  padding: ","px;\n\n  background-color: ",";\n\n  border-radius: ",";\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.colors.reviewBg}),(function(e){return e.theme.radii.standart})),h=p.ZP.h4(a||(a=(0,o.Z)(["\n  font-size: ",";\n\n  margin-top: ",";\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.space[0]}),(function(e){return e.theme.space[2]})),v=p.ZP.p(c||(c=(0,o.Z)(["\n  font-size: ",";\n\n  margin-top: ",";\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.space[0]}),(function(e){return e.theme.space[2]})),d=n(184),m=function(e){var t=e.reviews;return(0,d.jsx)(u.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:4,children:t.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,d.jsxs)(f,{children:[(0,d.jsx)(h,{children:n}),(0,d.jsx)(v,{children:r})]},t)}))})},l=n(7689),g=n(1371),x=n(8131),w=new g.I,Z=function(){var e=(0,l.UO)().movieId,t=(0,s.useState)([]),n=(0,i.Z)(t,2),r=n[0],a=n[1],c=(0,s.useState)(x.Bh.IDLE),u=(0,i.Z)(c,2),o=u[0],p=u[1];if((0,s.useEffect)((function(){p(x.Bh.IDLE),w.getReviews(e).then((function(e){0!==e.length?(p(x.Bh["SU\u0421CESS"]),a(e)):p(x.Bh.EMPTY)}))}),[e]),o!==x.Bh.IDLE)return o===x.Bh.EMPTY?(0,d.jsx)("div",{children:"We have no reviews for this film yet."}):o===x.Bh["SU\u0421CESS"]?(0,d.jsx)("section",{children:(0,d.jsx)(m,{reviews:r})}):void 0}},1371:function(e,t,n){n.d(t,{I:function(){return p}});var r=n(5861),a=n(3144),c=n(5671),i=n(7757),s=n.n(i),u=n(3263),o=n(8131);u.Z.defaults.baseURL=o.v2;var p=(0,a.Z)((function e(){var t=this;(0,c.Z)(this,e),this.init=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTrending();case 2:case"end":return e.stop()}}),e)}))),this.getTrendingMovies=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(o.q1));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),this.getMovie=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,c,i,p,f,h,v;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(o.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,a=r.genres,c=r.id,i=r.title,p=r.poster_path,f=r.vote_average,h=r.overview,e.next=14,p;case 14:if(!e.sent){e.next=18;break}e.t0="".concat(o.PN+p),e.next=19;break;case 18:e.t0="https://via.placeholder.com/200x300";case 19:return v=e.t0,e.abrupt("return",{genres:a,id:c,title:i,posterPath:v,vote_average:f,overview:h});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getActors=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(o.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data.cast;case 5:return r=e.sent,e.next=8,r.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return{id:t,name:n,character:r,actorPhotoPath:a?"".concat(o.PN+a):"https://via.placeholder.com/150x200"}}));case 8:return a=e.sent,e.next=11,a;case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getReviews=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.searchMovie=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(o.q1,"&language=en-US&query=").concat(t));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))},8131:function(e,t,n){n.d(t,{Bh:function(){return i},PN:function(){return c},q1:function(){return r},v2:function(){return a}});var r="769e92a3a56ccf8930092eceecb76b44",a="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p/w500",i={IDLE:"idle",EMPTY:"empty","SU\u0421CESS":"su\u0441cess"}}}]);
//# sourceMappingURL=129.411e67fa.chunk.js.map