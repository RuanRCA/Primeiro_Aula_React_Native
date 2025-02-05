import React, {Component} from "react";
import {View ,Text , Image} from "react-native";

 /* class App extends Component{
    render(){
      let nome = 'Mercedez-Benz';
      let imagem = 'https://www.hdcarwallpapers.com/download/mercedes_benz_cls_4k-1920x1080.jpg';
      let profissao = 'Corredor';
      return(
        <View>
          <Text style= {{ marginTop: 50,fontSize: 25,color:'#0000ff', textAlign: 'center' }}> {nome}  </Text>
          <Image
          source={{uri:imagem}}
          style={{ width: 400 , height: 200}}></Image>
            <Text style= {{ marginTop: 50,fontSize: 25,color:'#0000ff', textAlign: 'center' }}> {profissao}  </Text>

           
        </View>
      );
    }
  }

  


export default App;*/

class App extends Component{
  render(){
    let nome = 'Mercedez-Benz';
    return(
      <View>

<Text style= {{ marginTop: 50,fontSize: 25,color:'#0000ff', textAlign: 'center' }}> {nome}  
</Text>
<Foto  largura={400} altura= {200} profissao='Corredor'></Foto>
       
      </View>
 
    );
  }
}
export default App;

class Foto extends Component{
  render(){
    let imagem = 'https://www.hdcarwallpapers.com/download/mercedes_benz_cls_4k-1920x1080.jpg';
    return(
      <View>
          <Image source={{uri:imagem}}
      style={{width:this.props.largura , height:this.props.altura}}></Image>
      <Text>{this.props.profissao}</Text>


      </View>
    
    );
  }
}