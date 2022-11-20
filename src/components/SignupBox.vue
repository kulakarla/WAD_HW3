<template>
    <div class="signup">
        <div id="alert" v-if="alert">{{ alert }}</div>

        <form @submit.prevent="signupWithPassword">
            <label>
                Email
                <input type="email" v-model="email" />
            </label>
            <br>
            <label>
                Password
                <input type="password" v-model="password" />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        signupWithPassword() {
            this.alert = ""
            if (this.passwordControl) {
                this.alert = "You have been signed up"
                return;
            } else {
                this.alert = "Invalid password. Password must be of length 8-14, start with an uppercase and include two lowercase alphabet characters, include the character '_' and include one numeric value"
                return;
            }
        },
        passwordControl() {
            if (this.password.length < 8 || this.password.length > 14 || this.password[0] != this.password[0].toUpperCase) {
                return false;
            }
            var consistsChar = false;
            var consistsNumber = false;
            let lowercase = 0;
            for (let i = 0; i < this.password.length; i++) {
                if (!isNaN(this.password[i])) {
                    consistsNumber = true;
                }
                if (this.password[i] === this.password[i].toLowerCase) {
                    lowercase += 1;
                }
                if (this.password[i] === "_") {
                    consistsChar = true;
                }
            }
            return consistsChar && consistsNumber && lowercase >= 2;
        }
    }
}

</script>

<style scoped>

.signup{
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #a3c4b7;
    width: 65%;
    flex-direction: row;
}

button{
    display: flex;
    background-color: #349eeb;
    justify-content: center;
    bottom: -10px;
}

</style>