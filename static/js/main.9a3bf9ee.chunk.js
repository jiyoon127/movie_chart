(this.webpackJsonpmovie_chart=this.webpackJsonpmovie_chart||[]).push([[0],{162:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(36),i=a.n(s),c=a(14),m=a.n(c),o=a(37),l=a(38),u=a(39),v=a(42),d=a(40),p=a(43),_=a(41),g=a.n(_),y=(a(67),a(68),function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},i.slice(0,3).map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))}),h=(a(162),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(o.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rathing");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(n.Component));i.a.render(r.a.createElement(h,null),document.getElementById("root"))},44:function(e,t,a){e.exports=a(163)},67:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.9a3bf9ee.chunk.js.map