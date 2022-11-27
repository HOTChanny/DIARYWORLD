import React from 'react';
import '../../../App.css';
import './Questbar.css';


const Questbar =() => {
    return (
        <div className = 'questwhole'>
                
                <div className='Qmenu'>
                        <ul>
                                <a href='#startQ'>
                                        시작 가능한 퀘스트               
                                </a>
                                <hr/>
                                <a href='#Qing'>
                                        진행중인 퀘스트               
                                </a>
                                <hr/>
                                <a href='#completeQ'>
                                        완료한 퀘스트   
                                        </a>            
                                
                        </ul>
                 </div>

                <div className='Qitem'>
                        <div className='Qtitle'> {/*&nbsp;는 띄어쓰기 코드 */}
                                <h2>&nbsp; 퀘스트 목록</h2>
                        </div>

                        <hr/>
                        <h3 id="startQ">&nbsp;&nbsp;&nbsp; 시작 가능한 퀘스트 </h3>
                        <div>
                        <p>&nbsp;&nbsp; - 'task' 작성하기</p>
                        <p>&nbsp;&nbsp; - 'reward' 받기</p>
                        </div>

                        <hr/>

                        <h3 id="Qing">&nbsp;&nbsp;&nbsp;진행중인 퀘스트  </h3>
                        <div>
                        <p>&nbsp;&nbsp; - 'Shop' 이용하기</p>
                        <p>&nbsp;&nbsp; - 'Inventory'에서 아이템 장착하기</p>
                        </div>

                        <hr/>

                        <h3 id="completeQ">&nbsp;&nbsp;&nbsp;완료한 퀘스트 </h3>
                      
                </div>
                
    </div>    
    );
}
export default Questbar;