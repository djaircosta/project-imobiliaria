import React from 'react';

export default class Map extends React.Component {

    render(){
        return(
                <div className="mapsImovel">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.3807379184495!2d-48.04313558572115!3d-15.836574128211463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a328aaddccba9%3A0x924cb98a1a2c235b!2sResidencial%20Imprensa%20III!5e0!3m2!1spt-BR!2sbr!4v1643319667516!5m2!1spt-BR!2sbr"  allowfullscreen></iframe>
                </div>
        );
    }
}