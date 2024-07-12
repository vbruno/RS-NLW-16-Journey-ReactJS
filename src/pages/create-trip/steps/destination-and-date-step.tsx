import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

type DestinationAndDateStepProps = {
  isGuestsInputOpen: boolean
  openGuestsInput: () => void
  closeGuestInput: () => void
}

export function DestinationAndDateStep({ isGuestsInputOpen, closeGuestInput, openGuestsInput }: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

      <div className="flex items-center gap-2 flex-1" >
        <MapPin className="size-5 text-zinc-400 " />
        <input type="text" placeholder="Para onde você vai?" disabled={isGuestsInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input type="text" placeholder="Quando?" disabled={isGuestsInputOpen} className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}  >
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )
      }
    </div >
  )
}
