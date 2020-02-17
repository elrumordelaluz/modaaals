(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{275:function(module,exports,__webpack_require__){__webpack_require__(276),__webpack_require__(422),module.exports=__webpack_require__(423)},340:function(module,exports){},423:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(268);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(613),module)}.call(this,__webpack_require__(424)(module))},613:function(module,exports,__webpack_require__){var map={"./Basic.stories.tsx":617};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=613},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var templateObject_1,Modal_templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,tslib_es6=__webpack_require__(1),core_browser_esm=__webpack_require__(3),react=__webpack_require__(0),react_default=__webpack_require__.n(react),framer_motion_es=__webpack_require__(66),es2015=__webpack_require__(271),Combination=__webpack_require__(621),react_dom=__webpack_require__(111),Modal_Portal=function(_a){var children=_a.children,_b=_a.id,id=void 0===_b?"portal":_b,_c=_a.elem,elem=void 0===_c?"modal-portal":_c,className=_a.className,setVisible=Object(react.useState)(!1)[1],ref=Object(react.useRef)(null);return Object(react.useLayoutEffect)((function(){return null===ref.current&&(ref.current=document.createElement(elem),ref.current.setAttribute("id",id)),document.body.appendChild(ref.current),setVisible(!0),function(){ref.current&&(setVisible(!1),document.body.removeChild(ref.current))}}),[elem]),ref.current?Object(react_dom.createPortal)(Object(core_browser_esm.b)(framer_motion_es.a,null,Object(core_browser_esm.b)(framer_motion_es.b.div,{className:className,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},css:Object(core_browser_esm.a)(templateObject_1||(templateObject_1=Object(tslib_es6.c)(["\n              position: fixed;\n              z-index: 2000;\n              top: 0;\n              left: 0;\n              user-select: none;\n            "],["\n              position: fixed;\n              z-index: 2000;\n              top: 0;\n              left: 0;\n              user-select: none;\n            "])))},children)),ref.current):null},Modal_CloseIcon=function(){return react_default.a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 16 16"},react_default.a.createElement("path",{fillRule:"evenodd",fill:"currentColor",d:"M9.293 8.038l6.225-6.259a.996.996 0 0 0 0-1.406.983.983 0 0 0-1.398 0L7.894 6.632 1.669.373a.984.984 0 0 0-1.399 0 .996.996 0 0 0 0 1.406l6.225 6.259L.27 14.297a.996.996 0 0 0 .699 1.698.98.98 0 0 0 .7-.292l6.225-6.259 6.226 6.259a.98.98 0 0 0 1.398 0 .996.996 0 0 0 0-1.406L9.293 8.038z"}))},Modal_Modal=function(_a){var _b=_a.modals,modals=void 0===_b?{}:_b,modal=_a.modal,closeModal=_a.closeModal,contentRef=Object(react.useRef)(null),constraintsRef=Object(react.useRef)(null),_c=modal?"string"==typeof modal?{type:modal}:modal:{type:null},modalType=_c.type,focusRef=_c.focusRef,enabledScroll=_c.enabledScroll,restProps=Object(tslib_es6.d)(_c,["type","focusRef","enabledScroll"]),modalProps=Object(tslib_es6.a)({closeModal:closeModal,focusRef:focusRef},restProps),onActivationFocusLock=Object(react.useCallback)((function(){focusRef&&focusRef.current&&focusRef.current.focus()}),[focusRef]);return modal?Object(core_browser_esm.b)(Modal_Portal,{id:"___portal",className:"portal"},Object(core_browser_esm.b)(es2015.a,{autoFocus:!0,returnFocus:!0,onActivation:onActivationFocusLock},Object(core_browser_esm.b)(Combination.a,{enabled:!enabledScroll},Object(core_browser_esm.b)("div",{id:"___overlay",onClick:closeModal,css:Object(core_browser_esm.a)(Modal_templateObject_1||(Modal_templateObject_1=Object(tslib_es6.c)(["\n              position: fixed;\n              top: 0;\n              right: 0;\n              bottom: 0;\n              left: 0;\n              background-color: rgba(42, 38, 33, 0.5);\n            "],["\n              position: fixed;\n              top: 0;\n              right: 0;\n              bottom: 0;\n              left: 0;\n              background-color: rgba(42, 38, 33, 0.5);\n            "])))},Object(core_browser_esm.b)(framer_motion_es.b.div,{ref:constraintsRef,css:Object(core_browser_esm.a)(templateObject_2||(templateObject_2=Object(tslib_es6.c)(["\n                position: absolute;\n                top: 10vh;\n                right: 10vh;\n                bottom: 10vh;\n                left: 10vh;\n              "],["\n                position: absolute;\n                top: 10vh;\n                right: 10vh;\n                bottom: 10vh;\n                left: 10vh;\n              "])))})),Object(core_browser_esm.b)(framer_motion_es.b.div,{id:"___content",css:Object(core_browser_esm.a)(templateObject_3||(templateObject_3=Object(tslib_es6.c)(["\n              position: fixed;\n              border: 1px solid rgba(0, 0, 0, 0.2);\n              left: 50%;\n              top: 50%;\n              background-color: #fcf7f6;\n              overflow: auto;\n              border-radius: 24px;\n              box-shadow: 0 10px 60px rgba(0, 0, 0, 0.15);\n            "],["\n              position: fixed;\n              border: 1px solid rgba(0, 0, 0, 0.2);\n              left: 50%;\n              top: 50%;\n              background-color: #fcf7f6;\n              overflow: auto;\n              border-radius: 24px;\n              box-shadow: 0 10px 60px rgba(0, 0, 0, 0.15);\n            "]))),ref:contentRef,animate:{translateY:"-50%"},initial:{translateX:"-50%",translateY:"-50%"},dragConstraints:constraintsRef,drag:!0},Object(core_browser_esm.b)("button",{css:Object(core_browser_esm.a)(templateObject_4||(templateObject_4=Object(tslib_es6.c)(["\n                width: 16px;\n                height: 16px;\n                border: 0;\n                outline: 0;\n                background: none;\n                padding: 0;\n                color: #56595f;\n                cursor: pointer;\n                position: absolute;\n                top: 38px;\n                left: 38px;\n                transition: color 0.3s;\n                outline: 0 !important;\n                &:hover {\n                  color: var(--accent);\n                }\n              "],["\n                width: 16px;\n                height: 16px;\n                border: 0;\n                outline: 0;\n                background: none;\n                padding: 0;\n                color: #56595f;\n                cursor: pointer;\n                position: absolute;\n                top: 38px;\n                left: 38px;\n                transition: color 0.3s;\n                outline: 0 !important;\n                &:hover {\n                  color: var(--accent);\n                }\n              "]))),onClick:closeModal},Object(core_browser_esm.b)(Modal_CloseIcon,null)),Object(core_browser_esm.b)("div",{css:Object(core_browser_esm.a)(templateObject_5||(templateObject_5=Object(tslib_es6.c)(["\n                padding: 83px 152px 68px;\n                max-height: 60vh;\n                overflow: auto;\n              "],["\n                padding: 83px 152px 68px;\n                max-height: 60vh;\n                overflow: auto;\n              "])))},modalType&&void 0!==modals[modalType]?Object(react.createElement)(modals[modalType],modalProps):null))))):null},keycode_esm=__webpack_require__(270);var ModalContext=react_default.a.createContext({modal:null,openModal:function(){},closeModal:function(){}}),ModalProvider=function(_a){var children=_a.children,defaultModal=_a.defaultModal,modals=_a.modals,_b=function useOpenClose(initialValue){void 0===initialValue&&(initialValue=!1);var _a=Object(react.useState)(initialValue),isOpen=_a[0],setOpen=_a[1];return Object(react.useEffect)((function(){var handleEvent=function(e){e.keyCode===keycode_esm.a&&(e.preventDefault(),setOpen(!1))};return isOpen&&document.addEventListener("keydown",handleEvent),function(){document.removeEventListener("keydown",handleEvent)}}),[isOpen]),[isOpen,setOpen]}(!1),modal=_b[0],openModal=_b[1];function closeModal(){openModal(null)}return Object(react.useEffect)((function(){openModal(defaultModal||null)}),[openModal,defaultModal]),react_default.a.createElement(ModalContext.Provider,{value:{modal:modal,openModal:openModal,closeModal:closeModal}},react_default.a.createElement(Modal_Modal,{modals:modals,modal:modal,closeModal:closeModal}),children)},Context=ModalContext;__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));__webpack_exports__.default={title:"Modal"};var Basic_stories_templateObject_1,Basic_stories_templateObject_2,Basic_stories_templateObject_3,Basic=function(){return Object(core_browser_esm.b)(ModalProvider,{modals:Basic_stories_modals},Object(core_browser_esm.b)(ExampleButtons,null))},ExampleButtons=function(){var openModal=Object(react.useContext)(Context).openModal,ref=Object(react.useRef)(null);return Object(core_browser_esm.b)("div",{css:Object(core_browser_esm.a)(Basic_stories_templateObject_1||(Basic_stories_templateObject_1=Object(tslib_es6.c)(["\n        padding: 1em;\n        border: 5px solid pink;\n        min-height: 100vh;\n      "],["\n        padding: 1em;\n        border: 5px solid pink;\n        min-height: 100vh;\n      "])))},Object(core_browser_esm.b)("header",{css:Object(core_browser_esm.a)(Basic_stories_templateObject_2||(Basic_stories_templateObject_2=Object(tslib_es6.c)(["\n          padding: 1em;\n          border: 5px solid pink;\n        "],["\n          padding: 1em;\n          border: 5px solid pink;\n        "])))},Object(core_browser_esm.b)("button",{onClick:function(){return openModal("static")}},"open hello"),Object(core_browser_esm.b)("button",{onClick:function(){return openModal({type:"extra-props",hola:1,another:"stuff",focusRef:ref})}},"open f"),Object(core_browser_esm.b)("button",{onClick:function(){return openModal({type:"p",focusRef:ref,enabledScroll:!0})}},"open paragraphs"),Object(core_browser_esm.b)("button",{onClick:function(){return openModal("empty")}},"open empty"),Object(core_browser_esm.b)("button",{onClick:function(){return openModal({type:"side-effects",side:"hola"})}},"open side effects")),Object(core_browser_esm.b)("main",null,Object(core_browser_esm.b)("p",{css:Object(core_browser_esm.a)(Basic_stories_templateObject_3||(Basic_stories_templateObject_3=Object(tslib_es6.c)(["\n            line-height: 2;\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\n              sans-serif;\n          "],["\n            line-height: 2;\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\n              sans-serif;\n          "])))},"Nulla auctor purus pretium, tristique nibh fringilla, interdum mauris. Praesent est enim, ultrices pretium sapien ut, sollicitudin efficitur augue. Maecenas risus felis, vehicula vel rhoncus ut, maximus vel nisl. Nulla et laoreet libero. Quisque vehicula purus eget quam ultricies, id malesuada urna faucibus. Maecenas sodales scelerisque ligula, id fermentum nisi blandit id. Pellentesque blandit arcu vitae diam molestie, a lobortis turpis condimentum. Suspendisse cursus augue nisl. Fusce vel neque at nulla consequat convallis a eget nibh."),Object(core_browser_esm.b)("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas cursus sed nisi id pretium. Suspendisse potenti. Proin ut mattis est, blandit ullamcorper quam. Nam sapien massa, vestibulum sit amet arcu non, condimentum pharetra nisl. Sed suscipit tincidunt maximus. Proin feugiat velit vel ex gravida, nec consequat magna bibendum. Vestibulum lacinia semper eros quis euismod. Quisque eget tincidunt magna, quis consequat justo. Integer condimentum tempor nunc, at hendrerit metus fringilla ac. Donec orci tortor, iaculis molestie magna at, pulvinar pellentesque nisl. Vestibulum non elit massa."),Object(core_browser_esm.b)("p",null,"Vestibulum finibus lacinia nibh, id laoreet odio pellentesque non. Curabitur tempor odio a nisi condimentum tempor. Sed sem metus, faucibus sit amet consectetur ac, molestie at enim. Nunc luctus orci sit amet euismod pulvinar. Sed a gravida elit. Curabitur non elementum ligula. Nam efficitur volutpat tellus, tempor pellentesque metus aliquam ac. Nam nec mattis arcu, et ullamcorper nisl. Aliquam erat volutpat. Nullam non pellentesque nibh."," ")))},Basic_stories_modals={static:function StaticModal(){return react_default.a.createElement("div",null,"hello!")},"extra-props":function ExtraPropsModal(_a){var closeModal=_a.closeModal,focusRef=_a.focusRef,rest=Object(tslib_es6.d)(_a,["closeModal","focusRef"]);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("pre",null,react_default.a.createElement("code",null,JSON.stringify(rest,null,2))),react_default.a.createElement("button",{ref:focusRef,onClick:closeModal},"close"))},p:function ParagraphsModal(_a){var closeModal=_a.closeModal,focusRef=_a.focusRef;return react_default.a.createElement("div",null,react_default.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget metus venenatis odio mattis euismod sed ut massa. Cras euismod sem in mi molestie tempor. Proin neque massa, tincidunt in rutrum et, lacinia quis eros. Sed dignissim massa fermentum arcu porttitor ullamcorper. Maecenas lacinia lorem nec odio mollis faucibus. Sed sed quam lectus. Integer neque felis, condimentum eget sollicitudin a, ultricies sed neque."),react_default.a.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed interdum tortor ut pulvinar viverra. Sed rutrum laoreet vehicula. Phasellus id ultricies tortor. Praesent rutrum mauris nec diam venenatis aliquet. Donec non scelerisque lacus. Nullam scelerisque ipsum eu nibh facilisis mollis. Vestibulum vestibulum, nulla nec porta dignissim, purus risus consequat justo, vitae feugiat enim nulla quis elit. Nulla non mi velit."),react_default.a.createElement("p",null,"Nulla auctor purus pretium, tristique nibh fringilla, interdum mauris. Praesent est enim, ultrices pretium sapien ut, sollicitudin efficitur augue. Maecenas risus felis, vehicula vel rhoncus ut, maximus vel nisl. Nulla et laoreet libero. Quisque vehicula purus eget quam ultricies, id malesuada urna faucibus. Maecenas sodales scelerisque ligula, id fermentum nisi blandit id. Pellentesque blandit arcu vitae diam molestie, a lobortis turpis condimentum. Suspendisse cursus augue nisl. Fusce vel neque at nulla consequat convallis a eget nibh."),react_default.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas cursus sed nisi id pretium. Suspendisse potenti. Proin ut mattis est, blandit ullamcorper quam. Nam sapien massa, vestibulum sit amet arcu non, condimentum pharetra nisl. Sed suscipit tincidunt maximus. Proin feugiat velit vel ex gravida, nec consequat magna bibendum. Vestibulum lacinia semper eros quis euismod. Quisque eget tincidunt magna, quis consequat justo. Integer condimentum tempor nunc, at hendrerit metus fringilla ac. Donec orci tortor, iaculis molestie magna at, pulvinar pellentesque nisl. Vestibulum non elit massa."),react_default.a.createElement("p",null,"Vestibulum finibus lacinia nibh, id laoreet odio pellentesque non. Curabitur tempor odio a nisi condimentum tempor. Sed sem metus, faucibus sit amet consectetur ac, molestie at enim. Nunc luctus orci sit amet euismod pulvinar. Sed a gravida elit. Curabitur non elementum ligula. Nam efficitur volutpat tellus, tempor pellentesque metus aliquam ac. Nam nec mattis arcu, et ullamcorper nisl. Aliquam erat volutpat. Nullam non pellentesque nibh."," "),react_default.a.createElement("button",{ref:focusRef,onClick:closeModal},"close"))},"side-effects":function SideEffectsModal(_a){var closeModal=_a.closeModal,focusRef=_a.focusRef,side=_a.side,rest=Object(tslib_es6.d)(_a,["closeModal","focusRef","side"]);return Object(react.useEffect)((function(){console.log({side:side})}),[side]),react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("pre",null,react_default.a.createElement("code",null,JSON.stringify(rest,null,2))),react_default.a.createElement("button",{ref:focusRef,onClick:closeModal},"close"))}};Basic.story={name:"Basic"}}},[[275,1,2]]]);
//# sourceMappingURL=main.ec3bde20bebde8c98072.bundle.js.map