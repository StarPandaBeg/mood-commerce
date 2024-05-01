<script lang="ts" setup>
export type VTableProps = {
  variant?: "default" | "plain";
  hover?: boolean;
};

const props = withDefaults(defineProps<VTableProps>(), {
  variant: "default",
  hover: false,
});
</script>

<template>
  <table
    class="v-table"
    :class="[`v-table-${props.variant}`, props.hover ? 'hover' : '']"
  >
    <slot />
  </table>
</template>

<style lang="scss">
.v-table {
  &.v-table-default {
    td,
    th {
      @apply py-2;
    }

    &.hover {
      tbody {
        tr:hover {
          @apply bg-neutral-100;
        }
      }
    }

    thead {
      @apply border-b;
    }

    tbody {
      tr:not(:last-child) {
        @apply border-b;
      }
    }
  }

  &.v-table-plain {
    &.hover {
      tbody {
        tr:hover {
          @apply bg-neutral-100;

          &:first-child {
            @apply bg-neutral-100;
            box-shadow: 0 0 0 2px theme("colors.neutral.100");
          }
        }
      }
    }

    thead {
      @apply border-b border-dashed;
    }

    tbody {
      tr {
        td:first-child {
          @apply relative opacity-75;

          span {
            @apply relative bg-slate-50 pr-2;
            box-shadow: 0 0 0 2px theme("colors.slate.50");
            z-index: 100;
          }

          &::after {
            content: "";
            @apply absolute bottom-1 left-0 block h-4 w-full border-b border-dashed border-neutral-300;
          }
        }
        td:nth-child(2n) {
          @apply pl-1;
        }
      }
    }
  }
}
</style>
