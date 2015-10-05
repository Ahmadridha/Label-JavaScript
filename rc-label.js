// ----------------------------------------
// SHOW RECENT LABEL BY SC COMMUNITY
// ----------------------------------------
// Design : Kang eNeS
// Date   : 07-03-2010
// URL    : ruangsc.blogspot.com
// ----------------------------------------

function showrecentposts(json) {
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }}
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    document.write(posttitle);}
    if (standardstyling) document.write('</li>');
document.write('<div style="font-family:Arial; font-size:85%; margin-top:5px;"><a href="http://ruangsc.blogspot.com/2010/04/menampilkan-judul-artikel-dari-satu.html" target="_blank" title="Cara menampilkan judul artikel dari label">Widget by SC Community</a></div>');
}