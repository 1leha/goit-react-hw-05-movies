"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[843],{843:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,c,a=t(5861),o=t(9439),s=t(7757),i=t.n(s),u=t(2791),h=t(1371),d=t(7689),l=t(9457),f=t(184),p=function(e){var n=e.genres;if(n){var t=n.map((function(e){return e.name})).join(", ");return(0,f.jsx)("div",{children:t})}},x=t(139),v=function(e){var n=e.movieDetales,t=n.genres,r=n.title,c=n.posterPath,a=n.vote_average,o=n.overview,s=a?"".concat(Math.round(10*a),"%"):"No users votes";return(0,f.jsx)(l.x,{as:"section",mb:5,pb:4,boxShadow:"toBottom",children:(0,f.jsx)(x.W,{children:(0,f.jsxs)(l.x,{display:"flex",gridGap:"20px",children:[(0,f.jsx)(l.x,{width:"200px",height:"300px",overflow:"hidden",objectFit:"cover",flex:"0 0 auto",borderRadius:"standart",children:(0,f.jsx)("img",{src:c,alt:r})}),(0,f.jsxs)(l.x,{children:[(0,f.jsx)("h2",{children:r}),(0,f.jsxs)("p",{children:["User score: ",s]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("div",{children:o}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)(p,{genres:t})]})]})})})},m=t(168),g=t(1087),b=t(6444),j=(0,b.ZP)(g.OL)(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  max-width: 100px;\n  margin-bottom: ","px;\n  padding: ","px;\n\n  background-color: ",";\n  color: ",";\n\n  border-radius: ",";\n\n  transition: ",";\n\n  &:hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.colors.backButton}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.radii.standart}),(function(e){return e.theme.transitions}),(function(e){return e.theme.colors.hovered}),(function(e){return e.theme.colors.backButtonText})),w=(0,b.ZP)(g.OL)(c||(c=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-bottom: ","px;\n  padding: ","px ","px;\n\n  background-color: ",";\n  color: ",";\n\n  border-radius: ",";\n\n  transition: ",";\n\n  &:hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.colors.backButton}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.radii.standart}),(function(e){return e.theme.transitions}),(function(e){return e.theme.colors.hovered}),(function(e){return e.theme.colors.backButtonText}),(function(e){return e.theme.colors.active}),(function(e){return e.theme.colors.backButtonText})),k=new h.I,y=function(){var e,n,t=(0,d.UO)().movieId,r=(0,u.useState)({}),c=(0,o.Z)(r,2),s=c[0],h=c[1],p=null!==(e=null===(n=(0,d.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"",m=!Object.keys(s).length;if((0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,k.getMovie(n);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(n){e.apply(this,arguments)}(t)}),[t]),!m)return(0,f.jsxs)("main",{children:[(0,f.jsx)(x.W,{children:(0,f.jsx)(j,{to:p,children:"Go back"})}),(0,f.jsx)(v,{movieDetales:s}),(0,f.jsx)(l.x,{as:"section",pb:4,children:(0,f.jsxs)(x.W,{children:[(0,f.jsx)("h3",{children:"Additional info"}),(0,f.jsxs)(l.x,{as:"ul",display:"flex",gridGap:3,children:[(0,f.jsx)(l.x,{as:"li",children:(0,f.jsx)(w,{to:"cast",state:{from:p},children:"Cast"})}),(0,f.jsx)(l.x,{as:"li",children:(0,f.jsx)(w,{to:"reviews",state:{from:p},children:"Reviews"})})]}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(d.j3,{})})]})})]})}},1371:function(e,n,t){t.d(n,{I:function(){return h}});var r=t(5861),c=t(3144),a=t(5671),o=t(7757),s=t.n(o),i=t(3263),u=t(8131);i.Z.defaults.baseURL=u.v2;var h=(0,c.Z)((function e(){var n=this;(0,a.Z)(this,e),this.init=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getTrending();case 2:case"end":return e.stop()}}),e)}))),this.getTrendingMovies=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(u.q1));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return t=e.sent,e.next=8,t;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),this.getMovie=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,c,a,o,h,d,l,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"?api_key=").concat(u.q1,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,c=r.genres,a=r.id,o=r.title,h=r.poster_path,d=r.vote_average,l=r.overview,e.next=14,h;case 14:if(!e.sent){e.next=18;break}e.t0="".concat(u.PN+h),e.next=19;break;case 18:e.t0="https://via.placeholder.com/200x300";case 19:return f=e.t0,e.abrupt("return",{genres:c,id:a,title:o,posterPath:f,vote_average:d,overview:l});case 21:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.getActors=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(u.q1,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.data.cast;case 5:return r=e.sent,e.next=8,r.map((function(e){var n=e.id,t=e.name,r=e.character,c=e.profile_path;return{id:n,name:t,character:r,actorPhotoPath:c?"".concat(u.PN+c):"https://via.placeholder.com/150x200"}}));case 8:return c=e.sent,e.next=11,c;case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.getReviews=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(u.q1,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.searchMovie=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(u.q1,"&language=en-US&query=").concat(n));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}))},8131:function(e,n,t){t.d(n,{Bh:function(){return o},PN:function(){return a},q1:function(){return r},v2:function(){return c}});var r="769e92a3a56ccf8930092eceecb76b44",c="https://api.themoviedb.org/3",a="https://image.tmdb.org/t/p/w500",o={IDLE:"idle",EMPTY:"empty","SU\u0421CESS":"su\u0441cess"}}}]);
//# sourceMappingURL=843.d9a5ca3b.chunk.js.map