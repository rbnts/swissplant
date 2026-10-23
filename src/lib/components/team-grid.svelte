<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";
  import ContactLink from "./contact-link.svelte";

  interface Member {
    name: string;
    position: string;
    image: HTMLImgAttributes;
    contact?: {
      email: string;
      phone: string;
    };
  }

  interface TeamGridProps {
    members: Member[];
  }

  const { members }: TeamGridProps = $props();
</script>

<section>
  <ul class="team-grid-list">
    {#each members as member (member.name)}
      <li class="team-grid-item">
        <img {...member.image} class="team-grid-item-image" />
        <div class="team-grid-item-info">
          <span class="team-grid-item-name">{member.name}</span>
          <span>{member.position}</span>
          {#if member.contact}
            <ContactLink kind="email" value={member.contact.email} />
            <ContactLink kind="phone" value={member.contact.phone} />
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .team-grid-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    gap: var(--space-16);
    padding-left: 0;
    list-style-type: "";
  }

  .team-grid-item {
    font-size: var(--type-16);
  }

  .team-grid-item-info {
    display: grid;
    padding: var(--space-8);
  }

  .team-grid-item-name {
    font-weight: 700;
  }

  .team-grid-item-image {
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: var(--space-16);
  }
</style>
