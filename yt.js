/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Amit Agarwal
 Web: http://www.labnol.org/?p=26740 
*/

function onYouTubeIframeAPIReady(){var e=document.getElementById("youtube-audio"),t=document.createElement("img");t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);var a=document.createElement("div");a.setAttribute("id","youtube-player"),e.appendChild(a);var o=function(e){var a=e?"t-rex.jpg?raw=true":"t-rex.gif?raw=true";t.setAttribute("src","https://github.com/supernova-genesis-151/yt-audio-files/blob/master/"+a)};e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}
