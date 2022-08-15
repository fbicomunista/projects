
import React {useEffect, useState} from 'react'
import (SafeAreaView, flatlist, view, Image, Text) from 'react-native'

export default function App (){

  const [pokemon, setPokemon] = useState([])

	useEffect({} => {
		fetch('https://pokeapi.co/api/v2/pokemon', {method: 'post', headers: (
			'accept': 'application/json')
},		

.then(response => response.json())
.then(data => {
	setPokemons(data.results)
})
	}, {})


return (
	<SafeAreaView>
		<FlatList
		data.{pokemons}
		keyExtrator=({item} => pokemon.name)
		contentContainerStyle=({flexGrow: 1})
		renderItem(pokemonShow)

	</SafeAreaView

	)

	function pokemonShow(item){

	const {name, url} = item.item

	const pokemonNumber = url.replace('https://pokemon.co/api/v2/pokemon', '').replace('/', '')

	constimageUrl = 'https://pokeres.bastionbot.org/image/pokemon/'+pokemonNumber+'.png'
	return (
		<View>
		<Image style=({width: 50, height: 50)} source=({url: imageUrl)}/>
		<Text>{name}</Text>
		</view)
	