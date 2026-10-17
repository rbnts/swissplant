<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import TeamGrid from "#lib/components/team-grid.svelte";
  import barbara from "#lib/img/employees/barbara.avif";
  import hansPeter from "#lib/img/employees/hans-peter.avif";
  import ivan from "#lib/img/employees/ivan.avif";
  import mariusz from "#lib/img/employees/mariusz.avif";
  import markus from "#lib/img/employees/markus.avif";
  import martin from "#lib/img/employees/martin.avif";
  import miguel from "#lib/img/employees/miguel.avif";
  import muhamet from "#lib/img/employees/muhamet.avif";
  import sandro from "#lib/img/employees/sandro.avif";
  import shpend from "#lib/img/employees/shpend.avif";
  import telja from "#lib/img/employees/telja.avif";
  import tinu from "#lib/img/photoshoot/tinu.avif";
  import type { ComponentProps } from "svelte";

  const members: ComponentProps<typeof TeamGrid>["members"] = [
    {
      name: "Martin Löffel",
      position: "CEO & Sales",
      image: {
        src: martin,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      },
      contact: {
        email: "m.loeffel@swissplant.ch",
        phone: "+41 79 631 45 59"
      }
    },
    {
      name: "Sandro Löffel",
      position: "Deputy CEO & Sales",
      image: {
        src: sandro,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      },
      contact: {
        email: "s.loeffel@swissplant.ch",
        phone: "+41 79 641 52 10"
      }
    },
    {
      name: "Telja Baumann",
      position: "Reception & Administration",
      image: {
        src: telja,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      },
      contact: {
        email: "t.baumann@swissplant.ch",
        phone: "+41 79 815 38 35"
      }
    },
    {
      name: "Ivan Gross",
      position: "Greenhouse Manager",
      image: {
        src: ivan,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Shpend Thaqi",
      position: "Production Manager",
      image: {
        src: shpend,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Hans-Peter Schwab",
      position: "Transport",
      image: {
        src: hansPeter,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Mariusz Wronski",
      position: "Transport",
      image: {
        src: mariusz,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Muhamet Duraku",
      position: "Production",
      image: {
        src: muhamet,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Barbara Dubler",
      position: "Transport",
      image: {
        src: barbara,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Markus Niklaus",
      position: "Machine Operator",
      image: {
        src: markus,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Miguel Pereira",
      position: "Machine Operator",
      image: {
        src: miguel,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    }
  ];
</script>

<svelte:head>
  <title>Team — SwissPlant GmbH</title>
  <meta name="description" content="Meet the team behind SwissPlant GmbH. Learn more about our expertise and passion for plants." />
</svelte:head>

<Hero images={[{ src: tinu, alt: "Martin Löffel, founder of SwissPlant GmbH." }]} />
<Content>
  <h1>Team</h1>
  <TeamGrid {members} />
</Content>
