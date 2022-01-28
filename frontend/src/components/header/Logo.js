import React from 'react';

export default class Logo extends React.Component {

    render(){
        return(
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/logowef-S.png" />
                    <source media="(min-width: 769px)" srcSet="/img/logowef-L.png" />
                    <img src="/img/logowef-L.png" alt="Logomarca WEF Imóveis"/>
                </picture>
            </div>
        );
    }
}