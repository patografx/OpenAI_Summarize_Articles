import React from "react";
import { logo } from '../assets';

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">

            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="sumz-logo" className="w-28 object-contain" />
                <button
                    type="button"
                    onClick={() => window.open("https://github.com/patografx/OpenAI_Summarize_Articles")}
                    className="black_btn"
                >
                    GitHub
                </button>
            </nav>

            <h1 className="head_text">Summarize Articles with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GTP-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading by transforming long articles into quick-and-easy-to-digest summaries. 
                This process may take longer depending on the length of the article.
            </h2>

        </header>
    )
}

export default Hero;