import { Header } from '../components/Header/Header'
import {Section} from '../components/Section/SectionLP'

export function Landpage(){
    return (
        <>
            <Header path="/login" label="login" />
            <main>
                <Section className="section" tclassName="title" cclassName="conteudo" dclassName="divMaior"
                title={(`Você já sentiu que a desorganização impede você de ver progresso no seu estudo?`)}
                content={`Durante suas Rotinas de estudo, já se sentiu consumindo tanto material de diversas 
                fontes e lugares diferentes, como youtube, vídeo Aulas, artigos e documentações ? Pensando nisso 
                lançamos o Orange Notes, muito mais do que um simples blocos de notas. ele é seu novo assistente pessoal 
                para te auxiliar na organização de seus estudos.` } 
                content2={`O Orange Notes conta com uma tela interativa que seu progresso em diferentes colunas para que 
                possa visualizar melhor seu progresso e desenvolvimento. o Orange Notes foi pensado com base na metodologia
                do Kanban, que foca em visualizar suas tarefas e a progressão delas de uma maneira dinâmica e eficaz.`}
                />
            </main>
        </>
    )
}