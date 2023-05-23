
export default function Header() {
    return (
        <header >

            <h2 className='highLightTxt'>Login</h2>
            <div id='loginBox'>
                <div id='loginMiniBox'>
                    <div>
                        <legend>Email:</legend>
                        <input type="email" placeholder='Email:' />
                    </div>
                    <div>
                        <legend>Senha:</legend>
                        <input type="text" placeholder='Senha:' />
                    </div>
                </div>
                <button>Login</button>


            </div>


        </header>
    )
}