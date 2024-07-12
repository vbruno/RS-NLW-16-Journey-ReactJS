import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

type InviteGuestsStepProps = {
  openGuestsModal: () => void
  openConfirmTripModal: () => void
  emailsToInvite: string[]

}

export function InviteGuestsStep({ openConfirmTripModal, emailsToInvite, openGuestsModal }: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

      <button onClick={openGuestsModal} className="flex items-center gap-2 flex-1" >
        <UserRoundPlus className="size-5 text-zinc-400 " />
        {emailsToInvite.length > 0 ? (
          <span className="bg-transparent text-lg text-zinc-100 outline-none flex-1 text-left">{emailsToInvite.length} pessoa(s) convidada(s)</span>
        ) : (
          <span className="bg-transparent text-lg text-zinc-400 outline-none flex-1 text-left">Quem estará na viagem?</span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <Button onClick={openConfirmTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
