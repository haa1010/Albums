<template>
    <div class="border">
        <button @click="thongBaoChoCha('Athaydoi')">con</button>
        <li v-for="value in lists " :key="value.id">
        <router-link
          :to="{name: 'albumid', params: {id: value.id}}"
        >
        {{value.id}} - {{value.title}}
        </router-link>
      </li>
    </div>
</template>

<script>
export default {
    props: {
        lists: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    computed: {
        bienA () {
            return this.$store.state.bienA
        }
    },
    methods: {
        thongBaoChoCha (value) {
            // this.$store.commit('thongBaoA', value)
            this.$store.state.bienA = value
        }
    }
}
</script>