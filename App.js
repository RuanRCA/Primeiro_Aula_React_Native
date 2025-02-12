import React, {Component} from "react";
import {View ,Text , Image , Button} from "react-native";



class App extends Component{


  constructor(props){
    super(props)
    this.state={nome:'Oleotek'}
    this.entrar = this.entrar.bind(this)
  }
  entrar (nome){
    this.setState({nome:nome})
  }

  render(){
    let carro = "Oleotek ";
    return(

    

      <View>
        <Text style = {{marginTop: 50, fontSize: 25, color: '#0000ff' , textAlign: 'center' }}>
          {this.state.nome}
        </Text>
        <Button title='Entrar1' onPress={() => this.entrar('Botao1')}></Button>
        <Text style={{marginTop: 20 }}></Text>
        <Button title='Entrar2' onPress={() => this.entrar('Botao2')}></Button>

        <Text style= {{ marginTop: 50,fontSize: 25,color:'#0000ff', textAlign: 'center' }}> {carro}  
</Text>
<Foto  largura={400} altura= {300} profissao=' O que não pode fazer com o óleo usado?
Diversas práticas ainda muito utilizadas no dia a dia devem ser repensadas. Por exemplo:

Descartar resíduos no ralo da pia da cozinha, do banheiro e do vaso sanitário;
Aquecer com água e detergente a gordura que sobrou na panela ou na forma após o cozimento, e quando a mistura estiver fervendo despejar no ralo da pia;
Descartar o óleo direto na natureza;
Rodrigo Almeida, um dos fundadores da Preserve Ambiental, que atua com a população na conscientização do descarte de óleo nos estados do Paraná e Santa Catarina, explica quais as consequências para cada uma dessas atitudes. 

' imagem = 'https://s2-g1.glbimg.com/eGM1PGSwnt1SbzpqAYwIwgKbsZs=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/t/2kNa8yQSaCzVIBvhzWxg/oleo-de-cozinha-1-.jpg'></Foto>

      </View>
    )
  }
}


/*class App extends Component {
  render() {
    let carro = "Oleotek ";
   
    return(
      <View>

<Text style= {{ marginTop: 50,fontSize: 25,color:'#0000ff', textAlign: 'center' }}> {carro}  
</Text>
<Foto  largura={400} altura= {300} profissao=' O que não pode fazer com o óleo usado?
Diversas práticas ainda muito utilizadas no dia a dia devem ser repensadas. Por exemplo:

Descartar resíduos no ralo da pia da cozinha, do banheiro e do vaso sanitário;
Aquecer com água e detergente a gordura que sobrou na panela ou na forma após o cozimento, e quando a mistura estiver fervendo despejar no ralo da pia;
Descartar o óleo direto na natureza;
Rodrigo Almeida, um dos fundadores da Preserve Ambiental, que atua com a população na conscientização do descarte de óleo nos estados do Paraná e Santa Catarina, explica quais as consequências para cada uma dessas atitudes. 

' imagem = 'https://s2-g1.glbimg.com/eGM1PGSwnt1SbzpqAYwIwgKbsZs=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/t/2kNa8yQSaCzVIBvhzWxg/oleo-de-cozinha-1-.jpg'></Foto>

      </View>
    );
  }
}*/

export default App;

class Foto extends  Component {
  render() {
    return(
      <View>
        <Image source={{uri: this.props.imagem}}
        style = {{width:this.props.largura , height:this.props.altura}}></Image>
        <Text>{this.props.profissao}</Text>
      
      </View>
    );
  }

}