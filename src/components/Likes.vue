<template>
    <div>
        <!--div class="div1">{{ event.nbrLikes }} </div-->
         <div class="div1">{{ nbrLikes }} </div>
    <div class="div2" @click = addLikes() >J'aime</div>
    <div class="div3" >{{ info }}</div>
    <!--div class="div3" >{{ event.info }}</div-->

    </div>
</template>
 
<script>
import useLikes from "../use/use-likes.vue";// si on veut une autre fonction de composition on fait comme ca:
//  import useDesLikes from "../use/use-deslikes.vue";

 //import { ref,computed } from "vue"; //synthaxe référence reactive
//import { reactive,computed,toRefs } from "vue";// syhntaxe reactive
export default {
    name: "Likes",
    setup(){
        // setup est devenue le lieux ou je met mes fonction de composition
        // dans le cas ou on va ajouter une autre fonction de composition
        // return {... useLikes(), ...useDislikes()}

        const {nbrLikes,addLikes,message,info} = useLikes();
        return {nbrLikes,addLikes,message,info};

}
    
};
     
</script>

<style scoped>
.div1 {
    background-image: url("../assets/images/heart.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    margin-left: 12px;
    margin-top: -51px;
    background-size: 31px;
    font-size: 22px;
}
.div2 {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
   margin-top: -48px;
   margin-right: 834px;
}

.div3 {
  white-space: nowrap;
  width: 200px;
  border: 1px solid #000000;
  overflow: hidden;
  text-overflow: clip;
   background-color: red;
}
</style>