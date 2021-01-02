<template>
    <div>
        <div class="offset-3 col-md-6 ">
            <h3 class="text-center"> Chat Bot </h3>
            <ul class="list-group" v-chat-scroll>
                <message v-for="(message,i) in chat" :key="i">
                    {{ message }}
                </message>

            </ul>
            <input type="text" class="form-control" placeholder="Type your message" v-model="message"
                   @keyup.enter="send()">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chatbot.vue",
        data() {
            return {
                message: '',
                chat: ['one', 'two', 'three'],
            }
        },
        mounted() {
            Echo.private('chat')
                .listen('ChatEvent', (e) => {
                    console.log('new chat', e);
                    this.chat.push(e.message);
                });
        },
        methods: {
            send() {
                if (this.message.length != 0) {
                    this.chat.push(this.message)
                    axios.post('/send', {
                        message: this.message
                    })
                    .then(response => {
                        console.log('empty', response);
                        this.message = '';

                    })
                    .catch(error => {
                        console.log(error);
                    });

                }
            }
        }
    }
</script>

<style scoped>
    .list-group {
        overflow-y: scroll;
        height: 350px;
    }

</style>


