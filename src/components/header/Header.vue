<template>
    <div>
		<header id="header">
			<h1>
				<a :href="homePage">{{title}}</a>
			</h1>
			<nav>
				<a @click="showModal = !showModal">{{menuTitle}}</a>
			</nav>
		</header>
		<div v-show="showModal" class="my-modal">
		<div class="inner">
			<h2>{{menuTitle}}</h2>
			<ul class="links">
				<li>
					<a @click="navigateTo(homePage)">Home</a>
				</li>
				<li>
					<a @click="navigateTo(genericPage)">Generic</a>
				</li>
				<li>
					<a @click="navigateTo(elementsPage)">Elements</a>
				</li>
				<li>
					<a :href="loginPage" @click="showModal = !showModal">Login</a>
				</li>
				<li>
					<a :href="signUpPage" @click="showModal = !showModal">Sign Up</a>
				</li>
			</ul>
			<a @click="showModal = !showModal" class="close">Close</a>
		</div>
		</div>
    </div>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            homePage: '/',
            title: 'Solid State',
            menuTitle: 'Menu',
			showModal: false,
			genericPage: '/generic',
			elementsPage: '/elements',
			loginPage: '#',
			signUpPage: '#',
			scrolled: false,
        }
	},
	methods: {
		navigateTo(path) {
			this.showModal = false;
			this.$router.push(path);
		},
	},
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,700|Source+Sans+Pro:300,600,300italic,600italic");


a {
		transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
		color: #ffffff;
		text-decoration: none;
		cursor: pointer;
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

/* Header */

	#header {
		transition: background-color 0.2s ease-in-out;
		background-color: rgba(53, 56, 73, 0.95);
		height: 3.5em;
		left: 0;
		line-height: 3.5em;
		padding: 0 1.25em;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
	}

	#header.alt {
			background-color: transparent;
		}

			#header.alt h1 {
				opacity: 0;
				visibility: hidden;
			}

		#header.h1 {
			transition: opacity 0.5s ease-in-out, visibility 0.2s;
			border-bottom: 0;
			font-size: 0.8em;
			margin-bottom: 0;
			opacity: 1;
			visibility: hidden;
		}
			#header .h1 a {
				border: 0;
			}

		#header nav {
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 0.8em;
			font-weight: 700;
			height: 3em;
			letter-spacing: 0.1em;
			line-height: 3em;
			position: absolute;
			right: 0.7em;
			text-transform: uppercase;
			top: 0.7em;
		}

			#header nav a {
				border: 0;
				display: block;
				padding: 0 1em;
				text-decoration: none;
				transition: background-color 0.2s ease-in-out;
				border-radius: 5px;
				box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.125);
				padding: 0 1.35em;
			}

				#header nav a:before {
					float: right;
					margin-left: 0.75em;
					font-family: FontAwesome;
					font-style: normal;
					font-weight: normal;
					text-transform: none !important;
					content: '\f0c9';
				}

					#header nav a:hover {
						background-color: rgba(255, 255, 255, 0.025);
					}

					#header nav a:active {
						background-color: rgba(255, 255, 255, 0.075);
					}

		@media screen and (max-width: 736px) {

			#header {
				height: 2.75em;
				line-height: 2.75em;
			}

				#header nav {
					top: 0;
					right: 0;
					height: inherit;
					line-height: inherit;
				}

					#header nav a {
						height: inherit;
						line-height: inherit;
					}

						#header nav a {
							box-shadow: none;
							padding: 0 1em;
							border-radius: 0;
						}

							#header nav a:hover, #header nav a:active {
								background-color: inherit;
							}

		}

		@media screen and (max-width: 480px) {

			#header nav a {
				width: 4em;
				white-space: nowrap;
				text-indent: 4em;
				position: relative;
			}

				#header nav a:before {
					width: inherit;
					position: absolute;
					top: 0;
					left: 0;
					text-indent: 0;
					text-align: right;
					margin-left: 0;
					padding-right: 1.25em;
				}
		}
.my-modal {
	position: fixed;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	background-color: rgba(46, 49, 65, 0.8);
}
.my-modal .inner {
	padding: 2.5em 1.5em 0.5em 1.5em ;
	transform: translateY(0.5em);
	transition: opacity 0.35s ease, transform 0.35s ease;
	background-color:#4c5c96;
	border-radius: 5px;
	max-width: 100%;
	opacity: 1;
	position: relative;
	width: 18em;
	align-items: center;
	text-align: center;
}

 h2 {
	border-bottom: solid 2px rgba(255, 255, 255, 0.125);
	padding-bottom: 1em;
}

.close {
	background-image: url("../../images/window-close-solid.svg");
	background-position: 75% 25%;
    background-repeat: no-repeat;
    background-size: 2em 2em;
    border: 0;
    content: '';
    display: block;
    height: 4em;
    overflow: hidden;
    position: absolute;
    right: 0;
    text-align: center;
    text-indent: 4em;
    top: 0;
    width: 4em;
}

.links {
	list-style: none;
	margin-bottom: 1.5em;
	padding: 0;
}

	.links li {
		padding: 0;
	}

		.links li a {
			border-radius: 5px;
			border: 0;
			display: block;
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 0.8em;
			font-weight: 200;
			letter-spacing: 0.1em;
			line-height: 1.85em;
			padding: 0.75em 0;
			text-transform: uppercase;
		}
			.links li a:hover {
				background: #45558d;
			}

@media screen and (max-width: 736px) {

	.inner {
		max-height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.my-modal .inner .close {
		background-size: 1.5em 1.5em;
	}

}
.is-scroll {
	background: #fff;
	box-shadow: 0 14px 20px -12px rgba(0, 0, 0, 0.2);
	transition: background-color 0.3s ease;
}
</style>

