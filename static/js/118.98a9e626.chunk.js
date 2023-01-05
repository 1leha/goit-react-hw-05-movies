"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[118],{3118:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r,a,c,i=n(9439),u=n(2791),o=n(1087),s=n(168),f=n(6444),p=f.ZP.form(r||(r=(0,s.Z)(["\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.space[4]})),h=f.ZP.input(a||(a=(0,s.Z)(["\n  padding: ","px;\n"])),(function(e){return e.theme.space[2]})),v=f.ZP.button(c||(c=(0,s.Z)(["\n  padding: ","px;\n"])),(function(e){return e.theme.space[2]})),l=n(184),m=function(e){var t=e.onSubmit;return(0,l.jsxs)(p,{onSubmit:t,autoComplete:"off",children:[(0,l.jsx)(h,{type:"text",name:"search"}),(0,l.jsx)(v,{type:"subbmit",children:"Search"})]})},d=n(4149),x=n(139),g=new(n(1371).I),Z=function(){var e=(0,u.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,o.lr)(),c=(0,i.Z)(a,2),s=c[0],f=c[1],p=s.get("query");return(0,u.useEffect)((function(){p&&g.searchMovie(p).then(r)}),[p]),(0,l.jsxs)(x.W,{children:[(0,l.jsx)("h2",{children:"Find your movie"}),(0,l.jsx)(m,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value.trim().toLowerCase();f(""!==t?{query:t}:{}),e.target.reset()}}),n.length>0&&(0,l.jsx)(d.Z,{films:n})]})}},4149:function(e,t,n){n.d(t,{Z:function(){return v}});n(2791);var r,a,c=n(7689),i=n(168),u=n(1087),o=n(6444),s=(0,o.ZP)(u.OL)(r||(r=(0,i.Z)(["\n  font-size: ",";\n\n  color: ",";\n\n  &.active {\n    color: ",";\n  }\n\n  &:hover:not(.active) {\n    color: ",";\n  }\n\n  transition: ",";\n"])),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.colors.link}),(function(e){return e.theme.colors.active}),(function(e){return e.theme.colors.hovered}),(function(e){return e.theme.transitions})),f=o.ZP.li(a||(a=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(e){return e.theme.space[2]})),p=n(184),h=function(e){var t=e.title,n=e.linkTo,r=e.linkFrom;return(0,p.jsx)(f,{children:(0,p.jsx)(s,{to:n,state:r,children:t})})},v=function(e){var t=e.films,n=e.path,r=void 0===n?"":n,a=(0,c.TH)();return(0,p.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title;return(0,p.jsx)(h,{title:n,linkTo:"".concat(r).concat(t),linkFrom:{from:a}},t)}))})}},1371:function(e,t,n){n.d(t,{I:function(){return f}});var r=n(5861),a=n(3144),c=n(5671),i=n(7757),u=n.n(i),o=n(3263),s=n(8131);o.Z.defaults.baseURL=s.v2;var f=(0,a.Z)((function e(){var t=this;(0,c.Z)(this,e),this.init=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTrending();case 2:case"end":return e.stop()}}),e)}))),this.getTrendingMovies=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/movie/day?api_key=".concat(s.q1));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),this.getMovie=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,c,i,f,p,h,v;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(s.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,a=r.genres,c=r.id,i=r.title,f=r.poster_path,p=r.vote_average,h=r.overview,e.next=14,f;case 14:if(!e.sent){e.next=18;break}e.t0="".concat(s.PN+f),e.next=19;break;case 18:e.t0="https://via.placeholder.com/200x300";case 19:return v=e.t0,e.abrupt("return",{genres:a,id:c,title:i,posterPath:v,vote_average:p,overview:h});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getActors=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(s.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data.cast;case 5:return r=e.sent,e.next=8,r.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return{id:t,name:n,character:r,actorPhotoPath:a?"".concat(s.PN+a):"https://via.placeholder.com/150x200"}}));case 8:return a=e.sent,e.next=11,a;case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getReviews=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s.q1,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.searchMovie=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/movie?api_key=".concat(s.q1,"&language=en-US&query=").concat(t));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))},8131:function(e,t,n){n.d(t,{Bh:function(){return i},PN:function(){return c},q1:function(){return r},v2:function(){return a}});var r="769e92a3a56ccf8930092eceecb76b44",a="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p/w500",i={IDLE:"idle",EMPTY:"empty","SU\u0421CESS":"su\u0441cess"}}}]);
//# sourceMappingURL=118.98a9e626.chunk.js.map