<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    kind: "email" | "phone";
    value: string;
  }

  const { kind, value }: Props = $props();

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });

  const decoded = $derived(atob(value));
  const [user, domain] = $derived(decoded.split("@"));
  const parts = $derived(decoded.split(" "));
</script>

{#if mounted}
  {#if kind === "email"}
    <a href="mailto:{user}@{domain}">{user}@{domain}</a>
  {:else}
    <a href="tel:{parts.join("")}">{parts.join(" ")}</a>
  {/if}
{:else if kind === "email"}
  <span>{user} [at] {domain}</span>
{:else}
  <span>{parts.slice(0, 3).join(" ")}<span hidden>00</span> {parts.slice(3).join(" ")}</span>
{/if}
