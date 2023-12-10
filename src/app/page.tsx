import Header from "@/components/Header";

export default function Home() {

    return (
        <div>
            <Header 
                title={"Clientes, administradores e outros"} 
                subtitle={"10 clientes"} back={<a href="">BACK</a>} 
                primaryActionBtn={<button className="bg-blue-600 h-min">Salvar</button>} 
                secondaryActionBtn ={<button className="bg-white h-min">Edit</button>} 
                tertiaryActionBtn={<button className="bg-white h-min">Cancel</button>} 
            />
            <h1>pagina inicial</h1>

        </div>
    )
}
