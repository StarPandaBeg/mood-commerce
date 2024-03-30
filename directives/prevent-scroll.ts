import type { Directive } from "vue";

export default <Directive>{
  mounted: (el, binding) => {
    const preventScroll = (binding.value as boolean | undefined) ?? true;
    document.body.classList.toggle("overflow-hidden", preventScroll);
  },
  updated: (el, binding) => {
    const preventScroll = (binding.value as boolean | undefined) ?? true;
    document.body.classList.toggle("overflow-hidden", preventScroll);
  },
};
