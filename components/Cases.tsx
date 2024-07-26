import Card, { CardType } from "./Card"

import ReactSVG from '@/public/assets/icons/react.svg'
import NextSVG from '@/public/assets/icons/next-js.svg'
import TailwindSVG from '@/public/assets/icons/tailwind.svg'
import FrontEndImage from '@/public/assets/img/nextjs.png'

import MysqlSVG from '@/public/assets/icons/mysql.svg'
import PostgresqlSVG from '@/public/assets/icons/postgresql.svg'
import NodeSVG from '@/public/assets/icons/node-js.svg'
import BackEndImage from '@/public/assets/img/backend.png'


const items: Array<CardType> = [
    {
        title: "Front End Development",
        description: "",
        images: [
            { 
                url: ReactSVG
             },
             { 
                url: NextSVG
             },
             { 
                url: TailwindSVG
             }
        ],
        imageDemo: FrontEndImage,
    },
    {
        title: "Back End Development",
        description: "",
        images: [
            { 
                url: MysqlSVG
             },
             { 
                url: PostgresqlSVG
             },
             { 
                url: NodeSVG
             }
        ],
        imageDemo: BackEndImage
    }
]

const CasesSection = () => {
    return (
        <section className="py-8 md:py-32 w-full " id="cases">
            <div className="grid grid-template-rows-1 grid-template-cols-1 gap-8 md:grid md:grid-cols-2" >
                { items.map( ((item, index) => (
                    <Card key={index} {...item} isCases />
                ))) }
            </div>
        </section>
    )
}

export default CasesSection