<template>
    <div>
        <v-row class="text-center">
			<v-col cols="12" sm="6">
                <v-img id="img" @click="retournerImage(choiceQuestion[0])" class="mx-auto mr-sm-0" :src="require('@/assets/img/' + choiceQuestion[0] + '.png')" width="300" height="200"/>
            </v-col>

            <v-col cols="12" sm="6">
                <v-img id="img" @click="retournerImage(choiceQuestion[1])" class="mx-auto ml-sm-0" :src="require('@/assets/img/' + choiceQuestion[1] + '.png')" width="300" height="200"/>
            </v-col>

			<v-col cols="12" class="mt-5"><strong>Select the design that is most correct</strong></v-col>
		</v-row>
    </div>
</template>


<script>
export default {
    name: 'Question',

    props: {
        choiceQuestion: Array,
    },

    methods: {
        retournerImage(imgSelectionnee) {
            this.$emit('imageCliked', imgSelectionnee);
        }
    }
};
</script>


<style scoped>
#img {
	cursor: pointer;
}
</style>