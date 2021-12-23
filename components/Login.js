import Image from 'next/image'
import { useMoralis } from 'react-moralis';

function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative text-white">

            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4"> 
                <Image src="/concept.png" alt="login" width={200} height={200} className="object-cover rounded-full animate-spin" />
                <button onClick={authenticate} className="bg-black rounded-lg p-5 font-bold animate-pulse">Login to the metaverse</button>
            </div>
            <div className="w-full h-screen">
                <Image src="/bg-hero.jpeg" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Login
