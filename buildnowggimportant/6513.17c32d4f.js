"use strict";(self.webpackChunkcrazygames_gameframe=self.webpackChunkcrazygames_gameframe||[]).push([[6513],{66513:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(47313),a=n(69099),i=n(78940),o=(0,i.ZP)("div")((function(e){return{opacity:.9,backgroundColor:e.theme.palette.primary.dark,position:"absolute",left:0,top:0,height:"100vh",width:"100vw",zIndex:1}})),s=(0,i.ZP)("div")((function(){return{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",left:0,top:0,height:"100vh",width:"100vw",zIndex:2}})),c=(0,i.ZP)("div")((function(e){return{alignSelf:"center",backgroundColor:e.theme.palette.secondary.contrastText,borderRadius:10,boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.3)",padding:28,paddingTop:0,width:300}})),l=(0,i.ZP)("div")((function(e){return{display:"flex",justifyContent:"center",marginTop:-(0,e.theme.spacing)(4)}})),d=(0,i.ZP)("div")((function(e){var t=e.theme,n=t.palette,r=t.spacing;return{color:n.primary.light,fontFamily:"Montserrat, sans-serif",fontSize:14,margin:r(2,0),textAlign:"center"}})),p=(0,i.ZP)(a.Z)((function(e){var t=e.theme,n=t.palette,r=t.typography;return{backgroundColor:n.primary.light,borderRadius:30,color:n.secondary.contrastText,fontSize:18,fontFamily:r.h1.fontFamily,textTransform:"none"}})),u=(0,i.ZP)(a.Z)((function(e){var t=e.theme,n=t.palette,r=t.typography;return{backgroundColor:n.secondary.contrastText,borderRadius:30,border:"solid 2px",borderColor:n.primary.light,color:n.primary.light,fontSize:18,fontFamily:r.h1.fontFamily,textTransform:"none"}})),f=n(420),m=n(8242),h=n(90831),g=n(6224),y=n(62875),x=n(46417),v=(0,m.Z)((function(e){var t=(0,h.NI)().gameName;r.useEffect((function(){g.ZP.addPWAPromptStat()}),[]);var n=e.device.isIos?"pwa.text.ios":"pwa.text.default";return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{}),(0,x.jsx)(s,{children:(0,x.jsxs)(c,{children:[(0,x.jsx)(l,{children:(0,x.jsx)("img",{style:{height:70},src:"https://images.crazygames.com/favicons/android-icon-96x96.png",alt:"Ziggy"})}),(0,x.jsx)(d,{children:(0,x.jsx)(f.Z,{id:n,values:{gameName:t}})}),(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,x.jsx)(u,{variant:"contained",onClick:function(){y.Z.cancelGamePWAInstall(),(0,g.xc)(),e.onCancel()},children:(0,x.jsx)(f.Z,{id:"buttons.cancel"})}),(0,x.jsx)(p,{color:"primary",variant:"contained",onClick:function(){y.Z.addGamePWA("popup"),(0,g.UQ)(),e.onAdd()},children:(0,x.jsx)(f.Z,{id:"pwa.button.okay"})})]})]})})]})}))}}]);