(()=>{"use strict";const t=window.React,{registerBlockType:e}=wp.blocks,{RichText:n}=wp.blockEditor;e("cta-button-in-content/button",{title:"Simple CTA Button",icon:"button",category:"common",attributes:{buttonText:{type:"string",default:"Vreau o programare"}},example:{attributes:{buttonText:"Vreau o programare"}},edit:({attributes:e,setAttributes:o})=>{const{buttonText:a}=e;return(0,t.createElement)("div",{className:"wp-block-cta-button-in-content"},(0,t.createElement)("a",{href:"#",className:"button"},(0,t.createElement)(n,{tagName:"span",value:a,onChange:t=>o({buttonText:t}),placeholder:"Adaugă textul butonului..."}),(0,t.createElement)("img",{src:"/wp-content/themes/clinica-trident/assets/icons/arrow-right-white.svg",alt:"Arrow Icon"})))},save:({attributes:e})=>{const{buttonText:n}=e;return(0,t.createElement)("div",{className:"wp-block-cta-button-in-content"},(0,t.createElement)("a",{href:"http://clinica-trident/programare-online/",className:"button button--large button--accent button--icon button--icon-right button--fit-content"},(0,t.createElement)("span",null,n),(0,t.createElement)("img",{src:"/wp-content/themes/clinica-trident/assets/icons/arrow-right-white.svg",alt:"Arrow Icon"})))}}),e("cta-button-in-content/phone-number",{title:"Phone Number Button",icon:"phone",category:"common",attributes:{phoneNumber:{type:"string",default:"0310.050.934"}},description:"A clickable phone number with a phone icon.",example:{attributes:{phoneNumber:"0310.050.934"}},edit:({attributes:e,setAttributes:o})=>{const{phoneNumber:a}=e;return(0,t.createElement)("div",{className:"wp-block-cta-phone-number"},(0,t.createElement)("a",{href:"#",className:"phone-button-content"},(0,t.createElement)("img",{src:"/wp-content/themes/clinica-trident/assets/icons/phone-outline-accent.svg",alt:"Phone Icon",style:{width:"20px",height:"20px",marginRight:"8px"}}),(0,t.createElement)(n,{tagName:"span",value:a,onChange:t=>o({phoneNumber:t}),placeholder:"Introduceți numărul de telefon...",style:{fontSize:"20px",fontWeight:"normal",color:"#1699DB"}})))},save:({attributes:e})=>{const{phoneNumber:n}=e;return(0,t.createElement)("div",{className:"wp-block-cta-phone-number"},(0,t.createElement)("a",{href:`tel:${n.replace(/\./g,"")}`,className:"phone-button-content"},(0,t.createElement)("img",{src:"/wp-content/themes/clinica-trident/assets/icons/phone-outline-accent.svg",alt:"Phone Icon"}),(0,t.createElement)("span",null,n)))}})})();