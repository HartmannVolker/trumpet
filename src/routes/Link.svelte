<script lang="ts">
	import type { ThemeColor } from '$lib/types/colors';
	import { getBgColorClass } from '$lib/utils/color-classes';
	import ArrowUp from '../lib/components/ArrowUp.svelte';

	interface Props {
		header: string;
		subHeader: string;
		href: string;
		target?: string;
		color: ThemeColor;
	}

	let { header, subHeader, href, target = '', color }: Props = $props();
</script>

<a
	{href}
	{target}
	class={`relative flex h-36 w-36 flex-col justify-end p-2 py-6 text-white md:h-[20vw] md:w-[20vw] md:p-[1vw] md:py-[2vw] ${getBgColorClass(
		color
	)}`}
>
	<span class="text-md font-bold uppercase md:text-[2.5vw] md:leading-[3vw]">{header}</span>
	<span class="text-sm font-light md:text-[2vw] md:leading-[2.5vw]">{subHeader}</span>

	<span
		class="absolute -right-1 -top-1 h-10 w-10 text-theme-purple md:-right-[0.5vw] md:-top-[0.5vw] md:h-[5vw] md:w-[5vw]"
	>
		<ArrowUp />
	</span>
</a>
