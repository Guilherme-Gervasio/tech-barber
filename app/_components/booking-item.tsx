import { Badge } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"

const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
