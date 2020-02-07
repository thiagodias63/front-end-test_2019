<template>
    <div class="list-countrys">
        <h2 class="trips-section-title">Upcoming</h2>
        <div v-for="(country, index) in countrys" 
            :key="index" 
            class="trip-content" 
            
            @click="showDetails(country)"
            :class="{active: country.selected }">
            <div class="trip-title" :style="{ background: 'linear-gradient(to bottom, transparent, #000), url('+country.thumb+') center center no-repeat' }">
                <h3 class="country-name">{{ country.destination }}</h3>
                <span class="trip-date">
                    {{ country.outboundDate | dateResume }} -  {{ country.inboundDate | dateResume }}
                </span>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            countrys: [],
            activeCountry: null,
        }
    },
    methods: {
        showDetails(country) {
            this.countrys.forEach(item => {
                if (item.destination != country.destination) {
                    item.selected = false;
                }
            }) 
            country.selected = !country.selected;
        }
    },
    created() {
        axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights').then(result => {
            result.data.forEach(coutry => {
                const { destination, thumb, inboundDate, outboundDate  } = coutry;
                this.countrys.push({destination, thumb, inboundDate, outboundDate, selected: false});
            }) 
            // this.countrys = result.data
        })
    }
}
</script>
<style lang="css" scoped>
.list-countrys {
    margin: 0;
    border: 0;
    padding: 0;
    text-align: left;
    height: 80vh;
    overflow-y: scroll;
}
.list-countrys .trips-section-title {
    color: #6B6C71;
    text-transform: uppercase;
    font-size: .9rem;
    margin: 1rem 1rem;
}
.list-countrys .trip-content {
    /* background-repeat: no-repeat;
    background-size: cover;  
    background: linear-gradient(#eb01a5, #d13531); */
    margin: 1rem 1rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.list-countrys .trip-content.active {
    height: 80vh;
}
.list-countrys .trip-content.active .trip-title{
    height: 20%;
}
.list-countrys .trip-title  {
    border: 0;
    padding: 0;
    padding-top: 70px;
    /* margin: 0 1rem; */
    /* margin-left: 1rem; */
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    min-width: 100%;
}
.list-countrys .trip-title h3 {
    font-weight: normal;
    font-size: 1.2rem;
}

.list-countrys .trip-title span {
    font-weight: normal;
    font-size: 1rem;
}
</style>