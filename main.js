const app = Vue.createApp({
    data(){
        return{
            numeriTombola: [
                ['a' , [1,2,3,4,5,11,12,13,14,15,21,22,23,24,25]], 
                ['b' , [6,7,8,9,10,16,17,18,19,20,26,27,28,29,30]],
                ['c' , [31,32,33,34,35,41,42,43,44,45,51,52,53,54,55]],
                ['d' , [36,37,38,39,40,46,47,48,49,50,56,57,58,59,60]],
                ['e' , [61,62,63,64,65,71,72,73,74,75,81,82,83,84,85]],
                ['f' , [66,67,68,69,70,76,77,78,79,80,86,87,88,89,90]]
            ],
            buttonClicked: false,
            buttonDisabled: false,
            allNumbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
            drawnNumbers: [],
            randomNumber: null,
            randomIndex: null,
            //end: if()
        }
    },
    methods: {
        drawNumber(){
            this.randomIndex =  Math.floor( (Math.random() * this.allNumbers.length ) + 1 )
            this.randomNumber = this.allNumbers[ this.randomIndex-1 ]
            this.allNumbers.splice(this.randomIndex-1 , 1)
            this.drawnNumbers.push(this.randomNumber)
            this.buttonClicked = true
            this.buttonDisabled = (this.drawnNumbers.length == 90)
        }
    }
})

let mountedApp = app.mount('#app')
