import React from 'react';
import "./YourAccount.css";


function YourAccount() {
    return (
    <div className="yourAccount">
            <p className="yourAccount__header">
                (Please ignore will fix when im better 👍)
            </p>
            <img
                    className="yourAccount__logo"
                    src="https://cdn.discordapp.com/attachments/869604147291357278/881922107670413382/pngwing.com_3.png"
                    alt=""
                 />
            <div className="yourAccount__options">
                <form >
                    <h5 className="yourAccount__item">Display Name: (Saint Nicky D)</h5>
                    <input className="yourAccount__input" type="text" />

                    <h5 className="yourAccount__item">E-mail: (nickdimmick@hotmail.com)</h5>
                    <input className="yourAccount__input" type="email" />

                    <h5 className="yourAccount__item">Password: *********</h5>
                    <input className="yourAccount__input" type='password' />

                    <h5 className="yourAccount__item">Delivery Address: (585 Go Effurs Elf Lane)</h5>
                    <input className="yourAccount__input" type="text" />

                    <button type='submit'
                        className='save_changes'>Save Changes</button>
                </form>
                

        </div>
    </div>
    )
}

export default YourAccount

