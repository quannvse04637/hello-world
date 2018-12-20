<template>
    <div>
        <section id="banner">
            <div class="inner">
				<transition appear appear-active-class="logo-appear">
					<div class="logo">
						<span class="icon fa-diamond"></span>
					</div>
				</transition>
				<transition appear appear-active-class="title-appear">
					<h2 class="title">{{title}}</h2>
				</transition>
				<transition appear appear-active-class="title-appear">
					<p> {{description}} <a v-bind:href="url">{{pageName}}</a></p>
				</transition>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            title: 'THIS IS SOLID STATE',
            description: 'Another free + fully responsive site template by',
            url: 'https://html5up.net/',
			pageName: 'HTML5 UP'
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,700|Source+Sans+Pro:300,600,300italic,600italic");

.title-appear {
	animation: go 4s;
}
.title {
	opacity: 0;
}

.logo-appear {
	animation: go 2s;
}
.logo {
	opacity: 0;
}

@keyframes go {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

/* Banner */

	#banner {
		padding: 10em 0 4.75em 0 ;
	}

		#banner .inner {
			margin: 0 auto;
			width: 55em;
		}

		#banner .logo {
			transition: opacity 2s ease, transform 1s ease;
			transform: translateY(0);
			opacity: 1;
			margin: 0 0 1.3em 0;
		}

			#banner .logo .icon {
				border-radius: 100%;
				border: solid 2px rgba(255, 255, 255, 0.125);
				cursor: default;
				display: inline-block;
				font-size: 2em;
				height: 2.25em;
				line-height: 2.25em;
				text-align: center;
				width: 2.25em;
			}

		#banner h2 {
			transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
			transform: translateX(0);
			transition-delay: 0.65s;
			filter: blur(0);
			opacity: 1;
			border-bottom: solid 2px rgba(255, 255, 255, 0.125);
			font-size: 2.25em;
			margin-bottom: 0.8em;
			padding-bottom: 0.4em;
		}

		#banner p {
			transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
			transform: translateX(0);
			transition-delay: 0.8s;
			filter: blur(0);
			opacity: 1;
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 1em;
			font-weight: 200;
			letter-spacing: 0.1em;
			line-height: 2;
			text-transform: uppercase;
		}

		@media screen and (max-width: 1280px) {

			#banner {
				padding: 7em 0 8.25em 0 ;
				background-color: #2e3141;
				background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../../images/bg.jpg");
				background-size: auto, cover;
				background-position: center, center;
				margin-bottom: -6.5em;
			}

		}

		@media screen and (max-width: 980px) {

			#banner {
				padding: 12em 3em 12.375em 3em ;
				margin-bottom: -4.75em;
			}

				#banner .inner {
					width: 100%;
				}

		}

		@media screen and (max-width: 736px) {

			#banner {
				padding: 5em 2em 4.25em 2em ;
				margin-bottom: -2.5em;
			}

				#banner .logo {
					margin: 0 0 1em 0;
				}

					#banner .logo .icon {
						font-size: 1.5em;
					}

				#banner h2 {
					font-size: 1.5em;
				}

				#banner p {
					font-size: 0.8em;
				}

		}

		body.is-preload #banner .logo {
			transform: translateY(0.5em);
			opacity: 0;
		}

		body.is-preload #banner h2 {
			opacity: 0;
			transform: translateX(0.25em);
			filter: blur(2px);
		}

		body.is-preload #banner p {
			opacity: 0;
			transform: translateX(0.5em);
			filter: blur(2px);
		}
</style>

