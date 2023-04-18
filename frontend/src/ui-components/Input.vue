<template>
    <div class="form-floating mb-3">
        <input :type="type" class="form-control" :value="modelValue" @input="updateInput" :id="label" />
        <label :for="label">{{ label }}</label>
    </div>
</template>
<script>
export default {
    props: {
        modelValue: [String, Number],
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true
        }
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        },
    },
    name: 'Input'
}
</script>
<style></style>