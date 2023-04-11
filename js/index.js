const { createApp } = Vue

  createApp({
    data() {
      return {
        titolo: 'Lista random Email',
        basePath: 'https://flynn.boolean.careers/exercises/api/',
        numEmails: 10,
        arrEmails: [],
      }
    },
    methods: {
        getEmails(){
            this.arrEmails = [];
            for(let i = 1; i <= this.numEmails; i++){
                axios.get(this.basePath + 'random/mail').then((res) =>{
                    this.arrEmails.push(res.data.response)
                })
            }
            
        }
    },
    mounted(){
        this.getEmails()
    }
  }).mount('#app')


//   https://flynn.boolean.careers/exercises/api/random/mail