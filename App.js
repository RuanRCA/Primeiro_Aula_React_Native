import React, {Component} from "react";
import {View ,Text , Image , Button} from "react-native";


class App extends Component{
  constructor(props){
  super(props);
  this.state = {titulo: 'Oleotek' , imagem:'https://static.vecteezy.com/system/resources/previews/002/124/399/original/breaking-news-background-tv-channel-news-screensaver-illustration-free-vector.jpg', texto: 'Notícias'}
  this.publicar = this.publicar.bind(this);
  }
  publicar(titulo,imagem,texto){
    this.setState({titulo: titulo , imagem: imagem , texto: texto});
  }
  render(){
    return(
      <View style={{padding:50}}>
        <Informacao titulo={this.state.titulo} imagem= {this.state.imagem} texto={this.state.texto} />
        <Button title='Noticia 1' onPress={() => this.publicar('https://s2-g1.glbimg.com/k6LEpOuA67bCnU057jMy--WWfmg=/0x0:1200x800/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/t/2kNa8yQSaCzVIBvhzWxg/oleo-de-cozinha-1-.jpg' , 'É importante que o consumidor saiba também dos impactos positivos do descarte correto. É importante saber que se jogar [o óleo] na pia vai jogar uma matéria-prima para a produção de biodiesel, gera renda, emprego para essa cadeia, e contribui para a sustentabilidade do planeta')}></Button>
        <Text style={{marginTop:10}}></Text>
        <Button title='Noticia2' onPress={() => this.publicar('https://imagenes.elpais.com/resizer/v2/RLQKIYST43M6KTT5FRPQXFVR34.jpg?auth=dd51ce49c3730e26d028286f2bee8c0e1e20d7edd8abb6d9d944c4cb45034f71&width=1200' , 'A nova área de contaminação na Bahia é a nova faceta da crise ambiental que atinge a região, cuja origem segue incerta. O Governo brasileiro diz ter comprovado que a origem do petróleo é venezuelano, mas ainda falta esclarecer as circunstâncias do desastre. O almirante Alexandre Rabello de Faria, chefe do Estado Maior do Comando de Operações Navais, informou nesta quinta em audiência pública na Comissão de Meio Ambiente do Senado que as investigações ainda não avançaram em relação ao que causou o derramamento do produto no mar. Até agora, disse ele, a única "certeza é que o DNA do óleo bruto é venezuelano". Faria ressaltou, no entanto, que não é possível afirmar como e nem por quem ele foi derramado. O almirante acredita tratar-se de um ato criminoso, como "uma bala perdida" que atingiu o litoral brasileiro.')}></Button>
        <Text style={{marginTop:10}}></Text>
        <Button title='Noticia3' onPress={() => this.publicar ('https://istoe.com.br/istoegeral/wp-content/uploads/2025/01/sabao-de-oleo_1737389201007-750x375.jpg' , 'Produzir sabão com óleo de cozinha usado é uma prática eco-friendly que alia economia, criatividade e preservação ambiental. Essa técnica evita que o óleo de cozinha seja descartado de forma inadequada, contribuindo para a redução de poluição nos corpos d água. Além disso, o sabão caseiro se mostra eficaz para diversas tarefas domésticas, sendo uma solução prática para aqueles que buscam adotar hábitos mais sustentáveis. Este artigo explora os fundamentos da produção de sabão com óleo usado, oferecendo um guia detalhado sobre como realizar este procedimento de forma simples e segura.' )}></Button>
        <Text style={{marginTop:10}}></Text>
      </View>
    );
}
}

class Informacao extends Component{

  render(){
  return(
    <View>
     <Text style={{fonSize:25 , color: 'Yellow' , textAlign:'center'}}>{this.props.titulo}</Text>
     <Image source ={{uri:this.props.imagem}} style={{width:300 , height:300}}></Image>
     <Text> {this.props.texto}</Text>
      
    </View>

  );


  }
}
export default App;


/*class App extends Component{


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

Descartar resíduos no ralo da pia da cozinha, do banheiro e do vaso sanitário
Aquecer com água e detergente a gordura que sobrou na panela ou na forma após o cozimento, e quando a mistura estiver fervendo despejar no ralo da pia
Descartar o óleo direto na natureza
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

/*export default App;

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

}*/