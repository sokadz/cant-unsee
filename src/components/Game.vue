<template>
	<v-container>
		<!-- Question -->
		<app-question v-if="!response.imgSelected" :choiceQuestion="mixChoice(questions[cptQuestion].choice)" @imageCliked="verifierResponse"/>

		<!-- Response -->
		<app-response v-else :response="response" @nextClick="next"/>
		
		<!-- Progess bar -->
		<v-progress-linear
			id="progress-bar"
			:value="percentageQuestion"
			height="35"
			:color="level.color"
		>
			<strong>{{ level.name }} {{ numQuestion }} / {{ questions.length }}</strong>
		</v-progress-linear>
	</v-container>
</template>


<script>
import { mapState } from 'vuex';

import AppQuestion from '@/components/Question';
import AppResponse from '@/components/Response';

export default {
	name: 'Game',

	components: {
		AppQuestion,
		AppResponse,
	},

	computed: {
		...mapState([
			'levels'
		]),
		percentageQuestion() {
			return this.cptQuestion / this.levels[this.cptLevel].questions.length * 100;
		}
	},

	created() {
		this.level = { 
			name: this.levels[this.cptLevel].name,
			points: this.levels[this.cptLevel].points,
			color: this.levels[this.cptLevel].color
		};
		this.questions = this.levels[this.cptLevel].questions;
	},

	data() {
		return {
			dateDebut: null,
			cptLevel: 0,
			cptQuestion: 0,
			numQuestion: 1,
			level: null,
			questions: null,
			response: { win: null, imgSelected: null, imgCompare: null, help: null },
		};
	},

	methods: {
		verifierResponse(imgSelected) {
			this.dateDebut = this.dateDebut === null ? new Date() : this.dateDebut;

			if (imgSelected == this.questions[this.cptQuestion].response) {
				this.response.win = true;
				this.$emit('pointsChange', this.level.points);
			} else {
				this.response.win = false;
			}

			this.response.imgSelected = imgSelected;

			if (this.questions[this.cptQuestion].choice[0] !== imgSelected) {
				this.response.imgCompare = this.questions[this.cptQuestion].choice[0];
			} else {
				this.response.imgCompare = this.questions[this.cptQuestion].choice[1];
			}

			this.response.help = this.questions[this.cptQuestion].help;
			
			this.cptQuestion++;
			
		},
		next() {
			if (this.numQuestion !== this.questions.length) {
				// If there are any questions left for the current level
				this.numQuestion++;
				this.response = { win: null, imgSelected: null, imgCompare: null, help: null };
			} else if (this.cptLevel + 1 !== this.levels.length) {
				// If there are still levels

				// On reinitilise variables
				this.cptLevel++;
				this.cptQuestion = 0,
				this.numQuestion = 1,
				// We randomly mix up questions
				this.questions = this.mixTable(this.levels[this.cptLevel].questions);
				this.level = { 
					name: this.levels[this.cptLevel].name,
					points: this.levels[this.cptLevel].points,
					color: this.levels[this.cptLevel].color
				};
				this.response = { win: null, imgSelected: null, imgCompare: null, help: null };
				// We start the stopwatch if it is not already done
				// this.dateDebut = this.dateDebut === null ? new Date() : this.dateDebut;
			} else {
				// If more levels and questions available
				const chrono = Math.abs(new Date() - this.dateDebut);
				this.$emit('isEnded', chrono);
			}
		},
		mixTable(tab) {
			// Fisher's algorithm
			let i, j, temp;
			for (i = tab.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				temp = tab[i];
				tab[i] = tab[j];
				tab[j] = temp;
			}

			return tab;
		},
		mixChoice(tab) {
			return this.level.name !== 'Tutorial' ? this.mixTable(tab) : tab;
		}
	},
};
</script>


<style>
#img {
	border-radius: 8px;
}

#progress-bar {
	position: absolute;
	width: 90%;
	max-width: 400px;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	border-radius: 2em;
	margin-bottom: 1.5em;
}
</style>