<template>
    <div id="generic">
		<app-header></app-header>
		<app-wrapper></app-wrapper>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from "./header/Header.vue";
import Wrapper from "./wrapper/WrapperGeneric.vue";
import Footer from "./footer/Footer.vue";

export default {
    name: "generic",
    components: {
		appHeader: Header,
		appWrapper: Wrapper,
		appFooter: Footer
    }
    
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,700|Source+Sans+Pro:300,600,300italic,600italic");

html, body, div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
pre, a, abbr, acronym, address, big, cite,
code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b,
u, i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output, ruby,
section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	-webkit-text-size-adjust: none;
}

mark {
	background-color: transparent;
	color: inherit;
}

input::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input, select, textarea {
	-moz-appearance: none;
	-webkit-appearance: none;
	-ms-appearance: none;
	appearance: none;
}

/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		-ms-overflow-style: scrollbar;
	}

	@media screen and (max-width: 480px) {

		html, body {
			min-width: 320px;
		}

	}

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		background-color: #2e3141;
		background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../images/bg.jpg");
		background-size: auto, cover;
		background-attachment: fixed, fixed;
		background-position: center, center;
	}

		body.is-preload *, body.is-preload *:before, body.is-preload *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

/* Type */

	body, input, select, textarea {
		color: #ffffff;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-size: 16.5pt;
		font-weight: 300;
		line-height: 1.65;
	}

		@media screen and (max-width: 1680px) {

			body, input, select, textarea {
				font-size: 13pt;
			}

		}

		@media screen and (max-width: 1280px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 980px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 736px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 480px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

	a {
		-moz-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		-webkit-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
		color: #ffffff;
		text-decoration: none;
	}

		a:hover {
			border-bottom-color: transparent;
			color: #ffffff !important;
		}

		a.special:not(.button) {
			text-decoration: none;
			border-bottom: 0;
			display: block;
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 0.8em;
			font-weight: 700;
			letter-spacing: 0.1em;
			margin: 0 0 2em 0;
			text-transform: uppercase;
		}

			a.special:not(.button):before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			a.special:not(.button):before {
				-moz-transition: background-color 0.2s ease-in-out;
				-webkit-transition: background-color 0.2s ease-in-out;
				-ms-transition: background-color 0.2s ease-in-out;
				transition: background-color 0.2s ease-in-out;
				border-radius: 100%;
				border: solid 2px rgba(255, 255, 255, 0.125);
				content: '\f105';
				display: inline-block;
				font-size: 1.25em;
				height: 2em;
				line-height: 1.65em;
				margin-right: 0.85em;
				text-align: center;
				text-indent: 0.15em;
				vertical-align: middle;
				width: 2em;
			}

			a.special:not(.button):hover:before {
				background-color: rgba(255, 255, 255, 0.025);
			}

			a.special:not(.button):active:before {
				background-color: rgba(255, 255, 255, 0.075);
			}

	strong, b {
		color: #ffffff;
		font-weight: 600;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #ffffff;
		font-family: Raleway, Helvetica, sans-serif;
		font-weight: 700;
		letter-spacing: 0.1em;
		margin: 0 0 1em 0;
		text-transform: uppercase;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
			border-bottom: 0;
		}

		h1 span, h2 span, h3 span, h4 span, h5 span, h6 span {
			font-weight: 200;
		}

		h1.major, h2.major, h3.major, h4.major, h5.major, h6.major {
			padding-bottom: 1em;
			border-bottom: solid 2px rgba(255, 255, 255, 0.125);
		}

	h2 {
		font-size: 1.2em;
	}

	h3 {
		font-size: 0.9em;
	}

	h4 {
		font-size: 0.7em;
	}

	h5 {
		font-size: 0.7em;
	}

	h6 {
		font-size: 0.7em;
	}

	@media screen and (max-width: 736px) {

		h2 {
			font-size: 1em;
		}

		h3 {
			font-size: 0.8em;
		}

	}

	sub {
		font-size: 0.8em;
		position: relative;
		top: 0.5em;
	}

	sup {
		font-size: 0.8em;
		position: relative;
		top: -0.5em;
	}

	blockquote {
		border-left: solid 4px rgba(255, 255, 255, 0.125);
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 2em;
	}

	code {
		background: rgba(255, 255, 255, 0.025);
		border-radius: 5px;
		border: solid 2px rgba(255, 255, 255, 0.125);
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0.25em;
		padding: 0.25em 0.65em;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0 2em 0;
	}

		pre code {
			display: block;
			line-height: 1.75em;
			padding: 1em 1.5em;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 2px rgba(255, 255, 255, 0.125);
		margin: 2.5em 0;
	}

		hr.major {
			margin: 4em 0;
		}

	.align-left {
		text-align: left;
	}

	.align-center {
		text-align: center;
	}

	.align-right {
		text-align: right;
	}
</style>
