import React from 'react';

export default class Address extends React.Component {

    render(){
        return(
            <div className='address'>
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/whatsappwef-S.png" />
                    <source media="(min-width: 769px)" srcSet="/img/whatsappwef-L.png" />
                    <img src="/img/whatsappwef-L.png" alt="WhatsApp de Imóveis em Brasilia"/>
                </picture>

                <strong> (xx) xxxx-xxxx</strong><br/>
                Endereço<br/>
                <strong>R$ 700.000,00</strong>

            </div>
        );
    }
}