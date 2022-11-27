import React from 'react';
import '../../../App.css';
import './Invenmenu.css';


const Invenmenu =() => {
    return (
    <div className = 'invenwhole'>
        
                <div className='invenmenu'>
                    <ul>
                        <a href='#hair2' >
                            헤어               
                        </a>

                        <hr/>

                        <a href='#face2'>
                             성형               
                        </a>
                        
                        <hr/>
                        
                        <a href='#hat2'>
                             모자               
                        </a>
                        

                        <hr/>
                        
                        <a href='#cloth2'>
                            옷               
                        </a>
                        
                        <hr/>
                        
                        <a href='#shoes2'>
                            신발               
                        </a>
                        
                        <hr/>
                        
                        <a href='#deco2'>
                             소품               
                        </a>

                    </ul>
                </div>

                <div className='invenitem'>
                    <div className='inventitle'>
                        <h2>&nbsp;획득한 아이템</h2>
                    </div>
                    <hr/>
                    <h3 id="hair2">&nbsp;&nbsp;&nbsp; 헤어</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="equipitem" alt="imgtest" src="/images/shopimage/기본헤어.png" />
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/헤어3.png" />
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기본 헤어&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;채운 헤어</p>
        
                        </div>
                        
                        <hr/>

                        <h3 id="face2">&nbsp;&nbsp;&nbsp;성형</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="equipitem" alt="imgtest" src="/images/shopimage/기본성형.jpg" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/성형1.png" />

                        
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기본 얼굴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;물기 스며든 얼굴</p>
                        </div>

                        <hr/>

                        <h3 id="hat2">&nbsp;&nbsp;&nbsp;모자</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="equipitem" alt="imgtest" src="/images/shopimage/기본모자.png" />
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/모자3.png" />
                        <p>&nbsp;&nbsp; &nbsp;&nbsp;기본 모자&nbsp; &nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;정예기사 모자</p>
                        </div>

                        <hr/>

                        <h3 id="cloth2">&nbsp;&nbsp;&nbsp;옷</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="equipitem" alt="imgtest" src="/images/shopimage/기본옷.png" />
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/옷3.png" />
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기본 옷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;태엽의 기사</p>
                        </div>

                        <hr/>

                        <h3 id="shoes2">&nbsp;&nbsp;&nbsp;신발</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="equipitem" alt="imgtest" src="/images/shopimage/기본신발.png" />
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/신발3.png" />
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기본 부츠&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;태엽의 기사 슈즈</p>
                        </div>

                        <hr/>

                        <h3 id="deco2">&nbsp;&nbsp;&nbsp;소품</h3>
                        <div className='firstimg'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="equipitem" alt="imgtest" src="/images/shopimage/기본소품.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img className="itemimg" alt="imgtest" src="/images/shopimage/소품1.png" />
                        
                       
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기본 막대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;앙트완 회중시계</p>
                        </div>
                </div>
                <div className='invenprofile'>

                    <p className='myname'> NAME : {localStorage.getItem('nickname')}</p>
                    
                    <img className="mychar" alt="imgtest" src="/images/기본코디.png" />
                    
                    <p className='myprofileinfo'>
                    <br/>
                     헤어 : 기본 헤어<br/>
                     얼굴 : 기본 얼굴<br/>
                     모자 : 기본 모자<br/>
                     옷 : 기본 옷<br/>
                     신발 : 기본 부츠<br/>
                     소품 : 기본 막대
                    </p>
                </div>
    </div>
    );
}
export default Invenmenu;