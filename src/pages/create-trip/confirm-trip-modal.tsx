import { X, User, Mail } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

type ConfirmTripModalProps = {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export function ConfirmTripModal({ closeConfirmTripModal, createTrip, setOwnerEmail, setOwnerName }: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 ">

        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
            <button onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <strong className="text-zinc-100 font-bold">Florianópolis, Brasil</strong> nas datas de <strong className="text-zinc-100 font-bold">16 a 27 de Agosto de 2024</strong> preencha seus dados abaixo:</p>
        </div>

        <form
          onSubmit={createTrip}
          className="space-y-3"
        >
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              name="name"
              placeholder="Seu nome completo"
              onChange={event => setOwnerName(event.target.value)}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              onChange={event => setOwnerEmail(event.target.value)}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button type="submit" size="full" >
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
