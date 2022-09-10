<script>
export default {
	data: () => ({
		branches: ["main", "v2-compat"],
		currBranch: "main",
		commits: null,
	}),
};
</script>

<template>
	<template v-for="branch in branches">
		<input type="radio" :id="branch" :value="branch" name="branch" v-model="currBranch" />
		<label :for="branch">{{ branch }}</label>
	</template>
	<p>vuejs/vue@{{ currBranch }}</p>
	<ul>
		<li v-for="{ html_url, sha } in commits">
			<a :href="html_url" class="commit">{{ sha.slice(0, 7) }}</a>
		</li>
	</ul>
</template>

<style>
a {
	text-decoration: none;
	color: #42b883;
}
.commit {
	font-weight: bold;
}
</style>
