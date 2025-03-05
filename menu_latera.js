var item_do_meu_menu = document.querySelectorAll('.item_do_meu_menu') // criando a variável chamada "item_do_meu_menu" que recebe ("=") uma array com todos os objetos com a classe ".item_do_meu_menu" dos documentos em que esse script for referenciado, ACHO que por isso está com um ponto entre parênteses


function seleciona_link() { // criando função chamada "seleciona_link"
    item_do_meu_menu.forEach( // utilizando o foreach
        (item) =>// pelo que entendi, o "(item)" seria como se fosse a variável $valor no foreach do php e a partir do "=>" seria a alteração do valor "(item)". Ex: foreach ($array as $value)
            item.classList.remove('ativa') // a princípio, essa função está removendo a cadeia de caracteres 'ativa' das classes inseridas na variável "item_do_meu_menu"
    ) 
    this.classList.add('ativa')
} 

item_do_meu_menu.forEach((item) => // algorítimo para monitorar eventos/inputs
    item.addEventListener('click',seleciona_link) // acho que ele está monitorando se há um input de click
)

//expansão do menu

var butao_expande = document.querySelector('#butao_expande') // variável que recebe o primeiro elemento dentro do documento(por conta do querySelector sem o All) com o id(#) butao_expande, ACHO que é por isso que tem a cerquilha(#)
var meu_menu_lateral = document.querySelector('.meu_menu_lateral')

butao_expande.addEventListener('click',function(){ // criando uma função somente para quando o butao_expande(tracos) for clickado
        meu_menu_lateral.classList.toggle('expadido') // PELO QUE ENTENDI, a função toggle faz verifica se o atirbuto "classList" da variável "meu_menu_lateral" possui ou não a informação entre parênteses, se possuir a função remove, se não possuir ela adiciona
    }
)