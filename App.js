import React, {Component} from "react";
import {View ,Text , Image , Button} from "react-native";


class App extends Component{
  constructor(props){
  super(props);
  this.state = {titulo: '' , imagem:'https://png.pngtree.com/png-vector/20230625/ourmid/pngtree-breaking-news-label-vector-png-image_7316922.png', texto: 'Notícias'}
  this.publicar = this.publicar.bind(this);
  }
  publicar(titulo,imagem,texto){
    this.setState({titulo: titulo , imagem: imagem , texto: texto});
  }
  render(){
    return(
      <View style={{padding:35}}>
        <Informacao titulo={this.state.titulo} imagem= {this.state.imagem} texto={this.state.texto}></Informacao>

        <Button title='Noticia 1' onPress={() => this.publicar( 'Óleo de cozinha usado: saiba como descartar de forma correta' ,'https://s2-g1.glbimg.com/k6LEpOuA67bCnU057jMy--WWfmg=/0x0:1200x800/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/t/2kNa8yQSaCzVIBvhzWxg/oleo-de-cozinha-1-.jpg' , 'Um litro de óleo despejado nos rios polui até um milhão de litros de água.O óleo contamina o solo e o lençol freático e também o impermeabiliza, causando enchentes .O óleo contamina o solo e o lençol freático e também o impermeabiliza, causando enchentes .Na água, forma uma película superficial, altera o PH e diminui o oxigênio, provocando a morte de plantas e animais aquáticos.Desequilíbrio da quantidade de nutrientes, gerando a proliferação excessiva de algas e a eutrofização do ambiente.No solo, causa a impermeabilização das raízes das plantas, impedindo a absorção de nutrientes.')}></Button>
        <Text style={{marginTop:10}}></Text>
        <Button title='Noticia2' onPress={() => this.publicar( 'Prefeitura de cidade na BA notifica empresa por vazamento de óleo; 20 litros do material foram jogados no mar', 'https://imagenes.elpais.com/resizer/v2/RLQKIYST43M6KTT5FRPQXFVR34.jpg?auth=dd51ce49c3730e26d028286f2bee8c0e1e20d7edd8abb6d9d944c4cb45034f71&width=1200' , 'A nova área de contaminação na Bahia é a nova faceta da crise ambiental que atinge a região, cuja origem segue incerta. O Governo brasileiro diz ter comprovado que a origem do petróleo é venezuelano, mas ainda falta esclarecer as circunstâncias do desastre. O almirante Alexandre Rabello de Faria, chefe do Estado Maior do Comando de Operações Navais, informou nesta quinta em audiência pública na Comissão de Meio Ambiente do Senado que as investigações ainda não avançaram em relação ao que causou o derramamento do produto no mar. ')}></Button>
        <Text style={{marginTop:10}}></Text>
        <Button title='Noticia3' onPress={() => this.publicar ('Transformar oléo em matéria prima','https://istoe.com.br/istoegeral/wp-content/uploads/2025/01/sabao-de-oleo_1737389201007-750x375.jpg', 'Produzir sabão com óleo de cozinha usado é uma prática eco-friendly que alia economia, criatividade e preservação ambiental. Essa técnica evita que o óleo de cozinha seja descartado de forma inadequada, contribuindo para a redução de poluição nos corpos d água. Além disso, o sabão caseiro se mostra eficaz para diversas tarefas domésticas, sendo uma solução prática para aqueles que buscam adotar hábitos mais sustentáveis. Este artigo explora os fundamentos da produção de sabão com óleo usado, oferecendo um guia detalhado sobre como realizar este procedimento de forma simples e segura.')}></Button>
        <Text style={{marginTop:10}}></Text>
      </View>
    );
}
}

class Informacao extends Component{

  render(){
  return(
    <View>
     <Text style={{fontSize:18, color: '#F2AF00' , fontWeight:"bold", textAlign:'center'}}>{this.props.titulo}</Text>
     <Image source ={{uri:this.props.imagem}} style={{width:300 , height:300}}></Image>
     <Text> {this.props.texto}</Text>  
    </View>
  );
  }
}
export default App;