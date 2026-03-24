function Button({texto, cor, link, corpadrao})
{
    return(
    <button className = {`box-border border-10 bg-gray-700 text-5xl font-light border-black text-white hover:text-black ${cor} w-70 h-25 rounded-full hover:text-5xl hover:w-85 border-double hover:-my-10 hover:border-gray-300 hover:cursor-pointer transition-all duration-700 hover:font-bold`}  onClick={() => window.location.href = link}>
            {texto}
        </button>
    )
}

export default Button