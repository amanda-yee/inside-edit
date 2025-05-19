import NavBar from "./NavBar"

export default function Main() {
    return (
        <div className="flex">
            <div>
                <NavBar />
            </div>
            
            {/* flex-1 makes second child grow and fill all remaining horitzontal space */}
            <div className="flex-1"> 
                <p className="text-[var(--primary)] font-bold text-5xl text-center py-20">
                    Full service design and styling studio, <br></br>
                    based in New York.
                </p>

            </div>
        </div>
    )
}