<script>
	import Comment from "./Comment.svelte";
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title} | Svelte Hacker News</title>
</svelte:head>

<div>
	<article class="item">
		<a href={data.url}>
			<h1>{data.title}</h1>
			{#if data.domain}<small>{data.domain}</small>{/if}
		</a>
		{#if data.content}
			{@html data.content}
		{/if}
	</article>
	<div class="comments">
		{#each data.comments as comment}
			<Comment {comment} />
		{/each}
	</div>
</div>

<style>
	:global(html.dark) .item {
		border-bottom: 1em solid rgba(255, 255, 255, 0.1);
	}
</style>
