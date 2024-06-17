const Login = (props) => {

    // const list = [
    //     'free domain',
    //     'free hoisting',
    //     'SSL key'
    // ]

    return (
        <div>
            <h2>{props.title}</h2>
            <form>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <button>Login</button>
            </form>

            <ul>
                {props.list.map((item) => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Login;