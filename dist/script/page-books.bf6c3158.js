"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[4463],{5090:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var o=t(9708),s=t(7024);function i(e){(0,s.default)(e),(()=>{if(e.__config.bookList.length){t.e(3297).then(t.bind(t,8724));let a=$("#cnblogs_post_body"),o="";$.each(e.__config.bookList,(e=>{let a=$.__config.bookList[e];a.title&&(o+="<h1 class=`iconfont ${list.icon}`>"+a.title+"</h1>"),o+='<div class="book-cards">',$.each(a.books,(e=>{let t='<div class="book-card"> <div class="content-wrapper"> <img src="##cover##" alt="" class="book-card-img"> <div class="card-content"> <div class="book-name" title="##name##">##name##</div> <div class="rate"> <fieldset class="rating book-rate"> ##scoreHtml## </fieldset> <span class="book-voters card-vote"> ##infoHtml## </span> </div> </div> </div> <div class="book-by"> <i class="iconfont icon-book" title="阅读时间" style="display:##readDateStyle##"></i> ##readDate## <i class="iconfont icon-schedule" title="阅读进度" style="display:##readPercentageStyle##"></i> ##readPercentage## </div> </div>',s=a.books[e],i="";void 0!==s.score&&s.score>0?(i+='<i class="iconfont icon-star-full"></i>'.repeat(parseInt(s.score)),s.score>parseInt(s.score)&&(i+='<i class="iconfont icon-star-half"></i>'),i+='<i class="iconfont icon-icon-star"></i>'.repeat(parseInt(5-s.score))):i+='<i class="iconfont icon-icon-star"></i>'.repeat(5);let r="";void 0!==s.formerName&&s.formerName&&(r+='<span title="'+s.formerName+'">原　名：'+s.formerName+"</span><br>"),void 0!==s.author&&s.author&&(r+='<span title="'+s.author+'">作　者：'+s.author+"</span><br>"),void 0!==s.translator&&s.translator&&(r+='<span title="'+s.translator+'">译　者：'+s.translator+"</span><br>"),void 0!==s.press&&s.press&&(r+='<span title="'+s.press+'">出版社：'+s.press+"</span><br>"),void 0!==s.year&&s.year&&(r+='<span title="'+s.year+'">出版年：'+s.year+"</span>");let n=void 0!==s.readDate?s.readDate:"",c=n?"initial;":"none",l=void 0!==s.readPercentage?s.readPercentage:"",d=l?"initial;":"none";t=$.__tools.batchTempReplacement(t,[["cover",void 0!==s.cover?s.cover:""],["name",void 0!==s.name?s.name:""],["readDate",n],["readDateStyle",c],["readPercentage",l],["readPercentageStyle",d],["scoreHtml",i],["infoHtml",r]]),o+=t})),o+="</div>"}));let s=$(".articleSuffix-flg");s.length?s.before(o):a.append(o)}})(),(0,o.Z)(e)}}}]);