//http://twitter.github.io/typeahead.js/data/repos.json
$(document).ready(function() {
  
varun=function(){
alert("hi");
};
 
$('.example-twitter-oss .vtypeahead').typeahead([
 {
name: 'nba-teams',
	limit:5,
prefetch: 'nba.json',
header: '<h3 class="league-name">Search</h3>'
},
{
    name: 'twitter-oss',
	limit:5,
    prefetch: 'repos.json',
    template: [
      '<p class="repo-language">{{language}}</p>',
      '<p class="repo-name">{{name}}</p>',                                                                            
      '<p class="repo-description">{{description}}</p>',
'<button onclick="varun()">hi</button>',
    '<input type="text" width="2px" ></input>'
    ].join(''),
    engine: Hogan,
header: '<h3 class="league-name">Products</h3>'
  }

]);


});


