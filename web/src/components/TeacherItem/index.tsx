import React from 'react';
import iconWhats from '../../assets/images/icons/whatsapp.svg'


import './styles.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHlxDjY_ZHWSQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=v_-24XMHCdNoLJIpl8tQY097WwZ4X2sKcweYHFjpM2E" alt="Junior" />
                <div>
                    <strong>Junior Carrer</strong>
                    <span>Quimica</span>
                </div>

                <p>
                    desctergjgekljgwekljgw vksjdgmwelkfjgmwelksgj veslgkvmwesldgjvmwes
                           <br />
                           ewgnvkwesglewk kweslçbgkwe kvwlçskgwelçsk kvesdgkwewelg
                       </p>

                <footer>
                    <p>
                        Preço/Hora
                               <strong>R$60.00</strong>
                    </p>
                    <button type="button">
                        <img src={iconWhats} alt="whatsapp" />
                               Entrar em contato
                           </button>
                </footer>

            </header>
        </article>
    )
}
export default TeacherItem;
