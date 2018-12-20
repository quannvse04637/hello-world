<template>
    <div>
        <section id="footer">
            <div class="inner">
                <h2 class="major">{{title}}</h2>
                <p>{{des}}</p>
                <form method="post" action="#">
                    <div class="fields">
                        <div class="field">
                            <label for="name">{{field.name}}</label>
                            <input type="text" name="name" id="name">
                        </div>
                        <div class="field">
                            <label for="name">{{field.email}}</label>
                            <input type="text" name="email" id="email">
                        </div>
                        <div class="field">
                            <label for="name">{{field.message}}</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                    </div>
                    <ul class="actions">
                        <li>
                            <input type="submit" value="Send Message">
                        </li>
                    </ul>
                </form>
                <ul class="contact">
                    <li v-for="contact in contacts" :key="contact.id"
						:class="contact.contact.typeClass"
						v-html="contact.contact.value">
					</li>
                </ul>
				<ul class="copyright">
					<li v-for="item in copyRights" :key="item.id"
						v-html="item.value"></li>
				</ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            title: 'Get in touch',
			des: 'Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.',
			field: {
				name: 'Name',
				email: 'Email',
				message: 'Message',
			},
			contacts: [
				{
					contact: {
						typeClass: 'fa-phone',
						value: `
									Untitled Inc<br>
									1234 Somewhere Road Suite #2894<br>
									Nashville, TN 00000-0000
								`
					}
				},
				{
					contact: {
						typeClass: 'fa-home',
						value: `(000) 000-0000`
					}
				},
				{
					contact: {
						typeClass: 'fa-envelope',
						value: `<a href="#">information@untitled.tld</a>`
					}
				},
				{
					contact: {
						typeClass: 'fa-twitter',
						value: `<a href="#">twitter.com/untitled-tld</a>`
					}
				},
				{
					contact: {
						typeClass: 'fa-facebook',
						value: `<a href="#">facebook.com/untitled-tld</a>`
					}
				},
				{
					contact: {
						typeClass: 'fa-instagram',
						value: `<a href="#">instagram.com/untitled-tld</a>`
					}
				},
			],
			copyRights: [
				{value: `© Untitled Inc. All rights reserved.`},
				{value: `Demo Images: <a href="http://unsplash.com">Unsplash</a>`},
				{value: `©Design: <a href="http://html5up.net">HTML5 UP</a>`},
			],
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,700|Source+Sans+Pro:300,600,300italic,600italic");
/* Footer */

	#footer .inner {
		padding: 5em 0 3em 0 ;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-direction: row;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin: 0 auto;
		width: 55em;
	}

		#footer .inner > * {
			width: 100%;
		}

		#footer .inner form {
			margin: 0 3em 0 0;
			width: calc(50% - 1.5em);
		}

		#footer .inner .contact {
			width: calc(50% - 1.5em);
		}

		#footer .inner .copyright {
			border-top: solid 2px rgba(255, 255, 255, 0.125);
			list-style: none;
			margin: 4em 0 2em 0;
			padding: 2em 0 0 0;
			width: 100%;
		}

			#footer .inner .copyright li {
				border-left: solid 2px rgba(255, 255, 255, 0.125);
				color: rgba(255, 255, 255, 0.35);
				display: inline-block;
				font-size: 0.9em;
				line-height: 1;
				margin-left: 1em;
				padding: 0;
				padding-left: 1em;
			}

				#footer .inner .copyright li:first-child {
					border-left: 0;
					margin-left: 0;
					padding-left: 0;
				}

				#footer .inner .copyright li a {
					color: inherit;
				}

	@media screen and (max-width: 1280px) {

		#footer {
			background-color: #2e3141;
			background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../../images/bg.jpg");
			background-size: auto, cover;
			background-position: center, center;
			margin-top: -6.5em;
			padding-top: 6.5em;
		}

	}

	@media screen and (max-width: 980px) {

		#footer {
			margin-top: -4.75em;
			padding-top: 4.75em;
		}

			#footer .inner {
				padding: 3em 3em 1em 3em ;
				display: block;
				width: 100%;
			}

				#footer .inner form {
					width: 100%;
					margin: 0 0 4em 0;
				}

				#footer .inner .contact {
					width: 100%;
					margin: 0 0 4em 0;
				}

				#footer .inner .copyright {
					margin: 4em 0 2em 0;
				}

	}

	@media screen and (max-width: 736px) {

		#footer {
			margin-top: -2.5em;
			padding-top: 2.5em;
		}

			#footer .inner {
				padding: 2em 2em 0.1em 2em ;
			}

				#footer .inner form {
					margin: 0 0 3em 0;
				}

				#footer .inner .contact {
					margin: 0 0 3em 0;
				}

	}

	@media screen and (max-width: 480px) {

		#footer .inner .copyright li {
			border-left: 0;
			display: block;
			margin: 1em 0 0 0;
			padding-left: 0;
		}

			#footer .inner .copyright li:first-child {
				margin-top: 0;
			}

	}

	@media screen and (max-width: 360px) {

		#footer .inner {
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

/* Form */

	form {
		margin: 0 0 2em 0;
	}

		form > :last-child {
			margin-bottom: 0;
		}

		form > .fields {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			width: calc(100% + 3em);
			margin: -1.5em 0 2em -1.5em;
		}

			form > .fields > .field {
				flex-grow: 0;
				flex-shrink: 0;
				padding: 1.5em 0 0 1.5em;
				width: calc(100% - 1.5em);
			}

				form > .fields > .field.half {
					width: calc(50% - 0.75em);
				}

				form > .fields > .field.third {
					width: calc(100%/3 - 0.5em);
				}

				form > .fields > .field.quarter {
					width: calc(25% - 0.375em);
				}

		@media screen and (max-width: 480px) {

			form > .fields {
				width: calc(100% + 3em);
				margin: -1.5em 0 2em -1.5em;
			}

				form > .fields > .field {
					padding: 1.5em 0 0 1.5em;
					width: calc(100% - 1.5em);
				}

					form > .fields > .field.half {
						width: calc(100% - 1.5em);
					}

					form > .fields > .field.third {
						width: calc(100% - 1.5em);
					}

					form > .fields > .field.quarter {
						width: calc(100% - 1.5em);
					}

		}

	label {
		color: #ffffff;
		display: block;
		font-family: Raleway, Helvetica, sans-serif;
		font-size: 0.8em;
		font-weight: 700;
		letter-spacing: 0.1em;
		margin: 0 0 0.7em 0;
		text-transform: uppercase;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	select,
	textarea {
		appearance: none;
		background: rgba(255, 255, 255, 0.025);
		border-radius: 5px;
		border: none;
		border: solid 2px rgba(255, 255, 255, 0.125);
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		input[type="tel"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		input[type="tel"]:focus,
		select:focus,
		textarea:focus {
			border-color: #5b6ba6;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		height: 2.75em;
	}

	textarea {
		padding: 0.75em 1em;
	}

	::-webkit-input-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	:-moz-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	::-moz-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}


/* Contact */

	ul.contact {
		list-style: none;
		padding: 0;
	}

		ul.contact li {
			text-decoration: none;
			margin: 2.5em 0 0 0;
			padding: 0 0 0 3.25em;
			position: relative;
		}

			ul.contact li:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			ul.contact li:before {
				border-radius: 100%;
				border: solid 2px rgba(255, 255, 255, 0.125);
				display: inline-block;
				font-size: 0.8em;
				height: 2.5em;
				left: 0;
				line-height: 2.35em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 2.5em;
			}

			ul.contact li:first-child {
				margin-top: 0;
			}

		@media screen and (max-width: 736px) {

			ul.contact li {
				margin: 1.5em 0 0 0;
			}

		}

</style>


