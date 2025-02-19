import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    take: 7,
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Guilherme</h2>
        <p>Terça-feira, 18 de Fevereiro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua Busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image alt="cabelo" src="/cabelo.svg" width={16} height={16} />
            Cabelo
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image alt="barba" src="/barba.svg" width={16} height={16} />
            Barba
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              alt="sobrancelha"
              src="/sobrancelha.svg"
              width={16}
              height={16}
            />
            Sombrancelha
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              alt="acabamento"
              src="/acabamento.svg"
              width={16}
              height={16}
            />
            Acabamento
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image alt="massagem" src="/massagem.svg" width={16} height={16} />
            Massagem
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              alt="hidtatacao"
              src="/hidratacao.svg"
              width={16}
              height={16}
            />
            Hidratação
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <h2 className="mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-bold">Corte de Cabelo</h3>

              <div className="flex items-center">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">18</p>
              <p className="text-sm">15:56</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              2025 Copyright Guilherme Gervásio
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
