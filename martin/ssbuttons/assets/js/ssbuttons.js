// Plugin default
// var title = document.title;
// var url   = document.location.href;
// var links = document.querySelectorAll('.SocialSharingButtons a');

// for(var i = 0; i < links.length; i++) {
//     links[i].href = links[i].href.replace(/___title___/g, encodeURI(title));
//     links[i].href = links[i].href.replace(/___url___/g  , encodeURI(url));
// }

if (location.href.match('/blog/post/')){
    // /blog/post/
    var title = document.title;
    var url   = document.location.href;
    var links = document.querySelectorAll('.SocialSharingButtons a');

    for(var i = 0; i < links.length; i++) {
        links[i].href = links[i].href.replace(/___title___/g, encodeURI(title));
        links[i].href = links[i].href.replace(/___url___/g  , encodeURI(url));
    }
} else if (location.href.match('/blog/author/{{user_id}}')){
    // /blog/author/{{user_id}}
    var title = document.title;
    var url   = document.location.href;
    var links = document.querySelectorAll('.SocialSharingButtons a');

    for(var i = 0; i < links.length; i++) {
        links[i].href = links[i].href.replace(/___title___/g, encodeURI(title));
        links[i].href = links[i].href.replace(/___url___/g  , encodeURI(url));
    }
} else {
    // /blog | /blog/category
    var links = jQuery('.SocialSharingButtons a');

    links.each(function(index, item){
        var link = jQuery(item).closest('ul').closest('li').find("a").first(); 
        var url = link.attr('href');
        var title = link.html();
        
        item.href = item.href.replace(/___title___/g, encodeURI(title));
        item.href = item.href.replace(/___url___/g, encodeURI(url));
    });
}


