import React from 'react';
import './Styles/PersonalCard.css';
import logo from './images/ASM3.png';
import avatar from './images/Adriana.jpg';

class PersonalCard extends React.Component {
    render(){
      return <div className='card'>
          <header className='card_header'>
            <img className='card_header-image' src={logo} alt="Logo"/>
        </header>

        <section className='card_name'> 
            <img className='name-image' src={avatar} alt="Avatar"/>
            <h1 className='name'>Adriana <br/>Sánchez</h1>
        </section> 
        <section className='card_info'>
            <h2 className='container-title'>Frontend Developer</h2>
            <p className='container-socialMedia'>adrievelyn@gmail.com</p>
            <a href="https://adrianasanchezm.com/" target="blank">www.adrianasanchezm.com</a>
        </section>
      
        <footer className='card_footer'>  
           <a href="https://github.com/adrievelyn" target="blank">GitHub</a>
        </footer>
        </div>
    }
}
export default PersonalCard;