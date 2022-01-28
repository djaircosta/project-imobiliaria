import React from 'react';

export default class Footer extends React.Component {

    render(){
        return(
            <div className="footer">
                <div>
                    <img src="/img/logofooter.png" alt="Logomarca WEF Imóveis Footer"/>
                </div>
                <div>
                    Endereço <br/>
                    Telefone <br/>
                    Email
                </div>
            </div>
        );
    }
}