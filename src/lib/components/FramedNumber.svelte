<script lang="ts">
	interface Props {
		title: string;
		number: number;
	}

	let { title, number }: Props = $props();
</script>

<div class="relative mb-2 min-w-[200px] border-2 border-b-0 border-theme-blue px-12 py-5">
	<div
		class="bottomBorder absolute bottom-0 left-0 flex w-full
    before:block before:grow before:border-b-2 before:border-theme-blue before:content-['']
    after:block after:grow after:border-b-2 after:border-theme-blue after:content-['']"
	>
		<div class="-mb-[10px] px-3 text-center text-gray-600">
			<span class="text-lg font-semibold">{title}</span>
		</div>
	</div>
	<div class="flex justify-center">
		<span class="text-center text-6xl font-bold">{number || '. . .'}</span>
	</div>
</div>
