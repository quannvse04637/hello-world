<template>
    <div>
        <section id="wrapper">
        <!-- One -->
        <section id="one" class="wrapper spotlight style1">
            <div class="inner">
            <a v-bind:href="noneUrl" class="image">
                <img v-bind:src="major1.srcLink" alt="">
            </a>
            <div class="content">
                <h2 class="major">{{major1.name}}</h2>
                <p>{{major1.des}}</p>
                <a v-bind:href="noneUrl" class="special">{{more}}</a>
            </div>
            </div>
        </section>
        <!-- Two -->
        <section id="two" class="wrapper alt spotlight style2">
            <div class="inner">
            <a v-bind:href="noneUrl" class="image">
                <img v-bind:src="major2.srcLink" alt="">
            </a>
            <div class="content">
                <h2 class="major">{{major2.name}}</h2>
                <p>{{major2.des}}</p>
                <a v-bind:href="noneUrl" class="special">{{more}}</a>
            </div>
            </div>
        </section>
        <!-- Three -->
        <section id="three" class="wrapper spotlight style3">
            <div class="inner">
            <a v-bind:href="noneUrl" class="image">
                <img v-bind:src="major3.srcLink" alt="">
            </a>
            <div class="content">
                <h2 class="major">{{major3.name}}</h2>
                <p>{{major3.des}}</p>
                <a v-bind:href="noneUrl" class="special">{{more}}</a>
            </div>
            </div>
        </section>
        <!-- four -->
        <section id="two" class="wrapper alt style1">
            <div class="inner">
            <h2 class="major">{{major4.name}}</h2>
            <p>{{major4.des}}</p>
            <section class="features">
                <article v-for="object in objects" v-bind:key="object.index">
                    <a v-bind:href="noneUrl" class="image">
                        <img v-bind:src="object.objectName.link" alt="">
                    </a>
                    <h3 class="major">{{object.objectName.name}}</h3>
                    <p>{{object.objectName.des}}</p>
                    <a v-bind:href="noneUrl" class="special">{{more}}</a>
                </article>
            </section>
            <ul class="actions">
                <li>
                    <a v-bind:href="noneUrl" class="button">{{browse}}</a>
                </li>
            </ul>
            </div>
        </section>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Wrapper',
    data() {
        return {
            browse: 'Browse All',
            more: 'Learn more',
            noneUrl: '#',
            major1: {
                
                'srcLink': require('../../images/pic01.jpg'),
                'name': 'Magna arcu feugiat',
                'des': 'Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.',
            },
            major2: {
                'srcLink': require('../../images/pic02.jpg'),
                'name': 'Tempus adipiscing',
                'des': 'Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.',
            },
            major3: {
                'srcLink': require('../../images/pic03.jpg'),
                'name': 'Nullam dignissim',
                'des': 'Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.',
            },
            major4: {
                'name': 'Vitae phasellus',
                'des': 'Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.'
            },
            objects: [
                {objectName: {
                    'link': require('../../images/pic04.jpg'),
                    'name': 'Sed feugiat lorem',
                    'des': 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.'
                    }
                },
                {objectName: {
                    'link': require('../../images/pic05.jpg'),
                    'name': 'Nisl placerat',
                    'des': 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.'
                    }
                },
                {objectName: {
                    'link': require('../../images/pic06.jpg'),
                    'name': 'Ante fermentum',
                    'des': 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.'
                    },
                },
                {objectName: {
                    'link': require('../../images/pic07.jpg'),
                    'name': 'Fusce consequat',
                    'des': 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.'
                    },
                }
            ]
        }
    }
    
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,700|Source+Sans+Pro:300,600,300italic,600italic");
/* Wrapper */

	#wrapper > header {
		padding: 11em 0 2.25em 0 ;
	}

		#wrapper > header .inner {
			margin: 0 auto;
			width: 55em;
		}

		#wrapper > header h2 {
			border-bottom: solid 2px rgba(255, 255, 255, 0.125);
			font-size: 2em;
			margin-bottom: 0.8em;
			padding-bottom: 0.4em;
		}

		#wrapper > header p {
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 1em;
			font-weight: 200;
			letter-spacing: 0.1em;
			line-height: 2;
			text-transform: uppercase;
		}

	@media screen and (max-width: 1280px) {

		#wrapper > header {
			padding: 9em 0 6.25em 0 ;
			background-color: #2e3141;
			background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../../images/bg.jpg");
			background-size: auto, cover;
			background-position: center, 0% 30%;
			margin-bottom: -6.5em;
		}

	}

	@media screen and (max-width: 980px) {

		#wrapper > header {
			padding: 11em 3em 7.375em 3em ;
			background-size: auto, cover;
			background-position: center, 0% 0%;
			margin-bottom: -4.75em;
		}

			#wrapper > header .inner {
				width: 100%;
			}

	}

	@media screen and (max-width: 736px) {

		#wrapper > header {
			padding: 6.5em 2em 3em 2em ;
			background-size: auto, 125%;
			margin-bottom: -2.5em;
		}

			#wrapper > header h2 {
				font-size: 1.25em;
			}

			#wrapper > header p {
				font-size: 0.8em;
			}

	}

	.wrapper {
		background-color: #2e3141;
		margin: 6.5em 0;
		position: relative;
	}

		.wrapper:before, .wrapper:after {
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%232e3141%3B' /%3E%3C/svg%3E");
		}

		.wrapper:before {
			box-shadow: inset 0 -1px 0 0 #2e3141, 0 1px 0 0 #2e3141;
		}

		.wrapper:after {
			box-shadow: inset 0 -1px 0 0 #2e3141, 0 1px 0 0 #2e3141;
		}

		.wrapper:before, .wrapper:after {
			background-repeat: no-repeat;
			background-size: 100% 100%;
			content: '';
			display: block;
			height: 6.5em;
			position: absolute;
			width: 100%;
		}

		.wrapper:before {
			left: 0;
			top: -6.5em;
		}

		.wrapper:after {
			-moz-transform: scaleY(-1);
			-webkit-transform: scaleY(-1);
			-ms-transform: scaleY(-1);
			transform: scaleY(-1);
			bottom: -6.5em;
			left: 0;
		}

		.wrapper.alt:before {
			-moz-transform: scaleX(-1);
			-webkit-transform: scaleX(-1);
			-ms-transform: scaleX(-1);
			transform: scaleX(-1);
		}

		.wrapper.alt:after {
			-moz-transform: scaleY(-1) scaleX(-1);
			-webkit-transform: scaleY(-1) scaleX(-1);
			-ms-transform: scaleY(-1) scaleX(-1);
			transform: scaleY(-1) scaleX(-1);
		}

		.wrapper .inner {
			padding: 3em 0 1em 0 ;
			margin: 0 auto;
			width: 55em;
		}

		.wrapper.style2 {
			background-color: #353849;
		}

			.wrapper.style2:before, .wrapper.style2:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23353849%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style2:before {
				box-shadow: inset 0 -1px 0 0 #353849, 0 1px 0 0 #353849;
			}

			.wrapper.style2:after {
				box-shadow: inset 0 -1px 0 0 #353849, 0 1px 0 0 #353849;
			}

		.wrapper.style3 {
			background-color: #3d4051;
		}

			.wrapper.style3:before, .wrapper.style3:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%233d4051%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style3:before {
				box-shadow: inset 0 -1px 0 0 #3d4051, 0 1px 0 0 #3d4051;
			}

			.wrapper.style3:after {
				box-shadow: inset 0 -1px 0 0 #3d4051, 0 1px 0 0 #3d4051;
			}

		.wrapper.style4 {
			background-color: #454858;
		}

			.wrapper.style4:before, .wrapper.style4:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23454858%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style4:before {
				box-shadow: inset 0 -1px 0 0 #454858, 0 1px 0 0 #454858;
			}

			.wrapper.style4:after {
				box-shadow: inset 0 -1px 0 0 #454858, 0 1px 0 0 #454858;
			}

		.wrapper.style5 {
			background-color: #4d5060;
		}

			.wrapper.style5:before, .wrapper.style5:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%234d5060%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style5:before {
				box-shadow: inset 0 -1px 0 0 #4d5060, 0 1px 0 0 #4d5060;
			}

			.wrapper.style5:after {
				box-shadow: inset 0 -1px 0 0 #4d5060, 0 1px 0 0 #4d5060;
			}

		.wrapper.style6 {
			background-color: #555867;
		}

			.wrapper.style6:before, .wrapper.style6:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23555867%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style6:before {
				box-shadow: inset 0 -1px 0 0 #555867, 0 1px 0 0 #555867;
			}

			.wrapper.style6:after {
				box-shadow: inset 0 -1px 0 0 #555867, 0 1px 0 0 #555867;
			}

		.wrapper.spotlight {
			background-color: #4c5c96;
		}

			.wrapper.spotlight:before, .wrapper.spotlight:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%234c5c96%3B' /%3E%3C/svg%3E");
			}

			.wrapper.spotlight:before {
				box-shadow: inset 0 -1px 0 0 #4c5c96, 0 1px 0 0 #4c5c96;
			}

			.wrapper.spotlight:after {
				box-shadow: inset 0 -1px 0 0 #4c5c96, 0 1px 0 0 #4c5c96;
			}

			.wrapper.spotlight .inner {
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				-moz-flex-direction: row;
				-webkit-flex-direction: row;
				-ms-flex-direction: row;
				flex-direction: row;
			}

			.wrapper.spotlight .image {
				border-radius: 100%;
				margin: 0 3em 2em 0;
				width: 22em;
				overflow: hidden;
			}

				.wrapper.spotlight .image img {
					border-radius: 100%;
					width: 100%;
				}

			.wrapper.spotlight .content {
				width: 100%;
			}

			.wrapper.spotlight:nth-child(2n - 1) .inner {
				-moz-flex-direction: row-reverse;
				-webkit-flex-direction: row-reverse;
				-ms-flex-direction: row-reverse;
				flex-direction: row-reverse;
				text-align: right;
			}

			.wrapper.spotlight:nth-child(2n - 1) .image {
				margin: 0 0 2em 3em;
			}

			.wrapper.spotlight.style2 {
				background-color: #45558d;
			}

				.wrapper.spotlight.style2:before, .wrapper.spotlight.style2:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%2345558d%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style2:before {
					box-shadow: inset 0 -1px 0 0 #45558d, 0 1px 0 0 #45558d;
				}

				.wrapper.spotlight.style2:after {
					box-shadow: inset 0 -1px 0 0 #45558d, 0 1px 0 0 #45558d;
				}

			.wrapper.spotlight.style3 {
				background-color: #3f4e85;
			}

				.wrapper.spotlight.style3:before, .wrapper.spotlight.style3:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%233f4e85%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style3:before {
					box-shadow: inset 0 -1px 0 0 #3f4e85, 0 1px 0 0 #3f4e85;
				}

				.wrapper.spotlight.style3:after {
					box-shadow: inset 0 -1px 0 0 #3f4e85, 0 1px 0 0 #3f4e85;
				}

			.wrapper.spotlight.style4 {
				background-color: #39477c;
			}

				.wrapper.spotlight.style4:before, .wrapper.spotlight.style4:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%2339477c%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style4:before {
					box-shadow: inset 0 -1px 0 0 #39477c, 0 1px 0 0 #39477c;
				}

				.wrapper.spotlight.style4:after {
					box-shadow: inset 0 -1px 0 0 #39477c, 0 1px 0 0 #39477c;
				}

			.wrapper.spotlight.style5 {
				background-color: #324072;
			}

				.wrapper.spotlight.style5:before, .wrapper.spotlight.style5:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23324072%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style5:before {
					box-shadow: inset 0 -1px 0 0 #324072, 0 1px 0 0 #324072;
				}

				.wrapper.spotlight.style5:after {
					box-shadow: inset 0 -1px 0 0 #324072, 0 1px 0 0 #324072;
				}

			.wrapper.spotlight.style6 {
				background-color: #2d3a69;
			}

				.wrapper.spotlight.style6:before, .wrapper.spotlight.style6:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%232d3a69%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style6:before {
					box-shadow: inset 0 -1px 0 0 #2d3a69, 0 1px 0 0 #2d3a69;
				}

				.wrapper.spotlight.style6:after {
					box-shadow: inset 0 -1px 0 0 #2d3a69, 0 1px 0 0 #2d3a69;
				}

		@media screen and (max-width: 980px) {

			.wrapper {
				margin: 4.75em 0;
			}

				.wrapper:before, .wrapper:after {
					height: 4.75em;
				}

				.wrapper:before {
					top: -4.75em;
				}

				.wrapper:after {
					bottom: -4.75em;
					left: 0;
				}

				.wrapper .inner {
					padding: 3em 3em 1em 3em ;
					width: 100%;
				}

				.wrapper.spotlight .image {
					margin: 0 2em 2em 0;
					width: 32em;
				}

				.wrapper.spotlight:nth-child(2n - 1) .image {
					margin: 0 0 2em 2em;
				}

		}

		@media screen and (max-width: 736px) {

			.wrapper {
				margin: 2.5em 0;
			}

				.wrapper:before, .wrapper:after {
					height: 2.5em;
				}

				.wrapper:before {
					top: -2.5em;
				}

				.wrapper:after {
					bottom: -2.5em;
					left: 0;
				}

				.wrapper .inner {
					padding: 2em 2em 0.1em 2em ;
				}

				.wrapper.spotlight .inner {
					-moz-align-items: -moz-flex-start;
					-webkit-align-items: -webkit-flex-start;
					-ms-align-items: -ms-flex-start;
					align-items: flex-start;
				}

				.wrapper.spotlight .image {
					width: 19em;
					margin: 0 1.75em 2em 0;
				}

				.wrapper.spotlight:nth-child(2n - 1) .image {
					margin: 0 0 2em 1.75em;
				}

		}

		@media screen and (max-width: 480px) {

			.wrapper.spotlight .inner {
				display: block;
			}

			.wrapper.spotlight .image {
				margin: 0 0 1em 0 !important;
				max-width: 85%;
				width: 12em;
			}

		}

		@media screen and (max-width: 360px) {

			.wrapper .inner {
				padding: 2em 1.5em 0.1em 1.5em ;
			}

		}

/* Actions */

	ul.actions {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		cursor: default;
		list-style: none;
		margin-left: -1em;
		padding-left: 0;
	}

		ul.actions li {
			padding: 0 0 0 1em;
			vertical-align: middle;
		}

		ul.actions.special {
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			width: 100%;
			margin-left: 0;
		}

			ul.actions.special li:first-child {
				padding-left: 0;
			}

		ul.actions.stacked {
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			margin-left: 0;
		}

			ul.actions.stacked li {
				padding: 1.3em 0 0 0;
			}

				ul.actions.stacked li:first-child {
					padding-top: 0;
				}

		ul.actions.fit {
			width: calc(100% + 1em);
		}

			ul.actions.fit li {
				-moz-flex-grow: 1;
				-webkit-flex-grow: 1;
				-ms-flex-grow: 1;
				flex-grow: 1;
				-moz-flex-shrink: 1;
				-webkit-flex-shrink: 1;
				-ms-flex-shrink: 1;
				flex-shrink: 1;
				width: 100%;
			}

				ul.actions.fit li > * {
					width: 100%;
				}

			ul.actions.fit.stacked {
				width: 100%;
			}

		@media screen and (max-width: 480px) {

			ul.actions:not(.fixed) {
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				margin-left: 0;
				width: 100% !important;
			}

				ul.actions:not(.fixed) li {
					-moz-flex-grow: 1;
					-webkit-flex-grow: 1;
					-ms-flex-grow: 1;
					flex-grow: 1;
					-moz-flex-shrink: 1;
					-webkit-flex-shrink: 1;
					-ms-flex-shrink: 1;
					flex-shrink: 1;
					padding: 1em 0 0 0;
					text-align: center;
					width: 100%;
				}

					ul.actions:not(.fixed) li > * {
						width: 100%;
					}

					ul.actions:not(.fixed) li:first-child {
						padding-top: 0;
					}

					ul.actions:not(.fixed) li input[type="submit"],
					ul.actions:not(.fixed) li input[type="reset"],
					ul.actions:not(.fixed) li input[type="button"],
					ul.actions:not(.fixed) li button,
					ul.actions:not(.fixed) li .button {
						width: 100%;
					}

						ul.actions:not(.fixed) li input[type="submit"].icon:before,
						ul.actions:not(.fixed) li input[type="reset"].icon:before,
						ul.actions:not(.fixed) li input[type="button"].icon:before,
						ul.actions:not(.fixed) li button.icon:before,
						ul.actions:not(.fixed) li .button.icon:before {
							margin-left: -0.5rem;
						}

		}
</style>

