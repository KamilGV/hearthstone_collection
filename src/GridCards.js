import './GridCards.css';
// import { TailSpin } from 'react-loader-spinner';
import { ProgressSpin } from '@consta/uikit/ProgressSpin';
import { useEffect, useState, useRef } from 'react';
import './images/next.png'
// import Pagination from './Pagination'
import { Pagination } from '@consta/uikit/Pagination';

import HearthstoneCard from './Card'

function GridCards({cards, loading, currentPage, setCurrentPage, transition, setTransition}) {

    // const [transition, setTransition] = useState("");
    // useEffect(()=>{setTransition("transition-left");
    // setTimeout(() => {
    //   setTransition("");
    // }, 500);}, currentPage)

    const [cardsPerPage] = useState(12)
    const totalPages = Math.ceil(cards.length/ cardsPerPage)

    if(loading){
        return <ProgressSpin size="2xl" />
    }

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    const currentCards = cards.slice(firstCardIndex, lastCardIndex)

    const paginateNext = () =>{
        if(currentPage<totalPages){
          setCurrentPage(currentPage+1)
          setTransition("transition-right");
          setTimeout(() => {
            setTransition("");
          }, 500);
        }
      }

    const paginatePrev = () =>{
      if(currentPage>1){
        setCurrentPage(currentPage-1)
        setTransition("transition-left");
        setTimeout(() => {
          setTransition("");
        }, 500);
      }
    }

    const setPagePagginator = (page) =>{
      if (page < currentPage){
        setTransition("transition-left");
        setTimeout(() => {
          setTransition("");
        }, 500);
      }
      else{
        setTransition("transition-right");
        setTimeout(() => {
          setTransition("");
        }, 500);
      }
        // setTransition("transition-opacity");
        // setTimeout(() => {
        //   setTransition("");
        // }, 500);
      setCurrentPage(page)
    }
    

  if (cards.length===0){
    return <p>Пусто</p>
  }
    return (
      <div className="GridContainer transition-opacity">
        <div className="GridCardsContainer">
          <img className={(currentPage===1)?'GridCardImgPrev GridCardImgNotActive':'GridCardImgPrev'} onClick={()=>paginatePrev()} src='https://d2q63o9r0h0ohi.cloudfront.net/images/homepage_left_arrow.20ef98c80cbb7cc3909e0add6a729e64.png'/>
          <div className={"GridCards " + transition}>
            {currentCards.map(card => <HearthstoneCard card={card} key={card.id}/>)}
          </div>
          <img className={(currentPage===totalPages)?'GridCardImgNext GridCardImgNotActive':'GridCardImgNext'} onClick={()=>paginateNext()} src='https://d2q63o9r0h0ohi.cloudfront.net/images/homepage_right_arrow.90e5c27f527cacdfdc031a38428c5fc5.png'/>
        </div>
        {/* <Pagination cardPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate}/> */}
        <div className='paginator-container'>
          <Pagination
            items={totalPages}
            value={currentPage}
            onChange={setPagePagginator}
            showFirstPage
            showLastPage
            visibleCount={11}
          />
        </div>
      </div>
    );
  }
  
  export default GridCards;