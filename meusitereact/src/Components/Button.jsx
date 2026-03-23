function Button({texto, cor, link, corpadrao})
{
    return(
    <button className = {`box-border border-10 ${corpadrao} text-5xl font-light border-black text-white hover:text-black ${cor} w-70 h-25 rounded-3xl hover:rounded-full hover:text-5xl hover:cursor-pointer transition duration-700 hover:font-bold`}  onClick={() => window.location.href = link}>
            {texto}
        </button>
    )
}

export default Button