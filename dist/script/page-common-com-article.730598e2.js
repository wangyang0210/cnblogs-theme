"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[148],{879:function(t,e){e.Z='<div> <nav id="articleDirectory"> <ul class="nav nav-pills"> ##dirHtml## </ul> </nav> </div>'},479:function(t,e,o){o.a(t,(async function(t,n){try{o.d(e,{Z:function(){return l}});var i=o(879);function l(){let t=$("body"),e=$("#cnblogs_post_body"),o=e.find(":header");if(o.length>0){let l=[];$.each(o,(function(){l.push(parseInt($(this)[0].tagName.replace(/H/g,"")))}));let a=(n=l,[...new Set(n)]).sort(),c="";$.each(o,(function(){let t=$(this),e=parseInt(t[0].tagName.replace(/H/g,"")),o=t.attr("id"),n="tid-"+$.__tools.randomString(6);if(t.attr("tid",n),!o||/^-?[\W]+.*/.test(o)){if(o){let t=$('.toc a[href="#'+o+'"]');t.length&&t.attr("href","#"+n)}o=n,t.attr("id",o)}let i=a.indexOf(e),l=(0===i||-1===i?"":"&nbsp;&nbsp;&nbsp;&nbsp;".repeat(i))+t.text();c+='<li class="nav-item"><a class="nav-link" href="#'+o+'" goto="'+n+'" onclick="return false;">'+l+"</a></li>"}));let r=$.__tools.tempReplacement(i.Z,"dirHtml",c);e.append(r),t.attr("data-bs-spy","scroll"),t.attr("data-bs-target","#articleDirectory"),t.attr("data-bs-offset","0"),t.attr("tabindex","0"),t.scrollspy({target:"#articleDirectory"}),$.__config.articleDirectory.autoWidthScroll||($("#articleDirectory ul li").addClass("articleDirectory-overflow"),$("#articleDirectory ul li a").addClass("articleDirectory-overflow")),$.__event.scroll.handle.push((()=>{let t=$("#articleDirectory");$.__event.scroll.temScroll<$.__event.scroll.docScroll&&$.__event.scroll.homeScroll<=$.__event.scroll.docScroll&&t.addClass("articleDirectoryFixed"),$.__event.scroll.temScroll>$.__event.scroll.docScroll&&$.__event.scroll.homeScroll>=$.__event.scroll.docScroll&&t.removeClass("articleDirectoryFixed")})),$.__event.resize.handle.push((()=>{const t=parseFloat(document.body.clientWidth),e=$("#articleDirectory");if(e.length>0){let o=$("#home").outerWidth(!1),n=e.outerWidth(!0),i=(t-o)/2,l=i-n-5,a=$(".main-header").outerHeight();if("left"===$.__config.articleDirectory.position)e.css({top:a+5+"px",left:(l>0?l:5)+"px",width:(i>190&&i<260?i-10:n)+"px"});else e.css({top:a+5+"px",right:(l>0?l:5)+"px",width:(i>190&&i<260?i-10:n)+"px"});t<=$.__config.articleDirectory.minBodyWeight||i<=190?e.hide():e.show()}})),$("#articleDirectory .nav-link").click((function(){let t=$(':header[tid="'+$(this).attr("goto")+'"]');t.length&&$.__tools.actScroll(t.offset().top+3,500)}))}var n}await $.__tools.dynamicLoadingJs($.__config.default.bootstrap).catch((t=>console.error("bootstrap.js",t))),n()}catch(a){n(a)}}),1)},796:function(t,e,o){o.d(e,{Z:function(){return i}});var n=o(991);function i(){(()=>{const t=$("#cb_post_title_url").text();$.__config.animate.articleTitle.enable?function(t,e,o,n,i,l){void 0===n&&(n=["#fff"]);let a=!0,c=document.getElementById(o),r=1,s=1,d=!1,f=document.getElementById(e);c.innerHTML="_",f.setAttribute("style","color:"+n[0]);let _=window.setInterval((function(){if(0===r&&!1===d)d=!0,f.innerHTML=t[0].substring(0,r),window.setTimeout((function(){let e=n.shift();n.push(e);let o=t.shift();t.push(o),s=1,f.setAttribute("style","color:"+n[0]),r+=s,d=!1}),1e3);else if(i&&r===t[0].length+1&&!1===d)d=!0,window.setTimeout((function(){s=-1,r+=s,d=!1}),1e3);else if(!1===d){let e=t[0].substring(0,r);i||e!==t[0]?(f.innerHTML=t[0].substring(0,r),r+=s):window.clearInterval(_)}l&&l()}),180);window.setInterval((function(){!0===a?(c.style.visibility="hidden",a=!1):(c.style.visibility="visible",a=!0)}),400)}([t],"sbTitleText","sbTitleConsole",["#fff"],!1,$.__tools.setDomHomePosition):$("#sbTitleText").text(t).css("color","#fff"),$(".inner").css("max-width","100vw"),$.__tools.setDomHomePosition()})(),$("#articleInfo").append('<p class="article-info-text"></p>'),$.__timeIds.postDescTid=window.setInterval((()=>{if("..."!==$("#post_view_count").text()&&"..."!==$("#post_comment_count").text()){let t=$(".postDesc").show().text();$("#articleInfo p.article-info-text").html(function(t){let e=(0,n.Z)(t),o=$("#cnblogs_post_body").text().length;return'<span class="postMeta"><i class="iconfont icon-schedule"></i>'+e.date.replace(/-/g,"/")+'<i class="iconfont icon-browse"></i>'+e.vnum+'<i class="iconfont icon-interactive"></i>'+e.cnum+'<i class="iconfont icon-hot"></i>'+e.tnum+'<br><i class="iconfont icon-article"></i>'+o+'<i class="iconfont icon-kafei"></i>'+$.__tools.minToTime(o/500)+" ~ "+$.__tools.minToTime(o/300)+"</span>"}(t)),$.__tools.setDomHomePosition(),$.__tools.clearIntervalTimeId($.__timeIds.postDescTid)}}),1e3),$.__timeIds.articleInfoClassTId=window.setInterval((()=>{let t=$("#BlogPostCategory").find("a");t.length>0&&($.__tools.articleInfo(t,1),$.__tools.setDomHomePosition(),$.__tools.clearIntervalTimeId($.__timeIds.articleInfoClassTId))}),1e3),$.__timeIds.articleInfoTagTId=window.setInterval((()=>{let t=$("#EntryTag").find("a");t.length>0&&($.__tools.articleInfo(t,2),$.__tools.setDomHomePosition(),$.__tools.clearIntervalTimeId($.__timeIds.articleInfoTagTId))}),1e3),$.__config.articleContent.link&&($("#cnblogs_post_body a").addClass("iconfont icon-fenxiang"),$(".footnote-ref a").removeClass("iconfont icon-fenxiang"),$(".footnotes-list a").removeClass("iconfont icon-fenxiang")),(()=>{let t=$("#cnblogs_post_body").find(":header");if($.__config.articleContent.iconfont&&t.length>0){let e=$.__config.articleContent.iconfontArr;t.html(((o,n)=>{let i=[],l=Math.floor(Math.random()*(e.length-o)+o);-1==i.indexOf(l)?(i.push(l),$('<svg class="icon"> <use xlink:href="#icon-'+e[l]+'"></use></svg>').prependTo(t[o])):o--}))}})(),$(".blogpost-body p").html(((t,e)=>/^\?&gt;/.test(e)?'<p class="tip">'+e.slice(5).trim()+"</p>":/^!&gt;/.test(e)?'<p class="warn">'+e.slice(5).trim()+"</p>":void 0)),$(".blogpost-body p").html(((t,e)=>e.replace(/~bk|bk~|~b|b~|~c|c~|~u|u~|~h|h~|~s|s~|~x|x~/g,(function(t){return{"~bk":"<mbk>","bk~":"</mbk>","~b":"<mbox>","b~":"</mbox>","~c":"<mc>","c~":"</mc>","~u":"<mu>","u~":"</mu>","~h":"<mhl>","h~":"</mhl>","~s":"<mst>","s~":"</mst>","~x":"<mco>","x~":"</mco>"}[t]})))),$.__tools.dynamicLoadingJs($.__config.default.roughNotation).then((t=>{setTimeout((()=>{const{annotate:t,annotationGroup:e}=window.RoughNotation,o=document.querySelector("mu")||"",n=document.querySelector("mc")||"",i=document.querySelector("mbox")||"",l=document.querySelector("mhl")||"",a=document.querySelector("mbk")||"",c=document.querySelector("mst")||"",r=document.querySelector("mco")||"";e([t(o,$.__config.articleContent.roughNotation.underline),t(n,$.__config.articleContent.roughNotation.circle),t(i,$.__config.articleContent.roughNotation.box),t(l,$.__config.articleContent.roughNotation.highlight),t(a,$.__config.articleContent.roughNotation.bracket),t(c,$.__config.articleContent.roughNotation.strikeThrough),t(r,$.__config.articleContent.roughNotation.crossedOff)]).show()}),2e3)}))}},47:function(t,e,o){o.d(e,{Z:function(){return n}});function n(){let t=$.__config.articleSuffix.imgUrl?$.__config.articleSuffix.imgUrl:$.__config.info.avatar?$.__config.info.avatar:$.__config.default.avatar,e=$("#articleAuthor"),o=$("#articleSource"),n=e.length?e.val():$.__config.info.name,i=o.length?o.val():$.__status.url,l=o.length?o.val():$.__status.homeUrl,a=e.length||o.length?"原":"本",c=$.__config.articleSuffix.aboutHtml?$.__config.articleSuffix.aboutHtml:'评论和私信会在第一时间回复。或者<a href="https://msg.cnblogs.com/msg/send/'+$.__status.user+'" target="_blank">直接私信</a>我。',r=$.__config.articleSuffix.copyrightHtml?$.__config.articleSuffix.copyrightHtml:'本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" alt="BY-NC-SA" title="BY-NC-SA" target="_blank">BY-NC-SA</a> 许可协议。转载请注明出处！',s=$.__config.articleSuffix.supportHtml?$.__config.articleSuffix.supportHtml:'如果您觉得文章对您有帮助，可以点击文章右下角<strong><span style="color: #ff0000; font-size: 12pt;">【<a id="post-up" onclick="votePost('+$.__status.articleId+',\'Digg\')" href="javascript:void(0);">推荐</a>】</span></strong>一下。',d=[["origin",a],["imgUrl",t],["homeUrl",l],["author",n],["source",i],["aboutHtml",c],["copyrightHtml",r],["supportHtml",s]],f=$.__tools.batchTempReplacement('<span class="articleSuffix-flg"> <br><p class="essaySuffix-eof">__EOF__</p> <div id="articleSuffix"> <div class="articleSuffix-bg"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.78 155.96"> <path d="M10.5,99.81a1.9,1.9,0,0,0-.53-.09,1.66,1.66,0,0,0-1.64,1.65A1.64,1.64,0,0,0,10,103a1.57,1.57,0,0,0,.87-.25l26.76,26.82.45-1.08L11.52,101.91A1.65,1.65,0,0,0,10.5,99.81Zm-.13,2a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.58.58,0,0,1,.57-.57h0a.57.57,0,0,1,.56.58A.55.55,0,0,1,10.37,101.77Z" style="fill:#c5c9e0"></path><path d="M56.15,117.58H39.06l0-.09a1.65,1.65,0,0,0-1.36-1H37.5a1.65,1.65,0,1,0,1.56,2.19H55.7L92.92,156h41.44v-1.08h-41Zm-18.25.94a.56.56,0,0,1-.79,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h0a.58.58,0,0,1,.57.58A.54.54,0,0,1,37.9,118.52Z" style="fill:#c5c9e0"></path><path d="M23.52,50.32a1.65,1.65,0,0,0,1.55-1.11H55.28l48-48.13h31.06V0H102.85l-48,48.13H25.07a1.64,1.64,0,0,0-2.09-1,1.64,1.64,0,0,0,.54,3.2Zm0-2.21a.57.57,0,0,1,0,1.13.57.57,0,1,1,0-1.13Z" style="fill:#c5c9e0"></path><polygon points="102.86 0 102.86 0 102.86 0 102.86 0" style="fill:#c5c9e0"></polygon><path d="M107.72,12.14h26.64V11.07H107.27L57.4,61H3.09a1.66,1.66,0,0,0-1.45-.86H1.52A1.65,1.65,0,1,0,2.81,63a1.59,1.59,0,0,0,.45-.87H57.85ZM2.05,62.23a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h.09a.57.57,0,0,1,.32,1Z" style="fill:#c5c9e0"></path><path d="M134.36,43.22V42.14h-22.3l-9.62,9.63a1.64,1.64,0,0,0-2.19.77,1.61,1.61,0,0,0-.17.71,1.65,1.65,0,1,0,3.29,0,1.61,1.61,0,0,0-.16-.72l9.3-9.32Zm-32.64,10.6a.57.57,0,0,1,0-1.13.57.57,0,0,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M147,52.3l-9,9H111.48a1.64,1.64,0,0,0-1.61-1.33h-.14a1.65,1.65,0,1,0,1.6,2.41h27.19l9.26-9.29L147,52.3Zm-37.15,9.85a.56.56,0,0,1-.56-.57h0a.56.56,0,0,1,.56-.56h0a.57.57,0,1,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M66.79,75.35l11,11.06h56.53V85.33H78.27l-11-11.06H49.49L37.12,86.67a1.64,1.64,0,0,0-2.09,1,1.61,1.61,0,0,0-.09.54,1.65,1.65,0,0,0,3.29,0,1.68,1.68,0,0,0-.26-.89l12-12ZM36.58,88.79a.57.57,0,1,1,.57-.56A.57.57,0,0,1,36.58,88.79Z" style="fill:#c5c9e0"></path><path d="M110.61,95.55,92.8,113.4a1.62,1.62,0,1,0,.77.76l17.49-17.53h23.31V95.55ZM92.49,115.28a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.57-.57h0a.58.58,0,0,1,.56.58A.55.55,0,0,1,92.49,115.28Z" style="fill:#c5c9e0"></path><path d="M97.89,122.3H76.62L64.2,109.85a1.65,1.65,0,0,0-.77-2.2,1.77,1.77,0,0,0-.72-.17h-.14a1.65,1.65,0,0,0,.15,3.29,1.58,1.58,0,0,0,.71-.17l12.74,12.77H98.34l17.48-17.52h18.54v-1.08h-19ZM63.12,109.53a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,1.14,0A.54.54,0,0,1,63.12,109.53Z" style="fill:#c5c9e0"></path> </svg> </div> <div class="articleSuffix-left"> <img src="##imgUrl##"/> </div> <div class="articleSuffix-right"> <item> <li> <b>##origin##文作者：</b> <a href="##homeUrl##" target="_blank">##author##</a> </li> <li> <b>##origin##文链接：</b> <a href="##source##" target="_blank">##source##</a> </li> <li> <b>关于博主：</b> ##aboutHtml## </li> <li> <b>版权声明：</b> ##copyrightHtml## </li> <li> <b>声援博主：</b> ##supportHtml## </li> </item> </div> <div style="clear:both"></div> </div> </span> ',d);$("#cnblogs_post_body").append(f),(()=>{if($.__config.articleSuffix.copyText.enable){let t=$.__config.articleSuffix.copyText.length||30,e=$.__config.articleSuffix.copyText.copyright||r;function o(t){let o=t.clipboardData||window.clipboardData;if(o){t.preventDefault();let l=window.getSelection().toString()+"<br /><br /> ———————————————————————————————————————————————— <br />"+`${e} <br />`+`作者：${n} <br />`+`原文链接：${i} <br />`,a=window.getSelection().toString()+"\n\n ———————————————————————————————————————————————— \n"+`${e.replace(/<\/?.+?>/g,"").replace(/ /g,"")} \n`+`作者：${n} \n`+`原文链接：${i} \n`;o.setData("text/html",l),o.setData("text/plain",a)}}document.body.addEventListener("copy",(function(e){window.getSelection().toString()&&window.getSelection().toString().length>t&&o(e)}))}})()}},142:function(t,e,o){function n(){let t=()=>{let t=$(".feedbackItem");t.length>0&&($.each(t,(e=>{let o=$(t[e]),n=o.find(".feedbackCon"),i=o.find(".feedbackListSubtitle"),l=n.length?n.find(".blog_comment_body"):[],a="",c=l.length?l.attr("id").split("_"):void 0;if(c&&c.length>0){let t=c[c.length-1],e=t.toString().match(/\d/g);$.isArray(e)&&(t=e.join(""));let n=$("#comment_"+t+"_avatar"),i=n.length>0?n.text().trim():$.__config.default.avatar,l=$("#a_comment_author_"+t);a='<div class="feedbackAvatar"><a href="'+(l.length?l.attr("href"):"javascropt:void(0);")+'" target="_blank"><img src="'+i+'"/></a></div>',o.prepend(a)}i.length&&i.find(".louzhu").length&&i.addClass("feedbackListSubtitle-louzhu")})),$(t[0]).css("padding-top","0"),$(t[t.length-1]).css("padding-bottom","0"),$.__config.animate.avatar.enable&&$(".feedbackAvatar").addClass("img-rounded"))};$.__timeIds.commentTId=window.setInterval((()=>{$(".feedbackItem").length>0&&(t(),$.__tools.clearIntervalTimeId($.__timeIds.commentTId))}),1e3),$(document).ajaxSuccess((function(e,o,n){n.url.includes("GetComments.aspx")&&t()}))}o.d(e,{Z:function(){return n}})},717:function(t,e,o){function n(){$.__timeIds.greenChannelDiggTId=window.setInterval((()=>{let t=$("#green_channel_digg");t.length&&(t.after('<button class="custom-btn btn-11" onclick="'+t.attr("onclick")+'">推荐该文<div class="dot"></div></button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelDiggTId))}),1e3),$.__timeIds.greenChannelFollowTId=window.setInterval((()=>{let t=$("#green_channel_follow");t.length&&(t.after('<button class="custom-btn btn-12" onclick="'+t.attr("onclick")+'"><span>关注博主</span><span>关注博主</span></button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelFollowTId))}),1e3),$.__timeIds.greenChannelFavoriteTId=window.setInterval((()=>{let t=$("#green_channel_favorite");t.length&&(t.after('<button class="custom-btn btn-7" onclick="'+t.attr("onclick")+'"><span>收藏本文</span></button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelFavoriteTId))}),1e3),$.__timeIds.greenChannelWeiboTId=window.setInterval((()=>{let t=$("#green_channel_weibo");t.length&&(t.after('<button class="custom-btn btn-15" onclick="'+t.attr("onclick")+'">分享微博</button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelWeiboTId))}),1e3),$.__timeIds.greenChannelWechatTId=window.setInterval((()=>{let t=$("#green_channel_wechat");t.length&&(t.after('<button class="custom-btn btn-13" onclick="'+t.attr("onclick")+'">分享微信</button>'),$.__tools.clearIntervalTimeId($.__timeIds.greenChannelWechatTId))}),1e3)}o.d(e,{Z:function(){return n}})},991:function(t,e,o){function n(t){return(t=>{let e=t.replace(/[\r\n]/g,""),o=$("#digg_count"),n=e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);return{date:void 0===n[1]?"1970-01-01 00:00":n[1],vnum:void 0===n[2]?"0":n[2],cnum:void 0===n[3]?"0":n[3],tnum:void 0===n[4]?o.length?o.text():"0":n[4]}})(t)}o.d(e,{Z:function(){return n}})},515:function(t,e,o){o.a(t,(async function(t,n){try{o.r(e),o.d(e,{default:function(){return d}});var i=o(796),l=o(142),a=o(47),c=o(479),r=o(717),s=t([c]);function d(){$.__config.animate.articleBanner.enable&&o.e(18).then(o.bind(o,715)),(()=>{for(let t=0;t<=10;t++)setTimeout((function(){let t=$("#main");t.find(".cnblogs-markdown").removeClass("cnblogs-markdown"),t.find(".cnblogs-post-body").removeClass("cnblogs-post-body")}),500*t)})(),(0,i.Z)(),"books"!==$.__status.pageType&&(0,c.Z)(),(0,r.Z)(),(0,a.Z)(),(0,l.Z)()}c=(s.then?(await s)():s)[0],n()}catch(f){n(f)}}))}}]);