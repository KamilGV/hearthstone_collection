import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import GridCards from './GridCards';
import { Pagination } from '@consta/uikit/Pagination';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Tabs } from '@consta/uikit/Tabs';
import {HeroImage, SpelImage, AnomImage, MinionImage, TaskImage, AwardImage} from './Icons';
import { TextField } from '@consta/uikit/TextField';
import CostSetter from './CostSetter';
import { Combobox } from '@consta/uikit/Combobox';


// const types = [3, 4, 42, 5,  43, 40];
const types = [
  {
    label: 3,
    name: 'Герои',
    image: HeroImage
  },
  {
    label: 4,
    name: 'Существа',
    image: MinionImage
  },
  {
    label: 42,
    name: 'Заклинания',
    image: SpelImage
  },
  {
    label: 5,
    name: 'Задания',
    image: TaskImage
  },
  {
    label: 43,
    name: 'Аномалии',
    image: AnomImage
  },
  {
    label: 40,
    name: 'Награды',
    image: AwardImage
  }
];

// const costs = [
//   {
//     id: 0,
//     value: 1
//   },
//   {
//     id: 1,
//     value: 2
//   },
//   {
//     id: 2,
//     value: 3
//   },
//   {
//     id: 3,
//     value: 4
//   },
//   {
//     id: 4,
//     value: 5
//   },
//   {
//     id: 5,
//     value: 6
//   },
//   {
//     id: 6,
//     value: 7
//   },
// ];

const costs = [1,2,3,4,5,6,7]

async function getData(setCards, setLoading){
  setLoading(true)
  const main_url = "https://eu.api.blizzard.com/hearthstone/cards/?region=eu&locale=ru_RU&gameMode=battlegrounds&page="
  const urls = []
  for (let i = 0; i < 14; i++){
    urls.push(main_url+i.toString())
  }

  let data = urls.map(async url => {
    const result = await axios.get(url,{
      headers: {'Authorization': 'Bearer ' + 'EUc35u6xaEQIM36BSYpZY5emtwCO7agMRI'}
    })
    return result.data.cards
  })
  const result = await Promise.all(data)
  
  let result_arr = []
  for (const arr of result){
    result_arr = result_arr.concat(arr)
  }
  setCards(result_arr)
  console.log(result_arr)
  console.log('Get Data Done')
  setLoading(false)

  }

function isContainString(card, string){
  if(typeof string == "undefined") {
    return true
  }
  if (card.hasOwnProperty('name')){
    return (card["name"].toLowerCase()).includes(string.toLowerCase()) || card["text"].toLowerCase().includes(string.toLowerCase()) }
  // if types.map(type)
  return false
}

function isContainCost(card, costs){
  if(typeof costs == "undefined") {
    return true
  }
  if(costs.length === 0){
    return true
  }
  if (card.hasOwnProperty('battlegrounds')){
    if (card.battlegrounds.hasOwnProperty('tier')){
      return (costs.includes(card.battlegrounds.tier)) }
  }
  return false
}

const getTypeLabel = (type) => type.name;
const getItemIcon = (type) => type.image

const updateCards = (cards, setFilteredCards, cardType, setCurrentPage, searchValue, cardCost, setCardCost) =>{
  setFilteredCards(cards.filter(card =>card.cardTypeId===cardType.label).filter(card=>isContainString(card, searchValue)).filter(card=>isContainCost(card, cardCost)))
  // console.log(cards[0].name.includes(searchValue))
  // setFilteredCards(cards.filter(card=>{card.hasOwnProperty("name")?card["name"].includes(searchValue):false}))
  // setFilteredCards(cards.filter(card=>isContain(card, searchValue)))
  // setFilteredCards(cards)
  // console.log('ОБНОВЛЕНИЕ')

  setCurrentPage(1)
}

const updateCardType = (setCardCost) =>{
  setCardCost([])
}


function App() {

  const [transition, setTransition] = useState("");


  const [cardType, setCardType] = useState(types[0])
  const [searchValue, setSearchValue] = useState('')
  const [cardCost, setCardCost] = useState([])
  
  const [currentPage, setCurrentPage] = useState(1)


  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  
  const [loading, setLoading] = useState(false)

  // const [typeValue, setTypeValue] = useState();
  useEffect (()=>{getData(setCards, setLoading)},[])
  useEffect(()=>{updateCards(cards, setFilteredCards, cardType, setCurrentPage, searchValue, cardCost, setCardCost)}, cards)
  useEffect(()=>{updateCards(cards, setFilteredCards, cardType, setCurrentPage, searchValue, cardCost, setCardCost)}, [cardType, searchValue, cardCost])
  useEffect(()=>{updateCardType(setCardCost)}, [cardType])
  useEffect(()=>{setTransition("transition-opacity");
  setTimeout(() => {
    setTransition("");
  }, 500);}, [filteredCards])

  return (
    <Theme preset={presetGpnDefault}>
      <div className="App">
        <div className="searchBar transition-opacity-bar">

          <Tabs
            value={cardType}
            onChange={setCardType}
            items={types}
            getItemLabel={getTypeLabel}
            getItemLeftIcon={getItemIcon}
          />
          <TextField onChange={value=>setSearchValue(value??'')} value={searchValue} placeholder='search...' label='Поиск' className='input-container'/>
          <CostSetter
            values={cardCost}
            setCardCost={setCardCost}
            items={costs}
            isActive={[4,42].includes(cardType.label)}
          />
        </div>
        <div>Найдено: {filteredCards.length}</div>
        <div className="">

        </div>
        
        <GridCards cards={filteredCards} loading={loading} currentPage={currentPage} setCurrentPage={setCurrentPage} transition={transition} setTransition={setTransition}/>
      </div>
    </Theme>
  );
}

export default App;
