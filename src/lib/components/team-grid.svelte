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
    emailLabel: string;
    phoneLabel: string;
    members: Member[];
  }

  const { emailLabel, phoneLabel, members }: TeamGridProps = $props();
</script>

<section>
  <ul class="team-grid-list">
    {#each members as member (member.name)}
      <li class="team-grid-item">
        <img {...member.image} class="team-grid-item-image" />
        <div class="team-grid-item-info">
          <span class="team-grid-item-name">{member.name}</span>
          <span>{member.position}</span>
          {#if member.contact?.email}
            <ContactLink
              href={`mailto:${member.contact.email}`}
              label={`${emailLabel}${member.name}`}
            />
          {/if}
          {#if member.contact?.phone}
            <ContactLink
              href={`tel:${member.contact.phone}`}
              label={`${phoneLabel}${member.name}`}
            />
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
    list-style: none;
  }

  .team-grid-item {
    font-size: var(--type-16);
  }

  .team-grid-item-info {
    display: grid;
    padding: var(--space-8);
  }

  .team-grid-item-name {
    font-weight: bold;
  }

  .team-grid-item-image {
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: var(--space-16);
  }
</style>
