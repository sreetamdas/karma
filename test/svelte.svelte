<script context="module" lang="ts">
	// @ts-nocheck
	import HeartIcon from "$lib/HeartIcon.svelte";
	import dayjs from "dayjs";
	const startDate = dayjs("2018-11-08");
	const todayDate = dayjs("2022-09-06");
</script>

<svelte:head>
	<title>42</title>
</svelte:head>

<div class="content">
	<h1 class="highlight">{todayDate.diff(startDate, "months")} months.</h1>
	<p>42. The answer to life, the universe, and everything. <HeartIcon /></p>
</div>

<style>
	p {
		line-height: 1;
	}
	.highlight {
		font-size: 2rem;
	}
</style>
