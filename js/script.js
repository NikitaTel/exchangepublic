function scrollIt(e){var c=700,s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:c,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"easeOutQuint",i=arguments[3],l={easeOutQuint:function(e){return 1+--e*e*e*e*e}},r=window.pageYOffset,a="now"in window.performance?performance.now():(new Date).getTime(),d=new Date,t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,u="number"==typeof e?e:e.offsetTop,m=Math.round(t-u<n?t-n:u);if("requestAnimationFrame"in window==!1)return window.scroll(0,m),void(i&&i());!function e(){var t="now"in window.performance?performance.now():(new Date).getTime(),n=Math.min(1,(t-a)/s),t=l[o](n),n=window.pageYOffset;window.scroll(0,Math.ceil(t*(m-r)+r)),n===m||new Date-d>c+10?i&&i():requestAnimationFrame(e)}()}var doc=document,win=window,body=doc.getElementById("body"),menu=doc.getElementsByClassName("burger")[0],lang_select=doc.getElementById("full-header-lang"),contact_switcher=doc.getElementsByClassName("lk-contact_switcher_label")[0],accounts_switcher=doc.getElementsByClassName("your-accounts_switcher_label")[0],df_left=doc.getElementsByClassName("doble-form_left")[0],df_right=doc.getElementsByClassName("doble-form_right")[0],df_left2=doc.querySelector("#df_left2"),df_right2=doc.getElementById("df_right2"),df_left3=doc.getElementById("df_left3"),df_right3=doc.getElementById("df_right3"),button_up=doc.getElementsByClassName("button_up")[0],df_left4=doc.querySelector("#df_left4"),df_right4=doc.querySelector("#df_right4");function menuToggle(){lang_select.classList.toggle("open")}function menuToggle4(){df_left.classList.toggle("open")}function menuToggle5(){df_right.classList.toggle("open")}function menuToggle4l(){df_left4.classList.toggle("open")}function menuToggle4r(){df_right4.classList.toggle("open")}function menuToggle6(){df_left2.classList.toggle("open")}function menuToggle7(){df_right2.classList.toggle("open")}function menuToggle8(){df_left3.classList.toggle("open")}function menuToggle9(){df_right3.classList.toggle("open")}function menuToggle10(){menu.classList.toggle("open")}function menuClose10(){try{menu.classList.remove("open")}catch{}}function menuCloseClickOutside10(e){e.target.matches(".burger *")||menuClose10()}function menuToggle2(){accounts_switcher.classList.toggle("open")}function menuToggle3(){contact_switcher.classList.toggle("open")}function menuClose(){lang_select.classList.remove("open")}function menuClose2(){accounts_switcher.classList.remove("open")}function menuClose3(){contact_switcher.classList.remove("open")}doc.addEventListener("click",menuCloseClickOutside),doc.addEventListener("touchstart",menuCloseClickOutside),doc.addEventListener("click",menuCloseClickOutside10),doc.addEventListener("touchstart",menuCloseClickOutside10);for(var links=doc.querySelectorAll("[href^='#']"),i=0;i<links.length;i++)links[i].addEventListener("click",function(e){e.preventDefault();e=this.getAttribute("href");scrollIt(doc.querySelector(e))});function scrollFunctions(){250<win.pageYOffset?button_up.classList.add("fixed"):button_up.classList.remove("fixed")}function setTime(e){for($arr=doc.getElementsByClassName("timer-digit"),$i=0,$TC=0,$i;$i<=e.length-1;$i++)isNumeric(e[$i])&&$TC<=5&&($arr[$TC].innerHTML=e[$i],$TC++)}function isNumeric(e){return"string"==typeof e&&(!isNaN(e)&&!isNaN(parseFloat(e)))}function star(e,t){for($arr=$(t).find(".current"),$i=0,$i;$i<=e-1;$i++)$arr[$i].className="i-star current active";for($i=e,$i;$i<=$arr.length-1;$i++)$arr[$i].className="i-star current"}function accordion(e){$(e).find(".accordion-content-active").length?($(e).find(".accordion-content-active").hide(300),$(".arrow").css("transform","none"),$(e).find(".accordion-content-active").addClass("accordion-content"),$(e).find(".accordion-content-active").removeClass("accordion-content-active")):($(".accordion-content-active").hide(300),setTimeout(function(){$(".accordion-content-active").addClass("accordion-content"),$(".accordion-content-active").removeClass("accordion-content-active")},300),$(".arrow").css("transform","none"),$(e).find(".accordion-content").fadeIn(500),setTimeout(function(){$(e).find(".accordion-content").addClass("accordion-content-active"),$(e).find(".accordion-content-active").removeClass("accordion-content")},300),$(e).find(".arrow").css("transform","rotate(180deg)"))}function wrongField(e,t){if(t)try{$(e).removeClass("wrong-field")}catch{}else $(e).addClass("wrong-field")}function checkFields(e){for($arr=$(e.toString()+" :input"),$i=0,$i;$i<=$arr.length-1;$i++)"hidden"!=$($arr[$i]).prop("type")&&($($arr[$i]).is(":invalid")?wrongField($arr[$i],!1):wrongField($arr[$i],!0))}function handleReg(){document.getElementById("registr").checked=!1,document.getElementById("registr-step3").checked=!0}function checkpass(e,t){return checkFields(".registration-s3"),$(e).val()==$(t).val()||(wrongField(e),wrongField(t),$(".registration-s3 .error").html("Пароли не совпадают"),!1)}function handleRegPass(){document.getElementById("registr-step3").checked=!1,document.getElementById("registr-step2").checked=!0}function handleStars(){$("#s1 .active").length<=6?($("#f2").show(),$("#f1").hide()):7<=$("#s1 .active").length&&($("#f1").show(),$("#f2").hide())}function switchView(e){if("pan"==e){for($arr=$("#Pan .content-text"),$i=0,$i;$i<=$arr.length-1;$i++)$($arr[$i]).html($($arr[$i]).html().substring(0,150));$("#L-inline").hide(),$("#Pan").show(),$(".line-img").removeClass("cur"),$(".pan-img").addClass("cur")}else"line"==e&&($("#Pan").hide(),$("#L-inline").show(),$(".line-img").addClass("cur"),$(".pan-img").removeClass("cur"))}win.addEventListener("scroll",function(){scrollFunctions()}),win.addEventListener("load",function(){scrollFunctions()}),setTimeout(function(){try{$("#helpMsgLeft").fadeOut(700),$("#helpMsgRight").fadeOut(700)}catch{}},3e3),$(".MoneyOut").click(function(){$("#moneyOut").show()}),$(".Subscribe").click(function(){$(".Subscribe").parents("div").last().hide(),$("#thanksSubs").show()}),$(".feedLeave").click(function(){$("#thanksFeed").show()});const customSelects=document.getElementsByClassName("custom-select");for(let e=0;e<customSelects.length;e++){const L=customSelects[e],M=L.querySelector(".custom-select__items"),N=L.querySelector(".custom-select__selected"),O=L.querySelector("select");M.classList.add("select-hide");for(let n=0;n<M.children.length;n++){const Q=M.children[n];Q.addEventListener("click",function(e){const t=M.querySelectorAll(".same-as-selected");for(let e=0;e<t.length;e++)t[e].classList.remove("same-as-selected");N.firstElementChild.replaceWith(this.cloneNode(!0)),this.classList.add("same-as-selected"),O.selectedIndex=n,N.click()})}N.addEventListener("click",function(e){e.stopPropagation(),closeAllSelect(this),this.nextElementSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function closeAllSelect(t){var n=[],c=document.getElementsByClassName("custom-select__items"),s=document.getElementsByClassName("custom-select__selected");for(let e=0;e<s.length;e++)t===s[e]?n.push(e):s[e].classList.remove("select-arrow-active");for(let e=0;e<c.length;e++)n.indexOf(e)&&c[e].classList.add("select-hide")}document.addEventListener("click",closeAllSelect);const swapSystemFields=()=>{const e=document.querySelector("#pay-form"),t=document.querySelector("#receive-form"),n=e.querySelector(".system-select .custom-select__items"),c=t.querySelector(".system-select .custom-select__items");let s=0,o=0;for(s;s<n.children.length&&!n.children[s].classList.contains("same-as-selected");s++);for(o;o<c.children.length&&!c.children[o].classList.contains("same-as-selected");o++);n.children[o].click(),c.children[s].click(),e.querySelectorAll("input").forEach(e=>{"checkbox"!==e.type?(e.value="",e.dispatchEvent(new Event("change"))):e.checked=!1}),t.querySelectorAll("input").forEach(e=>{"checkbox"!==e.type?(e.value="",e.dispatchEvent(new Event("change"))):e.checked=!1})},formGroups=document.querySelectorAll(".form-group");function closeAllDropdown(t){const n=document.getElementsByClassName("dropdown-search__items");for(let e=0;e<n.length;e++)t&&t!==n[e]&&n[e].classList.remove("active")}formGroups.forEach(e=>{const t=e.querySelector("input"),n=e.querySelector("label");t.addEventListener("input",function(e){this.checkValidity()?(""===this.value?n.style.display="block":n.style.display="none",this.classList.remove("invalid")):(this.classList.add("invalid"),n.style.display="none")}),t.addEventListener("change",function(e){""===this.value?this.checkValidity()?(this.classList.remove("invalid"),n.style.display="block"):this.required&&(n.style.display="block"):(this.checkValidity()?this.classList.remove("invalid"):this.classList.add("invalid"),n.style.display="none")}),t.dispatchEvent(new Event("change"))}),document.addEventListener("click",closeAllDropdown);const dropdownSearches=document.getElementsByClassName("dropdown-search");for(let s=0;s<dropdownSearches.length;s++){const ra=dropdownSearches[s],sa=ra.querySelector(".dropdown-search__items"),ta=ra.querySelector(".dropdown-search__selected input");ta.addEventListener("input",function(){var e=this.value.toUpperCase();const t=sa.querySelectorAll(".dropdown-search__item");let n=0;for(s=0;s<t.length;s++){const c=t[s].textContent||t[s].innerText;-1<c.toUpperCase().indexOf(e)?(t[s].style.display="",n++):t[s].style.display="none"}0===n?(this.setCustomValidity("Invalid field."),this.dispatchEvent(new Event("change"))):this.setCustomValidity("")}),ta.addEventListener("click",function(e){e.stopPropagation(),sa.classList.toggle("active"),closeAllDropdown(sa)}),sa.addEventListener("click",function(e){e.stopPropagation();let t=e.target;t.classList.contains("dropdown-search__item")||(t=t.parentNode),ta.value=t.innerText,ta.dispatchEvent(new Event("change")),sa.classList.toggle("active")})}