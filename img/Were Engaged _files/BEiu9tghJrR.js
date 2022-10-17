if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisActivityPhotoThumbnail.react",["cx","fbt","FastLink","PolarisPhoto.react","PolarisgetImageResourceFromGraphImageResource","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.href,d=a.src;a=a.srcSet;a=a&&a.map(c("PolarisgetImageResourceFromGraphImageResource"));return j.jsx(c("FastLink"),{className:"_aa8k _aab5","data-testid":void 0,href:b,children:j.jsx(c("PolarisPhoto.react"),{accessibilityCaption:i._("Media thumbnail"),className:"_aab6",rich:!0,src:d,srcSet:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityStoryAvatarV2.react",["PolarisIGCoreBox","PolarisIGCoreConstants","PolarisUserAvatar.react","PolarisUserAvatarWithStories.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a.latestReelMedia;a.latestReelSeenTime;var b=a.onClick,d=a.profilePictureUrl,e=a.showRing;e=e===void 0?!1:e;var f=a.userId;a=a.username;return h.jsx(c("PolarisIGCoreBox"),{display:"inlineBlock",children:e===!0?h.jsx(c("PolarisUserAvatarWithStories.react"),{isClickable:!0,onClick:b,profilePictureUrl:d,size:c("PolarisIGCoreConstants").AVATAR_SIZES.medium,storyEntrypoint:"activity_feed",userId:f,username:a}):h.jsx(c("PolarisUserAvatar.react"),{isLink:!1,onClick:b,profilePictureUrl:d,size:c("PolarisIGCoreConstants").AVATAR_SIZES.medium})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityUserLink.react",["cx","PolarisUserLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.onClick;a=a.username;return i.jsx(c("PolarisUserLink.react"),{className:"_aab8",onClick:b,username:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityStoryUserLinks.react",["PolarisActivityUserLink.react","PolarisIGCoreText","PolarisUserText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.links,d=a.onClick,e=a.text,f=e.length;a=b[0]&&b[0].start!==0;return h.jsxs(h.Fragment,{children:[a&&h.jsx(c("PolarisUserText.react"),{value:e.substring(0,b[0].start)}),b.map(function(a,g){if(a.type==="user"){var i=e.substring(a.start,a.end);a=e.substring(a.end,((a=b[g+1])==null?void 0:a.start)||f);return h.jsxs(c("PolarisIGCoreText"),{display:"inline",children:[h.jsx(c("PolarisActivityUserLink.react"),{onClick:d,username:i}),h.jsx(c("PolarisUserText.react"),{size:"body",value:a})]},g)}return null})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisBaseActivityStory.react",["cx","IGRouter","PolarisActivityFeedContext.react","PolarisTimestamp.react","PolarishasLinkParent","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useContext,k=b.useRef;function a(a){var b=a.children,e=a.fallbackHref,f=a.history,g=a.isHeader,h=a.onClick,l=a.onFallbackClick,m=a.secondaryContext,n=a.timestamp;a=a.visualSocialContext;var o=k(null),p=j(d("PolarisActivityFeedContext.react").PolarisActivityFeedContext);p=(p==null?void 0:p.placement)===d("PolarisActivityFeedContext.react").ActivityFeedPlacement.SidebarNotificationsPanel;function q(){return!!(e!=null&&e!==""||l)}function r(a){h!=null&&h();if(!o.current||c("PolarishasLinkParent")(a.target,o.current))return;if(l){l(a);if(a.isDefaultPrevented())return}if(e!=null&&e!==""){if(a.metaKey||a.ctrlKey)return;a.preventDefault();f.push(e)}}return i.jsxs("div",{className:"_aaiu"+(p?" _aeas":"")+(g?" _aaiv":"")+(q()?" _aaiw":""),onClick:r,ref:function(a){return o.current=a},role:"button",tabIndex:"-1",children:[a!=null&&i.jsx("div",{className:"_aaix",children:a}),i.jsxs("div",{className:"_aaiy",children:[b,n!=null&&n!==0&&i.jsx(c("PolarisTimestamp.react"),{className:"_aaiz",value:n})]}),m!=null&&m!==""&&i.jsx("div",{className:"_aai-",children:m})]})}a.displayName=a.name+" [from "+f.id+"]";e=d("IGRouter").withIGRouter(a);g["default"]=e}),98);
__d("PolarisBaseMediaActivityStory.react",["PolarisActivityPhotoThumbnail.react","PolarisActivityStoryAvatarV2.react","PolarisActivityStoryUserLinks.react","PolarisBaseActivityStory.react","PolarisLinkBuilder","PolarisUserText.react","nullthrows","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b,e=a.latestReelMedia,f=a.latestReelSeenTime,g=a.links,i=a.media,j=a.onClick,k=a.text,l=a.timestamp,m=a.user;a=a.userId;b=(b=i.web_permalink_override)!=null?b:d("PolarisLinkBuilder").buildMediaLink(i.shortcode);return h.jsx(c("PolarisBaseActivityStory.react"),{fallbackHref:b,onClick:j,secondaryContext:h.jsx(c("PolarisActivityPhotoThumbnail.react"),{href:b,src:c("nullthrows")(i.image)}),timestamp:l,visualSocialContext:h.jsx(c("PolarisActivityStoryAvatarV2.react"),{latestReelMedia:e,latestReelSeenTime:f,profilePictureUrl:(j=m.profilePictureUrl)!=null?j:"",showRing:g!=null?g.length<=1:!0,userId:a,username:(b=m.username)!=null?b:""}),children:g!=null?h.jsx(c("PolarisActivityStoryUserLinks.react"),{links:g,text:k}):h.jsx(c("PolarisUserText.react"),{value:k})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisBaseUserActivityStory.react",["PolarisActivityStoryAvatarV2.react","PolarisActivityStoryUserLinks.react","PolarisBaseActivityStory.react","PolarisFollowButtonContainer.react","PolarisLinkBuilder","PolarisRelationshipActions","PolarisRelationshipState","PolarisrelationshipSelectors","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState;function a(a){var b=a.analyticsContext,e=a.latestReelMedia,f=a.latestReelSeenTime,g=a.links,k=a.onClick,l=a.text,m=a.timestamp,n=a.user;a=a.userId;var o=j(!1),p=o[0],q=o[1],r=d("react-redux-wwwig").useSelector(function(a){return d("PolarisrelationshipSelectors").getRelationship(a.relationships,n.id)}),s=d("react-redux-wwwig").useDispatch();i(function(){r!==d("PolarisRelationshipState").EMPTY_RELATIONSHIP?q(!1):p===!1&&(q(!0),s(d("PolarisRelationshipActions").getRelationshipInfoWithViewerByUserId(n.id)))},[s,p,r,n]);return h.jsx(c("PolarisBaseActivityStory.react"),{fallbackHref:d("PolarisLinkBuilder").buildUserLink((o=n.username)!=null?o:""),onClick:k,secondaryContext:h.jsx(c("PolarisFollowButtonContainer.react"),{analyticsContext:b,userId:n.id,username:n.username}),timestamp:m,visualSocialContext:h.jsx(c("PolarisActivityStoryAvatarV2.react"),{latestReelMedia:e,latestReelSeenTime:f,profilePictureUrl:(o=n.profilePictureUrl)!=null?o:"",showRing:!0,userId:a,username:(k=n.username)!=null?k:""}),children:g!=null?h.jsx(c("PolarisActivityStoryUserLinks.react"),{links:g,text:l}):l})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisBloksNotificationActivityStory.react",["fbt","IGCoreDialog","IGCoreModal","PolarisActivityStoryUserLinks.react","PolarisBaseActivityStory.react","PolarisIGBloksApp","PolarisIGCoreBox","PolarisIGCoreConstants","PolarisIGCoreText","PolarisIGCoreThumbnail","PolarisProfileEditStrings","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState,k=h._("Notification");function l(a){if(a===711)return"com.instagram.privacy.setting_defaults.mentions_settings";else if(a===710)return"com.instagram.privacy.setting_defaults.guides_settings";else if(a===749)return"com.instagram.privacy.setting_defaults.comments_privacy_settings";return""}function a(a){var b=a.icon,e=a.onClick,f=a.storyType,g=a.text;a=a.user_link;var h=j(!1),m=h[0],n=h[1];return i.jsxs(c("PolarisBaseActivityStory.react"),{onClick:e,onFallbackClick:function(){return n(!0)},visualSocialContext:i.jsx(c("PolarisIGCoreBox"),{color:"web-always-white",shape:"circle",children:i.jsx(c("PolarisIGCoreThumbnail"),{alt:k,dimension:c("PolarisIGCoreConstants").AVATAR_SIZES.medium,src:b})}),children:[a!=null?i.jsx(c("PolarisActivityStoryUserLinks.react"),{links:a,text:g}):i.jsx(c("PolarisIGCoreText"),{children:g}),m?i.jsxs(c("IGCoreModal"),{children:[i.jsx(c("PolarisIGCoreBox"),{color:"ig-primary-background",children:i.jsx(c("PolarisIGBloksApp"),{appId:l(f)})}),i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",onClick:function(){return n(!1)},children:d("PolarisProfileEditStrings").DONE_TXT})]}):i.jsx("div",{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMultiUserAvatar.react",["PolarisIGCoreBox","PolarisUserAvatar.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=1,j=8;function a(a){var b=a.avatarSize,d=a.left;d=d===void 0?j:d;var e=a.padding;e=e===void 0?i:e;var f=a.primaryProfilePic,g=a.primaryUsername,k=a.secondaryProfilePic,l=a.secondaryUsername,m=a.size;a=a.top;a=a===void 0?j:a;return h.jsxs(c("PolarisIGCoreBox"),{height:m,position:"relative",width:m,children:[h.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:k,size:b,username:l}),h.jsx("div",{style:{position:"absolute",left:d,padding:e,top:a},children:h.jsx(c("PolarisIGCoreBox"),{alignItems:"end",direction:"row",justifyContent:"end",children:h.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:f,size:b,username:g})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFollowRequestGroupActivityStory.react",["fbt","invariant","PolarisActivityFeedConstants","PolarisActivityFeedStrings","PolarisBaseActivityStory.react","PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreChevronIcon","PolarisIGCoreConstants","PolarisIGCoreText","PolarisMultiUserAvatar.react","PolarisUserAvatar.react","PolarisuserSelectors","immutable-4.0.0-rc.9","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=h._("Chevron icon to see all follow requests");function l(a,b){return h._("{username} + {othersCount} others",[h._param("username",a),h._param("othersCount",b-1)])}function m(a,b){return b>1?l(a,b):a}function n(a){var b;a=a.followRequests;var e=a.keySeq().toArray();b=(b=d("react-redux-wwwig").useSelector(function(a){return d("PolarisuserSelectors").getUsersByIds(a,e)}))!=null?b:[];var f=b[0];if(a.size===1)return j.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:f.profilePictureUrl,size:c("PolarisIGCoreConstants").AVATAR_SIZES.medium,username:f.username});a=b[1];return j.jsx(c("PolarisMultiUserAvatar.react"),{avatarSize:c("PolarisIGCoreConstants").AVATAR_SIZES.small,primaryProfilePic:(b=f.profilePictureUrl)!=null?b:"",primaryUsername:(b=f.username)!=null?b:"",secondaryProfilePic:(f=a.profilePictureUrl)!=null?f:"",secondaryUsername:(b=a.username)!=null?b:"",size:c("PolarisIGCoreConstants").AVATAR_SIZES.medium})}n.displayName=n.name+" [from "+f.id+"]";function a(a){var b,e=a.followRequests,f=a.onListChange;e.size>0||i(0,63434);a=function(a){f(d("PolarisActivityFeedConstants").ActivityFeedListType.FollowRequests),a.preventDefault()};var g=e.keySeq().toArray()[0];b=(b=d("react-redux-wwwig").useSelector(function(a){return d("PolarisuserSelectors").getUserById(a,g)}).username)!=null?b:"";var h=e.size;return j.jsx(c("PolarisBaseActivityStory.react"),{isHeader:!0,onFallbackClick:a,secondaryContext:j.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",direction:"row",flex:"none",justifyContent:"center",children:[j.jsx(c("PolarisIGCoreBox"),{color:"ig-primary-button",height:8,margin:3,shape:"circle",width:8}),j.jsx(c("PolarisIGCoreChevronIcon"),{alt:k,color:"ig-secondary-text",direction:"right",size:16})]}),visualSocialContext:j.jsx(n,{followRequests:(e=e)!=null?e:d("immutable-4.0.0-rc.9").OrderedMap()}),children:j.jsxs(c("PolarisIGCoreButton"),{borderless:!0,color:"ig-secondary-button",onClick:a,children:[j.jsx(c("PolarisIGCoreText").BodyEmphasized,{textAlign:"left",children:d("PolarisActivityFeedStrings").FOLLOW_REQUESTS_TITLE}),j.jsx(c("PolarisIGCoreBox"),{marginTop:1,children:j.jsx(c("PolarisIGCoreText"),{color:"ig-secondary-text",textAlign:"left",children:m(b,h)})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisInlineFollowRequestActivityStory.react",["invariant","PolarisActivityStoryAvatarV2.react","PolarisActivityStoryUserLinks.react","PolarisBaseActivityStory.react","PolarisConnectionsLogger","PolarisFollowRequestButtons.react","PolarisLinkBuilder","PolarisRelationshipActions","PolarisRelationshipState","PolarisUserText.react","PolarisrelationshipSelectors","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useEffect,k=b.useState;function a(a){var b=a.latestReelMedia,e=a.latestReelSeenTime,f=a.links,g=a.onApprove,l=a.onIgnore,m=a.position,n=a.request,o=a.text,p=a.user,q=a.userId;a=k(!1);var r=a[0],s=a[1],t=d("react-redux-wwwig").useSelector(function(a){return d("PolarisrelationshipSelectors").getRelationship(a.relationships,p.id)}),u=d("react-redux-wwwig").useDispatch();j(function(){t!==d("PolarisRelationshipState").EMPTY_RELATIONSHIP?s(!1):r===!1&&(s(!0),u(d("PolarisRelationshipActions").getRelationshipInfoWithViewerByUserId(p.id)))},[u,r,t,p]);a=function(a){g(q,a)};var v=function(a){l(q,a)},w=function(){d("PolarisConnectionsLogger").logConnectionAction({position:m,eventName:"follow_request_tapped",containerModule:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.follow_requests,targetId:q})},x=p.fullName,y=p.id,z=p.profilePictureUrl,A=p.username;y&&A!=null&&A!==""&&x!=null&&z!=null&&z!==""||h(0,51542);return i.jsx(c("PolarisBaseActivityStory.react"),{fallbackHref:d("PolarisLinkBuilder").buildUserLink(A),onFallbackClick:w,secondaryContext:i.jsx(c("PolarisFollowRequestButtons.react"),{onApprove:a,onIgnore:v,position:m,requestStatus:n.status,userId:y,username:A}),visualSocialContext:i.jsx(c("PolarisActivityStoryAvatarV2.react"),{latestReelMedia:b,latestReelSeenTime:e,onClick:w,profilePictureUrl:z,userId:q,username:A}),children:f!=null?i.jsx(c("PolarisActivityStoryUserLinks.react"),{links:f,onClick:w,text:o}):i.jsx(c("PolarisUserText.react"),{value:o})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisNotificationActivityStory.react",["fbt","PolarisActivityStoryUserLinks.react","PolarisBaseActivityStory.react","PolarisConsentTypes","PolarisIGBloksAsyncAppLauncher","PolarisIGCoreBox","PolarisIGCoreConstants","PolarisIGCoreText","PolarisIGCoreThumbnail","PolarisNavigationUtils","PolarisRandom","PolarisRoutes","URI","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useState,l=h._("Notification");function m(a,b){if(a.includes("webview")){var e=decodeURIComponent(a.split("url=")[1]);e.includes("www.instagram.com")&&(e=e.split("www.instagram.com")[1]);d("PolarisNavigationUtils").openURLWithFullPageReload(e)}else if(a.includes("gdpr_consent")){e=""+d("PolarisRoutes").TERMS_START_PATH+d("PolarisConsentTypes").ConsentEntrypoints.ACTIVITY_FEED;d("PolarisNavigationUtils").openURLWithFullPageReload(e)}else if(a.includes("guardian_pairing"))d("PolarisNavigationUtils").openURLWithFullPageReload(d("PolarisRoutes").FAMILY_CENTER_HOME_PATH);else if(a.includes("bloks_action?bloks_app_id=com.bloks.www.yp")){e=new(c("URI"))(a);a=e.getQueryData();e=a.bloks_app_id;a=a.params;e&&(b&&b(e,a||{}))}}function a(a){var b=a.openLink,e=b===void 0?m:b;b=a.icon;var f=a.link,g=a.onClick,h=a.text;a=a.user_link;var n=k({appId:"",params:{},key:d("PolarisRandom").randomUint32()}),o=n[0],p=n[1],q=j(function(a,b){var c=o.key+1;b=babelHelpers["extends"]({},b,{cacheBreakingValue:c});p({appId:a,params:b,key:c})},[p,o.key]);return i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisBaseActivityStory.react"),{onClick:g,onFallbackClick:function(){return e(f,q)},visualSocialContext:i.jsx(c("PolarisIGCoreBox"),{color:"web-always-white",shape:"circle",children:i.jsx(c("PolarisIGCoreThumbnail"),{alt:l,dimension:c("PolarisIGCoreConstants").AVATAR_SIZES.medium,src:b})}),children:a!=null?i.jsx(c("PolarisActivityStoryUserLinks.react"),{links:a,text:h}):i.jsx(c("PolarisIGCoreText"),{children:h})}),o.appId!==""&&i.jsx(c("PolarisIGBloksAsyncAppLauncher"),{appId:o.appId,params:o.params},o.key)]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPartitionHeader.react",["PolarisIGCoreBox","PolarisIGCoreDivider","PolarisIGCoreText","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.index;a=a.text;return h.jsxs(h.Fragment,{children:[b!==0&&h.jsx(c("PolarisIGCoreDivider"),{}),h.jsx(c("PolarisIGCoreBox"),{marginStart:2,marginTop:2,padding:1,children:h.jsx(c("PolarisIGCoreText").BodyEmphasized,{children:a})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityStoryList.react",["fbt","FBLogger","PolarisActivityFeedBlankShareView.react","PolarisActivityFeedContext.react","PolarisActivityFeedGlimmersLoadingState.react","PolarisActivityFeedStrings","PolarisBaseMediaActivityStory.react","PolarisBaseUserActivityStory.react","PolarisBloksNotificationActivityStory.react","PolarisConnectionsLogger","PolarisErrorBoundaryWithHoldout.react","PolarisFetchingSuggestedUserList.react","PolarisFollowRequestGroupActivityStory.react","PolarisIGCoreBox","PolarisIGCoreDivider","PolarisIGVirtualList.react","PolarisInlineFollowRequestActivityStory.react","PolarisNavigationUtils","PolarisNewsfeedStoryClickFalcoEvent","PolarisNotificationActivityStory.react","PolarisPartitionHeader.react","PolarisRoutes","PolarisTimedSpinner.react","PolarisUA","PolarisuserSelectors","gkx","nullthrows","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useContext,k=b.useState,l=68,m=15,n=20,o=h._("New");function p(a){return new URLSearchParams(a.split("webview")[1]).get("url")}function a(a){var b=a.analyticsContext,e=a.error,f=a.followRequests,g=a.loading,h=a.new_stories,q=a.old_stories,r=a.onApprove,s=a.onIgnore,t=a.onListChange,u=a.partition,v=a.showFollowRequest,w=d("react-redux-wwwig").useSelector(function(a){return(a=d("PolarisuserSelectors").getViewer(a))==null?void 0:a.id});a=k({});var x=a[0],y=a[1];a=j(d("PolarisActivityFeedContext.react").PolarisActivityFeedContext);if(g)return(a==null?void 0:a.placement)===d("PolarisActivityFeedContext.react").ActivityFeedPlacement.SidebarNotificationsPanel?i.jsx(c("PolarisActivityFeedGlimmersLoadingState.react"),{}):i.jsx(c("PolarisTimedSpinner.react"),{component:"ActivityStoryList",position:"absolute",size:"medium",timingEvent:"loadList"});if(e)return i.jsx(c("PolarisActivityFeedBlankShareView.react"),{});g=b==="ActivityFeedBox"?362:"auto";var z=function(a,b,c){d("PolarisNewsfeedStoryClickFalcoEvent").NewsfeedStoryClickFalcoEvent.log(function(){return{pk:parseInt(w,10),position:a,section:b?"new_stories":"old_stories",story_id:c.pk,story_type:c.story_type}})},A=function(a,b){r(a,b)},B=function(a,b){s(a,b)},C=babelHelpers["extends"]({},h,q),D=function(a){var b=h!=null?Object.keys(h).length:0;if(b>0&&a===0)return i.jsx(c("PolarisPartitionHeader.react"),{index:a,text:o});if(Object.entries(u.headers).length===0)return null;var d=a-b,e=E(d);e in x||y(function(a){return babelHelpers["extends"]({},a,(a={},a[e]=d,a))});x[e]>d&&y(function(a){return babelHelpers["extends"]({},a,(a={},a[e]=d,a))});return x[e]===d?i.jsx(c("PolarisPartitionHeader.react"),{index:a,text:u.headers[e]}):null},E=function(a){for(var b=0;b<u.indices.length-1;b++)if(u.indices[b]<=a&&a<u.indices[b+1])return b;return u.indices.length-1},F=Object.keys(C);a=function(a){var e,g=a.index;if(v&&g===0)return!f||f.size===0?i.jsxs(c("PolarisIGCoreBox"),{children:[i.jsx(c("PolarisIGCoreBox"),{padding:3,children:d("PolarisActivityFeedStrings").FOLLOW_REQUESTS_TITLE}),i.jsx(c("PolarisIGCoreDivider"),{})]},"followRequest"):i.jsx(c("PolarisFollowRequestGroupActivityStory.react"),{followRequests:f,onListChange:t},"followRequest");if(F.length>0){a=g-(v!==!1?1:0);var j=C[F[a]],k=Object.prototype.hasOwnProperty.call(h,F[a]);if(j){var l=null,m=null;switch(j.story_type){case 412:case 337:m=j==null?void 0:(e=j.args)==null?void 0:(e=e.media)==null?void 0:e[0];if(m){e=p((e=j.args.destination)!=null?e:"");if(e==null){c("FBLogger")("ig_web").warn(j.story_type+" Activity Feed item does not have webview url");return null}m.web_permalink_override=e;l=i.jsx(c("PolarisBaseMediaActivityStory.react"),{latestReelMedia:(e=j.args.latest_reel_media)!=null?e:0,latestReelSeenTime:(e=j.args.latest_reel_seen_time)!=null?e:0,links:j.args.links,media:m,onClick:function(){return z(g,k,j)},text:j.args.text,timestamp:j.timestamp,user:j.user,userId:(e=j.args.profile_id)!=null?e:""},g)}break;case 12:case 13:case 66:case 102:case 60:case 105:if(j.args.media){l=i.jsx(c("PolarisBaseMediaActivityStory.react"),{latestReelMedia:(m=j.args.latest_reel_media)!=null?m:0,latestReelSeenTime:(e=j.args.latest_reel_seen_time)!=null?e:0,links:j.args.links,media:j.args.media[0],onClick:function(){return z(g,k,j)},text:j.args.text,timestamp:j.timestamp,user:j.user,userId:(m=j.args.profile_id)!=null?m:""},g)}break;case 101:case 117:case 110:case 111:case 127:case 328:case 43:case 120:l=i.jsx(c("PolarisBaseUserActivityStory.react"),{analyticsContext:b,latestReelMedia:(e=j.args.latest_reel_media)!=null?e:0,latestReelSeenTime:(m=j.args.latest_reel_seen_time)!=null?m:0,links:j.args.links,onClick:function(){return z(g,k,j)},text:j.args.text,timestamp:j.timestamp,user:j.user,userId:(e=j.args.profile_id)!=null?e:""},g);break;case 75:if(f!=null&&f.get(j.user.id.toString())!=null){l=i.jsx(c("PolarisInlineFollowRequestActivityStory.react"),{latestReelMedia:(m=j.args.latest_reel_media)!=null?m:0,latestReelSeenTime:(e=j.args.latest_reel_seen_time)!=null?e:0,links:j.args.links,onApprove:A,onIgnore:B,position:g,request:c("nullthrows")(f.get(j.user.id.toString())),text:j.args.text,user:j.user,userId:j.user.id.toString()},g)}break;case 300:case 301:case 469:case 489:case 369:case 383:case 173:case 399:case 498:case 647:case 689:case 696:case 697:case 698:case 703:case 699:case 700:case 712:case 713:case 731:case 736:case 734:case 691:case 729:case 748:case 759:case 704:case 705:l=i.jsx(c("PolarisNotificationActivityStory.react"),{icon:(m=j.args.icon_url)!=null?m:"",link:(e=j.args.destination)!=null?e:"",onClick:function(){return z(g,k,j)},text:j.args.text},g);break;case 710:case 711:case 749:if(c("gkx")("3757")===!0){l=i.jsx(c("PolarisBloksNotificationActivityStory.react"),{icon:(m=j.args.icon_url)!=null?m:"",onClick:function(){return z(g,k,j)},storyType:j.story_type,text:j.args.text,user_link:j.args.links},g)}else{l=i.jsx(c("PolarisNotificationActivityStory.react"),{icon:(e=j.args.icon_url)!=null?e:"",link:""+d("PolarisRoutes").PRIVACY_AND_SECURITY_PATH,onClick:function(){return z(g,k,j)},openLink:function(a){return d("PolarisNavigationUtils").openURLWithFullPageReload(a)},text:j.args.text,user_link:j.args.links},g)}break}return l?i.jsxs(c("PolarisIGCoreBox"),{children:[D(a),i.jsx(c("PolarisErrorBoundaryWithHoldout.react"),{children:l})]},g):l}}return null};e=h!=null?Object.keys(h).length:0;q=q!=null?Object.keys(q).length:0;e=e+q+(v?1:0);return e===0?i.jsx(c("PolarisActivityFeedBlankShareView.react"),{}):i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisIGVirtualList.react"),{containerSize:d("PolarisUA").isMobile()?void 0:g,estimatedItemSize:l,initialRenderCount:m,itemCount:e,overscanCount:n,renderer:a}),d("PolarisUA").isMobile()&&i.jsx(c("PolarisFetchingSuggestedUserList.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.newsfeed_you,viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.activity_page})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFollowAcceptRateLimitDialog.react",["fbt","IGCoreDialog","PolarisGenericStrings","PolarisIGCoreBox","PolarisIGCoreText","PolarisSettingsActionTypes","PolarisSettingsActions","Polarisunexpected","keyMirror","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("keyMirror")({MAKE_PRIVATE:null,MAKE_PUBLIC:null,NONE:null}),k=h._("Make Private"),l=h._("Make Public");b=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var d;d=a.call(this,b)||this;d.$1=function(){switch(d.props.action){case j.MAKE_PRIVATE:d.props.onSetPrivateAccount();break;case j.MAKE_PUBLIC:d.props.onSetPublicAccount();break;default:c("Polarisunexpected")("Unexpected action "+d.props.action);break}d.props.onClose()};d.$2=function(){d.props.action===j.NONE&&d.props.onConfirmSwitchedToPublic(),d.props.onClose()};return d}var e=b.prototype;e.render=function(){var a=i.jsx(c("PolarisIGCoreBox"),{maxHeight:"50vh",overflow:"auto",children:this.props.warning.message.split("\n").map(function(a,b){return i.jsx(c("PolarisIGCoreText"),{children:a},b)})}),b=null,e=this.props.action!==j.NONE;e&&(b=i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",onClick:this.$1,children:this.props.action===j.MAKE_PRIVATE?k:l}));return i.jsxs(d("IGCoreDialog").IGCoreDialog,{body:a,title:this.props.warning.title,children:[b,i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:this.$2,children:e?d("PolarisGenericStrings").CANCEL_TEXT:d("PolarisGenericStrings").OK_TEXT})]})};return b}(i.Component);function a(a){return{onSetPrivateAccount:function(){a(d("PolarisSettingsActions").setPrivateAccount({privateAccount:!0,publicToPrivateRateLimitOverride:!0}))},onSetPublicAccount:function(){a(d("PolarisSettingsActions").setPrivateAccount({privateAccount:!1}))},onConfirmSwitchedToPublic:function(){a({type:d("PolarisSettingsActionTypes").PRIVATE_ACCOUNT_UPDATE_SUCCEEDED,privateAccount:!1,toast:{text:d("PolarisSettingsActions").GENERIC_SETTINGS_SAVED}})}}}e=d("react-redux-wwwig").connect(null,a)(b);g.FOLLOW_ACCEPT_ACTIONS=j;g.FollowAcceptRateLimitDialog=e}),98);
__d("PolarisActivityStoryAvatar.react",["cx","PolarisUserAvatarWithStories.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.onClick,d=a.profilePictureUrl;a=a.username;return i.jsx("div",{className:"_aajb","data-testid":void 0,children:i.jsx(c("PolarisUserAvatarWithStories.react"),{isLink:!0,onClick:b,profilePictureUrl:d,size:34,storyEntrypoint:"activity_feed",username:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFollowRequestActivityStory.react",["cx","invariant","PolarisActivityStoryAvatar.react","PolarisActivityUserLink.react","PolarisBaseActivityStory.react","PolarisConnectionsLogger","PolarisFollowRequestButtons.react","PolarisLinkBuilder","PolarisuserSelectors","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.onApprove,e=a.onIgnore,f=a.position,g=a.request,h=a.userId;a=d("react-redux-wwwig").useSelector(function(a){return d("PolarisuserSelectors").getUserById(a,h)});var k=a.fullName,l=a.id,m=a.profilePictureUrl;a=a.username;var n=function(a){b(h,a)},o=function(a){e(h,a)},p=function(){d("PolarisConnectionsLogger").logConnectionAction({position:f,eventName:"follow_request_tapped",containerModule:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.follow_requests,targetId:h})};l&&a!=null&&a!==""&&k!=null&&m!=null&&m!==""||i(0,51542);return j.jsx(c("PolarisBaseActivityStory.react"),{fallbackHref:d("PolarisLinkBuilder").buildUserLink(a),onFallbackClick:p,secondaryContext:j.jsx(c("PolarisFollowRequestButtons.react"),{onApprove:n,onIgnore:o,position:f,requestStatus:g.status,userId:l,username:a}),visualSocialContext:j.jsx(c("PolarisActivityStoryAvatar.react"),{onClick:p,profilePictureUrl:m,username:a}),children:j.jsxs("div",{className:"_aab-",children:[j.jsx(c("PolarisActivityUserLink.react"),{onClick:p,username:a}),j.jsx("span",{className:"_aab_",children:k})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFollowRequestList.react",["PolarisActivityFeedFollowRequestsEmptyState.react","PolarisConnectionsLogger","PolarisFetchingSuggestedUserList.react","PolarisFollowAcceptRateLimitDialog.react","PolarisFollowRequestActivityStory.react","PolarisIGCoreBox","PolarisIGCoreSpinner","PolarisIGVirtualList.react","PolarisScrollPositionManager.react","PolarisUA","nullthrows","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useEffect,j=e.useRef,k=e.useState,l=65,m=15,n=5;function a(a){a.error;var b=a.followAcceptRateLimitWarning;a.loading;var e=a.onApprove,f=a.onIgnore;a.onListChange;var g=a.requests;a=k(!1);var o=a[0],p=a[1],q=j(null);i(function(){q&&q.current!=null&&q.current.forceUpdate()},[q,g]);var r=function(a,b){p(!1),e(a,b)};a=function(a){a=a.index;var b=c("nullthrows")(g).entrySeq().toArray()[a],d=b[0];b=b[1];return h.jsx(c("PolarisFollowRequestActivityStory.react"),{onApprove:r,onIgnore:f,position:a,request:b,userId:d},d)};var s=function(){p(!0)},t=function(){return!b||o?null:h.jsx(d("PolarisFollowAcceptRateLimitDialog.react").FollowAcceptRateLimitDialog,{action:d("PolarisFollowAcceptRateLimitDialog.react").FOLLOW_ACCEPT_ACTIONS.MAKE_PUBLIC,onClose:s,warning:b})};if(g==null)return h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",flex:"grow",justifyContent:"center",children:h.jsx(c("PolarisIGCoreSpinner"),{})});return g.size===0?h.jsx(c("PolarisActivityFeedFollowRequestsEmptyState.react"),{}):h.jsxs("div",{children:[g&&d("PolarisUA").isMobile()&&h.jsx(c("PolarisScrollPositionManager.react"),{}),g&&h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisIGVirtualList.react"),{containerSize:d("PolarisUA").isMobile()?void 0:"auto",estimatedItemSize:l,initialRenderCount:m,itemCount:g.count(),overscanCount:n,ref:q,renderer:a}),h.jsx(c("PolarisFetchingSuggestedUserList.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.follow_requests,viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.activity_page}),t()]})]})}a.displayName=a.name+" [from "+f.id+"]";function b(a){a=a.followRequests.requests;var b=null;a&&(b=a.find(function(a){a=a.error;return a&&a.has_private_public_switch_restriction}));a=null;b&&(a={title:c("nullthrows")(b.error).privacy_rate_limit_dialog_title||"",message:c("nullthrows")(b.error).privacy_rate_limit_dialog_message||""});return{followAcceptRateLimitWarning:a}}e=d("react-redux-wwwig").connect(b)(a);g["default"]=e}),98);
__d("PolarisActivityFeed.react",["IGRouter","PolarisActivityFeedConstants","PolarisActivityStoryActions","PolarisActivityStoryList.react","PolarisActivityStorySelectors","PolarisFollowRequestActions","PolarisFollowRequestList.react","PolarisFollowRequestState","PolarisUA","PolarisuserSelectors","browserHistory","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState;function a(a){var b=a.analyticsContext,e=a.updateHistory,f=d("IGRouter").useIGHistory(),g=d("react-redux-wwwig").useDispatch();a=j(d("PolarisActivityFeedConstants").ActivityFeedListType.ActivityStories);var k=a[0],l=a[1];a=j(!1);var m=a[0],n=a[1];function o(){f.location.search.indexOf("followRequests")!==-1?l(d("PolarisActivityFeedConstants").ActivityFeedListType.FollowRequests):l(d("PolarisActivityFeedConstants").ActivityFeedListType.ActivityStories)}i(function(){g(d("PolarisActivityStoryActions").loadActivityFeed());n(!0);var a=f.listen(function(a,b){b===d("browserHistory").ACTION.POP&&o()});o();return a},[]);var p={loading:d("react-redux-wwwig").useSelector(function(a){return d("PolarisActivityStorySelectors").feedIsLoading(a)}),error:d("react-redux-wwwig").useSelector(function(a){return d("PolarisActivityStorySelectors").feedError(a)}),new_stories:(a=d("react-redux-wwwig").useSelector(function(a){return d("PolarisActivityStorySelectors").newStories(a)}))!=null?a:{},old_stories:(a=d("react-redux-wwwig").useSelector(function(a){return d("PolarisActivityStorySelectors").oldStories(a)}))!=null?a:{},partition:(a=d("react-redux-wwwig").useSelector(function(a){return d("PolarisActivityStorySelectors").partition(a)}))!=null?a:{}};a=d("react-redux-wwwig").useSelector(function(a){return a.followRequests});var q=d("react-redux-wwwig").useSelector(function(a){return(a=d("PolarisuserSelectors").getViewer(a))==null?void 0:a.isPrivate});i(function(){!p.loading&&!p.error&&p.new_stories!=null&&p.old_stories!=null&&g(d("PolarisActivityStoryActions").activityFeedChecked())},[]);function r(a){if(e)switch(a){case d("PolarisActivityFeedConstants").ActivityFeedListType.FollowRequests:f.push("/accounts/activity?followRequests=1");break;default:f.goBack();break}l(a)}function s(a){g(d("PolarisFollowRequestActions").approveFollowRequest(a))}function t(a){g(d("PolarisFollowRequestActions").ignoreFollowRequest(a))}var u=(a==null?void 0:a.requests)&&a.requests.filter(function(a){return a.status===d("PolarisFollowRequestState").FollowRequestStatus.Pending});u=u!=null?u.count():0;u=u>0||q===!0&&d("PolarisUA").isMobile();switch(k){case d("PolarisActivityFeedConstants").ActivityFeedListType.ActivityStories:return h.jsx(c("PolarisActivityStoryList.react"),{analyticsContext:b,error:p.error,followRequests:a.requests,loading:m&&p.loading,new_stories:p.new_stories,old_stories:p.old_stories,onApprove:s,onIgnore:t,onListChange:r,partition:p.partition,showFollowRequest:u});case d("PolarisActivityFeedConstants").ActivityFeedListType.FollowRequests:return h.jsx(c("PolarisFollowRequestList.react"),{analyticsContext:b,error:a.error,loading:a.loading,onApprove:s,onIgnore:t,onListChange:r,requests:a.requests})}}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);