let id = 0;
export class Filme {
    constructor(titulo, descricao, genero, rating, duracao) {
        this.id = id++;
        this.titulo = titulo;
        this.descricao = descricao;
        this.genero = genero;
        this.rating = rating;
        this.duracao = duracao;
    }
  //   isTitleValid(title){
  //     if(typeof title === 'string' && title.length >= 8){
  //         return title
  //     }else{
  //       console.log(title)
  //         throw new Error('your title needs to be longer and cannot have special characters ')
  //     }
  // }
  // isDescValid(description){
  //   if(description.length >= 10){
  //       return description
  //   }else{
  //       throw new Error('your description needs to be longer ')
  //   }
  // }
  // isGenderValid(gender){
  //   const generos = ["Ação","Comedia", "Drama", "Fantasia", "Terror", "Misterio", "Romance", "Suspense"]
  //   ///CRIAR A VALIDACAO
  //   if(gender.length >= 10){
  //       return description
  //   }else{
  //       throw new Error('your description needs to be longer ')
  //   }
  // }
  // isRatingValid(rating){
  //   if(description.length >= 10){
  //       return description
  //   }else{
  //       throw new Error('your description needs to be longer ')
  //   }
  // }
  // isDescValid(description){
  //   if(description.length >= 10){
  //       return description
  //   }else{
  //       throw new Error('your description needs to be longer ')
  //   }
  // }

    
}