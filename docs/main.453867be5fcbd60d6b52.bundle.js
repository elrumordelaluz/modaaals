(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(7),core_browser_esm=__webpack_require__(2),react=__webpack_require__(0),react_default=__webpack_require__.n(react),framer_motion_es=__webpack_require__(87),es2015=__webpack_require__(274),Combination=__webpack_require__(625),react_dom=__webpack_require__(114),Modal_Portal=function(_a){var children=_a.children,_b=_a.id,id=void 0===_b?"portaaal":_b,_c=_a.elem,elem=void 0===_c?"modaaal":_c,_d=_a.skipMotion,skipMotion=void 0!==_d&&_d,setVisible=Object(react.useState)(!1)[1],ref=Object(react.useRef)(null);Object(react.useLayoutEffect)((function(){return null===ref.current&&(ref.current=document.createElement(elem),ref.current.setAttribute("id",id)),document.body.appendChild(ref.current),setVisible(!0),function(){ref.current&&(setVisible(!1),document.body.removeChild(ref.current))}}),[elem]);var toRender=skipMotion?react_default.a.createElement(react_default.a.Fragment,null,children):react_default.a.createElement(framer_motion_es.a,null,react_default.a.createElement(framer_motion_es.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},children));return ref.current?Object(react_dom.createPortal)(toRender,ref.current):null},Modal_CloseIcon=function(){return react_default.a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 16 16"},react_default.a.createElement("path",{fillRule:"evenodd",fill:"currentColor",d:"M9.293 8.038l6.225-6.259a.996.996 0 0 0 0-1.406.983.983 0 0 0-1.398 0L7.894 6.632 1.669.373a.984.984 0 0 0-1.399 0 .996.996 0 0 0 0 1.406l6.225 6.259L.27 14.297a.996.996 0 0 0 .699 1.698.98.98 0 0 0 .7-.292l6.225-6.259 6.226 6.259a.98.98 0 0 0 1.398 0 .996.996 0 0 0 0-1.406L9.293 8.038z"}))},ModalContent=function(_a){var skipMotion=_a.skipMotion,children=_a.children,dragConstraints=_a.dragConstraints,constraintsRef=_a.constraintsRef,drag=_a.drag,styles=_a.styles,_b=_a.motionProps,motionProps=void 0===_b?{animate:{translateY:"-50%"},initial:{translateX:"-50%",translateY:"-43%"}}:_b,customDragConstraints=void 0===dragConstraints?constraintsRef||!1:dragConstraints;return skipMotion?Object(core_browser_esm.b)("div",{css:styles},children):Object(core_browser_esm.b)(framer_motion_es.b.div,Object(tslib_es6.a)({css:styles,dragConstraints:customDragConstraints,drag:drag,initial:!0},motionProps),children)},Modal_Modal=function(_a){var _b=_a.modals,modals=void 0===_b?{}:_b,modal=_a.modal,closeModal=_a.closeModal,skipMotion=_a.skipMotion,drag=_a.drag,dragConstraints=_a.dragConstraints,enabledScroll=_a.enabledScroll,motionProps=_a.motionProps,_c=_a.styles,styles=void 0===_c?defaultStyles:_c,constraintsRef=Object(react.useRef)(null),_d=modal?"string"==typeof modal?{type:modal}:modal:{type:null},modalType=_d.type,focusRef=_d.focusRef,skipMotionOverride=_d.skipMotion,dragOverride=_d.drag,dragConstraintsOverride=_d.dragConstraints,enabledScrollOverride=_d.enabledScroll,motionProspOverride=_d.motionProps,restProps=Object(tslib_es6.c)(_d,["type","focusRef","skipMotion","drag","dragConstraints","enabledScroll","motionProps"]),modalProps=Object(tslib_es6.a)({closeModal:closeModal,focusRef:focusRef},restProps),onActivationFocusLock=Object(react.useCallback)((function(){focusRef&&focusRef.current&&focusRef.current.focus()}),[focusRef]),getStyles=function(key){var base=defaultStyles[key]();return base.boxSizing="border-box",styles[key]?styles[key](base):base},dragValue=void 0!==dragOverride?dragOverride:void 0===drag||drag;return modal?Object(core_browser_esm.b)(Modal_Portal,{skipMotion:skipMotion||skipMotionOverride},Object(core_browser_esm.b)(es2015.a,{autoFocus:!0,returnFocus:!0,onActivation:onActivationFocusLock},Object(core_browser_esm.b)(Combination.a,{enabled:!enabledScroll||!enabledScrollOverride},Object(core_browser_esm.b)("div",{onClick:closeModal,css:getStyles("overlay")},Object(core_browser_esm.b)("div",{ref:constraintsRef,css:getStyles("constraints")})),Object(core_browser_esm.b)(ModalContent,{skipMotion:skipMotion||skipMotionOverride,drag:dragValue,dragConstraints:dragConstraints||dragConstraintsOverride,constraintsRef:constraintsRef,styles:getStyles("contentOuter"),motionProps:motionProps||motionProspOverride},Object(core_browser_esm.b)("button",{css:getStyles("closeButton"),onClick:closeModal},Object(core_browser_esm.b)(Modal_CloseIcon,null)),Object(react.isValidElement)(modal)?modal:Object(core_browser_esm.b)("div",{css:getStyles("contentInner")},modalType&&void 0!==modals[modalType]?Object(react.createElement)(modals[modalType],modalProps):null))))):null},defaultStyles={overlay:function(){return{position:"fixed",top:0,right:0,bottom:0,left:0,backgroundColor:"rgba(42, 38, 33, 0.5)"}},constraints:function(){return{position:"absolute",top:"10vh",right:"10vh",bottom:"10vh",left:"10vh"}},contentOuter:function(){return{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",overflow:"auto",background:"#fcf7f6",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.2)",borderRadius:24,boxShadow:"0 10px 60px rgba(0, 0, 0, 0.15)"}},contentInner:function(){return{overflow:"auto",maxHeight:"60vh",margin:"83px 152px 68px"}},closeButton:function(){return{width:"16px",height:"16px",border:0,outline:0,background:"none",padding:0,color:"#56595f",cursor:"pointer",position:"absolute",top:"38px",left:"38px",transition:"color 0.3s","&: hover":{color:"var(--accent)"}}}},keycode_esm=__webpack_require__(273);var ModalContext=react_default.a.createContext({modal:null,openModal:function(){},closeModal:function(){},setDisabled:function(){},isDisabled:!1}),ModalProvider=function(_a){var children=_a.children,defaultModal=_a.defaultModal,modals=_a.modals,_b=_a.styles,styles=void 0===_b?defaultStyles:_b,props=Object(tslib_es6.c)(_a,["children","defaultModal","modals","styles"]),_c=Object(react.useState)(!1),disabled=_c[0],setDisabled=_c[1],_d=function useOpenClose(initialValue,disabled){void 0===initialValue&&(initialValue=!1),void 0===disabled&&(disabled=!1);var _a=Object(react.useState)(initialValue),isOpen=_a[0],setOpen=_a[1];return Object(react.useEffect)((function(){var handleEvent=function(e){e.keyCode!==keycode_esm.a||disabled||(e.preventDefault(),setOpen(!1))};return isOpen&&document.addEventListener("keydown",handleEvent),function(){document.removeEventListener("keydown",handleEvent)}}),[isOpen,disabled]),[isOpen,setOpen]}(!1,disabled),modal=_d[0],openModal=_d[1];function closeModal(){disabled||openModal(null)}return Object(react.useEffect)((function(){openModal(defaultModal||null)}),[openModal,defaultModal]),react_default.a.createElement(ModalContext.Provider,{value:{modal:modal,openModal:openModal,closeModal:closeModal,setDisabled:setDisabled,isDisabled:disabled}},react_default.a.createElement(Modal_Modal,Object(tslib_es6.a)({modals:modals,modal:modal,closeModal:closeModal,styles:styles},props)),children)},Context=ModalContext;__webpack_require__.d(__webpack_exports__,"a",(function(){return Context})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ModalProvider}))},278:function(module,exports,__webpack_require__){__webpack_require__(279),__webpack_require__(425),module.exports=__webpack_require__(426)},343:function(module,exports){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react);function StaticModal(){return react_default.a.createElement("div",null,"Static Modal!")}var tslib_es6=__webpack_require__(7);function ExtraPropsModal(_a){var closeModal=_a.closeModal,focusRef=_a.focusRef,rest=Object(tslib_es6.c)(_a,["closeModal","focusRef"]);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("pre",null,react_default.a.createElement("code",null,JSON.stringify(rest,null,2))),react_default.a.createElement("button",{ref:focusRef,onClick:closeModal},"close"))}function ParagraphsModal(_a){var closeModal=_a.closeModal,focusRef=_a.focusRef;return react_default.a.createElement("div",null,react_default.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget metus venenatis odio mattis euismod sed ut massa. Cras euismod sem in mi molestie tempor. Proin neque massa, tincidunt in rutrum et, lacinia quis eros. Sed dignissim massa fermentum arcu porttitor ullamcorper. Maecenas lacinia lorem nec odio mollis faucibus. Sed sed quam lectus. Integer neque felis, condimentum eget sollicitudin a, ultricies sed neque."),react_default.a.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed interdum tortor ut pulvinar viverra. Sed rutrum laoreet vehicula. Phasellus id ultricies tortor. Praesent rutrum mauris nec diam venenatis aliquet. Donec non scelerisque lacus. Nullam scelerisque ipsum eu nibh facilisis mollis. Vestibulum vestibulum, nulla nec porta dignissim, purus risus consequat justo, vitae feugiat enim nulla quis elit. Nulla non mi velit."),react_default.a.createElement("p",null,"Nulla auctor purus pretium, tristique nibh fringilla, interdum mauris. Praesent est enim, ultrices pretium sapien ut, sollicitudin efficitur augue. Maecenas risus felis, vehicula vel rhoncus ut, maximus vel nisl. Nulla et laoreet libero. Quisque vehicula purus eget quam ultricies, id malesuada urna faucibus. Maecenas sodales scelerisque ligula, id fermentum nisi blandit id. Pellentesque blandit arcu vitae diam molestie, a lobortis turpis condimentum. Suspendisse cursus augue nisl. Fusce vel neque at nulla consequat convallis a eget nibh."),react_default.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas cursus sed nisi id pretium. Suspendisse potenti. Proin ut mattis est, blandit ullamcorper quam. Nam sapien massa, vestibulum sit amet arcu non, condimentum pharetra nisl. Sed suscipit tincidunt maximus. Proin feugiat velit vel ex gravida, nec consequat magna bibendum. Vestibulum lacinia semper eros quis euismod. Quisque eget tincidunt magna, quis consequat justo. Integer condimentum tempor nunc, at hendrerit metus fringilla ac. Donec orci tortor, iaculis molestie magna at, pulvinar pellentesque nisl. Vestibulum non elit massa."),react_default.a.createElement("p",null,"Vestibulum finibus lacinia nibh, id laoreet odio pellentesque non. Curabitur tempor odio a nisi condimentum tempor. Sed sem metus, faucibus sit amet consectetur ac, molestie at enim. Nunc luctus orci sit amet euismod pulvinar. Sed a gravida elit. Curabitur non elementum ligula. Nam efficitur volutpat tellus, tempor pellentesque metus aliquam ac. Nam nec mattis arcu, et ullamcorper nisl. Aliquam erat volutpat. Nullam non pellentesque nibh."," "),react_default.a.createElement("button",{ref:focusRef,onClick:closeModal},"close"))}function SideEffectsModal(_a){_a.closeModal;var side=_a.side,rest=Object(tslib_es6.c)(_a,["closeModal","side"]),_b=Object(react.useState)("loading…"),str=_b[0],setStr=_b[1];return Object(react.useEffect)((function(){setTimeout((function(){return setStr(side)}),1600)}),[side]),react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("p",null,str),react_default.a.createElement("pre",null,react_default.a.createElement("code",null,JSON.stringify(rest,null,2))))}var src=__webpack_require__(15);function ModalLauncherWithTimer(_a){var modal=_a.modal,_b=_a.label,label=void 0===_b?"Open Modal!":_b,_c=_a.time,time=void 0===_c?5e3:_c,props=Object(tslib_es6.c)(_a,["modal","label","time"]),_d=Object(react.useContext)(src.a),openModal=_d.openModal,isDisabled=_d.isDisabled,setDisabled=_d.setDisabled;return function useTimeout(callback,delay){var savedCallback=Object(react.useRef)();Object(react.useEffect)((function(){savedCallback.current=callback}),[callback]),Object(react.useEffect)((function(){if(null!==delay){var id_1=setTimeout((function tick(){savedCallback.current()}),delay);return function(){return clearTimeout(id_1)}}}),[delay])}((function(){return setDisabled(!1)}),time),react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("button",Object(tslib_es6.a)({onClick:function(){openModal(modal),setDisabled(!0)}},props,{disabled:isDisabled}),label," ",isDisabled?" (DISABLED)":"ENABLED"))}var Modals_ModalLauncher=function ModalLauncher(_a){var modal=_a.modal,_b=_a.label,label=void 0===_b?"Open Modal!":_b,props=Object(tslib_es6.c)(_a,["modal","label"]),openModal=Object(react.useContext)(src.a).openModal;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("button",Object(tslib_es6.a)({onClick:function(){return openModal(modal)}},props),label))};__webpack_require__.d(__webpack_exports__,"f",(function(){return StaticModal})),__webpack_require__.d(__webpack_exports__,"a",(function(){return ExtraPropsModal})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ParagraphsModal})),__webpack_require__.d(__webpack_exports__,"e",(function(){return SideEffectsModal})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Modals_ModalLauncher})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ModalLauncherWithTimer}))},426:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(271);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(616),module)}.call(this,__webpack_require__(427)(module))},616:function(module,exports,__webpack_require__){var map={"./Basics.stories.tsx":617,"./Custom.stories.tsx":621};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=616},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Simple",(function(){return Simple})),__webpack_require__.d(__webpack_exports__,"ExtraProps",(function(){return ExtraProps})),__webpack_require__.d(__webpack_exports__,"ScrollContent",(function(){return ScrollContent})),__webpack_require__.d(__webpack_exports__,"SideEffect",(function(){return SideEffect})),__webpack_require__.d(__webpack_exports__,"Component",(function(){return Component}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_emotion_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),_Modals__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4);function Simple(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_3__.b,{modals:{simple:_Modals__WEBPACK_IMPORTED_MODULE_4__.f}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_Modals__WEBPACK_IMPORTED_MODULE_4__.b,{modal:"simple",label:"Open Simple Modal"}))}function ExtraProps(){var ref=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_3__.b,{modals:{modal:_Modals__WEBPACK_IMPORTED_MODULE_4__.a}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_Modals__WEBPACK_IMPORTED_MODULE_4__.b,{modal:{type:"modal",foo:"bar",another:"stuff",lol:!0,focusRef:ref},label:"Extra Props and focus ref"}))}__webpack_exports__.default={title:"Modal Basics"},Simple.story={name:"Simple"},ExtraProps.story={name:"Extra Props"},ScrollContent.story={name:"Scroll Content"};var templateObject_1,templateObject_2,templateObject_3,templateObject_4,textStyles=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.a)(templateObject_1||(templateObject_1=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(["\n  padding: 2em;\n  width: 20%;\n  margin: 0 auto;\n  line-height: 2;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"],["\n  padding: 2em;\n  width: 20%;\n  margin: 0 auto;\n  line-height: 2;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"])));function ScrollContent(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_3__.b,{modals:{modal:_Modals__WEBPACK_IMPORTED_MODULE_4__.d}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_Modals__WEBPACK_IMPORTED_MODULE_4__.b,{modal:{type:"modal",enabledScroll:!0},label:"Overflow and enable body scroll",css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.a)(templateObject_2||(templateObject_2=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(["\n          position: fixed;\n          top: 0.9em;\n          left: 0.9em;\n        "],["\n          position: fixed;\n          top: 0.9em;\n          left: 0.9em;\n        "])))}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)("main",{css:textStyles},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"Nulla auctor purus pretium, tristique nibh fringilla, interdum mauris. Praesent est enim, ultrices pretium sapien ut, sollicitudin efficitur augue. Maecenas risus felis, vehicula vel rhoncus ut, maximus vel nisl. Nulla et laoreet libero. Quisque vehicula purus eget quam ultricies, id malesuada urna faucibus. Maecenas sodales scelerisque ligula, id fermentum nisi blandit id. Pellentesque blandit arcu vitae diam molestie, a lobortis turpis condimentum. Suspendisse cursus augue nisl. Fusce vel neque at nulla consequat convallis a eget nibh."),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas cursus sed nisi id pretium. Suspendisse potenti. Proin ut mattis est, blandit ullamcorper quam. Nam sapien massa, vestibulum sit amet arcu non, condimentum pharetra nisl. Sed suscipit tincidunt maximus. Proin feugiat velit vel ex gravida, nec consequat magna bibendum. Vestibulum lacinia semper eros quis euismod. Quisque eget tincidunt magna, quis consequat justo. Integer condimentum tempor nunc, at hendrerit metus fringilla ac. Donec orci tortor, iaculis molestie magna at, pulvinar pellentesque nisl. Vestibulum non elit massa."),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"Vestibulum finibus lacinia nibh, id laoreet odio pellentesque non. Curabitur tempor odio a nisi condimentum tempor. Sed sem metus, faucibus sit amet consectetur ac, molestie at enim. Nunc luctus orci sit amet euismod pulvinar. Sed a gravida elit. Curabitur non elementum ligula. Nam efficitur volutpat tellus, tempor pellentesque metus aliquam ac. Nam nec mattis arcu, et ullamcorper nisl. Aliquam erat volutpat. Nullam non pellentesque nibh."," ")))}function SideEffect(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_3__.b,{modals:{modal:_Modals__WEBPACK_IMPORTED_MODULE_4__.e}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_Modals__WEBPACK_IMPORTED_MODULE_4__.b,{modal:{type:"modal",side:"hola"},label:"Side Effect"}))}function Component(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_3__.b,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_Modals__WEBPACK_IMPORTED_MODULE_4__.b,{modal:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.a)(templateObject_3||(templateObject_3=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(["\n              background: aquamarine;\n              padding: 100px;\n            "],["\n              background: aquamarine;\n              padding: 100px;\n            "])))},"Hello World"),label:"Element"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(_Modals__WEBPACK_IMPORTED_MODULE_4__.b,{modal:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)(CustomComponent,null),label:"Component"}))}function CustomComponent(_a){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.a)(templateObject_4||(templateObject_4=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(["\n        padding: 100px;\n      "],["\n        padding: 100px;\n      "])))},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)("h1",null,"Hello"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"World"))}SideEffect.story={name:"Side Effect"},Component.story={name:"Passing a Component"}},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SkipMotionGlobal",(function(){return SkipMotionGlobal})),__webpack_require__.d(__webpack_exports__,"SkipMotionLocally",(function(){return SkipMotionLocally})),__webpack_require__.d(__webpack_exports__,"CustomDragGlobally",(function(){return CustomDragGlobally})),__webpack_require__.d(__webpack_exports__,"CustomDragLocally",(function(){return CustomDragLocally})),__webpack_require__.d(__webpack_exports__,"CleanInnerAnimations",(function(){return CleanInnerAnimations})),__webpack_require__.d(__webpack_exports__,"CustomAnimate",(function(){return CustomAnimate})),__webpack_require__.d(__webpack_exports__,"DisableClose",(function(){return DisableClose}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_Modals__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4);function SkipMotionGlobal(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{modals:{1:_Modals__WEBPACK_IMPORTED_MODULE_3__.f,2:_Modals__WEBPACK_IMPORTED_MODULE_3__.a},skipMotion:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:1},label:"Modal 1"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:2},label:"Modal 2"}))}function SkipMotionLocally(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{modals:{1:_Modals__WEBPACK_IMPORTED_MODULE_3__.f,2:_Modals__WEBPACK_IMPORTED_MODULE_3__.a}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:1},label:"Modal with Motion"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:2,skipMotion:!0},label:"Modal without Motion"}))}function CustomDragGlobally(){var _a=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(),drag=_a[0],setDrag=_a[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,"Global Drag Values:"," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"radio",onChange:function(e){return setDrag(!1)},checked:!1===drag})," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code",null,"false")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"radio",onChange:function(e){return setDrag("x")},checked:"x"===drag})," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code",null,"x")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"radio",onChange:function(e){return setDrag("y")},checked:"y"===drag})," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code",null,"y")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"radio",onChange:function(e){return setDrag(void 0)},checked:void 0===drag})," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code",null,"undefined")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{modals:{modal:_Modals__WEBPACK_IMPORTED_MODULE_3__.f},drag:drag},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:"modal",label:"Modal with Custom Drag"})))}function CustomDragLocally(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{modals:{modal:_Modals__WEBPACK_IMPORTED_MODULE_3__.f}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:"modal"},label:"Modal With Default Drag"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:"modal",drag:!1},label:"Modal Without Drag"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:"modal",drag:"x"},label:"Modal With Drag horizontally"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:"modal",drag:"y"},label:"Modal With Drag vertically"}))}function CleanInnerAnimations(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{motionProps:{},modals:{modal:_Modals__WEBPACK_IMPORTED_MODULE_3__.f},styles:{contentOuter:function(base){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)({},base),{transform:"translate(-50%, -50%)!important"})}}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:"modal"},label:"Modal "}))}function CustomAnimate(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{motionProps:{animate:{top:"0",scale:1,opacity:1},initial:{top:"100px",translateX:"-50%",scale:3,opacity:0}},modals:{modal:_Modals__WEBPACK_IMPORTED_MODULE_3__.f}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.b,{modal:{type:"modal"},label:"Modal "}))}function DisableClose(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,{motionProps:{animate:{top:"0",scale:1,opacity:1},initial:{top:"100px",translateX:"-50%",scale:3,opacity:0}},modals:{modal:_Modals__WEBPACK_IMPORTED_MODULE_3__.f}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_3__.c,{time:1e4,modal:{type:"modal"},label:"Modal"}))}__webpack_exports__.default={title:"Custom Modals"},SkipMotionGlobal.story={name:"Skip Motion Globally"},SkipMotionLocally.story={name:"Skip Motion Locally"},CustomDragGlobally.story={name:"Custom Drag Globally"},CustomDragLocally.story={name:"Custom Drag Locally"},CleanInnerAnimations.story={name:"Clean Inner Animations Props Globally"},CustomAnimate.story={name:"Custom Animate Props Globally"},DisableClose.story={name:"Disable Close"}}},[[278,1,2]]]);
//# sourceMappingURL=main.453867be5fcbd60d6b52.bundle.js.map