import React from 'react'
import { Text, Image } from 'react-native'
import { styles } from './styles'

export default function CustomImage({fromWeb, image, title, width, height}) {
  return(
    <>
      <Text style={styles.tituloImage}>{title}</Text>
      {
        fromWeb ? 
          <Image source={{uri:image}} style={{width: width, height: height, alignSelf: 'center'}}/> 
        : 
          <Image source={image} style={{width: width, height: height, alignSelf: 'center'}}/> 
      }
    </>
  )
}