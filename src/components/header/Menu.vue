<template>
  <div v-show="show" class="my-modal">
	<div class="inner">
		<h2>Menu</h2>
		<ul class="links">
			<li>
				<a @click="navigateToHome">Home</a>
			</li>
			<li>
				<router-link to="/banner">Banner</router-link>
			</li>
			<li>
				<router-link to="/generic">Generic</router-link>
			</li>
			<li>
				<router-link to="/banner">Elements</router-link>
			</li>
			<li>
				<router-link to="/banner">Login</router-link>
			</li>
			<li>
				<router-link to="/banner">Sign Up</router-link>
			</li>
		</ul>
		<a href="" class="close">Close</a>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
	show: {
		type: Boolean,
		required: true
	},
  },
  methods: {
	  navigateToHome() {
		  
	  }
  }
}
</script>

<style scoped>
.my-modal {
	position: fixed;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	background-color: rgba(46, 49, 65, 0.8);
	align-items: center;
	justify-content: center;
}
.inner {
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
}

 h2 {
	border-bottom: solid 2px rgba(255, 255, 255, 0.125);
	padding-bottom: 1em;
}

.close {
	background-image: url("../../images/close.png");
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
</style>

