import React from 'react';

class InputPadrao extends React.Component {
    constructor() {
        super();
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          estadoFavorito: '',
        };
			}


			render(){
					const { tipo, nome, texto } = this.props;

				return (
					<label>
						{texto}
          	<input name={nome} type={tipo} required></input>
        	</label>
				)
			}
}

export default InputPadrao;