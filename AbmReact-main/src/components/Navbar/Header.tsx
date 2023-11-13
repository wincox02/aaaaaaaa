import { useNavigate } from 'react-router-dom'
import './HeaderStyles.css'; // Importa el archivo CSS

function Header() {

    const Navigate = useNavigate();

    return (
        <>
            <nav>
                <img src="https://i.imgur.com/BMj5BOg.png" alt="" style={{ height: '100px' }} onClick={() => Navigate('/')}/>
                <div id="navdiv">
                    <button style={{ display: 'block' }} onClick={() => Navigate('/')}>Home</button>
                    <button style={{ display: 'none' }}>Productos</button>
                    <div id="divbuscador">
                        <input
                            id="inputbuscar"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Buscar"
                        />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_855_41)">
                                    <path
                                        d="M15.8594 14H15.0694L14.7894 13.73C15.7694 12.59 16.3594 11.11 16.3594 9.5C16.3594 5.91 13.4494 3 9.85938 3C6.26938 3 3.35938 5.91 3.35938 9.5C3.35938 13.09 6.26938 16 9.85938 16C11.4694 16 12.9494 15.41 14.0894 14.43L14.3594 14.71V15.5L19.3594 20.49L20.8494 19L15.8594 14ZM9.85938 14C7.36938 14 5.35938 11.99 5.35938 9.5C5.35938 7.01 7.36938 5 9.85938 5C12.3494 5 14.3594 7.01 14.3594 9.5C14.3594 11.99 12.3494 14 9.85938 14Z"
                                        fill="black" fill-opacity="0.75" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_855_41">
                                        <rect width="24" height="24" fill="white" transform="translate(0.359375)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <button style={{ display: 'block' }} id="IniciarSesion">
                        Administrador
                    </button>
                    <button style={{ display: 'none' }}>Registrarte</button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        style={{ display: 'none' }}
                    >
                        <path
                            d="M34.907 26.4C36.7064 26.4 38.2898 25.416 39.1055 23.928L47.6943 8.352C48.582 6.768 47.4304 4.8 45.6071 4.8H10.1002L7.84509 0H0V4.8H4.79822L13.435 23.016L10.1962 28.872C8.44486 32.088 10.748 36 14.3947 36H43.184V31.2H14.3947L17.0337 26.4H34.907ZM12.3794 9.6H41.5286L34.907 21.6H18.0653L12.3794 9.6ZM14.3947 38.4C11.7556 38.4 9.62043 40.56 9.62043 43.2C9.62043 45.84 11.7556 48 14.3947 48C17.0337 48 19.1929 45.84 19.1929 43.2C19.1929 40.56 17.0337 38.4 14.3947 38.4ZM38.3857 38.4C35.7467 38.4 33.6115 40.56 33.6115 43.2C33.6115 45.84 35.7467 48 38.3857 48C41.0248 48 43.184 45.84 43.184 43.2C43.184 40.56 41.0248 38.4 38.3857 38.4Z"
                            fill="#FFD23F" />
                    </svg>
                </div>
                <div className="menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="48"
                        viewBox="0 0 72 48"
                        fill="none"
                    >
                        <path d="M0 48H72V40H0V48ZM0 28H72V20H0V28ZM0 0V8H72V0H0Z" fill="#FFD23F" />
                    </svg>
                </div>
            </nav>
        </>
    );
}

export default Header;