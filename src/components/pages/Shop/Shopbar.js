import React from 'react';
import '../../../App.css';
import './Shopbar.css';


const Shopbar =() => {
    return (
        <div className = 'shopwhole'>
                
                <div className='leftmenu'>
                        <ul>
                                <a href='#hair'>
                                        헤어               
                                </a>
                                <hr/>
                                <a href='#face'>
                                        성형               
                                </a>
                                <hr/>
                                <a href='#hat'>
                                        모자               
                                </a>
                                <hr/>
                                <a href='#cloth'>
                                        옷               
                                </a>
                                <hr/>
                                <a href='#shoes'>
                                        신발               
                                </a>
                                <hr/>
                                <a href='#deco'>
                                        소품               
                                </a>
                        </ul>
                 </div>

                <div className='shopitem'>
                        <div className='shoptitle'> {/*&nbsp;는 띄어쓰기 코드 */}
                                <h2>&nbsp; 판매중인 아이템 </h2>
                        </div>

                        <hr/>
                        <h3 id="hair">&nbsp;&nbsp;&nbsp; 헤어</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/헤어1.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/헤어2.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/헤어3.png" />
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;허쉬 헤어&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;테디 헤어&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;채운 헤어</p>
        
                        </div>

                        <hr/>

                        <h3 id="face">&nbsp;&nbsp;&nbsp;성형</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/성형1.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/성형2.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/성형3.png" />
                        <p>&nbsp;물기 스며든 얼굴 &nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;멍한 얼굴&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;아잉 얼굴</p>
                        </div>

                        <hr/>

                        <h3 id="hat">&nbsp;&nbsp;&nbsp;모자</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/모자1.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/모자2.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/모자3.png" />
                        <p>&nbsp;&nbsp;블랙 머스크 리본&nbsp;/&nbsp;&nbsp;심플 화이트&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;정예기사 모자</p>
                        </div>

                        <hr/>

                        <h3 id="cloth">&nbsp;&nbsp;&nbsp;옷</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/옷1.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/옷2.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/옷3.png" />
                        <p>&nbsp;&nbsp;&nbsp;로드 카멜리아&nbsp;&nbsp;/&nbsp;&nbsp;스위트 파핑&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;태엽의 기사</p>
                        </div>

                        <hr/>

                        <h3 id="shoes">&nbsp;&nbsp;&nbsp;신발</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/신발1.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/신발2.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/신발3.png" />
                        <p>&nbsp;&nbsp;&nbsp;서바이버 워커&nbsp;&nbsp;/&nbsp;&nbsp;블루 수면양말&nbsp;/&nbsp;&nbsp;태엽의 기사 슈즈</p>
                        </div>

                        <hr/>

                        <h3 id="deco">&nbsp;&nbsp;&nbsp;소품</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/소품1.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/소품2.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/소품3.png" />
                        <p>&nbsp;&nbsp;앙트완 회중시계 / 서바이버 뱅글&nbsp; / &nbsp;&nbsp;샤키엘의 검</p>
                        </div>

                </div>
                
    </div>    
    );
}
export default Shopbar;