const Dropdown = {
  functional: true,
  render:(h,{parent,props,children})=>{
    if(typeof window==='undefined' && parent._isMounted) return h(require('./dropdown.vue').default, props,children);
    parent.$once('hook:mounted',()=>parent.$forceUpdate());
    return h('div',{
      class: ['no-ssr-placeholder']
    })
  }
}

export default Dropdown;
