<template>
    <div class="container-fluid">
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    </div>
</template>

<script>
    import Section1 from '../components/section1.vue'
    import Section2 from '../components/section2.vue'
    import Section3 from '../components/section3.vue'
    import Section4 from '../components/section4.vue'
    import Section5 from '../components/section5.vue'
    export default {
        components:{
            Section1,
            Section2,
            Section3,
            Section4,
            Section5,
        }
        
    }
</script>

<style lang="scss" scoped>

</style>