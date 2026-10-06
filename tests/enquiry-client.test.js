import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const source=readFileSync(new URL('../public/enquiry.js',import.meta.url),'utf8');
for(const [label,response,success,message] of [
 ['confirmed delivery',{ok:true,json:async()=>({ok:true})},true],
 ['misleading HTTP success',{ok:true,json:async()=>({ok:false})},false],
 ['HTML fallback',{ok:true,json:async()=>{throw Error('not JSON');}},false],
 ['service unavailable',{ok:false,status:503,json:async()=>({ok:false,error:'unavailable'})},false,'Not confirmed'],
 ['rejected fields',{ok:false,status:400,json:async()=>({ok:false,error:'invalid_fields'})},false,'Check fields']
]) test(`browser submission: ${label}`,async()=>{
 let submit,reset=false;const text={textContent:'Show me Lumi Local for my business'};
 const button={disabled:false,classList:{add(){},remove(){}},querySelector:()=>text};
 let scrolled=false;const status={textContent:'',dataset:{success:'Confirmed',error:'Not confirmed',invalid:'Check fields'},removeAttribute(){},scrollIntoView(){scrolled=true;}};
 const form={action:'/api/enquiries',reportValidity:()=>true,querySelector:()=>button,reset(){reset=true;},elements:{namedItem:n=>n==='consent'?{checked:true}:{value:'en'}},addEventListener:(name,fn)=>{submit=fn;}};
 vm.runInNewContext(source,{document:{getElementById:id=>id==='enquiry-form'?form:status},FormData:class{*[Symbol.iterator](){yield ['business','Synthetic'];}},fetch:async()=>response,AbortSignal});
 await submit({preventDefault(){}});
 assert.equal(reset,success);assert.equal(status.dataset.state,success?'success':'error');assert.equal(button.disabled,false);assert.equal(text.textContent,'Show me Lumi Local for my business');assert.ok(scrolled,'outcome is scrolled into view');
 if(message) assert.equal(status.textContent,message);
 if(success) assert.equal(status.textContent,'Confirmed');
});
