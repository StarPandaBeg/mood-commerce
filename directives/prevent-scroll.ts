import type { Directive } from "vue";

export default <Directive>{
  mounted: (el, binding) => {
    const preventScroll = (binding.value as boolean | undefined) ?? true;
    document.body.classList.toggle("prevent-scroll", preventScroll);
  },
  updated: (el, binding) => {
    const preventScroll = (binding.value as boolean | undefined) ?? true;
    document.body.classList.toggle("prevent-scroll", preventScroll);
  },
};
