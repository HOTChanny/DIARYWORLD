import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                         src="images/homeimage/char.jpg"
                         text = "나의 개성을 살린 귀여운 캐릭터 꾸며보기!"
                         label = 'PROFILE'
                         path='/inventory'
                        />    
                        <CardItem 
                         src = "images/homeimage/task.png"
                         text = "일과를 직접 관리하여 효율적인 시간 분배!"
                         label = 'TASK'
                         path='/task'
                        />    
                    </ul>    
                    <ul className='cards__items'>
                        <CardItem
                        src='images/shop5.png'
                        text='열심히 일과를 완료한 보상으로
                        귀여운 아이템을!'
                        label='SHOP'
                        path='/shop'
                        />
                        <CardItem
                        src='images/homeimage/inven1.png'
                        text='인벤토리에서 나만의 아이템을 확인!'
                        label='INVENTORY'
                        path='/inventory'
                        />
                        <CardItem
                        src='images/homeimage/signin2.png'
                        text='퀘스트 완료로 보상 챙기기!'
                        label='Quest'
                        path='/quest'
                        />   
                    </ul>    
                </div>
            </div>            
        </div>
    );
}

export default Cards
