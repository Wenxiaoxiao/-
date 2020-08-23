<template>
    <div>
        <input :value="value" @input="$emit('input', $event.target.value)" type="text" name="keywords">
    </div>
</template>
<script>
export default {
    props: ['value']
}
</script>