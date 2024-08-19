<script>
    import { Button } from "$lib/components/ui/button/index.ts";

    export let showAtPixel = 1000;
    let scrollHeight = 0;

    const gotoTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    $: showGotoTop = scrollHeight > showAtPixel;
</script>

{#if showGotoTop}
    <button
        on:click={gotoTop}
        class="fixed right-4 bottom-4 p-3 z-50 text-2xl bg-transparent  rounded-full  transition-transform duration-300 hover:-translate-y-2 ease-in-out hover:bg-zinc-100 hover:shadow-lg hover:dark:bg-white/10 hover:backdrop-blur-md"
    >
    ☝️

    <!-- <svg data-name="1-Arrow Up" class="w-6 h-6 fill-current text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg> -->



    </button>
{/if}

<svelte:window bind:scrollY={scrollHeight} />
