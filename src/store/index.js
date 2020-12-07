import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		levels: [
			{
				name: 'Tutorial',
				points: 10,
				color: '#0098FF',
				questions: [
					{ choice: ['img1', 'img2'], response: 'img1', help: 'Description will appear here' },
					{ choice: ['img3', 'img4'], response: 'img4', help: 'Icons, fonts, shapes' },
					{ choice: ['img5', 'img6'], response: 'img6', help: 'Speech bubble padding'},
				],
			},
			{
				name: 'Easy',
				points: 100,
				color: '#0098FF',
				questions: [
					{ choice: ['img7', 'img8'], response: 'img7', help: 'Photo aspect ratio' },
					{ choice: ['img9', 'img10'], response: 'img10', help: 'Icon size' },
					{ choice: ['img11', 'img12'], response: 'img11', help: 'Price tag contrast' },
					{ choice: ['img13', 'img14'], response: 'img13', help: 'Border radius' },
					{ choice: ['img15', 'img16'], response: 'img16', help: 'Photo aspect ratio' },
					{ choice: ['img17', 'img18'], response: 'img17', help: 'Capitalization' },
					{ choice: ['img19', 'img20'], response: 'img19', help: 'One button with default style' },
					{ choice: ['img21', 'img22'], response: 'img22', help: 'Subtitle text contrast' },
					{ choice: ['img23', 'img24'], response: 'img23', help: 'Activity indicator color' },
					{ choice: ['img25', 'img26'], response: 'img26', help: 'Separator width' },
					{ choice: ['img27', 'img28'], response: 'img27', help: 'Consistent icons style' },
					{ choice: ['img29', 'img30'], response: 'img29', help: 'Icon contrast' },
					{ choice: ['img31', 'img32'], response: 'img32', help: 'Button caption contrast' },
					{ choice: ['img33', 'img34'], response: 'img33', help: 'Placeholder text contrast' },
					{ choice: ['img35', 'img36'], response: 'img35', help: 'Button background contrast' },
					{ choice: ['img37', 'img38'], response: 'img38', help: 'Vertical text alignment' },
					{ choice: ['img39', 'img40'], response: 'img40', help: 'Destructive action button color' },
					{ choice: ['img41', 'img42'], response: 'img42', help: 'Placeholder text capitalization' },
				],
			},
			{
				name: 'Medium',
				points: 150,
				color: '#851CFF',
				questions: [
					{ choice: ['img43', 'img44'], response: 'img44', help: 'Subtitle offset' },
					{ choice: ['img45', 'img46'], response: 'img45', help: 'Contrast' },
					{ choice: ['img47', 'img48'], response: 'img47', help: 'Spacing between title and subtitle' },
					{ choice: ['img49', 'img50'], response: 'img49', help: 'Icon vertical alignment' },
					{ choice: ['img51', 'img52'], response: 'img51', help: 'Button background' },
					{ choice: ['img53', 'img54'], response: 'img53', help: 'Text wrapping' },
					{ choice: ['img55', 'img56'], response: 'img56', help: 'Skip button capitalization' },
					{ choice: ['img57', 'img58'], response: 'img58', help: 'Spacing between text blocks' },
					{ choice: ['img59', 'img60'], response: 'img59', help: 'Placeholder text tracking' },
					{ choice: ['img61', 'img62'], response: 'img61', help: 'Vertical button alignment' },
					{ choice: ['img63', 'img64'], response: 'img63', help: 'Font weight' },
					{ choice: ['img65', 'img66'], response: 'img65', help: 'Icon tint color' },
					{ choice: ['img67', 'img68'], response: 'img67', help: 'Image resolution' },
					{ choice: ['img69', 'img70'], response: 'img70', help: 'Price tag alignment' },
					{ choice: ['img71', 'img72'], response: 'img72', help: 'Border radius' },
					{ choice: ['img73', 'img74'], response: 'img74', help: 'Search icon size' },
					{ choice: ['img75', 'img76'], response: 'img76', help: 'Vertical content alignment' },
					{ choice: ['img77', 'img78'], response: 'img77', help: 'Button border radius' },
				],
			},
			{
				name: 'Hard',
				points: 200,
				color: '#ff1f5d',
				questions: [
					{ choice: ['img79', 'img80'], response: 'img80', help: 'Subtitle typography' },
					{ choice: ['img81', 'img82'], response: 'img81', help: 'Text letter spacing' },
					{ choice: ['img83', 'img84'], response: 'img84', help: 'Activity indicator position' },
					{ choice: ['img85', 'img86'], response: 'img85', help: 'Icon alignment' },
					{ choice: ['img87', 'img88'], response: 'img87', help: 'Button height' },
					{ choice: ['img89', 'img90'], response: 'img89', help: 'Card shadow offset' },
					{ choice: ['img91', 'img92'], response: 'img91', help: 'Separator line length' },
					{ choice: ['img93', 'img94'], response: 'img94', help: 'Typo in text block' },
					{ choice: ['img95', 'img96'], response: 'img96', help: 'Search icon resolution' },
					{ choice: ['img97', 'img98'], response: 'img97', help: 'Button shapes' },
					{ choice: ['img99', 'img100'], response: 'img99', help: 'Spacing between buttons' },
					{ choice: ['img101', 'img102'], response: 'img102', help: 'Button caption tracking' },
					{ choice: ['img103', 'img104'], response: 'img104', help: 'Subtitle text separators' },
					{ choice: ['img105', 'img106'], response: 'img106', help: 'Skip button font weight' },
					{ choice: ['img107', 'img108'], response: 'img107', help: 'Title tracking' },
					{ choice: ['img109', 'img110'], response: 'img109', help: 'Button padding' },
					{ choice: ['img111', 'img112'], response: 'img112', help: 'Placeholder text baseline' },
					{ choice: ['img113', 'img114'], response: 'img114', help: 'Spacing between icon and text' },
				],
			},
		]
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	},
});
