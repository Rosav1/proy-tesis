<template>
    <div>

    <div class="caja">
    <i class="fa fa-users" aria-hidden="true"></i> {{ as }} usuarios...

    </div>
    </div>
</template>

<script>

export default{
    data() {
        return {
        as: ''
        }

    },
        mounted() {
    if(localStorage.getItem('Heydru_keyword') == 'startup'){
      this.as = '45 M'
    }else if(localStorage.getItem('Heydru_keyword') == 'digitalizacion'){
      this.as = '70 M'
    }else if(localStorage.getItem('Heydru_keyword') == 'coronavirus'){
      this.as = '120 M'
    }else if(localStorage.getItem('Heydru_keyword') == 'machine learning') {
      this.as = '35 M'  
    }else if(localStorage.getItem('Heydru_keyword') == 'atencion al cliente') {
      this.as = '68 M'
    }else if(localStorage.getItem('Heydru_keyword') == 'aeropuerto') {
      this.as = '52 M'  
    }else {
      this.as = (Math.floor(Math.random() * (100 - 5)) + 5) + " M" 
    } 
    }
}
</script>
<style scoped lang="scss">

@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.caja {

background-color: #F0216C;
font-family: 'MBold';
color: white;
width: 60%;
margin-left: auto;
margin-right: auto;
text-align: center;
margin-top: 50px;
border-radius: 20px;
padding: 20px;
font-size: 30px;
}

.caja:hover {
    transform: scale(1.1);
}

</style>