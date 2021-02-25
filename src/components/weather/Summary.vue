<template lang="pug">
	.wrapper
		span {{value.desc}}
		span ({{value.main}})
</template>
<script>
export default {
	name:"Summary",
	props:['value']
}
</script>
<style lang="scss" scoped>
	span:nth-child(1){margin-right: 0.5em;}
</style>