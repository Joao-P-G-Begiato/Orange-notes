import { Header } from '../components/Header/Header'
import {Section} from '../components/Section/SectionLP'
import {Footer} from '../components/Footer/Footer.jsx'

export function Landpage(){
    return (
        <>
            <Header home="/" path="/login" label="Login" />
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
                
                <Section className="section second" tclassName="title" cclassName="conteudo" dclassName="divMaior"
                title={(`Mas como funciona a organização através do Orange Note?`)}
                content={`A Orange Notes disponibiliza a cada usuário um ambiente de trabalho personalizável, que
                permite separar seus estudos por temas, dentro desses temas, pode colocar o progresso do seu desenvolvimento
                e selecionar o status daquela atividade entre "A Fazer", "Fazendo" e "Concluído" e a própria plataforma irá
                separar as atividades pelo status dela.` } 
                content2={`Dessa maneira você consegue sentir sua evolução quando uma atividade passa de fazer para fazendo e 
                por fim em concluído, ao acumular muitas atividades em concluído fica vísivel seu desenvolvimento e aptidão 
                no tema designado e como a parte de descrição da atividade é textual, você pode colocar Links das atividades, 
                do seu notion com os exercícios ou até mesmo o link do certificado referente a vídeo aulas e etc...`}
                />
            </main>
            <Footer />
        </>
    )
}