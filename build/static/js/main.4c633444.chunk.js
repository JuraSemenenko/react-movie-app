(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(56)},30:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(30),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),d=a(11),p=a(58),h=function(e){var t=e.title,a=e.id,n=e.posterPath,l=e.cardType;return r.a.createElement("div",{className:"card col-md-4"},r.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"Poster"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement(p.a,{className:"btn btn-primary",to:"/".concat(l,"/").concat(a)},"Details")))},f=function(e){var t=e.data,a=e.cardType,n=e.title,l=e.posterPath;e.isRenderGallery;return t.map(function(e){return r.a.createElement(h,{key:e.id,id:e.id,title:e[n],posterPath:e[l],cardType:a})})},v=function(e){var t=e.data,a=e.cardType,n=e.title,l=e.vote;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Avg. rating"),r.a.createElement("th",{scope:"col"},"Favorites"),r.a.createElement("th",{scope:"col"},"Link"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e[n]),r.a.createElement("td",null,e[l]),r.a.createElement("td",null,"Favorites"),r.a.createElement("td",null,r.a.createElement(p.a,{className:"btn btn-primary",to:"/".concat(a,"/").concat(e.id)},"Details")))})))},g=function(e){var t=e.data,a=e.cardType,n=e.posterPath,l=e.title,c=e.isRenderGallery;return r.a.createElement("div",{className:"d-flex flex-wrap"},c?r.a.createElement(f,{data:t,title:l,posterPath:n,cardType:a}):r.a.createElement(v,{data:t,title:l,posterPath:n,cardType:a,vote:"popularity"}))},E=a(16),y=a.n(E),b=function(e){var t=[];for(var a in e)e[a]&&t.push(a);return t.join(",")},N=function(e){var t=e.currentPage,a=e.onClick,n=e.totalPages,l=function(e,t){return e<=5&&t<=5?y.a.range(1,t+1):e<=3&&t>5?y.a.range(1,6):t>5&&e<=t-2?y.a.range(e-2,e+3):t>5&&t-2<=e<=t?y.a.range(t-4,t+1):void 0}(t,n);return r.a.createElement("nav",{className:"d-flex justify-content-center"},r.a.createElement("ul",{className:"pagination"},l.map(function(e){return r.a.createElement("li",{key:e,className:t===e?"page-item active":"page-item",onClick:function(){return a(e)}},r.a.createElement("button",{className:"page-link"},e))})))},j=function(e){var t=e.btnClick,a=e.isRenderGallery;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"submit",className:a?"btn btn-primary":"btn btn-secondary",onClick:t},r.a.createElement("i",{class:"fa fa-table","aria-hidden":"true"})),r.a.createElement("button",{type:"submit",className:a?"btn btn-secondary":"btn btn-primary",onClick:t},r.a.createElement("i",{class:"fa fa-list","aria-hidden":"true"})))},w=function(e){var t=e.type,a=e.genres||"",n=e.query||"",r=e.page||"1",l=e.sortBy||"popularity.desc",c=e.adult||!0,o="".concat("https://api.themoviedb.org/3/").concat({movie:"search/movie",discoverMovies:"discover/movie",popularPerson:"person/popular"}[t],"?api_key=").concat("340af08aad86d2a893fef0bc25ea615d","&page=").concat(r,"&sort_by=").concat(l,"&query=").concat(n,"&with_genres=").concat(a,"&include_adult=").concat(c);return fetch(o).then(function(e){return e.json()})},k=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],P=function(e){var t=e.data,a=e.handleChacked,n=e.statusData;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("input",{type:"checkbox",id:e.id,name:e.name,value:e.id,onChange:a,checked:n[e.id]||!1}),r.a.createElement("label",{htmlFor:e.id}," ",e.name))}))},C=function(e){var t=e.value,a=e.searchChange,n=e.acceptSearch,l=e.handleChacked,c=e.filteredGenres,o=e.acceptGenresSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search Movie",value:t,onChange:a}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:n},"Search by title"),r.a.createElement(P,{data:k,handleChacked:l,statusData:c}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:o},"Search by genres"))},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],currentPage:1,totalPages:13,value:"",filter:{genres:{}},searchType:"discoverMovies",movieQuery:"",genresQuery:"",isRenderGallery:!0},a.handlePageClick=function(e){var t=a.state,n=t.genresQuery,r=t.movieQuery,l=t.searchType;w({type:l,genres:n,page:e,query:r}).then(function(t){return a.setState({data:t.results,currentPage:e})})},a.handleInput=function(e){a.setState({value:e.target.value})},a.handleChangeView=function(){a.setState({isRenderGallery:!a.state.isRenderGallery})},a.handleChacked=function(e){var t=Object(d.a)({},a.state.filter.genres);t[e.target.id]=!t[e.target.id],a.setState({filter:{genres:t}})},a.handleTitleSearch=function(){var e=a.state.value.toLowerCase();w({type:"movie",query:e}).then(function(t){console.log("fetchingData",t),a.setState({data:t.results,searchType:"movie",totalPages:t.total_pages,movieQuery:e,currentPage:1})})},a.handleGenresSearch=function(){var e=Object(d.a)({},a.state.filter.genres),t=b(e);w({type:"discoverMovies",genres:t}).then(function(e){return a.setState({data:e.results,searchType:"discoverMovies",totalPages:e.total_pages,genresQuery:t,currentPage:1})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.currentPage;w({type:"discoverMovies",page:t}).then(function(t){return e.setState({data:t.results,totalPages:t.total_pages})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isRenderGallery;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("h2",null,"Tatal pages of Movies = ",this.state.totalPages,", current page -"," ",this.state.currentPage),r.a.createElement("div",null,r.a.createElement(j,{btnClick:this.handleChangeView,isRenderGallery:a}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(C,{value:this.state.value,searchChange:this.handleInput,acceptSearch:this.handleTitleSearch,handleChacked:this.handleChacked,filteredGenres:this.state.filter.genres,acceptGenresSearch:this.handleGenresSearch})),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"d-flex flex-wrap"},r.a.createElement(g,{data:t,cardType:"movie",title:"title",posterPath:"poster_path",isRenderGallery:a})),r.a.createElement(N,{totalPages:this.state.totalPages,currentPage:this.state.currentPage,onClick:this.handlePageClick}))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],searchType:"popularPerson",currentPage:1,isRenderGallery:!0,totalPages:1},a.handlePageClick=function(e){var t=a.state.searchType;w({type:t,page:e}).then(function(t){return a.setState({data:t.results,currentPage:e})})},a.handleChangeView=function(){a.setState({isRenderGallery:!a.state.isRenderGallery})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={page:"1",type:this.state.searchType};w(t).then(function(t){return e.setState({data:t.results,totalPages:t.total_pages})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isRenderGallery;return console.log("people_data",t),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("h2",null,"Tatal pages of People = ",this.state.totalPages,", current page -"," ",this.state.currentPage),r.a.createElement("div",null,r.a.createElement(j,{btnClick:this.handleChangeView,isRenderGallery:a}))),r.a.createElement(g,{data:t,cardType:"people",title:"name",posterPath:"profile_path",isRenderGallery:a}),r.a.createElement(N,{totalPages:this.state.totalPages,currentPage:this.state.currentPage,onClick:this.handlePageClick}))}}]),t}(n.Component),x=a(19),T=a.n(x);T.a.initializeApp({apiKey:"AIzaSyBWk3fur0gj0umQq-5vXT10qRvgvOW7izM",authDomain:"react-movie-app-cc9d9.firebaseapp.com",databaseURL:"https://react-movie-app-cc9d9.firebaseio.com",projectId:"react-movie-app-cc9d9",storageBucket:"react-movie-app-cc9d9.appspot.com",messagingSenderId:"70150364865"});var A=T.a,I=(T.a.database(),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.id,data:{},commentText:""},a.handleCommentText=function(e){a.setState({commentText:e.target.value})},a.handleAddComment=function(e){e.preventDefault();var t=A.auth().currentUser,n=a.state.id+"/",r=+new Date,l=a.state.commentText,c=t.displayName;a.setState({commentText:""}),function(e,t,n,r,l){A.database().ref(a.props.commentTo+"/"+t+"comments/"+n).set({authoName:l,authorUID:e,text:r})}(t.uid,n,r,l,c)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;A.database().ref(this.props.commentTo+"/"+this.state.id+"/comments").on("value",function(t){e.setState({data:t.val()},console.log("state",e.state,e))})}},{key:"render",value:function(){var e=this.state.data,t=e?Object.keys(e):[];return r.a.createElement("div",{className:"container"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"textarea"},"Your comment"),r.a.createElement("textarea",{className:"form-control",id:"textarea",rows:"3",value:this.state.commentText,onChange:this.handleCommentText})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleAddComment},"Add comment")),t.map(function(t){return r.a.createElement("div",{key:t,className:"border border-primary rounded"},r.a.createElement("p",null,e[t].authoName),r.a.createElement("p",null,r.a.createElement("b",null,e[t].text)))}))}}]),t}(n.Component)),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{},movieId:a.props.match.params.id,videos:{results:[]}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/".concat(this.state.movieId,"?api_key=340af08aad86d2a893fef0bc25ea615d&language=en-US")).then(function(e){return e.json()}).then(function(t){return e.setState({data:t})}),fetch("https://api.themoviedb.org/3/movie/".concat(this.state.movieId,"/videos?api_key=340af08aad86d2a893fef0bc25ea615d&language=en-US")).then(function(e){return e.json()}).then(function(t){return e.setState({videos:t})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.movieId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:"Poster"}),r.a.createElement("h2",null,t.title),r.a.createElement("p",null,t.overview)),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path),className:"img-fluid",alt:"Responsive"}),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Avg. vote"),r.a.createElement("td",null,t.vote_average)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Genres"),r.a.createElement("td",null,t.genres?t.genres.map(function(e){return e.name}).join(", "):null)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Release date"),r.a.createElement("td",null,t.release_date?t.release_date.split("-").join("."):null)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Production countries"),r.a.createElement("td",null,t.production_countries?t.production_countries.map(function(e){return e.name}).join(", "):null)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Original language"),r.a.createElement("td",null,t.original_language?t.original_language.toUpperCase():null)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Runtime"),r.a.createElement("td",null,t.runtime," minutes"))))))),r.a.createElement(I,{id:a,commentTo:"movie"}))}}]),t}(n.Component),D=function(e,t,a){e&&t&&a&&A.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=A.auth().currentUser;e.updateProfile({displayName:a}).then(function(){F(e)})}).catch(function(e){var t=e.code,a=e.message;console.log(t,a)})},G=function(e,t){e&&t&&A.auth().signInWithEmailAndPassword(e,t).catch(function(e){var t=e.code,a=e.message;console.log(t,a)})},R=function(){A.auth().signOut().then(function(){console.log("Sign-out successful.")})},F=function(e){A.database().ref("users/"+e.uid).set({name:e.displayName})},M=function(e){var t=e.isAuth,a=e.profileName;return r.a.createElement("nav",{className:"nav nav-pills d-flex justify-content-between"},r.a.createElement("ul",{className:"d-flex justify-content-start"},r.a.createElement("li",{className:"nav-item flex-sm-fill text-sm-center"},r.a.createElement(p.a,{className:"nav-link",to:"/"},"Movie Data Base")),r.a.createElement("li",{className:"nav-item flex-sm-fill text-sm-center"},r.a.createElement(p.a,{className:"nav-link",to:"/people-data-base"},"People"))),r.a.createElement("ul",{className:"d-flex justify-content-end"},r.a.createElement("li",{className:"nav-item flex-sm-fill text-sm-center"},r.a.createElement(p.a,{className:"nav-link",to:"/profile"},"Profile ".concat(a))),!t&&r.a.createElement("li",{className:"nav-item flex-sm-fill text-sm-center"},r.a.createElement(p.a,{className:"nav-link",to:"/login"},"Login")),t&&r.a.createElement("li",{className:"nav-item flex-sm-fill text-sm-center"},r.a.createElement("button",{className:"btn btn-outline-success",type:"button",onClick:function(){return R()}},"Logout"))))},L=function(){return r.a.createElement("h1",null,"404 Not Found")},U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){a.props.clearLoginData(),R()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile"),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleLogout},"Logout"))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleLogin=function(){G(a.state.email,a.state.password),a.props.history.push("/")},a.handleInput=function(e){var t=Object(d.a)({},a.state);t[e.currentTarget.type]=e.currentTarget.value,a.setState(Object(d.a)({},t))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",value:t,onChange:this.handleInput}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:a,onChange:this.handleInput})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleLogin},"Login"),r.a.createElement(p.a,{className:"btn btn-primary",to:"/sign-in"},"Sign In")))))}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:""},a.handleSignin=function(e){e.preventDefault(),D(a.state.email,a.state.password,a.state.name),a.props.history.push("/")},a.handleInput=function(e){var t=Object(d.a)({},a.state);t[e.currentTarget.id]=e.currentTarget.value,a.setState(Object(d.a)({},t))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.name;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Your full name"),r.a.createElement("input",{id:"name",type:"text",className:"form-control",placeholder:"Your full name",value:n,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{id:"email",type:"email",className:"form-control",placeholder:"Enter email",value:t,onChange:this.handleInput}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password",className:"form-control",placeholder:"Password",value:a,onChange:this.handleInput})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSignin},"Sign In")))))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{},peopleId:a.props.match.params.id},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/person/".concat(this.state.peopleId,"?api_key=340af08aad86d2a893fef0bc25ea615d&language=en-US")).then(function(e){return e.json()}).then(function(t){return e.setState({data:t})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.peopleId;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:"Poster"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h1",null,t.name),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Place of birth"),r.a.createElement("td",null,t.place_of_birth)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Popularity"),r.a.createElement("td",null,t.popularity)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Birthday"),r.a.createElement("td",null,t.birthday?t.birthday.split("-").join("."):null)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Homepage"),r.a.createElement("td",null,t.homepage)))),r.a.createElement("p",null,t.biography)))),r.a.createElement(I,{id:a,commentTo:"people"}))}}]),t}(n.Component),B=a(24),H=a(62),V=a(59),z=function(e){var t=e.component,a=e.isAuth,n=Object(B.a)(e,["component","isAuth"]);return r.a.createElement(H.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(V.a,{to:"/login"})}}))},Y=a(61),J=(a(50),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{isAuth:!1,uid:"",userName:""}},a.setLoginData=function(e){a.setState({user:e})},a.clearLoginData=function(){a.setState({user:{isAuth:!1,uid:""}})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;A.auth().onAuthStateChanged(function(t){t?(console.log("user",t),e.setState({user:{isAuth:!0,uid:t.uid,email:t.email,userName:t.displayName}})):(console.log("no user"),e.setState({user:{isAuth:!1,uid:"",userName:""}}))})}},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{isAuth:t.isAuth,profileEmail:t.email,profileName:t.userName}),r.a.createElement(Y.a,null,r.a.createElement(H.a,{path:"/movie/:id",component:_}),r.a.createElement(H.a,{path:"/people/:id",component:q}),r.a.createElement(H.a,{path:"/people-data-base",component:S}),r.a.createElement(H.a,{path:"/not-found",component:L}),r.a.createElement(H.a,{path:"/sign-in",component:Q}),r.a.createElement(z,{path:"/profile",isAuth:t.isAuth,component:U}),r.a.createElement(H.a,{path:"/login",render:function(t){return r.a.createElement(W,Object.assign({getUserData:e.setLoginData},t))}}),r.a.createElement(H.a,{path:"/",exact:!0,component:O}),r.a.createElement(V.a,{to:"/not-found"})))}}]),t}(n.Component)),K=a(60);a(52),a(54);c.a.render(r.a.createElement(K.a,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.4c633444.chunk.js.map