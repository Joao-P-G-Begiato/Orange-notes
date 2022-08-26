import { Header } from '../components/Header/Header'
import {Section} from '../components/Section/SectionLP'

export function Landpage(){
    return (
        <>
            <Header path="/login" label="login" />
            <main>
                <Section className="section" tclassName="title" cclassName="conteudo" title={(`Você já sentiu que a desorganização 
                impede você de ver progresso no seu estudo?`)}
                content={`Durante suas Rotinas de estudo, já se sentiu consumindo tanto material de diversas 
                fontes e lugares diferentes, como youtube, vídeo Aulas, artigos e documentações ?`}
                />
            </main>
        </>
    )
}