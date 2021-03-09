# Remarque:
1/Dossier component contient tout les composant de l application.

2/App.vue est importante car il sagit du composant racine dont lesquelle tout les autres composant sont imbriqué.

3/main.js uirend notre composant App.vue et tout ce qui est imbriquer et le mount dans le DOM.

4/ npm run build elle va preparer le projet pour la production par suite on a la creation du dossier dist qui contien: 1-Dossier css
                          2-Dossier js
                          3-Dossier img
ainssi l'application soit exploitable

REMARQUE IMPORTANTE:
-- le composant App.vue est le composant globale de notre application,il contiendra l'ensemble du code de l'application

*-----*********npm run dev**************

# Remarque:
NOUS Avons la possibilité de transférer des donner d'un composant parent a un composant fils grace au props

- les slot sont d'espace reservé pour  inserer du code  d'un modéle

- les style dans mon application sont glaubeaux, pour corriger ou modifier les style on doit utiliser 
des style delimité ( scoped) cad les style css vont correspondre uniquement pour son composant.

# Remarque:

Vue Js nous permet des single page application, ces applications sont définit comme des application web qui se charge appartir  d'une seule page html et mis a jour dynamiquement cette page,lorsque utilisateur intéragi avec l'application.

Remrque: (POUR NAVIGUER ENTRE LES noeuds)

Les routeurs dans VueJs:
1/ npm install vue-router@next

2/npm install vue-router@4 (documentatio)

# Remarque:

1/<router-link to="/">HOME</router-link>, ici la directive por ceer des liens entre different page de composant


2/ <router-view>
Lorsque une route est parcouru dans le navigateur, le composant sera rendu dans <router-view>

# Remarque:

$route.params.name : est un segment d'évnnement dynamiqueiens, mais il n'est pas lisible pour cela 

on va utiliser les pops

# Remarque:

Dans Vue Router, à quoi sert le composant  ?
Rep: C'est un espace réservé où le contenu de notre composant sera rendu sur la page.

2/ Dans Vue Router, il est préférable de créer une route pour les erreurs 404 ?
REP:
à la fin du tableau des routes

3/ Dans Vue Router, quelle est l'utilité de $route.params ?
REP:
Récupérer un paramètre passé dans l'URL.

4/Dans Vue Router, qu'utilise-t-on pour créer des routes nommées ?
REP:
Le nom des routes (name)

5/Dans Vue Router, qu'utilise-t-on pour créer une redirection ?
REP: redirect

6/Qu'est-ce que Vue Router ?
REP:
Le routeur officiel Vue.js

7/Soit le code suivant qui utilise le props pour une route. Dans le composant ProductDetails, comment utiliserons-nous le props ?

REP:
props: ['name']

8/ Soit le code suivant, que permet history: createWebHistory() ?
const router = createRouter ({
    history: createWebHistory(),
    routes: []
});

REP:
Il permet d'avoir une URL normale.



# Remarque:
Api de composition de VueJs 3
- la creation du composant Vue , permet la creation de morceaux de code réutilisable associé a des fonctionalité

et de rendre le code plus maintenable.

  - Api de composition rennde le compte plus clair , on l'utilise pour 3 raison:

  -1/ les composant sont trop gros et on souhaite de les realiser

  -2/ on besoin d'utliser du code a traver des composant

     REMARQUE:
     Api de composition consiste a utiliser:
    -fonction setup et la référence reactive ref

  -3/ou juste on péfére sont santaxe plus avancée

  # Remarque:
  - ref est une reférence reactive

   - ref(7) : en capsule mon entier prémitive 7 dans un objet ce qui nous permettera de suivre les changements

   - Api de composition declareer des prémitive reactive  qui ne sont pas associé a un composant

   # Remarque:

    setup(){
        const nbrLikes = ref(7);
    }

    Nous allons renvoyer explécitement l'objet avec les proprieté dont notre modéles aura besoin pour etre rendu correctement


   # Remarque: Syhntaxe référentiel
     <script>
      import { ref,computed } from "vue";
     export default {
    name: "Likes",
    setup(){
        const nbrLikes = ref(7);
        const message = ref('aime cette page');
         function addLikes(){
             nbrLikes.value ++ ;
         }
         const info = computed(() => {
            return nbrLikes.value + " " + message.value ;
    });
    return {nbrLikes,addLikes,message,info} ;

    # Remarque:

    apres l'utilisation du syhntaxe reactive, il et interessant de destruction d l'objet event de telle sorte
    dans le modéle n'ayant plus besoin   d'appellé event.

    - La methode toRefs convert l'objet reactive en objet simple 

    <div class="div1">{{ event.nbrLikes }} </div>

    <div class="div3" >{{ event.info }}</div>
   
}

}
</script>

# Remarque: deux raison por utiliser API de composition:

1/ soit d'organiser nos composant par fonctionalité

2/réutiliser notre code dans d'autre composant

REMARQUES TRES IMPORTANTE :  **** Utilisation reactive******************

<script>
//import { ref,computed } from "vue"; synthaxe référence reactive
import { reactive,computed,toRefs } from "vue";// syhntaxe reactive
export default {
    name: "Likes",
    setup(){
        const event = reactive({
             nbrLikes : 7,
             message : 'aime cette page',
             info: computed(() => {
            return event.nbrLikes + " " + event.message ;
            })
        });
        
         function addLikes(){
             event.nbrLikes ++ ;
         }
         
    return { ...toRefs(event),addLikes} ;// ici destrecturer l'objet event par to Refs
   
}

}
</script>













