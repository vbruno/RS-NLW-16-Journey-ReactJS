import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

type CreateActivityModalProps = {
  closeCreateActivityModal: () => void

}

export function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 ">

        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Cadastrar Atividade</h2>
            <button onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">Todos convidados podem visualizar as atividades.</p>
        </div>

        <form
          onSubmit={undefined}
          className="space-y-3"
        >
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="title"
              placeholder="Qual é a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="datetime-local"
                name="occur-at"
                placeholder="Data e horário da atividade"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>

          <Button size="full" type="submit">Salvar atividade</Button>
        </form>
      </div>
    </div>
  )
}
