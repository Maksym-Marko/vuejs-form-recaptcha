Vue.component( 'vue-recaptcha', VueRecaptcha )

Vue.component( 'my_vue_form', {
	template: ` 
		<form
			@submit.prevent="mxSubmit"
			:class="{mx_form_inv: formInv}"
		>

			<div>
				<label for="mxSubject">Subject</label><br />
				<input 
					type="text"
					id="mxSubject"
					v-model="subject"
					:class="{mx_empty_filed: !subject}"
				/><br />
				<small>Fill in the subject</small>
			</div>
			
			<div>
				<label for="mxMessage">Your message</label><br />
				<textarea
					id="mxMessage"
					cols="30" rows="10"
					v-model="message"
					:class="{mx_empty_filed: !message}"
				></textarea><br />
				<small>Fill in the message</small>
			</div>

			<div
				:class="{mx_recaptcha_failed: !recaptcha}"
			>
				<vue-recaptcha
					sitekey="6Le9WAEVAAAAAO-U7wI50TYIP5nKAxb7VkbkyoSY"
					@verify="mxVerify"
				></vue-recaptcha>
				<br />
				<small>Doesn't complete!</small>
			</div>

			<div>
				<button>Submit</button>
			</div>
			
			
		</form>
	`,
	data() {
		return {
			subject: null,
			message: null,
			formInv: false,
			recaptcha: null
		}
	},
	methods: {
		mxVerify( response ) {

			this.recaptcha = response

		},
		mxSubmit() {

			if( this.subject && this.message && this.recaptcha ) {

				console.log( 'Submit' )


			} else {

				this.formInv = true

			}
			
		}
	}
} )


var app = new Vue( {
	el: '#app'
} )

