"use strict";$(document).ready(function(){var e,a=$(".tuichu"),s=$(".xrname");if(""!=window.localStorage.mobile){var i=window.localStorage.mobile;s.empty().attr("href","javascript:void(0);").text(i),a.css("display","block")}else""==window.localStorage.mobile&&s.empty().attr("href","./html/login.html").text("请登录");a.on("click",function(){a.css("display","none"),window.localStorage.mobile="",window.localStorage.password="",window.localStorage.Arr="",s.empty().attr("href","../index.html").text("请登录")}),$liebiao_list=$(".liebiao_list"),$.post("../api/liebiao.php",{qty:20,pagenum:1},function(a){var e="";$.each(a,function(a,s){e+="<li><a data-id="+s.id+' target="_blank" href="javascript:void(0);" class="s_goods_img liebiaobtn"><img src=".'+s.src+'" alt=""></a><div class="goods_txt"><p class="tPrc"><span class="price">¥<em>'+s.price+'</em></span><span class="repricespan">￥<del class="reprice">'+s.reprice+'</del></span></p><a target="_blank" href="javascript:void(0);" class="s_goods_name elps2">'+s.content+'</a><div class="goods_sale"><span class="s_sale_num">销量<em >'+s.xiaoliang+'</em></span></div><a href="javascript:void(0);" class="s_shop">'+s.from+'</a><p class="sale_tags"><span>自营</span></p><div class="goods_hover"><a href="javascript:void(0);" class="add_to_keep">加入收藏</a><a href="javascript:void(0);" class="add_to_cart">加入购物车</a></div></div></li>'},"json"),$liebiao_list.append(e)},"json"),setTimeout(function(){$(".liebiaobtn").on("click",function(){window.localStorage.guid=this.dataset.id,location.href="../html/details.html"})},300);var o,l=$(".xiaolianglink");l.on("click",function(){$.get("../api/index.php",function(a){$(".liebiao_list").empty(),e="";var s=a.data7;$.each(s,function(a,s){e+="<li><a data-id="+s.id+' target="_blank" href="javascript:void(0);" class="s_goods_img liebiaobtn"><img src=".'+s.src+'" alt=""></a><div class="goods_txt"><p class="tPrc"><span class="price">¥<em>'+s.price+'</em></span><span class="repricespan">￥<del class="reprice">'+s.reprice+'</del></span></p><a target="_blank" href="javascript:void(0);" class="s_goods_name elps2">'+s.content+'</a><div class="goods_sale"><span class="s_sale_num">销量<em >'+s.xiaoliang+'</em></span></div><a href="javascript:void(0);" class="s_shop">'+s.from+'</a><p class="sale_tags"><span>自营</span></p><div class="goods_hover"><a href="javascript:void(0);" class="add_to_keep">加入收藏</a><a href="javascript:void(0);" class="add_to_cart">加入购物车</a></div></div></li>'},"json"),$liebiao_list.append(e)},"json"),l.parent().addClass("on"),l.parent().prev().removeClass("on"),l.parent().next().removeClass("on")});var t=$(".pricelink");t.on("click",function(){$.get("../api/index.php",function(a){$(".liebiao_list").empty(),o="";var s=a.data8;$.each(s,function(a,s){o+="<li><a data-id="+s.id+' target="_blank" href="javascript:void(0);" class="s_goods_img liebiaobtn"><img src=".'+s.src+'" alt=""></a><div class="goods_txt"><p class="tPrc"><span class="price">¥<em>'+s.price+'</em></span><span class="repricespan">￥<del class="reprice">'+s.reprice+'</del></span></p><a target="_blank" href="javascript:void(0);" class="s_goods_name elps2">'+s.content+'</a><div class="goods_sale"><span class="s_sale_num">销量<em >'+s.xiaoliang+'</em></span></div><a href="javascript:void(0);" class="s_shop">'+s.from+'</a><p class="sale_tags"><span>自营</span></p><div class="goods_hover"><a href="javascript:void(0);" class="add_to_keep">加入收藏</a><a href="javascript:void(0);" class="add_to_cart">加入购物车</a></div></div></li>'},"json"),$liebiao_list.append(o)},"json"),t.parent().addClass("on"),t.parent().prev().removeClass("on"),t.parent().prev().prev().removeClass("on"),t.parent().next().removeClass("on")});var n="",c=$(".zonghebtn");c.on("click",function(){$.get("../api/index.php",function(a){$(".liebiao_list").empty(),n="";var s=a.data9;$.each(s,function(a,s){n+="<li><a data-id="+s.id+' target="_blank" href="javascript:void(0);" class="s_goods_img liebiaobtn"><img src=".'+s.src+'" alt=""></a><div class="goods_txt"><p class="tPrc"><span class="price">¥<em>'+s.price+'</em></span><span class="repricespan">￥<del class="reprice">'+s.reprice+'</del></span></p><a target="_blank" href="javascript:void(0);" class="s_goods_name elps2">'+s.content+'</a><div class="goods_sale"><span class="s_sale_num">销量<em >'+s.xiaoliang+'</em></span></div><a href="javascript:void(0);" class="s_shop">'+s.from+'</a><p class="sale_tags"><span>自营</span></p><div class="goods_hover"><a href="javascript:void(0);" class="add_to_keep">加入收藏</a><a href="javascript:void(0);" class="add_to_cart">加入购物车</a></div></div></li>'},"json"),$liebiao_list.append(n)},"json"),c.parent().addClass("on"),c.parent().next().removeClass("on"),c.parent().next().next().removeClass("on")})});