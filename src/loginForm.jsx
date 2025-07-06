export default function LoginForm(){
    return(
        <form action="" className="flex flex-col gap-2 ">
            <input type="text" placeholder="Username"  className="bg-gray-200 rounded p-1"/>
            <input type="password" placeholder="Password" className="bg-gray-200 rounded p-1" />
            <button type="submit" className="bg-green-600 rounded p-1" >Log in</button>
        </form>
    )
}