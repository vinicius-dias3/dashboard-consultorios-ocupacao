import { useQuery } from "react-query";

const Dashboard = () => {
    const fetchData = async () => {
        const response = await fetch ('/data/data.json')
        return await response.json()
    }


    const { data, isLoading, isError, error} = useQuery(['consultoriosData'], fetchData, {refetchOnWindowFocus: false,})
    console.log(data)
    if(isLoading) return <p>Está carregando as informações, por favor, aguarde!</p>
    if(isError) return <p>Ocorreu um erro desconhecido. {error}</p>


    return(
        <div className="Dashboard">
            <h1>Dashboard Ocupação <span>unidade de saúde</span></h1>
            <div className='menu'>
                <img src="https://placehold.co/70x60" alt="imagem ou logo da empresa" />
                <div className='perfil'>
                    <h3>Cargo</h3>
                    <h4>Nome do colaborador</h4>
                </div>

                <div className='buttons'>
                    <a href="#" className='ocupacao-geral active'>Ocupação geral</a>
                    <a href="#" className='consultorio-1'>Consultório 1</a>
                    <a href="#" className='consultorio-2'>Consultório 2</a>
                    <a href="#" className='consultorio-3'>Consultorio 3</a>
                    <a href="#" className='consultorio-4'>Consultorio 4</a>
                </div>
            </div>
            <div className='graphic'></div>
            {/* <DayofWeek className='' />
            <DayofWeek className='' />
            <DayofWeek className='' />
            <DayofWeek className='' />
            <DayofWeek className='' /> */}
        </div>
    )
}



export default Dashboard