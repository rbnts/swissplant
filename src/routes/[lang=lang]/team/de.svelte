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
      position: "Geschäftsführer",
      image: {
        src: martin,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      },
      contact: {
        email: ["m.loeffel", "swissplant.ch"],
        phone: ["+41", "79", "631", "45", "59"]
      }
    },
    {
      name: "Sandro Löffel",
      position: "Stv. Geschäftsführer",
      image: {
        src: sandro,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      },
      contact: {
        email: ["s.loeffel", "swissplant.ch"],
        phone: ["+41", "79", "641", "52", "10"]
      }
    },
    {
      name: "Telja Baumann",
      position: "Empfang & Administration",
      image: {
        src: telja,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      },
      contact: {
        email: ["t.baumann", "swissplant.ch"],
        phone: ["+41", "79", "815", "38", "35"]
      }
    },
    {
      name: "Ivan Gross",
      position: "Leiter Gewächshaus",
      image: {
        src: ivan,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Shpend Thaqi",
      position: "Leiter Produktion",
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
      position: "Produktion",
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
      position: "Maschinenführer",
      image: {
        src: markus,
        alt: "",
        loading: "lazy",
        fetchpriority: "low"
      }
    },
    {
      name: "Miguel Pereira",
      position: "Maschinenführer",
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
  <meta name="description" content="Erfahren Sie, wer bei der SwissPlant GmbH angestellt ist." />
</svelte:head>

<Hero images={[{ src: tinu, alt: "Martin Löffel, der Gründer der SwissPlant GmbH." }]} />
<Content>
  <h1>Team</h1>
  <TeamGrid {members} />
</Content>
